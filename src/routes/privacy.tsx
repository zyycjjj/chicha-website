import { createFileRoute } from "@tanstack/react-router";

import { LegalPage } from "@/components/legal-page";
import { legalDocuments } from "@/content/legal";

export const Route = createFileRoute("/privacy")({
  head: () => ({ meta: [{ title: "Privacy Policy | ChiCha" }] }),
  component: () => <LegalPage document={legalDocuments.privacy} />,
});
