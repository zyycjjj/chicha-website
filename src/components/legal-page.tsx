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
        {document.subtitle && (
          <p className="mt-4 text-lg text-muted-foreground">{document.subtitle}</p>
        )}
        {document.updated && (
          <p className="mt-4 text-sm text-muted-foreground">{document.updated}</p>
        )}
        {document.introduction && (
          <p className="mt-8 text-lg leading-8 text-muted-foreground">{document.introduction}</p>
        )}
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
              {section.tables?.map((table) => (
                <div
                  key={table.caption}
                  className="mt-6 overflow-x-auto rounded-lg border border-border"
                >
                  <table className="w-full min-w-[600px] border-collapse text-left text-sm leading-6 text-muted-foreground">
                    <caption className="p-4 text-left font-medium text-foreground">
                      {table.caption}
                    </caption>
                    <thead className="bg-card">
                      <tr>
                        {table.headers.map((header) => (
                          <th
                            key={header}
                            scope="col"
                            className="border-t border-border p-4 align-top font-semibold text-foreground"
                          >
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {table.rows.map((row) => (
                        <tr key={row[0]}>
                          {row.map((cell, index) => (
                            <td key={index} className="border-t border-border p-4 align-top">
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ))}
              {section.afterItems && (
                <div className="mt-4 space-y-4 text-base leading-7 text-muted-foreground">
                  {section.afterItems.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              )}
            </section>
          ))}
        </div>
      </article>
    </main>
  );
}
