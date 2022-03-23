const cacheName = 'clonedozap'
const assetsToCache = [
    './',
    './css/materialize.css',
    './css/style.css',
    './js/init.js',
    './js/materialize.js',
    './js/routes.js',
    './favicon.ico',
    './manifest.json',
    './pages/camera.html',
    './pages/chamadas.html',
    './pages/conversas.html',
    './pages/status.html',
    './icon.png',
    './index.html',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'
]

self.addEventListener('install', (event) => {
    self.skipWaiting();
    event.waitUntil(
        caches.open(cacheName)
        .then((cache) => {
            return cache.addAll(assetsToCache)
        })
    )
})

self.addEventListener('activate', function activator(event) {
    event.waitUntil(
        caches.keys().then(function(keys) {
            return Promise.all(keys
                .filter(function(key) {
                    return key.indexOf(cacheName) !== 0;
                })
                .map(function(key) {
                    return caches.delete(key);
                })
            );
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(cachedResponse) {
            return cachedResponse || fetch(event.request);
        })
    );
});