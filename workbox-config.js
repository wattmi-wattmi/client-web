const { injectManifest } = require('workbox-build');
injectManifest({
    globDirectory: 'public/',
    globPatterns: ['**/*.{js,css,png,ico,json,woff2,woff,ttf,eot,svg}'],
    swSrc: 'service-worker.js',
    swDest: 'public/service-worker.js',
}).then(({ count, size }) => {
    console.log(`Injected ${count} files, totaling ${size} bytes.`);
}).catch((err) => {
    console.error('Service worker build failed:', err);
});;
