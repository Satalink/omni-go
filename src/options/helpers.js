const getGroupName = (groups, groupId) => {
  const group = groups.find(obj => obj.id === groupId);
  return group ? group.name : "Default";
};

export const appendPrefixToKeyword = (groups, groupId, keyword) => {
  const group = groups.find(obj => obj.id === groupId);
  if (group && group.prefix) {
    return `${group.prefix}${keyword}`;
  }
  return keyword;
};

export const guid = () => {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return (
    s4() +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    s4() +
    s4()
  );
};

export const isValidURL = string => {
  var res = string.match(
    /((http(s)?|ftp(s)?|file|chrome|extension):\/\/.)([a-z0-9]{1,63}\.)?[-a-z0-9@:%._\+~#=]{1,63}(\.[a-z]{1,63})?\b([-a-z0-9@:%_\+.~#?&//=]*)/gi
  );
  if (res == null) return false;
  else return true;
};
