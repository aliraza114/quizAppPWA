const CASHE_NAME = 'v-1'
const urlsToCache = ['index.html', 'offline.html']

const self = this

// Install Service Worker
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CASHE_NAME)
            .then((cache) => {
                console.log('Opened cache');

                return cache.addAll(urlsToCache);
            })
    )
})

// Listen to Reqeusts
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).
            then(() => {
                return fetch(event.request)
                    .catch(() => caches.match('offline.html'))
            })
    )
})

// Activate Service Worker
self.addEventListener('activate', (event) => {
    const casheWhitelist = []
    casheWhitelist.push(CASHE_NAME)

    event.waitUntil(
        caches.keys().then((casheNames) => Promise.all(
            casheNames.map((cacheName) => {
                if (!casheWhitelist.includes(cacheName)) {
                    return caches.delete(cacheName)
                }
            })
        ))
    )
})