/* One-time migration worker for the old UniApp PWA scope on chicha.io. */
self.addEventListener("install", (event) => event.waitUntil(self.skipWaiting()));
self.addEventListener("activate", (event) =>
  event.waitUntil(
    (async () => {
      const names = await caches.keys();
      await Promise.all(
        names
          .filter(
            (name) =>
              name.startsWith("chicha-cache-") ||
              name.startsWith("chicha-runtime-") ||
              name.startsWith("chicha-static-"),
          )
          .map((name) => caches.delete(name)),
      );
      await self.clients.claim();
      await self.registration.unregister();
    })(),
  ),
);
