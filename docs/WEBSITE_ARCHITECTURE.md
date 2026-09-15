# ChiCha website architecture

## Target topology

| Host/path | Owner | Purpose |
| --- | --- | --- |
| `https://chicha.io/` | `ChiChaWebsite` | Public marketing, SEO, and entry points only. |
| `https://www.chicha.io/` | edge redirect | Redirect to the apex host. |
| `https://app.chicha.io/` | `chicha-frontend` | Vue 2 / uni-app user application. |
| `https://biz.chicha.io/` | existing merchant service | Merchant operations. |
| `https://chicha.io/api/*` | existing backend | API; this route is observed in the current frontend configuration and must win before the website fallback. |

`chicha-frontend` is a Vue 2 uni-app H5 history-router application. Its production API base remains `https://chicha.io`, as configured by `VUE_APP_REQ_URL`; this is intentionally not changed to `app.chicha.io` because the repository does not show a backend there.

## Environment contract

| Build | Website host | User-app CTA | Merchant CTA |
| --- | --- | --- | --- |
| production | `chicha.io` | `app.chicha.io` | `biz.chicha.io` |
| development/test | **BLOCKED: NEEDS INFRA CONFIRMATION** | `payx.mobi` | `biz.payx.mobi` |

The application test endpoints are confirmed by `chicha-frontend/.env`; no test website hostname was found. `ChiChaWebsite/.env.production` and `.env.development` are the single source of CTA destinations.

## Responsibility boundary

The website has no wallet state, authentication state, KYC, signing, payment execution, balances, or private credentials. Those operations remain in the user app or merchant service. The website only supplies public content and external entry points.

## Independent assets

All 16 exported visual assets are now binary files under `src/assets`. Production source and Vite configuration contain no Lovable runtime or asset URL dependency.
