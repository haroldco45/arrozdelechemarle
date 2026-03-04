const CACHE_NAME = 'marle-v2';
const assets = [
  'index.html',
  'manifest.json',
  'arrozdelechemarle.PNG',
  'arrozdelechemarle.JPG'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assets);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => {
      return res || fetch(e.request);
    })
  );
});
