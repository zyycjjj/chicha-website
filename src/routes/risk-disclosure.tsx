import { createFileRoute } from "@tanstack/react-router";

import { LegalPage } from "@/components/legal-page";
import { legalDocuments } from "@/content/legal";

export const Route = createFileRoute("/risk-disclosure")({
  head: () => ({ meta: [{ title: "Risk Disclosure | ChiCha" }] }),
  component: () => <LegalPage document={legalDocuments.risk} />,
});
