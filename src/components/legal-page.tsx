import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

import type { LegalDocument } from "@/content/legal";

export function LegalPage({ document }: { document: LegalDocument }) {
  return (
    <main className="min-h-screen bg-background px-5 py-10 text-foreground sm:px-8 sm:py-16">
      <article className="mx-auto max-w-3xl">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" /> Back to ChiCha
        </Link>
        <p className="mt-12 text-xs font-semibold uppercase text-cyan">Legal</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">{document.title}</h1>
        <p className="mt-4 text-sm text-muted-foreground">{document.updated}</p>
        <p className="mt-8 text-lg leading-8 text-muted-foreground">{document.introduction}</p>
        <div className="mt-12 space-y-10">
          {document.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-xl font-semibold">{section.heading}</h2>
              <div className="mt-4 space-y-4 text-base leading-7 text-muted-foreground">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              {section.items && (
                <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-7 text-muted-foreground">
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </article>
    </main>
  );
}
