const default_config = {
  overrideStorage: true, // override localStorage with fixed userconfig values
  temperature: {
    location: "Århus",
    scale: "C",
  },
  clock: {
    format: "h:i",
    iconColor: "#ff7b95",
  },
  search: {
    engines: {
      g: ["https://google.com/search?q=", "Google"],
      i: ["https://ixquick.com/do/search?q=", "Ixquick"],
      d: ["https://duckduckgo.com/html?q=", "DuckDuckGo"],
      y: ["https://youtube.com/results?search_query=", "Youtube"],
      w: ["https://en.wikipedia.org/w/index.php?search=", "Wikipedia"]
    }
  },
  keybindings: {
    "t": "todo-list",
    "s": "search-bar"
  },
  disabled: [],
  openLastVisitedTab: false,
  tabs: [
    {
      name: "boards",
      background_url: "src/img/banners/bg-1.gif",
      categories: [{
        name: "Daily",
        links: [
          {
            url: "https://www.reddit.com/r/hiphopheads/",
            name: "/r/HipHopHeads"
          },
          {
            name: "/Youtube/",
            url: "https://www.youtube.com/index?hl=en&persist_gl=1&gl=US",
            icon: "leaf",
            icon_color: "#64876d"
          },
          {
            name: "/EB/",
            url: "http://ekstrabladet.dk/",
            icon: "book"
          }
        ]
      },
      {
        name: "School",
        links: [
          {
            name: "/Campus/",
            url: "https://campus.aams.dk/login/index.php",
            icon: "device-gamepad",
            icon_color: "#8b647b"
          },
          {
            name: "/OneDrive/",
            url: "https://aamste-my.sharepoint.com/",
            icon: "camera"
          }
        ]
      },
      {
        name: "Technology",
        links: [
          {
            name: "/Gizmodo/",
            url: "http://blog.gizmodo.com/",
          },
          {
            name: "/LifeHacker/",
            url: "http://blog.lifehacker.com/"
          },
          {
            name: "/Newz/",
            url: "http://newz.dk/"
          },
          {
            name: "/Engadget/",
            url: "http://www.engadget.com/"
          },
          {
            name: "/ComputerWorld/",
            url: "https://www.computerworld.dk/",
            icon: "code"
          }
        ]
      }
      ]
    },
    {
      name: "music",
      background_url: "src/img/banners/bg-2.gif",
      categories: [
        {
          name: "music services",
          links: [
            {
              url: "https://soundcloud.com/",
              icon: "brand-soundcloud",
              icon_color: "#c57750"
            },
            {
              url: "https://youtu.be/",
              icon: "brand-youtube",
              icon_color: "#996767"
            },
            {
              url: "https://r-a-d.io/",
              icon: "radio"
            },
          ]
        },
        {
          name: "music boards",
          links: [
            {
              name: "/music/",
              url: "https://lainchan.org/music/",
              icon: "disc"
            },
            {
              name: "/mu/",
              url: "https://boards.4channel.org/mu/",
            }
          ]
        }
      ]
    },
    {
      name: "tech",
      background_url: "src/img/banners/bg-3.gif",
      categories: [
        {
          name: "subreddits",
          links: [
            {
              name: "r/startpages/",
              url: "https://www.reddit.com/r/startpages/"
            },
            {
              name: "r/unixporn",
              url: "https://www.reddit.com/r/unixporn/"
            },
            {
              name: "r/mechkbds/",
              url: "https://www.reddit.com/r/MechanicalKeyboards/",
              icon: "keyboard",
              icon_color: "#a57685"
            },
            {
              name: "r/programming",
              url: "https://www.reddit.com/r/programming/"
            }
          ]
        },
        {
          name: "blogs",
          links: [
            {
              name: "fasterthanli",
              url: "https://fasterthanli.me/articles",
              icon: "anchor"
            },
            {
              name: "dev.to",
              url: "https://dev.to"
            },
            {
              name: "mataroa.blog",
              url: "https://collection.mataroa.blog",
            }
          ]
        },
        {
          name: "misc",
          links: [
            {
              name: "post office",
              url: "http://afternoon.dynu.com/letterbox.html",
              icon: "mailbox"
            },
            {
              name: "rust docs",
              url: "https://doc.rust-lang.org/book/",
              icon: "notebook",
              icon_color: "#977a3a"
            }
          ]
        }
      ]
    }]
};

const CONFIG = new Config(default_config);
