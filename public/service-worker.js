// public/sw.js
importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js'
);

if (workbox) {
    console.log('[SW] Workbox is loaded 🎉');

    // Precache essential files
    workbox.precaching.precacheAndRoute(self.__WB_MANIFEST || []);

    // Cache API responses
    workbox.routing.registerRoute(
        ({ url }) => url.pathname.startsWith('/api/'),
        new workbox.strategies.StaleWhileRevalidate()
    );

    // Cache images
    workbox.routing.registerRoute(
        ({ request }) => request.destination === 'image',
        new workbox.strategies.StaleWhileRevalidate()
    );

} else {
    console.log('[SW] Workbox failed to load ❌');
}

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => self.clients.claim());