const staticCacheName = 'site-static';
const dynamicCache = 'site-dynamic-v1';

const assets = [ // cached files
    '/',
    'structure.html',
    'scripts/script.js',
    'styles/style.css',
    'https://fonts.googleapis.com/css?family=Montserrat|Roboto|Poppins',
];

// install service worker
self.addEventListener('install', evt => {
    evt. waitUntil(
        caches.open(staticCacheName).then(cache => {
            console.log('caching shell assets');
             cache.addAll(assets);
                //console.log('Service Worker: Installed');
        })
    );

});



// activate service worker
self.addEventListener('activate', evt => {
    evt.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(keys
                .filter(key => key !== staticCacheName)
                .map(key => caches.delete(key))
                //console.log('Service Worker: Activated');
        })
    )
});
// fetch event
self.addEventListener('fetch', evt => {
    evt.respondWith(
        caches.match(evt.request).then(cacheRes => {
            return cacheRes || fetch(evt.request).then(fetchRes => {
                return caches.open(dynamicCache).then(cache => {
                    cache.put(evt.request.url, fetchRes.clone());
                    return fetchRes;
                    //console.log('Service Worker: Fetching');
                })
            });
        })
    );
});

