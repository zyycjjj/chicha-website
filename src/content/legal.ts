export type LegalDocument = {
  title: string;
  updated: string;
  introduction: string;
  sections: Array<{ heading: string; paragraphs: string[]; items?: string[] }>;
};

const contact = "For questions or requests regarding these notices, contact team@chicha.io.";

/**
 * Public website summaries based on the policy and terms currently published
 * by the existing ChiCha H5 application. Legal must approve changes before a
 * production publication or jurisdiction/entity change.
 */
export const legalDocuments: Record<"terms" | "privacy" | "risk", LegalDocument> = {
  terms: {
    title: "Terms of Service",
    updated: "Last updated: December 8, 2025",
    introduction:
      "These Terms govern access to the ChiCha website and related services. Please read them before registering for or using a ChiCha service.",
    sections: [
      {
        heading: "Scope of services",
        paragraphs: [
          "ChiCha provides digital platform services and information about payment, card, rewards, and related products. Some financial or payment functions may be provided or facilitated by independent licensed partners.",
        ],
      },
      {
        heading: "Accounts and acceptable use",
        paragraphs: [
          "You must provide accurate information and protect your account credentials, passwords, verification codes, and card PINs.",
        ],
        items: [
          "You must not use the services for unlawful, fraudulent, or harmful activity.",
          "You must not interfere with platform security, access restricted systems, or transmit malicious code.",
          "You remain responsible for activity conducted through your account, subject to applicable law.",
        ],
      },
      {
        heading: "Service availability and third parties",
        paragraphs: [
          "Services may be changed, suspended, or discontinued for operational, security, regulatory, or business reasons. Third-party networks and providers may affect availability or transaction processing.",
        ],
      },
      {
        heading: "Intellectual property and updates",
        paragraphs: [
          "ChiCha names, logos, content, and software are protected by applicable intellectual-property law. We may update these Terms; continued use after publication of an updated version may constitute acceptance where permitted by law.",
          contact,
        ],
      },
    ],
  },
  privacy: {
    title: "Privacy Policy",
    updated: "Last updated: December 8, 2025",
    introduction:
      "This Policy describes how ChiCha may process personal data when you use the website or related services.",
    sections: [
      {
        heading: "Information we may collect",
        paragraphs: [
          "We may collect information needed to operate services and meet legal obligations.",
        ],
        items: [
          "Account and contact data, such as email address, phone number, and account settings.",
          "Verification and compliance information where required for KYC, AML, fraud prevention, or legal obligations.",
          "Service, transaction, device, browser, log, and cookie information.",
        ],
      },
      {
        heading: "How information is used",
        paragraphs: [
          "Information may be used to provide and improve services, maintain security, respond to support requests, prevent fraud, and comply with law and regulation.",
        ],
      },
      {
        heading: "Sharing, transfers, and retention",
        paragraphs: [
          "We do not sell personal data. Information may be shared with service providers, payment or card partners, and authorities where required by law. Data may be processed across borders with appropriate safeguards and retained where required by legal or regulatory obligations.",
        ],
      },
      {
        heading: "Your choices and rights",
        paragraphs: [
          "Subject to applicable law, you may request access, correction, deletion, or restriction of certain processing. Browser controls may be used to manage cookies, though disabling them can affect service functionality.",
          contact,
        ],
      },
    ],
  },
  risk: {
    title: "Risk Disclosure",
    updated: "Last updated: September 15, 2026",
    introduction:
      "Digital assets, payment products, and third-party financial services involve material risk. This notice is not investment, legal, tax, or financial advice.",
    sections: [
      {
        heading: "Digital-asset and market risk",
        paragraphs: [
          "Digital-asset prices, liquidity, and network conditions can change rapidly. You may lose some or all value, and transfers may be delayed, irreversible, or unavailable.",
        ],
      },
      {
        heading: "Product and third-party risk",
        paragraphs: [
          "Card, payment, custody, exchange, and on-ramp services can be subject to eligibility, geographic restrictions, partner rules, fees, outages, and compliance reviews. Third-party providers operate under their own terms.",
        ],
      },
      {
        heading: "Security risk",
        paragraphs: [
          "Keep credentials and recovery information private. Verify recipients, networks, and payment details before confirming an action. ChiCha will not ask for private keys or passwords through social media.",
        ],
      },
      {
        heading: "Your responsibility",
        paragraphs: [
          "Consider independent professional advice and only use services you understand and are permitted to use. Availability and regulatory treatment vary by jurisdiction.",
          contact,
        ],
      },
    ],
  },
};
