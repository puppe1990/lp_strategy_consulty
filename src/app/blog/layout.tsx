import Link from "next/link";

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <div className="noise-overlay" aria-hidden="true" />
      <div className="background-grid" aria-hidden="true" />
      <div className="blur-blob brand -left-44 -top-48" aria-hidden="true" />
      <div className="blur-blob violet right-[-200px] top-1/3" aria-hidden="true" />
      <div className="relative z-10">
        <header className="mx-auto max-w-5xl px-6 pb-6 pt-12">
          <div className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 px-6 py-4 text-sm shadow-lg shadow-black/30 backdrop-blur md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-[0.4em] text-slate-400">Conteúdo</p>
              <p className="text-2xl font-semibold text-white">Blog Mosaic Harbor Ventures</p>
            </div>
            <div className="flex flex-wrap gap-3 text-slate-300">
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 font-semibold text-white transition hover:border-white/40 hover:bg-white/10"
              >
                ← Voltar para a landing
              </Link>
              <a
                href="https://calendar.app.google/KSjQQGr8uZmsFTwW6"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-4 py-2 font-semibold text-white shadow-lg shadow-brand-500/40 transition hover:bg-brand-400"
              >
                Agendar diagnóstico
              </a>
            </div>
          </div>
        </header>
        <main className="mx-auto max-w-4xl px-6 pb-20">{children}</main>
      </div>
    </div>
  );
}
