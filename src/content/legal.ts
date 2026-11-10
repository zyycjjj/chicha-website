export type LegalDocument = {
  title: string;
  subtitle?: string;
  updated?: string;
  introduction?: string;
  sections: Array<{
    heading: string;
    paragraphs: string[];
    items?: string[];
    afterItems?: string[];
    tables?: Array<{
      caption: string;
      headers: string[];
      rows: string[][];
    }>;
  }>;
};

const contact = "For questions or requests regarding these notices, contact team@chicha.io.";

// Terms and privacy reproduce the supplied Intrinsic Capital Ltd policy documents.
export const legalDocuments: Record<"terms" | "privacy" | "risk", LegalDocument> = {
  terms: {
    title: "Terms of Service",
    subtitle: "Intrinsic Capital Ltd",
    sections: [
      {
        heading: "1. Company Information",
        paragraphs: [
          "1.1 Company Name:  Intrinsic Capital Ltd.",
          "1.2 Registration Date:  19 July 2018.",
          "1.3 Registered Address:  Vistra Corporate Services Centre, Wickhams Cay II, Road Town, Tortola, VG 1110, British Virgin Islands.",
          "1.4 Contact Email:  team@chicha.io. This address is the Company’s designated contact point for all enquiries, notices and correspondence concerning these Terms and the services.",
          "The details set out in this Clause 1 form part of these Terms. The Company shall notify the User in accordance with Clause 10 of any change to its registered address or contact email address.",
        ],
      },
      {
        heading: "2. Acceptance of Terms",
        paragraphs: [
          "By accessing, browsing or using the Company’s services, platform, website, materials and any related products provided by the Company, the User confirms that it has read, understood and agreed to be bound by these Terms. A User who does not agree to any provision of these Terms shall immediately cease using all services provided by the Company.",
        ],
      },
      {
        heading: "3. Description of Services",
        paragraphs: [
          "The Company may provide financial consulting, information provision, investment advisory liaison and other related services as mutually agreed in separate written arrangements. All services provided by the Company are subject to these Terms and to any supplementary agreement, service schedule or side letter signed by both parties.",
          "The Company reserves the right to modify, suspend or discontinue any part of the services at any time upon reasonable prior notice, to the extent permitted by applicable law.",
        ],
      },
      {
        heading: "4. User Obligations",
        paragraphs: [
          "4.1 The User warrants that all information, documents and materials submitted to the Company are true, accurate, complete and not misleading.",
          "4.2 The User shall use the Company’s services only for lawful purposes and shall not use the services for any illegal, fraudulent, infringing or improper activity.",
          "4.3 The User shall be solely responsible for maintaining the confidentiality of its account credentials and its communications with the Company, and shall notify the Company at team@chicha.io promptly upon becoming aware of any unauthorised access or security breach.",
          "4.4 The User shall comply with all applicable laws, regulations and regulatory requirements of the British Virgin Islands and of any other jurisdiction relevant to the User’s use of the services.",
        ],
      },
      {
        heading: "5. Intellectual Property Rights",
        paragraphs: [
          "All copyrights, trademarks, trade secrets, know-how and other intellectual property rights in the documents, reports, analyses, templates, software and content provided by the Company remain the exclusive property of the Company. The User shall not copy, distribute, reproduce, modify, sublicense or disclose such intellectual property to any third party without the prior written consent of the Company.",
        ],
      },
      {
        heading: "6. Disclaimer",
        paragraphs: [
          "6.1 The Company provides its services on an “as is” and “as available” basis and makes no express or implied warranties, including warranties of accuracy, completeness, fitness for a particular purpose or uninterrupted availability.",
          "6.2 Nothing provided by the Company constitutes investment advice, a guarantee of return or a recommendation to enter into any transaction. The User shall make its own independent judgment and bear its own risk.",
          "6.3 To the maximum extent permitted by applicable law, the Company shall not be liable for any indirect, incidental, special, consequential or punitive damages, including loss of profit, loss of data or business interruption, arising out of or in connection with the User’s use of the services.",
        ],
      },
      {
        heading: "7. Confidentiality",
        paragraphs: [
          "Each party shall keep confidential all non-public information obtained from the other party in connection with these Terms, including business plans, client information, financial data and negotiation details, for five (5) years after termination of these Terms, unless disclosure is required by law, court order or a competent regulatory authority.",
        ],
      },
      {
        heading: "8. Term and Termination",
        paragraphs: [
          "8.1 These Terms take effect on the Effective Date and remain in force until terminated in accordance with this Clause 8.",
          "8.2 Either party may terminate these Terms by giving thirty (30) calendar days’ prior written notice to the other party.",
          "8.3 Upon termination, the User shall cease using the Company’s services and shall return or delete all confidential materials of the Company. Clauses 5, 6, 7, 9, 10 and 11 survive termination.",
        ],
      },
      {
        heading: "9. Governing Law and Dispute Resolution",
        paragraphs: [
          "9.1 These Terms are governed by and construed in accordance with the laws of the British Virgin Islands.",
          "9.2 Any dispute, controversy or claim arising out of or relating to these Terms shall first be settled amicably through negotiation. Failing settlement within thirty (30) days, the dispute shall be finally resolved by arbitration in the British Virgin Islands in accordance with the arbitration rules applicable at that time.",
        ],
      },
      {
        heading: "10. Notices",
        paragraphs: [
          "10.1 Any notice under these Terms shall be in writing and is deemed duly given: (a) if delivered by hand, on the date of delivery; (b) if sent by prepaid registered mail or courier, on the third business day after dispatch; or (c) if sent by email, on the date of transmission, provided no failure notification is received.",
          "10.2 Notices to the Company shall be sent to team@chicha.io. Notices to the User shall be sent to the email address most recently provided by the User.",
          "10.3 Each party shall notify the other in writing of any change to its contact details within five (5) business days of such change; a party that fails to do so remains bound by notices sent to its last notified address.",
        ],
      },
      {
        heading: "11. General Provisions",
        paragraphs: [
          "11.1 The Company may revise these Terms from time to time. Revised Terms shall be communicated to the User in accordance with Clause 10, and continued use of the services after such notice constitutes acceptance of the revised version.",
          "11.2 If any provision of these Terms is held invalid or unenforceable, the remaining provisions remain in full force and effect.",
          "11.3 These Terms constitute the entire agreement between the parties with respect to their subject matter and supersede all prior oral or written understandings and arrangements.",
          "11.4 The User may not assign or transfer any of its rights or obligations under these Terms without the prior written consent of the Company.",
          "For and on behalf of",
          "Intrinsic Capital Ltd",
          "Contact: team@chicha.io",
        ],
      },
    ],
    introduction:
      "These Terms of Service (the “Terms”) are entered into by and between Intrinsic Capital Ltd, a company registered in the British Virgin Islands on 19 July 2018 (the “Company”), and you (the “User”), and govern the User’s access to and use of the services provided by the Company. These Terms take effect on the date of registration stated above (the “Effective Date”).",
  },
  privacy: {
    title: "Privacy Policy",
    subtitle: "Intrinsic Capital Ltd",
    sections: [
      {
        heading: "1. Introduction and Scope",
        paragraphs: [
          "This Privacy Policy (the “Policy”) explains how Intrinsic Capital Ltd, a company registered in the British Virgin Islands on 19 July 2018 (the “Company”, “we”, “us” or “our”), collects, uses, discloses, transfers, stores and otherwise processes personal information in connection with our website, platform, applications, communications and related services (together, the “Services”), and explains the rights and choices available to you in relation to that information.",
          "This Policy applies to personal information relating to individuals who visit our website, contact us, register for or use the Services, participate in our programmes, or otherwise interact with us. It does not apply to information relating to legal persons, to information processed by third parties that we do not control, or to information that has been aggregated or anonymised so that it no longer identifies an individual.",
          "Last Updated: January 2026. Original Effective Date: 19 July 2018. This Policy should be read together with our Terms of Service and any supplemental privacy notice provided at the point of collection. Capitalised terms that are not defined in this Policy have the meanings given to them in the Terms of Service.",
        ],
      },
      {
        heading: "2. Who We Are and Our Role",
        paragraphs: [
          "The Company determines the purposes and means of the processing described in this Policy and acts as the controller (or equivalent term under applicable law) in respect of that processing. Our registered address is Vistra Corporate Services Centre, Wickhams Cay II, Road Town, Tortola, VG 1110, British Virgin Islands, and our designated contact address for privacy matters is team@chicha.io.",
          "Where we process personal information on behalf of a business partner or institutional client in the course of delivering the Services, we may act as a processor; in that case the relevant partner is responsible for the lawfulness of the underlying processing, and its own privacy notice will apply to that processing. Where you interact with a third-party provider through the Services, that provider’s privacy notice governs its own processing activities.",
        ],
      },
      {
        heading: "3. Information We Collect",
        paragraphs: [
          "3.1 Information you provide to us.  This includes: identity and contact information such as name, date of birth, nationality, email address, telephone number and postal address; verification and compliance information such as government-issued identification documents, proof of address, corporate documents, beneficial ownership information and screening responses; commercial and relationship information such as the entity you represent, your role, correspondence and instructions; and preference information such as language and communication choices.",
          "3.2 Information generated when you use the Services.  This includes transaction and activity information such as services requested, instructions given, dates and times of interactions, records of communications with us and support requests; and technical information such as IP address, device identifiers, browser and operating system details, approximate location derived from IP address, access times, pages and features used, referring URLs and error logs.",
          "3.3 Information collected through cookies and similar technologies.  As described in Clause 7, we use cookies, pixels, local storage and similar technologies that collect information about your browsing activity and preferences on the Services.",
          "3.4 Information received from third parties.  This includes information from identity verification and screening providers, payment and financial institutions, fraud prevention and risk service providers, publicly available registers and directories, business partners and referral sources, and professional advisers, in each case where we have a lawful basis to collect and use it.",
          "3.5 Sensitive information.  Certain information we collect in connection with verification and compliance obligations may be treated as sensitive or special category information under applicable law, including identity documents, politically exposed person status and adverse media or sanctions screening results. We collect such information only where necessary for the purposes described in Clause 4, only to the extent permitted by applicable law, and apply additional safeguards to its handling.",
          "We do not require you to provide information that is not necessary for the purposes described in this Policy. Where you decline to provide information that is required by law or necessary to deliver the Services, we may be unable to open, maintain or continue your relationship with us, and may be required to suspend or terminate access to the Services.",
          "Please do not send us information about other individuals unless you have the authority to do so and have provided them with this Policy.",
        ],
      },
      {
        heading: "4. How We Use Personal Information",
        paragraphs: [
          "We use personal information only for purposes that are compatible with the context in which the information was collected. The principal purposes, the categories of information involved and the corresponding lawful bases are summarised in Table 1.",
        ],
        tables: [
          {
            caption: "Table 1. Processing purposes, information involved and lawful bases",
            headers: ["Purpose", "Information involved", "Lawful basis"],
            rows: [
              [
                "Providing, operating and administering the Services, including onboarding, account administration and responding to requests",
                "Identity, contact, commercial and technical information",
                "Performance of a contract; legitimate interests",
              ],
              [
                "Conducting identity verification, due diligence and compliance screening",
                "Identity, verification, compliance and screening information",
                "Legal obligation; legitimate interests",
              ],
              [
                "Detecting, investigating and preventing fraud, misuse, security incidents and prohibited activity",
                "Identity, transaction, technical and device information",
                "Legitimate interests; legal obligation",
              ],
              [
                "Communicating service notices, updates and administrative messages",
                "Contact and usage information",
                "Performance of a contract; legal obligation",
              ],
              [
                "Improving and developing the Services, including analytics and product design",
                "Technical, usage and aggregated information",
                "Legitimate interests",
              ],
              [
                "Establishing, exercising or defending legal claims and responding to lawful requests from authorities",
                "All relevant categories",
                "Legal obligation; legitimate interests",
              ],
              [
                "Sending marketing communications and managing preferences",
                "Contact, preference and usage information",
                "Consent; legitimate interests (subject to applicable law)",
              ],
              [
                "Maintaining records and meeting accounting, audit and reporting requirements",
                "Commercial, transaction and verification information",
                "Legal obligation",
              ],
            ],
          },
        ],
        afterItems: [
          "We do not sell personal information. We do not use personal information for automated decision-making that produces legal or similarly significant effects without appropriate safeguards, as further described in Clause 13.",
        ],
      },
      {
        heading: "5. Lawful Bases for Processing",
        paragraphs: [
          "Where required by applicable law, we process personal information only where at least one lawful basis applies: (a) performance of a contract with you, or steps taken at your request before entering into a contract; (b) compliance with a legal or regulatory obligation to which we are subject, including verification, record-keeping and reporting requirements; (c) our legitimate interests in operating, protecting and improving the Services, where those interests are not overridden by your rights and interests; (d) your consent, where we have requested it; and (e) where necessary for the establishment, exercise or defence of legal claims.",
          "Where we rely on legitimate interests, we carry out an assessment to ensure that our interests are not overridden by the impact on you, taking into account the nature of the information, the context of the processing and your reasonable expectations. You may object to processing based on legitimate interests as described in Clause 11. Where processing is based on consent, you may withdraw that consent at any time without affecting the lawfulness of processing carried out before withdrawal.",
        ],
      },
      {
        heading: "6. How We Share Personal Information",
        paragraphs: [
          "We disclose personal information only where necessary for the purposes described in this Policy and only to recipients that are subject to appropriate confidentiality and data protection obligations. The categories of recipients are set out below.",
          "6.1 Service providers.  Vendors that provide hosting, infrastructure, communications, analytics, customer support, document management and compliance tooling on our behalf, under written arrangements that limit their processing to our documented instructions.",
          "6.2 Identity verification, screening and fraud prevention providers.  Providers engaged to verify identity, conduct sanctions and adverse media screening and assess transaction risk, where necessary for onboarding, monitoring and compliance purposes.",
          "6.3 Financial institutions, payment partners and counterparties.  Banks, payment service providers and counterparties involved in the transactions or arrangements you have requested or authorised, to the extent necessary to give effect to them.",
          "6.4 Professional advisers.  Legal, accounting, tax, audit and insurance advisers, where reasonably necessary for the conduct of our business and subject to professional confidentiality obligations.",
          "6.5 Authorities and third parties with legal rights.  Competent courts, regulators, law enforcement, tax authorities and other public bodies where required by law, regulation, court order or a valid regulatory request, or where necessary to establish, exercise or defend legal claims.",
          "6.6 Transaction participants.  A successor, acquirer or counterparty in connection with a merger, acquisition, restructuring, financing or transfer of assets, subject to equivalent confidentiality protections and, where required, further notice to you.",
          "6.7 With your direction.  Any other recipient that you instruct or authorise us to share information with, or where you have given your consent.",
          "We do not disclose personal information to third parties for their own marketing purposes. Where we engage a service provider that processes information on our behalf, we require it to implement appropriate technical and organisational measures, to assist us in responding to your requests, and to notify us without undue delay upon becoming aware of a breach.",
        ],
      },
      {
        heading: "7. Cookies and Similar Technologies",
        paragraphs: [
          "We use cookies and similar technologies to operate and secure the Services, remember your preferences, measure the effectiveness of our communications and understand how the Services are used. The categories we use are described below.",
          "7.1 Strictly necessary cookies.  Required for the operation and security of the Services, including authentication, session management, fraud prevention and load balancing. These cannot be disabled without affecting the availability of the Services.",
          "7.2 Functional cookies.  Remember your settings and preferences, such as language and display options, to provide a more consistent experience.",
          "7.3 Analytics cookies.  Collect aggregated information about how visitors use the Services, such as pages visited, time spent and errors encountered, to help us improve performance and usability.",
          "7.4 Marketing cookies.  Where permitted and, where required, with your consent, help us measure the effectiveness of our communications and limit the repetition of messages.",
          "You can control or delete cookies through your browser or device settings. Blocking certain cookies may affect the functionality of the Services. Where required by applicable law, we will request your consent before placing non-essential cookies and provide a means to withdraw that consent. We honour browser-based opt-out signals where we are required to do so by applicable law.",
        ],
      },
      {
        heading: "8. International Transfers",
        paragraphs: [
          "We may store and process personal information in jurisdictions other than the jurisdiction in which it was collected, including where our service providers are located. Where we transfer personal information across borders, we take steps designed to ensure that the information continues to receive an adequate level of protection, which may include transferring to jurisdictions recognised as providing adequate protection, entering into appropriate contractual safeguards with recipients, and limiting transfers to what is necessary for the purposes described in this Policy.",
          "Where required by applicable law, we will provide further information about the safeguards applied to a particular transfer upon request submitted to team@chicha.io.",
        ],
      },
      {
        heading: "9. How Long We Keep Personal Information",
        paragraphs: [
          "We retain personal information only for as long as necessary for the purposes for which it was collected, taking into account the nature and sensitivity of the information, the duration of our relationship with you, the risk of harm from unauthorised use or disclosure, and applicable legal, regulatory, accounting and reporting requirements. Retention approaches by category are summarised in Table 2.",
        ],
        tables: [
          {
            caption: "Table 2. Retention by category of information",
            headers: ["Category", "Retention approach"],
            rows: [
              [
                "Onboarding, verification and compliance records",
                "Retained for the duration of the relationship and thereafter for the period required by applicable record-keeping and screening rules, after which they are deleted or archived under restricted access",
              ],
              [
                "Transaction and service records",
                "Retained for the duration of the relationship and for the period necessary to meet accounting, audit and reporting requirements and to resolve disputes",
              ],
              [
                "Correspondence and support records",
                "Retained for as long as needed to handle the matter and to maintain a record of our dealings, then deleted or anonymised",
              ],
              [
                "Technical logs and security records",
                "Retained for a limited period sufficient to detect, investigate and respond to security incidents and misuse",
              ],
              [
                "Marketing preferences and consents",
                "Retained until you withdraw consent or object, plus a short period to give effect to your request",
              ],
              [
                "Records relevant to legal claims",
                "Retained for the period during which a claim may be brought or defended",
              ],
            ],
          },
        ],
        afterItems: [
          "When information is no longer required, we delete or anonymise it. Where deletion is not immediately practicable—for example, because information is held in backup archives—we isolate and restrict access to it and delete it once the applicable retention period expires, or upon the next scheduled purge cycle.",
        ],
      },
      {
        heading: "10. How We Protect Personal Information",
        paragraphs: [
          "We implement appropriate technical and organisational measures designed to protect personal information against accidental or unlawful destruction, loss, alteration, unauthorised disclosure or access. These measures include access controls and role-based permissions, encryption in transit and, where appropriate, at rest, logging and monitoring of system access, vendor due diligence and contractual security obligations, staff confidentiality undertakings, and periodic review of our security arrangements.",
          "No method of transmission over the internet or method of electronic storage is completely secure, and we cannot guarantee absolute security. You are responsible for protecting any credentials you use to access the Services and for notifying us promptly at team@chicha.io if you suspect unauthorised access. If a personal data breach occurs that is likely to result in a risk to your rights and freedoms, we will notify you and any competent authority within the time and in the manner required by applicable law.",
        ],
      },
      {
        heading: "11. Your Rights",
        paragraphs: [
          "Subject to applicable law and to the exemptions and limitations it provides, you may have the right to:",
          "11.1 be informed about how your personal information is processed and to request access to the information we hold about you, together with information about its processing;",
          "11.2 request correction of information that is inaccurate or incomplete;",
          "11.3 request erasure of your information where there is no continuing lawful basis for its retention;",
          "11.4 request restriction of processing, for example while a correction request is pending or where you contest the lawfulness of processing;",
          "11.5 object to processing based on our legitimate interests or to processing for direct marketing purposes, in which case we will stop processing for those purposes unless we can demonstrate compelling legitimate grounds;",
          "11.6 receive information you provided to us in a structured, commonly used and machine-readable format, or request that it be transmitted to another provider where technically feasible;",
          "11.7 withdraw consent at any time where processing is based on consent; and",
          "11.8 lodge a complaint with the competent supervisory authority in your jurisdiction.",
          "To exercise any of these rights, submit a request to team@chicha.io, specifying the right you wish to exercise and the information concerned. We may ask for information to verify your identity before acting on a request, to protect the information from unauthorised access. We will respond within the period required by applicable law, and will explain any limitation that applies, together with the reason for it, where we are unable to comply in full. Exercising these rights is free of charge, save where applicable law permits us to charge a reasonable fee for manifestly unfounded or excessive requests.",
        ],
      },
      {
        heading: "12. Marketing Choices",
        paragraphs: [
          "Where we send marketing communications, we do so in accordance with applicable law and, where required, on the basis of your consent or our legitimate interests subject to your right to object. You may opt out of marketing communications at any time by using the unsubscribe mechanism in the relevant message or by contacting us at team@chicha.io. Opting out of marketing does not affect service, administrative or legally required communications, which we may continue to send.",
        ],
      },
      {
        heading: "13. Automated Decision-Making and Profiling",
        paragraphs: [
          "We may use automated tools to support risk assessment, fraud detection and compliance screening, including scoring and matching against screening lists. Where such processing produces a decision that significantly affects you and is based solely on automated processing, we will implement safeguards as required by applicable law, which may include providing information about the logic involved, enabling you to express your view, and providing for human review on request. Requests for human review may be submitted to team@chicha.io.",
          "We do not use personal information for automated decision-making that produces legal or similarly significant effects without appropriate safeguards, and we do not sell personal information or use it for cross-context behavioural advertising where prohibited by applicable law.",
        ],
      },
      {
        heading: "14. Children",
        paragraphs: [
          "The Services are not directed to, and are not intended for use by, individuals under the age of eighteen (18). We do not knowingly collect personal information from children. If we become aware that we have collected such information, we will take reasonable steps to delete it promptly. If you believe that a child has provided information to us, please contact team@chicha.io.",
        ],
      },
      {
        heading: "15. Third-Party Services and Links",
        paragraphs: [
          "The Services may contain links to, or integrate with, websites, applications and services operated by third parties. This Policy does not apply to those third-party services, and we are not responsible for their privacy practices, security or content. We encourage you to review the privacy notices of any third-party services you use, particularly where those services collect information directly from you.",
        ],
      },
      {
        heading: "16. Changes to This Policy",
        paragraphs: [
          "We may update this Policy from time to time to reflect changes in our practices, the Services or applicable law. The revised Policy will be published on our website with a revised “Last Updated” date. Where changes are material, we will provide additional notice in accordance with Clause 10 of our Terms of Service or by other appropriate means before the changes take effect. Continued use of the Services after the effective date of a revised Policy constitutes acceptance of that revision to the extent permitted by applicable law.",
        ],
      },
      {
        heading: "17. Contact Us",
        paragraphs: [
          "Questions, requests and complaints regarding this Policy or our handling of personal information should be directed to the contact details below. We will acknowledge receipt and handle the matter in accordance with our internal procedures and applicable law.",
          "Company: Intrinsic Capital Ltd",
          "Registered Address: Vistra Corporate Services Centre, Wickhams Cay II, Road Town, Tortola, VG 1110, British Virgin Islands",
          "Contact Email: team@chicha.io",
          "Company Registration Date: 19 July 2018",
          "Policy Last Updated: January 2026",
          "For and on behalf of",
          "Intrinsic Capital Ltd",
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
