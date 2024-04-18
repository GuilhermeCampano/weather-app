/// <reference types="@sveltejs/kit" />
/// <reference lib="webworker" />

// eslint-disable-next-line @typescript-eslint/no-unused-vars
declare let self: ServiceWorkerGlobalScope;

import { build, files, version } from '$service-worker';


const CACHE = `assets-cache-${version}`;
const ASSETS = [...build, ...files];


//install
self.addEventListener('install', event => {
  async function addFilesToCache() {
    const cache = await caches.open(CACHE);
    await cache.addAll(ASSETS);
  }

  event.waitUntil(addFilesToCache());
});


// activate service worker
self.addEventListener('activate', event => {
  async function removeOldCache() {
    const keys = await caches.keys();
    for (const key of keys) {
      if (key !== CACHE) {
        await caches.delete(key);
      }
    }
  }

  event.waitUntil(removeOldCache());
});

// listen for fetch event
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET' || event.request.url.includes('/api/')) {
    return;
  }

  async function respond() {
    const url = new URL(event.request.url);
    const cache = await caches.open(CACHE);

    if (ASSETS.includes(url.pathname)) {
      const cachedResponse = await cache.match(event.request);
      if (cachedResponse) {
        return cachedResponse;
      }
    }

    try {
      const response = await fetch(event.request);
      const isNotExtension = url.protocol.startsWith('http');
      const isSuccess = response.status === 200;

      if (isNotExtension && isSuccess) {
        cache.put(event.request, response.clone());
      }

      return response;


    } catch {
      const cachedResponse = await cache.match(url.pathname);
      if (cachedResponse) {
        return cachedResponse;

      }
    }

    return new Response('Not found', { status: 404, statusText: 'Not found' });
  }

  event.respondWith(respond());


});

self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});