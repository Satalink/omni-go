export const defaultGroups = [
  {
    name: "Default",
    id: "default",
    prefix: false
  },
  {
    name: "Google",
    id: "google",
    prefix: false
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
    keyword: "conf",
    url: "chrome-extension://"+chrome.runtime.id+"/src/options/options.html",
    group: "Default"
  },
  {
    keyname: "Omni Go Chrome Store Page",
    keyword: "omni",
    url: "https://chrome.google.com/webstore/detail/omni-go/bblloooleipdhkaaahfdalafpjooecoc",
    group: "Default"
  }
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
    keyword: "play",
    url: "https://play.google.com/",
    group: "Google"
  },
  {
    keyname: "Chrome Store",
    keyword: "store",
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
    keyword: "cal",
    url: "https://calendar.google.com/",
    group: "Google"
  },
  {
    keyname: "Google Maps",
    keyword: "maps",
    url: "https://maps.google.com/",
    group: "Google"
  },
  {
    keyname: "Google Drive",
    keyword: "drive",
    url: "https://drive.google.com/",
    group: "Google"
  },
  {
    keyname: "Google Earth",
    keyword: "earth",
    url: "https://earth.google.com/",
    group: "Google"
  },
  {
    keyname: "Google Podcasts",
    keyword: "pods",
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
