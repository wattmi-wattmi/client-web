// public/service-worker.js

self.addEventListener('install', (event) => {
    console.log('[SW] Installed');
    self.skipWaiting(); // Optional: Activate the SW immediately
});

self.addEventListener('activate', (event) => {
    console.log('[SW] Activated');
    clients.claim(); // Optional: Take control of open pages
});

self.addEventListener('fetch', (event) => {
    // Default fetch handler: passthrough
    event.respondWith(fetch(event.request));
});
