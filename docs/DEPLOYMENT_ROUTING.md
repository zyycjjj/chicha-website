# Deployment routing

## Required precedence

1. `chicha.io/api/*` → existing API backend
2. exact legacy business routes → temporary redirect to `app.chicha.io`, preserving path and query
3. `chicha.io/*` → ChiChaWebsite SPA/SSR fallback

Do not redirect `/` to the app. It is the new public home page. Do not use a catch-all legacy redirect: that would make the website unreachable.

## Nginx reference

```nginx
server {
  listen 443 ssl http2;
  server_name chicha.io www.chicha.io;

  # www should be a separate exact host redirect in production.
  location ^~ /api/ {
    proxy_pass http://existing_api_backend;
    proxy_set_header Host $host;
    proxy_set_header X-Forwarded-Proto $scheme;
  }

  # Generated from every `aliasPath` in chicha-frontend/src/pages.json.
  # Use 302 during the rollout, then 301 after monitoring confirms it.
  location ~ ^/(home|message|scan-login|merchant|scan|blurb|index|card(?:/.*)?|user(?:/.*)?|register|login|content|rewards(?:/.*)?|invite(?:/.*)?|claim(?:-chi)?|exchange(?:/.*)?|ad(?:/.*)?|withdraw(?:-.*)?|chat|chipoint-list|point-redeem-history|policy|my-chibox|chibox-rewards|chi-asset|chi(?:/.*)?|programs(?:/.*)?|fiat(?:/.*)?|alchemypay(?:/.*)?)$ {
    return 302 https://app.chicha.io$request_uri;
  }

  location = /sw.js { root /srv/chicha-website; add_header Cache-Control "no-store"; }
  location / { try_files $uri $uri/ /index.html; }
}
```

The production team must expand or generate the legacy allow-list from all 86 aliases before applying it. The reference regex is intentionally not a substitute for that generated list.

## Cloudflare

Place the API origin rule before website origin rules. Add explicit redirect rules for the generated legacy aliases, with a dynamic target `https://app.chicha.io${http.request.uri.path}` and query preservation. Let all remaining apex traffic use the website origin. Do not use a page rule that redirects `chicha.io/*` globally.

Cloudflare handles DNS/TLS/edge redirect; Nginx (or equivalent origin proxy) handles upstream routing. Neither layer may cache the cleanup `/sw.js` aggressively.
