export const appendPrefixToKeyword = (groups, groupName, keyword) => {
  const group = groups.find(obj => obj.name === groupName);
  if (group && group.prefix) {
    return `${group.prefix}${keyword}`;
  }
  return keyword;
};

export const isValidURL = string => {
  var res = string.match(
    /((http(s)?|ftp(s)?|file|chrome|extension):\/\/.)([a-z0-9]{1,63}\.)?[-a-z0-9@:%._\+~#=]{1,63}(\.[a-z]{1,63})?\b([-a-z0-9@:%_\+.~#?&//=]*)/gi
  );
  if (res == null) return false;
  else return true;
};

export const sortShortcuts = (shortcuts) => {
  return shortcuts.sort(
    (a,b) => (a.group > b.group) ? 1 :
             (a.group === b.group) ? 
             ((a.keyname > b.keyname) ? 1 : -1) : -1
  );
};