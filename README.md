# Progressive Web App starter [2021]
This repo is a simple starter for creating **Progressive Web Apps**. This repo has the most basic files required for browser to recognize this package is a **PWA**. This can be loaded into home screen app list for Iphones and Android Phones.
The difference between a normal website and a **Progressive Website** is the latter is installable.
```

Please fork the project to start a new project

```

## usage: Development
use these files as starting point:

/manifest.json - controls PWA configuration for installations
/icons/* - contain icons for display in Home screens
/js/pwaScript.js - starting point of javascript for app, registers `service worker` to be used for PWA setup
/serviceWorker.js - allows for PWA to work "offline", this is required for android
/index.html - starting point of website

## DEPLOYMENT
1. SSL enabled web server to load the files

---
## further reading: Documentations
- https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps
- https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Installable_PWAs
more in source.md