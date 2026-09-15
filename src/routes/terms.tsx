import { createFileRoute } from "@tanstack/react-router";

import { LegalPage } from "@/components/legal-page";
import { legalDocuments } from "@/content/legal";

export const Route = createFileRoute("/terms")({
  head: () => ({ meta: [{ title: "Terms of Service | ChiCha" }] }),
  component: () => <LegalPage document={legalDocuments.terms} />,
});
