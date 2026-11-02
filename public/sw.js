// MYSTIC TAROT - Service Worker for 100% Offline Support
const CACHE_NAME = 'mystic-tarot-offline-v1';

// Core routes and critical static assets to pre-cache immediately
const PRECACHE_URLS = [
  '/',
  '/reading',
  '/tu-vi',
  '/cards',
  '/knowledge',
  '/history',
  '/about',
  '/manifest.json',
  '/favicon.ico',
  '/images/cards/ace-of-cups.jpg',
  '/images/cards/ace-of-pentacles.jpg',
  '/images/cards/ace-of-swords.jpg',
  '/images/cards/ace-of-wands.jpg',
  '/images/cards/death.jpg',
  '/images/cards/eight-of-cups.jpg',
  '/images/cards/eight-of-pentacles.jpg',
  '/images/cards/eight-of-swords.jpg',
  '/images/cards/eight-of-wands.jpg',
  '/images/cards/five-of-cups.jpg',
  '/images/cards/five-of-pentacles.jpg',
  '/images/cards/five-of-swords.jpg',
  '/images/cards/five-of-wands.jpg',
  '/images/cards/four-of-cups.jpg',
  '/images/cards/four-of-pentacles.jpg',
  '/images/cards/four-of-swords.jpg',
  '/images/cards/four-of-wands.jpg',
  '/images/cards/judgement.jpg',
  '/images/cards/justice.jpg',
  '/images/cards/king-of-cups.jpg',
  '/images/cards/king-of-pentacles.jpg',
  '/images/cards/king-of-swords.jpg',
  '/images/cards/king-of-wands.jpg',
  '/images/cards/knight-of-cups.jpg',
  '/images/cards/knight-of-pentacles.jpg',
  '/images/cards/knight-of-swords.jpg',
  '/images/cards/knight-of-wands.jpg',
  '/images/cards/nine-of-cups.jpg',
  '/images/cards/nine-of-pentacles.jpg',
  '/images/cards/nine-of-swords.jpg',
  '/images/cards/nine-of-wands.jpg',
  '/images/cards/page-of-cups.jpg',
  '/images/cards/page-of-pentacles.jpg',
  '/images/cards/page-of-swords.jpg',
  '/images/cards/page-of-wands.jpg',
  '/images/cards/queen-of-cups.jpg',
  '/images/cards/queen-of-pentacles.jpg',
  '/images/cards/queen-of-swords.jpg',
  '/images/cards/queen-of-wands.jpg',
  '/images/cards/seven-of-cups.jpg',
  '/images/cards/seven-of-pentacles.jpg',
  '/images/cards/seven-of-swords.jpg',
  '/images/cards/seven-of-wands.jpg',
  '/images/cards/six-of-cups.jpg',
  '/images/cards/six-of-pentacles.jpg',
  '/images/cards/six-of-swords.jpg',
  '/images/cards/six-of-wands.jpg',
  '/images/cards/strength.jpg',
  '/images/cards/temperance.jpg',
  '/images/cards/ten-of-cups.jpg',
  '/images/cards/ten-of-pentacles.jpg',
  '/images/cards/ten-of-swords.jpg',
  '/images/cards/ten-of-wands.jpg',
  '/images/cards/the-chariot.jpg',
  '/images/cards/the-devil.jpg',
  '/images/cards/the-emperor.jpg',
  '/images/cards/the-empress.jpg',
  '/images/cards/the-fool.jpg',
  '/images/cards/the-hanged-man.jpg',
  '/images/cards/the-hermit.jpg',
  '/images/cards/the-hierophant.jpg',
  '/images/cards/the-high-priestess.jpg',
  '/images/cards/the-lovers.jpg',
  '/images/cards/the-magician.jpg',
  '/images/cards/the-moon.jpg',
  '/images/cards/the-star.jpg',
  '/images/cards/the-sun.jpg',
  '/images/cards/the-tower.jpg',
  '/images/cards/the-world.jpg',
  '/images/cards/three-of-cups.jpg',
  '/images/cards/three-of-pentacles.jpg',
  '/images/cards/three-of-swords.jpg',
  '/images/cards/three-of-wands.jpg',
  '/images/cards/two-of-cups.jpg',
  '/images/cards/two-of-pentacles.jpg',
  '/images/cards/two-of-swords.jpg',
  '/images/cards/two-of-wands.jpg',
  '/images/cards/wheel-of-fortune.jpg'
];

// 1. Install event: pre-cache all core pages and 78 card images
self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[SW] Pre-caching core routes and 78 tarot cards for offline use...');
      return cache.addAll(PRECACHE_URLS).catch((err) => {
        console.warn('[SW] Some precache items failed:', err);
      });
    })
  );
});

// 2. Activate event: clean up outdated caches and claim clients immediately
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('[SW] Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// 3. Fetch event: Cache First for images, Stale-While-Revalidate for pages & assets
self.addEventListener('fetch', (event) => {
  const request = event.request;
  const url = new URL(request.url);

  // Only handle HTTP/HTTPS GET requests
  if (request.method !== 'GET') return;

  // Ignore chrome-extension or external analytics
  if (url.origin !== self.location.origin && !url.hostname.includes('fonts.g')) {
    return;
  }

  // Strategy A: Card Images -> Cache First (Always instant & offline)
  if (url.pathname.startsWith('/images/cards/')) {
    event.respondWith(
      caches.match(request).then((cachedResponse) => {
        if (cachedResponse) return cachedResponse;
        return fetch(request).then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const clone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
          }
          return networkResponse;
        }).catch(() => caches.match('/favicon.ico'));
      })
    );
    return;
  }

  // Strategy B: Next.js static scripts & CSS (_next/static/) -> Cache First
  if (url.pathname.startsWith('/_next/static/')) {
    event.respondWith(
      caches.match(request).then((cachedResponse) => {
        if (cachedResponse) return cachedResponse;
        return fetch(request).then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const clone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
          }
          return networkResponse;
        });
      })
    );
    return;
  }

  // Strategy C: Navigation / HTML Pages -> Stale-While-Revalidate with Offline Fallback
  if (request.mode === 'navigate' || request.headers.get('accept')?.includes('text/html')) {
    event.respondWith(
      fetch(request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const clone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
          }
          return networkResponse;
        })
        .catch(() => {
          // Offline: match specific requested path or fallback to cached root '/'
          return caches.match(request).then((cachedResponse) => {
            if (cachedResponse) return cachedResponse;
            return caches.match(url.pathname).then((pathMatch) => {
              if (pathMatch) return pathMatch;
              return caches.match('/');
            });
          });
        })
    );
    return;
  }

  // Strategy D: All other requests -> Cache with network fallback
  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      if (cachedResponse) return cachedResponse;
      return fetch(request).then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200) {
          const clone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
        }
        return networkResponse;
      }).catch(() => {
        // Silent fail for optional assets
      });
    })
  );
});
