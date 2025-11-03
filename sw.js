const CACHE_NAME = 'spinandsip-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/style.css',
  '/script.js',
  '/logo.png',
  '/services.html',
  '/menu.html',
  '/prices.html',
  '/contact.html',
  '/login.html'
];

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))))
  );
});

self.addEventListener('fetch', event => {
  // simple cache-first strategy for same-origin GET requests
  if(event.request.method !== 'GET' || new URL(event.request.url).origin !== location.origin) return;
  event.respondWith(
    caches.match(event.request).then(cached => cached || fetch(event.request).then(res => {
      return caches.open(CACHE_NAME).then(cache => { cache.put(event.request, res.clone()); return res; });
    }).catch(()=> cached))
  );
});
