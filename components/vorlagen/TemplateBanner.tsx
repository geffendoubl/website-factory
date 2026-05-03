"use client";

import { useState } from "react";
import Link from "next/link";

export function TemplateBanner({ industry }: { industry: string }) {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="sticky top-0 z-50 bg-canvas border-b border-border shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center gap-4">
        <div className="flex-1 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
          <span className="text-ink-muted text-xs font-medium">
            Beispiel-Website ·{" "}
            <span className="text-ink font-semibold">{industry}</span>
          </span>
          <span className="hidden sm:inline text-border">·</span>
          <span className="text-ink-soft text-xs">
            So könnte Ihre Website aussehen — erstellt von Geffen FlexCo.
          </span>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <Link
            href="/#kontakt"
            className="px-4 py-2 rounded-full bg-ink text-canvas text-xs font-semibold hover:opacity-80 transition-opacity whitespace-nowrap"
          >
            Jetzt anfragen
          </Link>
          <button
            onClick={() => setDismissed(true)}
            className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-canvas-warm transition-colors text-ink-muted"
            aria-label="Schließen"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
