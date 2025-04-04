const { injectManifest } = require('workbox-build');

injectManifest({
    globDirectory: 'public/',
    globPatterns: ['**/*.{html,js,css,png,ico,json}'],
    swSrc: 'service-worker.js',
    swDest: 'public/service-worker.js',
});
