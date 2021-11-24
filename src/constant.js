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
    group: "default"
  },
  {
    keyword: "twit",
    url: "https://twitter.com",
    group: "default"
  },
  {
    keyword: "ttok",
    url: "https://tictok.com",
    group: "default"
  },
  {
    keyword: "yt",
    url: "https://youtube.com",
    group: "default"
  },
  {
    keyword: "ama",
    url: "https://amazon.com",
    group: "default"
  },
  {
    keyword: "gplay",
    url: "https://play.google.com/",
    group: "google"
  },
  {
    keyword: "gmail",
    url: "https://gmail.com/",
    group: "google"
  },
  {
    keyword: "gcal",
    url: "https://calendar.google.com/",
    group: "google"
  },
  {
    keyword: "gduo",
    url: "https://duo.google.com/",
    group: "google"
  },
  {
    keyword: "gmeet",
    url: "https://meet.google.com/",
    group: "google"
  },
  {
    keyword: "gchat",
    url: "https://chat.google.com/",
    group: "google"
  },
  {
    keyword: "gvoice",
    url: "https://voice.google.com/",
    group: "google"
  },
  {
    keyword: "gdocs",
    url: "https://docs.google.com/",
    group: "google"
  },
  {
    keyword: "gkeep",
    url: "https://keep.google.com/",
    group: "google"
  },
  {
    keyword: "gmaps",
    url: "https://maps.google.com/",
    group: "google"
  },
  {
    keyword: "gdrive",
    url: "https://drive.google.com/",
    group: "google"
  },
  {
    keyword: "gearth",
    url: "https://earth.google.com/",
    group: "google"
  },
  {
    keyword: "gpod",
    url: "https://podcasts.google.com/",
    group: "google"
  },
];

export const encodeHTML = function (str) {
  return str.replace(/&/g, '&amp;')
   .replace(/</g, '&lt;')
   .replace(/>/g, '&gt;')
   .replace(/"/g, '&quot;')
   .replace(/'/g, '&apos;');
};
