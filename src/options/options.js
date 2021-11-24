import { appendPrefixToKeyword, isValidURL } from "./helpers.js";

function onInit() {
  new Vue({
    el: "#app",
    data: {
      message: "Hello Vue!",
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
        let keyword = document.getElementById("keyword").value;
        const url = document.getElementById("url").value;

        //Validation
        if (!keyword || !url) {
          alert("Please enter valid details");
          return;
        }
        if (!isValidURL(url)) {
          alert("Please enter a supported URL:\n [http(s)|ftp(s)|file|chrome|extension]://optional.required.optional/");
          return;
        }

        const index = this.shortcuts.findIndex(obj => obj.url === url);
        //Group
        if (!!group && group !== "Default") {
          keyword = appendPrefixToKeyword(this.groups, group, keyword);
        }
        if (index >= 0) {  //replace existing at index
          this.shortcuts[index] = {
            keyword,
            url,
            group
          };
        } else {
          this.shortcuts.push({
            keyword,
            url,
            group
          });
        }
        chrome.storage.sync.set({ shortcuts: this.shortcuts }, function() {
          document.getElementById("keyword").value = "";
          document.getElementById("url").value = "";
        });
        location.reload();
      }, 
      editShortcut(e) {
        const keyword = e.target.getAttribute("data-keyword");
        const index = this.shortcuts.findIndex(obj => obj.keyword === keyword);
        if (index >= 0) {
          const shortcut = this.shortcuts[index];
          let gid = this.groups.findIndex(obj => obj.name === shortcut.group);
          let rootword = keyword;
          if(gid > 0) {
            var replace = "^"+this.groups[gid].prefix;
            let gpfx_regex = new RegExp(replace,"g");
            rootword = shortcut.keyword.replace(gpfx_regex,'');
          } else {
            gid = 0;
          }
          document.getElementById('groupList').selectedIndex = gid;
          document.getElementById('keyword').value = rootword;
          document.getElementById('url').value = shortcut.url;
        }
      },    
      deleteShortcut(e) {
        const keyword = e.target.getAttribute("data-keyword");
        const index = this.shortcuts.findIndex(obj => obj.keyword === keyword);
        if (index >= 0) {
          this.shortcuts.splice(index, 1);
          chrome.storage.sync.set({ shortcuts: this.shortcuts }, function() {});
        }
      },
      goShortcut(e) {
        const keyword = e.target.getAttribute("data-keyword");
        const index = this.shortcuts.findIndex(obj => obj.keyword === keyword);
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

        if (!groupName || !groupName.trim()) {
          alert("Please enter group name");
          return;
        }
        if (!prefix || !prefix.trim()) {
          alert("Please enter a group prefix");
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
        chrome.storage.sync.set({ groups: this.groups }, function() {});
        this.openCreateGroupModal();
      },
      deleteGroup(e) {
        const prefix = e.target.getAttribute("data-prefix");
        let index;        
        if(!!prefix) {
          index = this.groups.findIndex(obj => obj.prefix === prefix.trim());
          var resp = confirm("Delete Group ("+this.groups[index].name+") and any associated keyword shortcuts?");
          if(!!resp) {
            //remove all shortcuts in group
            for(let i=this.shortcuts.length - 1; i>=0; i--) {
              console.log(this.shortcuts[i].group+" = "+this.groups[index].name);
              if (this.shortcuts[i].group === this.groups[index].name) {
                this.shortcuts.splice(i, 1);
              }
            }
            chrome.storage.sync.set({ shortcuts: this.shortcuts }, function() {});
            //now remove the group
            this.groups.splice(index, 1);
            chrome.storage.sync.set({ groups: this.groups }, function() {});
          }
        } else {
          alert("Default Group can not be deleted");
        }
        this.openCreateGroupModal();
      }
    }
  });
}

document.addEventListener("DOMContentLoaded", onInit, false);
