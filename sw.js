self.addEventListener('install', function(event) {
  console.log('[Service Worker] Installing Service Worker ...', event);
  event.waitUntil(
  caches.open('static')
  .then(function(cache) {
	console.log('[service Worker] Precaching App sheel');
	cache.addAll([
	'/',
	'/index.html',
	'/main.css',
	'/promise.js',
	'/fetch.js',
	'/skp.js',
	'/img/bg.jpg',
	'/img/logo_144X144.png',
	'/img/logo_192X192.png',
	'/img/logo_196X196.png',
	'/img/logo_243X243.png',
	'/img/logo_48X48.png',
	'/img/logo_96X96.png',
	'water.mp3'
	]);	  
  })
  
  )
});

self.addEventListener('activate', function(event) {
  console.log('[Service Worker] Activating Service Worker ...', event);
  return self.clients.claim();
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
	caches.match(event.request)
	.then(function(response){
		if (response){
			return response;
		} else {
			return fetch(event.request)
			.then(function (res) {
				return caches.open('dynamic')
				.then(function(cache){
					cache.put(event.request.url, res.clone());
					return res;
				})
			})
			.catch(function(err) {
			
			});
		}
	})
  
  );
});
