const CACHE = "dayservice-v3";

self.addEventListener("install", function(e) {
  self.skipWaiting();
});

self.addEventListener("activate", function(e) {
  e.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", function(e) {
  e.respondWith(
    caches.open(CACHE).then(function(cache) {
      return cache.match(e.request).then(function(res) {
        return res || fetch(e.request).then(function(response) {
          cache.put(e.request, response.clone());
          return response;
        });
      });
    })
  );
});
