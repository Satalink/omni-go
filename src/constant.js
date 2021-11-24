export const defaultGroups = [
  {
    name: "Default",
    id: "default",
    prefix: false
  },
  {
    name: "Google",
    id: "google",
    prefix: "g"
  }
];

export const defaultShortcuts = [
  {
    keyword: "fb",
    url: "https://facebook.com",
    group: "Default"
  },
  {
    keyword: "twit",
    url: "https://twitter.com",
    group: "Default"
  },
  {
    keyword: "ttok",
    url: "https://tictok.com",
    group: "Default"
  },
  {
    keyword: "yt",
    url: "https://youtube.com",
    group: "Default"
  },
  {
    keyword: "ama",
    url: "https://amazon.com",
    group: "Default"
  },
  {
    keyword: "gplay",
    url: "https://play.google.com/",
    group: "Google"
  },
  {
    keyword: "gmail",
    url: "https://gmail.com/",
    group: "Google"
  },
  {
    keyword: "gcal",
    url: "https://calendar.google.com/",
    group: "Google"
  },
  {
    keyword: "gduo",
    url: "https://duo.google.com/",
    group: "Google"
  },
  {
    keyword: "gmeet",
    url: "https://meet.google.com/",
    group: "Google"
  },
  {
    keyword: "gchat",
    url: "https://chat.google.com/",
    group: "Google"
  },
  {
    keyword: "gvoice",
    url: "https://voice.google.com/",
    group: "Google"
  },
  {
    keyword: "gdocs",
    url: "https://docs.google.com/",
    group: "Google"
  },
  {
    keyword: "gkeep",
    url: "https://keep.google.com/",
    group: "Google"
  },
  {
    keyword: "gmaps",
    url: "https://maps.google.com/",
    group: "Google"
  },
  {
    keyword: "gdrive",
    url: "https://drive.google.com/",
    group: "Google"
  },
  {
    keyword: "gearth",
    url: "https://earth.google.com/",
    group: "Google"
  },
  {
    keyword: "gpod",
    url: "https://podcasts.google.com/",
    group: "Google"
  },
];

export const encodeHTML = function (str) {
  return str.replace(/&/g, '&amp;')
   .replace(/</g, '&lt;')
   .replace(/>/g, '&gt;')
   .replace(/"/g, '&quot;')
   .replace(/'/g, '&apos;');
};
