/// <reference types="vite/client" />

/**
 * Environment contract for CTA destinations. Values are injected at build time
 * from `.env.production` (chicha.io / app.chicha.io / biz.chicha.io) and
 * `.env.development` (payx.mobi / app.payx.mobi / biz.payx.mobi).
 *
 * Declaring them explicitly keeps `import.meta.env.VITE_*` dot access legal
 * under `noPropertyAccessFromIndexSignature` and documents the contract.
 */
interface ImportMetaEnv {
  /** Public website host, used for the canonical link. */
  readonly VITE_SITE_URL?: string;
  /** User app (wallet) host. */
  readonly VITE_APP_BASE_URL?: string;
  /** Merchant portal host. */
  readonly VITE_MERCHANT_BASE_URL?: string;
}
