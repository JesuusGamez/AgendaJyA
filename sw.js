const CACHE_NAME = 'mis-finanzas-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  // Añade aquí tus hojas de estilo, scripts y recursos estáticos
  // Ejemplos:
  // '/style.css',
  // '/app.js',
  // '/manifest.json'
];

// 1. Evento de Instalación: Se descargan y almacenan los recursos estáticos
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Archivos cacheados exitosamente');
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .then(() => self.skipWaiting())
  );
});

// 2. Evento de Activación: Se limpia el caché antiguo si actualizas la versión
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Eliminando caché antiguo:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// 3. Evento Fetch: Intercepta las peticiones de red
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Devuelve el archivo desde el caché si existe; si no, realiza la petición a la red
        if (response) {
          return response;
        }
        return fetch(event.request).catch(() => {
          // Opcional: Aquí puedes retornar una página HTML de respaldo (fallback) 
          // en caso de que falle la red y el recurso no esté en caché.
        });
      })
  );
});
