var cacheName = "hello-pwa";
var filesToCache = [
  "/",
  "index.html",
  "assets/style.css",
  "assets/main.js",
  "assets/Low_Poly_Spaceship_610.usdz",
  "assets/pyramid1-down.usdz",
  "assets/pyramid2.usdz",
  "assets/pyramidc.usdz",
];

/* Start the service worker and cache all of the app's content */
self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open(cacheName).then(function (cache) {
      return cache.addAll(filesToCache);
    })
  );
});

/* Serve cached content when offline */
self.addEventListener("fetch", function (e) {
  e.respondWith(
    caches.match(e.request).then(function (response) {
      return response || fetch(e.request);
    })
  );
});
