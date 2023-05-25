import { registerRoute } from 'workbox-routing'
import { precacheAndRoute } from 'workbox-precaching'
import { StaleWhileRevalidate } from 'workbox-strategies'

// Do precaching
precacheAndRoute(self.__WB_MANIFEST)

self.addEventListener('install', () => {
  console.log('Service Worker: Installed')
  self.skipWaiting()
})

registerRoute(
  ({ url }) => url.origin,
  new StaleWhileRevalidate({
    cacheName: 'cache'
  })
)

self.addEventListener('push', () => {
  console.log('Service Worker: Pushed')
})
