importScripts('js/cache-polyfill.js');

var CACHE_VERSION = 'kanciarz-v1.0';
var CACHE_FILES = [
    '/',
    'manifest.json',
    
    'logo.png',
    'down_arrow_select.jpg',
    'icons/favicon.ico',
    'icons/android-icon-36x36.png',
    'icons/android-icon-48x48.png',
    'icons/android-icon-96x96.png',
    'icons/android-icon-144x144.png',
    'icons/android-icon-192x192.png',
    'icons/apple-icon-57x57.png',
    'icons/apple-icon-60x60.png',
    'icons/apple-icon-72x72.png',
    'icons/apple-icon-76x76.png',
    'icons/apple-icon-114x114.png',
    'icons/apple-icon-120x120.png',
    'icons/apple-icon-144x144.png',
    'icons/apple-icon-152x152.png',
    'icons/apple-icon-180x180.png',
    'icons/apple-icon-precomposed.png',
    'icons/apple-icon.png',
    'icons/favicon-16x16.png',
    'icons/favicon-32x32.png',
    'icons/favicon-96x96.png',
    'icons/ms-icon-70x70.png',
    'icons/ms-icon-144x144.png',
    'icons/ms-icon-150x150.png',
    'icons/ms-icon-310x310.png',

    'fonts/OpenSans-Regular.ttf',

    'css/normalize.css',
    'css/style.css',    

    'js/cache-polyfill.js',
    'js/script.js',
    'js/worker.js'
];


self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(CACHE_VERSION)
            .then(function (cache) {
                return cache.addAll(CACHE_FILES);
            })
    );
});

self.addEventListener('activate', function (event) {
    event.waitUntil(
        caches.keys().then(function(keys){
            return Promise.all(keys.map(function(key, i) {
                if(key !== CACHE_VERSION) {
                    return caches.delete(keys[i]);
                }
            }))
        })
    )
});

self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request).then(function(res){
            if (res) {                
                return res;
            }
            requestBackend(event);
        })
    )
});

function requestBackend(event){
    var url = event.request.clone();
    return fetch(url).then(function(res){
        if(!res || res.status !== 200 || res.type !== 'basic') {
            return res;
        }
        var response = res.clone();
        caches.open(CACHE_VERSION).then(function(cache){
            cache.put(event.request, response);
        });
        return res;
    })
}
