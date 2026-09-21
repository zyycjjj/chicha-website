export type LegalDocument = {
  title: string;
  updated: string;
  introduction: string;
  sections: Array<{
    heading: string;
    paragraphs: string[];
    items?: string[];
    afterItems?: string[];
  }>;
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
    updated: "Effective Date: 01/01/2026",
    introduction:
      "This Privacy Policy governs the collection, storage, use, disclosure and other processing of your personal data when you access, register and use the Chicha.io virtual card services (\u201cServices\u201d). Metamarketing Technology Limited (\u201cwe\u201d, \u201cus\u201d, \u201cour\u201d, the \u201cData Controller\u201d) is a company incorporated under the laws of the Hong Kong Special Administrative Region.",
    sections: [
      {
        heading: "Metamarketing Technology Limited",
        paragraphs: [
          "2/F, 156 WELLINGTON STREET, CENTRAL, HONG KONG",
          "Contact Email: support@chicha.io",
          "We act as the Data Controller under the Hong Kong Personal Data (Privacy) Ordinance (Cap. 486) (\u201cPDPO\u201d). For users located within the European Economic Area (\u201cEEA\u201d), this Privacy Policy also complies with the requirements of the General Data Protection Regulation (\u201cGDPR\u201d).",
          "By registering an account, applying for and using our virtual card services, you acknowledge that you have read, understood and agree to the data processing practices described within this Privacy Policy. Our Services are exclusively available to individuals aged 18 years or older. We do not knowingly collect, store or process personal data from minors under the age of 18. If we discover we hold personal information of a minor, we will promptly delete such data.",
        ],
      },
      {
        heading: "1. What Personal Data We Collect",
        paragraphs: [
          "We collect only personal data that is necessary to provide the virtual card services, complete mandatory identity verification, prevent fraud and satisfy applicable anti-money laundering and regulatory obligations. We do NOT collect biometric data such as facial recognition, fingerprint, voiceprint or any other biological identifiers.",
          "We collect personal data directly from you during account registration, KYC onboarding, virtual card application, transaction submission and ongoing service usage. The categories of personal data we may collect include:",
        ],
        items: [
          "Identity Data: Full legal name, date of birth, nationality, residential address, government-issued identity document information (national ID card, passport number, document expiry date, document image).",
          "Contact Data: Email address, mobile phone number.",
          "Financial & Transaction Data: Virtual card details, payment instrument information, transaction history, merchant details, transaction amount, transaction timestamp, card funding records, card balance records.",
          "Technical & Device Data: Device model, operating system, browser type, IP address, device identifiers, login timestamps, access logs, session information, website navigation metadata.",
        ],
        afterItems: [
          "We will not collect sensitive personal data such as race, religion, political opinions, health information, unless such information is voluntarily submitted by you and required by law.",
        ],
      },
      {
        heading: "2. Purposes of Processing Your Personal Data",
        paragraphs: [
          "We process your personal data only for lawful purposes and will not use your personal data for purposes incompatible with the reasons the data was originally collected. The lawful purposes include:",
        ],
        items: [
          "Customer Due Diligence, identity verification, KYC and anti-money laundering / counter-terrorist financing screening, to meet regulatory compliance requirements.",
          "To issue, activate, operate, maintain and manage your virtual card, authorise and process card transactions, resolve payment disputes and chargebacks.",
          "To communicate service notifications, security alerts, maintenance updates and respond to your customer support enquiries.",
          "To detect, investigate, block and prevent suspicious transactions, fraud, account compromise and security incidents.",
          "To comply with legal, regulatory, accounting, audit, tax and court obligations applicable to our business.",
          "To maintain platform safety, troubleshoot technical issues and improve the stability and security of our Services.",
          "To exercise and defend our legal rights in litigation or regulatory proceedings.",
        ],
        afterItems: [
          "We will not use your personal data for direct marketing purposes unless we obtain your separate, explicit consent. You have the right to withdraw consent for marketing communications at any time.",
        ],
      },
      {
        heading: "3. Third Parties We May Share Your Personal Data With",
        paragraphs: [
          "We share your personal data only with carefully selected third-party data processors and partners. All such parties are bound by written data processing agreements, required to protect your personal data and prohibited from processing your data for their own independent commercial purposes. These authorised third parties include:",
        ],
        items: [
          "Sumsub: Our KYC & AML identity verification provider. We share your identity document information and account details with Sumsub to perform customer due diligence, identity verification, sanctions screening and risk assessment.",
          "AWS (Amazon Web Services): Our cloud hosting, data storage and infrastructure service provider, which securely hosts your personal data.",
          "Licensed EMI / Issuing Partners: Regulated Electronic Money Institution partners who facilitate virtual card issuance, payment settlement and transaction processing.",
          "Card Scheme Operators (Visa / Mastercard): For transaction routing, authorisation and card scheme compliance.",
          "Regulators, law enforcement agencies, courts or government bodies: Where disclosure is required or permitted by applicable law, court order or regulatory request.",
        ],
        afterItems: [
          "We will not sell, rent or lease your personal data to any unrelated third parties for commercial purposes.",
        ],
      },
      {
        heading: "4. Data Retention Period",
        paragraphs: [
          "We retain your personal data for 5 years after the termination or closure of your account, to satisfy Hong Kong anti-money laundering record-keeping regulatory requirements. This mandatory retention period applies to your KYC identity records, account history and all transaction records.",
          "After the completion of this mandatory 5-year retention period, we will securely erase, pseudonymise or anonymise your personal data, unless a longer retention period is required by law, regulatory investigation or ongoing legal dispute.",
          "If your account remains open, we will keep your personal data for as long as necessary to continue providing the virtual card Services to you.",
        ],
      },
      {
        heading: "5. Cross-border Transfer of Personal Data",
        paragraphs: [
          "Your personal data may be transferred to, stored and processed outside Hong Kong, including jurisdictions where our third-party service providers (Sumsub, AWS, EMI partners and card schemes) operate. These countries or regions may have different data protection laws from Hong Kong.",
          "Where we transfer personal data outside Hong Kong, we implement appropriate safeguards, including binding data processing contracts, to ensure your personal data receives an adequate level of protection as required by the PDPO and GDPR. You acknowledge that by using our Services, you consent to such cross-border transfers, where required by applicable law.",
        ],
      },
      {
        heading: "6. Your Rights as a Data Subject",
        paragraphs: [
          "Subject to applicable law and regulatory mandatory record keeping obligations, you have the following rights:",
        ],
        items: [
          "Right of Access: Request a copy of the personal data we hold about you.",
          "Right of Rectification: Request correction of inaccurate or incomplete personal data.",
          "Right to Erasure (\u201cRight to be Forgotten\u201d): Request deletion of your personal data. Please note that we may decline deletion requests for data we are required to retain for AML, regulatory or legal purposes.",
          "Right to Restriction of Processing: Request limitation or suspension of processing of your personal data under specific legal conditions.",
          "Right to Data Portability: For EEA users under GDPR, receive your personal data in a structured, commonly used and machine-readable format.",
          "Right to Object: Object to processing of your personal data where processing is based on our legitimate interests.",
          "Right to Withdraw Consent: Where processing relies on your consent, you may withdraw consent at any time, without affecting the lawfulness of processing performed before withdrawal.",
        ],
        afterItems: [
          "To exercise any of these rights, please send your request to support@chicha.io. We will verify your identity before responding to your request, to prevent unauthorised disclosure of personal data.",
          "For Hong Kong users, you have the right to lodge a complaint with the Office of the Privacy Commissioner for Personal Data (PCPD). For EEA users, you may lodge a complaint with your local data protection authority.",
        ],
      },
      {
        heading: "7. Data Security",
        paragraphs: [
          "We implement industry-standard technical and organisational security measures to protect your personal data against unauthorised access, loss, alteration, disclosure or destruction. These measures include data encryption, role-based access controls, security monitoring, regular vulnerability scanning, periodic security audits and secure cloud infrastructure.",
          "Only authorised personnel who need access to your data to perform their job functions are granted access to your personal data. All staff are subject to confidentiality obligations.",
          "Please be aware that no electronic transmission or data storage system can be guaranteed to be 100% secure. While we strive to protect your personal data, we cannot guarantee absolute security of information transmitted over the internet. You are responsible for keeping your account password and login credentials confidential.",
        ],
      },
      {
        heading: "8. Cookies & Tracking Technologies",
        paragraphs: [
          "Our website chicha.io may use cookies and similar tracking technologies to collect non-identifiable browsing metadata. Cookies help us analyse website traffic, improve user experience and maintain session security.",
          "You may manage, disable or delete cookies via your browser settings. Disabling cookies may affect the functionality of our website. We do not use cookies to collect sensitive personal identity information.",
        ],
      },
      {
        heading: "9. Links to Third-Party Websites",
        paragraphs: [
          "Our website may contain hyperlinks to external third-party websites, including our EMI partners, card scheme websites and service providers. This Privacy Policy applies only to chicha.io. We have no control over and are not responsible for the privacy practices, content or data policies of any external third-party websites. We encourage you to review the privacy policy of any third-party site you visit.",
        ],
      },
      {
        heading: "10. Updates to this Privacy Policy",
        paragraphs: [
          "We may revise and update this Privacy Policy from time to time to reflect changes in our business operations, regulatory requirements or data processing practices. Material changes will be notified to you by posting the updated version on chicha.io/privacy, together with a revised effective date.",
          "Your continued access to and use of our Services after the effective date of the revised Privacy Policy constitutes your acceptance of the updated terms. We encourage you to review this Privacy Policy periodically.",
        ],
      },
      {
        heading: "11. Contact Information",
        paragraphs: [
          "If you have any questions, concerns or requests relating to this Privacy Policy or our processing of your personal data, please contact us at: Metamarketing Technology Limited 2/F,156 WELLINGTON STREET,CENTRAL,HK Email: support@chicha.io",
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
