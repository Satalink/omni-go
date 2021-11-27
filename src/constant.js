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
  },
  {
    name: "News",
    id: "news",
    prefix: false
  }
];

export const defaultShortcuts = [
  {
    name: "Omni Go Configuration",
    keyword: "conf",
    url: "chrome-extension://"+chrome.runtime.id+"/src/options/options.html",
    group: "Default"
  },
  {
    name: "Facebook",
    keyword: "fb",
    url: "https://facebook.com/",
    group: "Default"
  },
  {
    name: "Twitter",
    keyword: "twit",
    url: "https://twitter.com/",
    group: "Default"
  },
  {
    name: "TikTok",
    keyword: "tik",
    url: "https://tiktok.com/",
    group: "Default"
  },
  {
    name: "YouTube",
    keyword: "yt",
    url: "https://youtube.com/",
    group: "Default"
  },
  {
    name: "Amazon",
    keyword: "amz",
    url: "https://amazon.com/",
    group: "Default"
  },
  {
    name: "Weather",
    keyword: "wc",
    url: "https://weather.com/",
    group: "News"
  },
  {
    name: "Google Play",
    keyword: "gplay",
    url: "https://play.google.com/",
    group: "Google"
  },
  {
    name: "Chrome Store",
    keyword: "gstore",
    url: "https://chrome.google.com/webstore",
    group: "Google",
  },
  {
    name: "Gmail",
    keyword: "gmail",
    url: "https://gmail.com/",
    group: "Google"
  },
  {
    name: "Google Calendar",
    keyword: "gcal",
    url: "https://calendar.google.com/",
    group: "Google"
  },
  {
    name: "Google Maps",
    keyword: "gmaps",
    url: "https://maps.google.com/",
    group: "Google"
  },
  {
    name: "Google Drive",
    keyword: "gdrive",
    url: "https://drive.google.com/",
    group: "Google"
  },
  {
    name: "Google Earth",
    keyword: "gearth",
    url: "https://earth.google.com/",
    group: "Google"
  },
  {
    name: "Google Podcasts",
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
