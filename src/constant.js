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
    name: "Social",
    id: "social",
    prefix: false,
  },
  {
    name: "Crypto",
    id: "crypto",
    prefix: false,
  },
  {
    name: "AI",
    id: "ai",
    prefix: false,
  },
  {
    name: "Media",
    id: "media",
    prefix: false,
  },
  {
    name: "Shopping",
    id: "shopping",
    prefix: false,
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
  },
  {
    keyname: "Facebook",
    keyword: "fb",
    url: "https://facebook.com/",
    group: "Social"
  },
  {
    keyname: "X",
    keyword: "x",
    url: "https://x.com/",
    group: "Social"
  },
  {
    keyname: "Reddit",
    keyword: "red",
    url: "https://reddit.com/",
    group: "Social"
  },
  {
    keyname: "YouTube",
    keyword: "yt",
    url: "https://youtube.com/",
    group: "Media"
  },
  {
    keyname: "Rumble",
    keyword: "rum",
    url: "https://rumble.com",
    group: "Media"
  },
  {
    keyname: "Amazon",
    keyword: "amz",
    url: "https://amazon.com/",
    group: "Shopping"
  },
  {
    keyname: "Walmart",
    keyword: "wm",
    url: "https://walmart.com",
    group: "Shopping"
  },
  {
    keyname: "Kraken",
    keyword: "kra",
    url: "https://kraken.com",
    group: "Crypto"
  },
  {
    keyname: "DexScreener",
    keyword: "dex",
    url: "https://dexscreener.com",
    group: "Crypto"
  },  
  {
    keyname: "GekoTerminal",
    keyword: "geko",
    url: "https://gekoterminal.com",
    group: "Crypto"
  },  
  {
    keyname: "SolScan",
    keyword: "sol",
    url: "https://solscan.io",
    group: "Crypto"
  },  
  {
    keyname: "Gemini",
    keyword: "gem",
    url: "https://gemini.google.com",
    group: "AI"
  },
  {
    keyname: "Grok",
    keyword: "grok",
    url: "https://grok.com",
    group: "AI"
  },
  {
    keyname: "ChatGPT",
    keyword: "chat",
    url: "https://ghatgpt.com",
    group: "AI"
  },
  {
    keyname: "CoPilot",
    keyword: "cp",
    url: "https://copilot.microsoft.com",
    group: "AI"
  },
  {
    keyname: "Gemini",
    keyword: "g",
    url: "https://gemini.google.com",
    group: "AI"
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
    keyname: "Google Music",
    keyword: "pods",
    url: "https://music.google.com/",
    group: "Google"
  },
    {
    keyname: "INOreader",
    keyword: "news",
    url: "https://inoreader.com",
    group: "News"
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
