var dataCacheName = 'perriData-v1';
var cacheName = 'perri-final-1';
var filesToCache = [
  'templates/index.html',
  'static/css/inicio.css',
  'static/css/blog.css',
  'static/img/dibujando.png',
  'static/img/facebook-logo.png',
  'static/img/favicon.ico',
  'static/img/gal1.webp',
  'static/img/gal2.webp',
  'static/img/gal3.webp',
  'static/img/google-plus.png',
  'static/img/huella.png',
  'static/img/instagram.png',
  'static/img/logo.png',
  'static/img/menu.svg',
  'static/img/perro-1.jpg',
  'static/img/perro-2.jpg',
  'static/img/perro-2F.jpg',
  'static/img/perro-3.jpg',
  'static/img/perro-4.jpg',
  'static/img/trabajo.png',
  'static/img/twitter-logo.png',
  'static/img/wsp-logo.png'
];

self.addEventListener( 'install', function( e ) {
    console.log( '[ServiceWorker] Install' );
    e.waitUntil(
        caches.open( dataCacheName ).then( function( cache ) {
            console.log( '[ServiceWorker] Caching app shell' );
            return cache.addAll( filesToCache );
        } )
    );
});

self.addEventListener( 'activate', function( e ) {
    console.log( '[ServiceWorker] Activate' );
    e.waitUntil(
      caches.keys( ).then( function( keyList ) {
        return Promise.all( keyList.map( function( key ) {
          if ( key !== dataCacheName ) {
            console.log('[ServiceWorker] Removing old cache', key );
            return caches.delete( key );
          }
        }));
      })
    );
    return self.clients.claim();
});


self.addEventListener('fetch', function(e) {
    console.log('[ServiceWorker] Fetch', e.request.url);
    e.respondWith(
      caches.match(e.request).then(function(response) {
        return response || fetch(e.request);
      })
    );
}); 