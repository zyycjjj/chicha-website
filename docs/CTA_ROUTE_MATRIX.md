# CTA route matrix

| Page/area | CTA | Current behavior after this change | Production | Test | Status |
| --- | --- | --- | --- | --- | --- |
| Header/mobile header | Login | external app link | `app.chicha.io/login` | `payx.mobi/login` | complete |
| Header | Get Started | on-page role selector | `#roles` | `#roles` | marketing only |
| Role card | Get Started as User | external registration | `app.chicha.io/register` | `payx.mobi/register` | complete |
| Role card | Start Accepting Payments | external merchant portal | `biz.chicha.io/?intent=qrush-lite` | `biz.payx.mobi/?intent=qrush-lite` | complete |
| Role card / Partner feature | Become a Partner | official contact | `mailto:team@chicha.io` | same | **BLOCKED: partner portal unknown** |
| User feature | Explore User Tools | external wallet/home | `app.chicha.io/home` | `payx.mobi/home` | complete |
| Merchant feature | Explore Merchant Tools | external merchant portal | `biz.chicha.io/?intent=qrush-lite` | `biz.payx.mobi/?intent=qrush-lite` | complete |
| Token feature / token entrance | Token information | official contact | `mailto:team@chicha.io` | same | **BLOCKED: token portal unknown** |
| Quick access | User Login | external login | `app.chicha.io/login` | `payx.mobi/login` | complete |
| Quick access | Merchant Login | external merchant portal | `biz.chicha.io/?intent=qrush-lite` | `biz.payx.mobi/?intent=qrush-lite` | complete |
| Footer products | UCard / Genie | user app routes | `/card`, `/home` at app host | same paths at test app | complete |
| Footer products | QRush / Tap to Pay | merchant portal | merchant portal | test merchant portal | complete |
| Footer social | X / Telegram | verified public social profiles | `x.com/ChiCha_Global`, `t.me/chichaPay_Official` | same | complete |
| Footer support | Telegram Community / Customer Support | verified public Telegram profiles | `t.me/chichaPay_Official`, `t.me/Chicha_ai_Official` | same | complete |
| Footer legal | Terms / Privacy / Risk Disclosure | static website pages | `/terms`, `/privacy`, `/risk-disclosure` | same | complete |
| Footer company | About, news, careers | anchor or official contact | no invented content-system URL | same | pending content destinations |

Section navigation (`Users`, `Merchants`, `Partners`, `Token`, `News`) is deliberately a marketing-page anchor. No `href="#"`, empty href, or JavaScript pseudo-link remains in production component markup.

Wallet, send/receive/swap/card/payment controls are marketing descriptions, not web-app features. Confirmed user routes include `/home`, `/login`, `/register`, and `/card`; no confirmed public Send/Receive/Swap route was found, so none was exposed from the website.
