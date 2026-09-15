# Legacy web-app migration

## Observed facts

The legacy H5 router is **history mode** (`src/manifest.json`), not a hash router. It registers `/sw.js` with scope `/` and uses cache names prefixed `chicha-cache-`, `chicha-runtime-`, and `chicha-static-`. `src/pages.json` declares 86 `aliasPath` routes.

## Route redirects

For every alias declared in `chicha-frontend/src/pages.json`, the complete mapping is mechanical and parameter-preserving:

```text
https://chicha.io/<aliasPath>?query#fragment
  -> https://app.chicha.io/<aliasPath>?query#fragment
```

This includes login, register, home, user, card, exchange, fiat, scan, reward, invite, withdrawal, policy, chat, and all nested aliases. The exact source list is `pages.json`; deployment must generate an allow-list from it rather than maintain examples manually. `/` is explicitly excluded because it becomes the marketing home page. `/api/*` is explicitly excluded because it remains API traffic.

## Client migration bridge

`public/sw.js` in the new website is a one-time cleanup worker. It deletes only the observed legacy ChiCha cache prefixes and unregisters itself; it does not clear cookies, localStorage, IndexedDB, or all site data.

`RootComponent` detects standalone mode via `display-mode: standalone` or the iOS `navigator.standalone` property. A standalone launch at `/` moves to the configured user-app `/home`, preserving query and fragment. Normal browser visits continue to the website.

| Case | Risk | Handling | Verification |
| --- | --- | --- | --- |
| Browser bookmark/deep link | website fallback would swallow app route | edge redirect allow-list preserves path/query | test every generated alias and query/hash sample |
| Old home bookmark | root becomes website | show website with clear user-app CTA | browser test |
| iOS A2HS | standalone old icon opens apex | standalone bridge sends to app home | real iOS Safari A2HS test |
| Android PWA | old worker/cache controls apex | cleanup worker + standalone bridge | Chrome install, offline/online update test |
| Hash legacy URL | server cannot read fragment | browser bridge is required only if historical `/#/` URLs are observed | test saved legacy fragment URLs; no current hash router was found |
| Login state | origin/cookie/SSO may differ | preserve storage; validate backend cookie/OAuth policy before launch | authenticated session, logout, refresh, callback test |

**BLOCKED: NEEDS INFRA CONFIRMATION:** OAuth-provider redirect URI allow-lists, backend CORS, cookie `Domain`/`SameSite` attributes, and SSO behavior are not defined in this frontend repository.
