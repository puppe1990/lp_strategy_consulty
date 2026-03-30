import type { Metadata } from "next";
import Link from "next/link";

import { metadata as buildVsBuyMetadata, summary as buildVsBuySummary } from "./build-vs-buy-operacoes-criticas/page.mdx";
import { metadata as fdeMetadata, summary as fdeSummary } from "./forward-deployed-engineering/page.mdx";
import { metadata as legacyMetadata, summary as legacySummary } from "./legado-sem-replatform/page.mdx";
import { metadata as revenueMetadata, summary as revenueSummary } from "./revenue-architecture/page.mdx";
import { metadata as slaMetadata, summary as slaSummary } from "./sla-alertas-operacao/page.mdx";
import { metadata as stackMetadata, summary as stackSummary } from "./stack-integrado/page.mdx";

type BlogPost = {
  slug: string;
  title: string;
  summary: string;
  date: string;
  readingTime: string;
  tags: string[];
};

const blogPosts: BlogPost[] = [
  {
    slug: "forward-deployed-engineering",
    title:
      (fdeMetadata.title as string) ?? "Forward deployed engineering para operações críticas",
    summary:
      fdeSummary ??
      (fdeMetadata.description as string) ??
      "Quando um time embarcado faz mais sentido do que discovery longo ou software genérico.",
    date: (fdeMetadata.date as string) ?? "2026-03-20",
    readingTime: (fdeMetadata.readingTime as string) ?? "7 min",
    tags: (fdeMetadata.tags as string[]) ?? ["FDE", "Operações críticas"],
  },
  {
    slug: "legado-sem-replatform",
    title:
      (legacyMetadata.title as string) ?? "Como destravar legado sem replatform",
    summary:
      legacySummary ??
      (legacyMetadata.description as string) ??
      "Playbook para reduzir reconciliação manual entre ERP, planilhas e APIs sem prometer troca total de stack.",
    date: (legacyMetadata.date as string) ?? "2026-03-18",
    readingTime: (legacyMetadata.readingTime as string) ?? "8 min",
    tags: (legacyMetadata.tags as string[]) ?? ["Legado", "Integrações"],
  },
  {
    slug: "sla-alertas-operacao",
    title:
      (slaMetadata.title as string) ?? "Como detectar risco operacional antes do SLA quebrar",
    summary:
      slaSummary ??
      (slaMetadata.description as string) ??
      "Estrutura de alertas, regras e governança para agir cedo em operações complexas.",
    date: (slaMetadata.date as string) ?? "2026-03-16",
    readingTime: (slaMetadata.readingTime as string) ?? "7 min",
    tags: (slaMetadata.tags as string[]) ?? ["SLA", "Monitoramento"],
  },
  {
    slug: "build-vs-buy-operacoes-criticas",
    title:
      (buildVsBuyMetadata.title as string) ?? "Build vs buy em operações críticas",
    summary:
      buildVsBuySummary ??
      (buildVsBuyMetadata.description as string) ??
      "Como decidir entre software padrão, intervenção embarcada e produto interno quando o problema é específico demais.",
    date: (buildVsBuyMetadata.date as string) ?? "2026-03-14",
    readingTime: (buildVsBuyMetadata.readingTime as string) ?? "6 min",
    tags: (buildVsBuyMetadata.tags as string[]) ?? ["Build vs Buy", "Decisão executiva"],
  },
  {
    slug: "revenue-architecture",
    title: (revenueMetadata.title as string) ?? "Blueprint de Revenue Architecture",
    summary:
      revenueSummary ??
      (revenueMetadata.description as string) ??
      "Como desenhamos uma fábrica de receita conectando estratégia, dados e execução.",
    date: (revenueMetadata.date as string) ?? "2025-01-10",
    readingTime: (revenueMetadata.readingTime as string) ?? "7 min",
    tags: (revenueMetadata.tags as string[]) ?? ["Revenue", "Arquitetura"],
  },
  {
    slug: "stack-integrado",
    title: (stackMetadata.title as string) ?? "Stack integrado em 60 dias",
    summary:
      stackSummary ??
      (stackMetadata.description as string) ??
      "Playbook para sincronizar ERP, e-commerce, CRM e mídia em poucas semanas.",
    date: (stackMetadata.date as string) ?? "2025-01-05",
    readingTime: (stackMetadata.readingTime as string) ?? "6 min",
    tags: (stackMetadata.tags as string[]) ?? ["Operações", "Stack"],
  },
].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export const metadata: Metadata = {
  title: "Blog · Mosaic Harbor Ventures",
  description:
    "Playbooks sobre legado, integrações, operações críticas e intervenções curtas para times que precisam destravar execução no ambiente real.",
};

const formatDate = (date: string) =>
  new Intl.DateTimeFormat("pt-BR", { day: "2-digit", month: "short", year: "numeric" }).format(new Date(date));

export default function BlogPage() {
  return (
    <section className="space-y-10">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-inner shadow-black/20">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-brand-200">Insights práticos</p>
        <h2 className="mt-4 text-4xl font-semibold text-white">Conteúdos para destravar operações críticas</h2>
        <p className="mt-4 text-lg text-slate-300">
          Artigos em formato MDX para decisores de operações, tecnologia e transformação que precisam agir sobre
          gargalos reais de legado, dados, integração e SLA.
        </p>
      </div>

      <div className="space-y-6">
        {blogPosts.map((post) => (
          <article
            key={post.slug}
            className="group rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-brand-400/60 hover:bg-white/10"
          >
            <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.3em] text-slate-400">
              <span>{formatDate(post.date)}</span>
              <span className="h-2 w-2 rounded-full bg-brand-400/80" />
              <span>{post.readingTime}</span>
            </div>
            <div className="mt-4 flex flex-col gap-4 text-slate-100 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-2xl font-semibold text-white">{post.title}</h3>
                <p className="mt-3 text-base text-slate-300">{post.summary}</p>
              </div>
              <div className="flex flex-wrap gap-2 md:justify-end">
                {post.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <Link
              href={`/blog/${post.slug}`}
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-200 transition group-hover:text-brand-100"
            >
              Ler artigo completo
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m9 5 7 7-7 7" />
              </svg>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
