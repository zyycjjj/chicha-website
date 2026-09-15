const trimTrailingSlash = (value: string) => value.replace(/\/+$/, "");

const appBaseUrl = trimTrailingSlash(import.meta.env.VITE_APP_BASE_URL || "");
const merchantBaseUrl = trimTrailingSlash(import.meta.env.VITE_MERCHANT_BASE_URL || "");
export const publicSiteUrl = trimTrailingSlash(import.meta.env.VITE_SITE_URL || "");

function app(path: string) {
  return appBaseUrl ? `${appBaseUrl}${path}` : "#entrances";
}

function merchant(path = "") {
  return merchantBaseUrl ? `${merchantBaseUrl}${path}` : "#entrances";
}

/** All business-system URLs live here; components must not embed environment domains. */
export const businessRoutes = {
  app: {
    home: app("/home"),
    login: app("/login"),
    register: app("/register"),
    wallet: app("/home"),
    card: app("/card"),
  },
  merchant: {
    portal: merchant(),
  },
  contact: "mailto:team@chicha.io",
  legal: {
    terms: "/terms",
    privacy: "/privacy",
    risk: "/risk-disclosure",
  },
  social: {
    x: "https://x.com/ChiCha_Global",
    telegram: "https://t.me/Chicha_ai_Official",
    supportTelegram: "https://t.me/Chicha_ai_Official",
  },
  whitepaper: "https://chicha.gitbook.io/chicha-whitepaper",
} as const;
