import { appendPrefixToKeyword, isValidURL, sortGroups, sortShortcuts } from "./helpers.js";

function onInit() {
  new Vue({
    el: "#app",
    data: {
      message: "Omni GO!",
      groups: [],
      shortcuts: []
    },
    created() {
      chrome.storage.sync.get(["shortcuts", "groups"], result => {
        this.shortcuts = result.shortcuts || [];
        this.groups = result.groups || [];
      });
    },
    computed: {
      getShortcuts() {
        return this.shortcuts;
      },
      getGroups() {
        return this.groups;
      }
    },
    methods: {
      createShortcut(e) {
        e.preventDefault();
        const groupList = document.getElementById("groupList");
        let group = groupList.options[groupList.selectedIndex].text || '';
        let keyname = document.getElementById("keyname").value || '';
        let keyword = document.getElementById("keyword").value;
        const url = document.getElementById("url").value;

        //Validation
        if(!keyname) {
          alert("Please enter a Shortcut Keyword Name");
          return;
        }
        if (!keyword) {
          alert("Please enter Shortcut keyword");
          return;
        }
        if (!isValidURL(url)) {
          alert("Please enter a supported URL:\n [http(s)|ftp(s)|file|chrome|extension]://optional.required.optional/\n\nexample:\nhttps://chrome.google.com/\nhttp://localhost:8080/\nchrome://extensions/");
          return;
        }
        //Group
        if (!!group && group !== "Default") {
          keyword = appendPrefixToKeyword(this.groups, group, keyword);
        }
        let index = document.getElementById("index").value;
        if (!!index) {  //replace existing at index
          this.shortcuts[index] = {
            keyname,
            keyword,
            url,
            group
          };
        } else {
          this.shortcuts.push({
            keyname,
            keyword,
            url,
            group
          });
        }
        this.shortcuts = sortShortcuts(this.shortcuts);
        chrome.storage.sync.set({ shortcuts: this.shortcuts }, function() {
          document.getElementById("groupList").selectedIndex = 0;
          document.getElementById("keyname").value = "";
          document.getElementById("keyword").value = "";
          document.getElementById("url").value = "";
        });
       location.reload();
      }, 
      editShortcut(e) {
        const index = e.target.getAttribute("data-index");
        if (index >= 0) {
          const shortcut = this.shortcuts[index];
          const keyword = shortcut.keyword;
          let keyname = shortcut.keyname;
          let gid = this.groups.findIndex(obj => obj.name === shortcut.group) || 0;
          let rootword = keyword;
          if(gid > 0) {
            var replace = "^"+this.groups[gid].prefix;
            let gpfx_regex = new RegExp(replace,"g");
            rootword = shortcut.keyword.replace(gpfx_regex,'');
          }
          document.getElementById('index').value = index;
          document.getElementById('groupList').selectedIndex = gid;
          document.getElementById('groupList').style.background = "#ff0";
          document.getElementById('keyname').value = keyname || ""; //backwards compatibility
          document.getElementById('keyname').style.background = "#ff0";
          document.getElementById('keyword').value = rootword;
          document.getElementById('keyword').style.background = "#ff0";
          document.getElementById('url').value = shortcut.url;
          document.getElementById('url').style.background = "#ff0";
          document.getElementById('addShortcut').innerText = "Update";
          document.getElementById('addShortcut').style.background = "#4f4";
          window.scroll(0,0);
        }
      },    
      deleteShortcut(e) {
        const index = e.target.getAttribute("data-index");
        if (index >= 0) {
          this.shortcuts.splice(index, 1);
          chrome.storage.sync.set({ shortcuts: this.shortcuts }, function() {});
        }
      },
      goShortcut(e) {
        const index = e.target.getAttribute("data-index");        
        if (index >= 0) {
          let url = this.shortcuts[index].url;
          window.location.replace(url, '_blank');
        }
      },
      getGroupName(shortcut) {
        const group = this.groups.find(obj => obj.name === shortcut.group);
        return group ? group.name : "Default";
      },
      openCreateGroupModal(e) {
        document
          .getElementById("modal-create-group")
          .classList.add("is-active");
      },
      hideCreateGroupModal() {
        document.getElementById("prefix").value = "";
        document.getElementById("groupName").value = "";
        document
          .getElementById("modal-create-group")
          .classList.remove("is-active");
      },
      hideCreateGroup(e) {
        this.hideCreateGroupModal();
      },
      createGroup() {
        const prefix = document.getElementById("prefix").value;
        const groupName = document.getElementById("groupName").value;
        //Validation
        if (!groupName || !groupName.trim()) {
          alert("Please enter group name");
          return;
        }
        const exists = this.groups.find(obj => obj.name === groupName.trim());
        if (exists) {
          alert("Group: "+groupName+" already exists.");
        }
        this.groups.push({
          prefix,
          name: groupName,
        });
        this.groups = sortGroups(this.groups);
        chrome.storage.sync.set({ groups: this.groups }, function() {});
        this.openCreateGroupModal();
      },
      deleteGroup(e) {
        let index = e.target.getAttribute("data-index");
        if(index >= 0 && this.groups[index].name !== "Default") {
          var resp = confirm("Delete Group ("+this.groups[index].name+") and any associated keyword shortcuts?");
          if(!!resp) {
            //remove all shortcuts in group in reverse order as to not conflict with demisnishing indexes
            for(let i=this.shortcuts.length - 1; i>=0; i--) {
              if (this.shortcuts[i].group === this.groups[index].name) {
                this.shortcuts.splice(i, 1);
              }
            }
            this.shortcuts = sortShortcuts(this.shortcuts);
            chrome.storage.sync.set({ shortcuts: this.shortcuts }, function() {});
            //now remove the group
            this.groups.splice(index, 1);
            this.groups = sortGroups(this.groups);
            chrome.storage.sync.set({ groups: this.groups }, function() {});
          }
        } else {
          alert("Default group can not be deleted");
        }
        this.openCreateGroupModal();
      },
      exportOptions() {
        const exportShortcuts = JSON.stringify(this.shortcuts, null, 2);
        const exportGroups = JSON.stringify(this.groups, null, 2);
        
      },
      importOptions() {

      }
    }
  });
}

document.addEventListener("DOMContentLoaded", onInit, false);
