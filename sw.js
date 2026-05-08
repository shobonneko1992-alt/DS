const CACHE = "dayservice-v1";
const ASSETS = ["/", "/index.html", "/manifest.json"];

self.addEventListener("install", function(e) {
  e.waitUntil(
    caches.open(CACHE).then(function(cache) {
      return cache.addAll(ASSETS);
    })
  );
});

self.addEventListener("fetch", function(e) {
  e.respondWith(
    caches.match(e.request).then(function(res) {
      return res || fetch(e.request);
    })
  );
});
