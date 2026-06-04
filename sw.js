const CACHE_NAME = "flashcards-cache-v1";

const urlsToCache = [
  "/JustFlashcards/",
  "/JustFlashcards/index.html",
  "/JustFlashcards/manifest.json"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
