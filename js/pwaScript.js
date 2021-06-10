window.addEventListener("load", function() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err))
  }
});