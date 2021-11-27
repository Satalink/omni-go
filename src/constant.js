export const defaultGroups = [
  { 
    name: "Config",
    id: "config",
    prefix: false
  },
  {
    name: "Default",
    id: "default",
    prefix: false
  },
  {
    name: "Google",
    id: "google",
    prefix: "g"
  },
  {
    name: "News",
    id: "news",
    prefix: false
  }
];

export const defaultShortcuts = [
  {
    keyname: "Omni Go Configuration",
    keyword: "omni",
    url: "chrome-extension://"+chrome.runtime.id+"/src/options/options.html",
    group: "Config"
  },
  {
    keyname: "Facebook",
    keyword: "fb",
    url: "https://facebook.com/",
    group: "Default"
  },
  {
    keyname: "Twitter",
    keyword: "twit",
    url: "https://twitter.com/",
    group: "Default"
  },
  {
    keyname: "TikTok",
    keyword: "tik",
    url: "https://tiktok.com/",
    group: "Default"
  },
  {
    keyname: "YouTube",
    keyword: "yt",
    url: "https://youtube.com/",
    group: "Default"
  },
  {
    keyname: "Amazon",
    keyword: "amz",
    url: "https://amazon.com/",
    group: "Default"
  },
  {
    keyname: "Google Play",
    keyword: "gplay",
    url: "https://play.google.com/",
    group: "Google"
  },
  {
    keyname: "Chrome Store",
    keyword: "gstore",
    url: "https://chrome.google.com/webstore",
    group: "Google",
  },
  {
    keyname: "Gmail",
    keyword: "gmail",
    url: "https://gmail.com/",
    group: "Google"
  },
  {
    keyname: "Google Calendar",
    keyword: "gcal",
    url: "https://calendar.google.com/",
    group: "Google"
  },
  {
    keyname: "Google Maps",
    keyword: "gmaps",
    url: "https://maps.google.com/",
    group: "Google"
  },
  {
    keyname: "Google Drive",
    keyword: "gdrive",
    url: "https://drive.google.com/",
    group: "Google"
  },
  {
    keyname: "Google Earth",
    keyword: "gearth",
    url: "https://earth.google.com/",
    group: "Google"
  },
  {
    keyname: "Google Podcasts",
    keyword: "gpod",
    url: "https://podcasts.google.com/",
    group: "Google"
  },
  {
    keyname: "Weather",
    keyword: "wc",
    url: "https://weather.com/",
    group: "News"
  },
];

export const encodeHTML = function (str) {
  return str.replace(/&/g, '&amp;')
   .replace(/</g, '&lt;')
   .replace(/>/g, '&gt;')
   .replace(/"/g, '&quot;')
   .replace(/'/g, '&apos;');
};
