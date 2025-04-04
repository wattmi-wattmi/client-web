importScripts('/workbox/workbox-sw.js');
importScripts('/workbox/workbox-routing.prod.js');
importScripts('/workbox/workbox-strategies.prod.js');
importScripts('/workbox/workbox-precaching.prod.js');

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