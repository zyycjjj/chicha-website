# Deployment checklist

- [ ] Create DNS and valid TLS for `chicha.io`, `www.chicha.io`, and `app.chicha.io`.
- [ ] Point `www` to apex redirect; route `app` to the existing uni-app artifact.
- [ ] Apply API-first routing and generated legacy-route redirect allow-list.
- [ ] Confirm `main` frontend deployment artifact is served at `app.chicha.io`; its current workflow deploys to `/data/www/deploy`.
- [ ] Confirm `dev` frontend deployment artifact is served at the existing test host `payx.mobi`; its workflow deploys to `/data/www/deploy`.
- [ ] Create a separate test website hostname (**NEEDS INFRA CONFIRMATION**); never point test website CTAs at production app.
- [ ] Set website production environment values from `.env.production`; set test CTA values from the approved test host.
- [ ] Keep `VUE_APP_REQ_URL=https://chicha.io` unless backend owners confirm another API origin. It is the current configured API backend, not an app-host URL.
- [ ] Update backend CORS, cookie domain/SameSite/Secure, CSRF, WebSocket, OAuth callback allow-lists, and SSO redirect allow-lists for `app.chicha.io`.
- [ ] Publish the cleanup worker at apex `/sw.js` with `Cache-Control: no-store` during rollout.
- [ ] Validate legacy deep links, standalone iOS/Android launches, registration, login, refresh, logout, OAuth callbacks, wallet/card, QRush, API, and WebSocket.
- [ ] Check canonical/robots/sitemap: website owns apex; app sitemap is generated with `VUE_APP_SITE_URL` and should be reviewed for noindex vs index policy.
- [ ] Add error, redirect-rate, 404, service-worker, and auth-callback monitoring; retain a reversible origin/redirect rollback plan.
