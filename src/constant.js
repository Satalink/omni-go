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
    keyword: "config",
    url: "chrome-extension://bblloooleipdhkaaahfdalafpjooecoc/src/options/options.html",
    group: "Default"
  },
  {
    keyword: "fb",
    url: "https://facebook.com/",
    group: "Default"
  },
  {
    keyword: "twit",
    url: "https://twitter.com/",
    group: "Default"
  },
  {
    keyword: "tik",
    url: "https://tictok.com/",
    group: "Default"
  },
  {
    keyword: "yt",
    url: "https://youtube.com/",
    group: "Default"
  },
  {
    keyword: "amz",
    url: "https://amazon.com/",
    group: "Default"
  },
  {
    keyword: "wc",
    url: "https://weather.com/",
    group: "News"
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
