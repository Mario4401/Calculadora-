const CACHE_NAME = 'trading-risk-v1';
const FILES = ['./', './index.html', './manifest.json', './sw.js', './icon.svg'];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(FILES)));
});
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(resp => resp || fetch(e.request)));
});
