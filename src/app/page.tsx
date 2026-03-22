"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Método", href: "#modelo" },
  { label: "Oferta", href: "#pilares" },
  { label: "Projetos", href: "#cases" },
  { label: "Diagnóstico", href: "#scorecard" },
  { label: "FAQ", href: "#faq" },
  { label: "Blog", href: "/blog" },
];

const heroStats = [
  { label: "Projeto inicial", value: "a partir de R$ 50k" },
  { label: "Primeiros ganhos", value: "em até 60 dias" },
  { label: "Perfil ideal", value: "R$ 300k+/mês" },
];

const blueprintSteps = [
  "Mapeamos gargalos técnicos, operacionais e comerciais que travam crescimento.",
  "Implementamos integrações, automações e dashboards que resolvem o gargalo principal.",
  "Estabilizamos a operação e deixamos uma rotina clara de acompanhamento e melhoria.",
];

const differentiators = [
  {
    title: "Diagnóstico com direção",
    description:
      "Você não compra horas soltas. Compra um plano priorizado por impacto, risco e prazo.",
    chips: ["Roadmap de 90 dias", "Metas por KPI"],
  },
  {
    title: "Execução sem repasse",
    description:
      "Estratégia, tecnologia e operação ficam no mesmo time para evitar ruído e atraso.",
    chips: ["Squad único", "Implementação end-to-end"],
  },
  {
    title: "TI ligada ao negócio",
    description:
      "Cada entrega precisa mexer em receita, margem, produtividade ou previsibilidade.",
    chips: ["Ownership real", "Métrica de impacto"],
  },
];

const revenuePrinciples = [
  "Tecnologia só entra na prioridade se resolver gargalo operacional ou comercial visível.",
  "O projeto começa pelo ponto de maior atrito, não por backlog genérico ou redesign infinito.",
  "Estratégia, implementação e leitura de dados acontecem no mesmo ciclo para reduzir time-to-value.",
];

const factoryMoves = [
  {
    title: "Diagnosticar",
    description:
      "Entendemos onde a operação trava: integrações, CRM, funil, dados ou backlog crítico.",
    detail: "Semana 1-2",
  },
  {
    title: "Implementar",
    description:
      "Atacamos o gargalo prioritário com entregas semanais, dono claro e escopo enxuto.",
    detail: "Semanas 3-6",
  },
  {
    title: "Operar",
    description:
      "Deixamos dashboards, rituais e próximos passos para a operação não voltar ao caos.",
    detail: "Semana 7+",
  },
];

const urgentPains = [
  "Integrações entre e-commerce, ERP, logística e CRM quebram semanalmente.",
  "Leads, pedidos e dados se perdem porque o funil comercial não conversa com a operação.",
  "O time decide no escuro por falta de dashboards confiáveis de margem, estoque e performance.",
  "O backlog técnico fica parado porque ninguém assume a ponta entre estratégia e implementação.",
  "A diretoria cobra impacto em receita, margem e produtividade nos próximos 90 dias.",
];

const kpis = [
  { value: "-30%", label: "menos tempo conciliando dados" },
  { value: "+35%", label: "mais receita com operação ajustada" },
  { value: "-20%", label: "menos desperdício em mídia e funil" },
  { value: "+100%", label: "mais visibilidade do que importa" },
];

const pillars = [
  {
    period: "Semana 1-2",
    title: "Diagnóstico executivo",
    bullets: [
      "Levantamento do stack, processos e gargalos que mais travam crescimento.",
      "Definição do problema prioritário e da meta que precisa mexer primeiro.",
      "Plano de 90 dias com escopo, risco, prazo e indicador de sucesso.",
    ],
    output: "Output: diagnóstico + roadmap priorizado por impacto.",
  },
  {
    period: "Semanas 3-6",
    title: "Implementação crítica",
    bullets: [
      "Integrações entre plataformas, ERP, CRM e ferramentas comerciais.",
      "Automações, páginas e fluxos que eliminam gargalos operacionais ou de conversão.",
      "Dashboards com visão de receita, margem, estoque e produtividade.",
    ],
    output: "Output: operação menos manual, stack conectado e dado confiável.",
  },
  {
    period: "Semana 8+",
    title: "Estabilização e escala",
    bullets: [
      "Acompanhamento dos KPIs críticos e ajustes com base em dado real.",
      "Governança com decisores para manter prioridade, ritmo e accountability.",
      "Documentação, playbooks e próximos passos para o time interno.",
    ],
    output: "Output: operação estável e retainer opcional de otimização.",
  },
];

// Casos exibidos na seção "Prova social". Cada item segue o formato
// título → impacto em uma linha → instrução para evoluir a prova.
const cases = [
  {
    title: "Operação comercial travada",
    description:
      "Integração entre CRM, canais de aquisição e atendimento para reduzir perda de leads e retrabalho.",
    footnote: "Projeto típico para empresas vendendo bem, mas operando no improviso.",
  },
  {
    title: "E-commerce crescendo sem controle",
    description:
      "Dashboards, ERP e automações para dar visibilidade de margem, estoque e performance em tempo real.",
    footnote: "Escopo comum quando a empresa cresceu mais rápido que a operação.",
  },
  {
    title: "Backlog crítico sem dono",
    description:
      "Squad enxuto para tirar do papel integrações, MVPs e melhorias que o time interno nunca consegue priorizar.",
    footnote: "Use cases reais aqui assim que você tiver números auditados.",
  },
];

const stakeholders = [
  {
    title: "Decisor",
    role: "CEO, fundador ou diretor de e-commerce",
    description: "Quer resultado rápido sem contratar um time interno inteiro.",
  },
  {
    title: "Líder operacional",
    role: "Gerente de operações, growth ou comercial",
    description: "Sente o caos das integrações, do retrabalho e da falta de visibilidade.",
  },
  {
    title: "Áreas impactadas",
    role: "Marketing, logística, atendimento e financeiro",
    description: "Precisam de processo, dados e automação para operar com confiança.",
  },
];

const scorecardItems = [
  {
    title: "Receita ≥ R$300k/mês",
    description: "Faturamento digital médio dos últimos 3 meses.",
    weight: 5,
  },
  {
    title: "2+ integrações quebrando",
    description: "ERP, e-commerce ou CRM exigindo retrabalho semanal.",
    weight: 4,
  },
  {
    title: "Sem squad tech interno",
    description: "Dependem de agência ou freelancers para integrações.",
    weight: 3,
  },
  {
    title: "Urgência de ≤90 dias",
    description: "Meta agressiva apoiada em orçamento aprovado.",
    weight: 4,
  },
  {
    title: "Envolvimento C-Level",
    description: "Decisor participa da reunião de diagnóstico.",
    weight: 4,
  },
];

const faqItems = [
  {
    question:
      "Quais metas de faturamento/margem precisam bater nos próximos 90 dias?",
    answer:
      "Essa resposta mostra se existe urgência real, orçamento e clareza sobre o tamanho do problema.",
  },
  {
    question:
      "Quais sistemas não conversam e quanto tempo o time perde conciliando dados?",
    answer:
      "Aqui aparece o custo invisível: retrabalho, erro operacional, atraso comercial e decisão no escuro.",
  },
  {
    question: "Que automações ou produtos já tentaram e por que não escalaram?",
    answer:
      "Você descobre o que já falhou, o que foi mal especificado e onde o projeto precisa entrar diferente.",
  },
  {
    question: "Qual KPI precisa mexer primeiro (ROAS, estoque, LTV, NPS)?",
    answer:
      "Isso evita proposta genérica e obriga o projeto a nascer com prioridade de negócio clara.",
  },
  {
    question:
      "Quem decide sobre investimentos deste porte e qual o processo de aprovação?",
    answer:
      "Sem patrocinador real, o projeto vira conversa longa e morre antes da decisão.",
  },
  {
    question: "O que acontece se nada mudar nos próximos três meses?",
    answer:
      "A resposta explicita custo de inação e separa curiosidade de problema prioritário.",
  },
];

const verdictCopy = {
  perfect: "Fit alto para projeto imediato",
  good: "Bom potencial para diagnóstico",
  medium: "Há demanda, mas falta urgência ou escopo",
  low: "Ainda não parece prioridade",
};

const MAX_SCORE = 20;

const getVerdict = (score: number) => {
  if (score >= 18) return verdictCopy.perfect;
  if (score >= 16) return verdictCopy.good;
  if (score >= 10) return verdictCopy.medium;
  return verdictCopy.low;
};

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
};

function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  const alignment =
    align === "center" ? "mx-auto max-w-3xl text-center" : "text-left";
  return (
    <div className={`space-y-3 ${alignment}`}>
      <p className="text-xs font-semibold uppercase tracking-[0.4em] text-brand-300">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
      {description ? (
        <p className="text-lg text-slate-300">{description}</p>
      ) : null}
    </div>
  );
}

type IconProps = {
  className?: string;
};

function CalendarIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <rect x={3} y={5} width={18} height={16} rx={2.5} fill="none" />
      <path d="M3 11h18" />
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <path d="M8 15h3" />
      <path d="M13 15h3" />
      <path d="M8 19h3" />
      <path d="M13 19h3" />
    </svg>
  );
}

export default function Home() {
  const [scoreState, setScoreState] = useState<boolean[]>(() =>
    scorecardItems.map(() => false),
  );
  const [activeFaq, setActiveFaq] = useState<number>(0);

  const totalScore = scorecardItems.reduce(
    (sum, item, index) => sum + (scoreState[index] ? item.weight : 0),
    0,
  );
  const verdict = getVerdict(totalScore);
  const progressPercent = Math.min(
    100,
    Math.max(0, Math.round((totalScore / MAX_SCORE) * 100)),
  );
  const currentYear = new Date().getFullYear();

  const handleScoreToggle = (index: number) => {
    setScoreState((prev) => {
      const next = [...prev];
      next[index] = !next[index];
      return next;
    });
  };

  const handleFaqToggle = (index: number) => {
    setActiveFaq((prev) => (prev === index ? -1 : index));
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <div className="noise-overlay" aria-hidden="true" />
      <div className="background-grid" aria-hidden="true" />
      <div className="blur-blob brand -left-40 -top-48" aria-hidden="true" />
      <div className="blur-blob violet right-[-160px] top-1/3" aria-hidden="true" />
      <div className="relative z-10">
        <header className="mx-auto max-w-6xl px-6 pt-8">
          <nav className="flex flex-wrap items-center justify-between gap-4 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm shadow-lg shadow-black/30 backdrop-blur">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-500 text-lg font-semibold text-white shadow-lg shadow-brand-500/40">
                MH
              </span>
              <div>
                <p className="text-[11px] uppercase tracking-[0.4em] text-slate-400">
                  Consultoria híbrida
                </p>
                <p className="text-sm font-semibold text-white">Mosaic Harbor Ventures</p>
              </div>
            </div>
            <div className="hidden items-center gap-6 text-slate-300 md:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium transition hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <a
              href="#cta"
              className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 font-semibold text-white transition hover:bg-white/20"
            >
              Agendar diagnóstico
            </a>
          </nav>
        </header>

        <main className="mx-auto max-w-6xl space-y-24 px-6 pb-24 pt-12">
          <section className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-8">
              <span className="floating-pill primary">
                <span className="pulse-dot" />
                Para empresas que já vendem e travaram na operação
              </span>
              <div className="space-y-5">
                <p className="text-xs uppercase tracking-[0.4em] text-brand-200">
                  Consultoria de TI com foco em crescimento
                </p>
                <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
                  Sua operação não precisa crescer no improviso
                </h1>
                <p className="text-lg text-slate-300">
                  Assumimos o projeto do diagnóstico à implementação para corrigir integrações, automações, dashboards e gargalos técnicos que hoje freiam receita, margem e produtividade.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="#cta"
                  className="inline-flex items-center justify-center rounded-full bg-brand-500 px-8 py-3 text-base font-semibold text-white shadow-lg shadow-brand-500/50 transition hover:bg-brand-600"
                >
                  Pedir diagnóstico
                </a>
                <a
                  href="https://calendar.app.google/KSjQQGr8uZmsFTwW6"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-8 py-3 text-base font-semibold text-white transition hover:border-white/60 hover:bg-white/10"
                >
                  Ver agenda de 30 min
                  <CalendarIcon className="h-5 w-5" />
                </a>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {heroStats.map((stat) => (
                  <div key={stat.label} className="stat-card">
                    <p className="text-xs uppercase tracking-[0.4em] text-slate-400">
                      {stat.label}
                    </p>
                    <p className="mt-3 text-2xl font-semibold text-white">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[36px] border border-white/10 bg-gradient-to-br from-white/15 via-transparent to-slate-900/40 p-8 shadow-2xl shadow-brand-900/40">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-brand-200">
                Como o projeto funciona
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-white">
                Um plano enxuto para tirar a operação do gargalo
              </h3>
              <ul className="mt-6 space-y-4 text-base text-slate-200">
                {blueprintSteps.map((step, index) => (
                  <li className="flex items-start gap-3" key={step}>
                    <span className="badge">{index + 1}</span>
                    {step}
                  </li>
                ))}
              </ul>
              <div className="mt-8 rounded-2xl border border-white/10 bg-slate-950/80 p-6">
                <p className="text-sm uppercase tracking-[0.4em] text-slate-400">
                  Mensagem central
                </p>
                <p className="mt-2 text-lg font-semibold text-white">
                  "Você não precisa de mais fornecedor. Precisa de um time que entenda o problema, implemente a solução e responda pelo resultado."
                </p>
              </div>
            </div>
          </section>

          <div className="section-divider" aria-hidden="true" />

          <section id="modelo" className="space-y-10 rounded-[36px] border border-white/10 bg-white/5 p-8 sm:p-12">
            <SectionHeading
              eyebrow="Método"
              title="Tecnologia aplicada ao que trava o crescimento"
              description="A lógica é simples: primeiro identificamos o gargalo principal, depois implementamos o que resolve e por fim deixamos a operação rodando com visibilidade."
              align="left"
            />
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="space-y-5">
                <p className="text-slate-300">
                  Esse modelo evita o erro clássico de contratar estratégia sem execução ou desenvolvimento sem direção. O projeto nasce ligado ao P&L, ao stack atual e à urgência real do negócio.
                </p>
                <ul className="space-y-3 text-sm text-slate-300">
                  {revenuePrinciples.map((principle) => (
                    <li className="feature-item" key={principle}>
                      {principle}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid gap-4">
                {factoryMoves.map((move) => (
                  <div className="card" key={move.title}>
                    <p className="text-sm font-semibold text-brand-200">{move.title}</p>
                    <p className="mt-2 text-slate-100">{move.description}</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.3em] text-slate-500">
                      {move.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="rounded-[36px] border border-white/10 bg-white/5 p-8">
            <SectionHeading
              eyebrow="Por que funciona"
              title="Uma oferta pensada para empresas que não podem errar a prioridade"
              description="Você fala com um time que entende negócio, tecnologia e operação no mesmo nível de responsabilidade."
            />
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {differentiators.map((item) => (
                <div className="case-highlight h-full" key={item.title}>
                  <p className="text-sm font-semibold text-brand-200">{item.title}</p>
                  <p className="mt-3 text-base text-slate-200">{item.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-300">
                    {item.chips.map((chip) => (
                      <span
                        key={chip}
                        className="rounded-full border border-white/10 px-3 py-1"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-brand-500/30 to-slate-900 p-8 shadow-lg shadow-brand-900/40">
              <p className="text-sm font-semibold uppercase tracking-[0.4em] text-white/70">
                Quando a consultoria faz sentido
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-white">
                Entramos quando o negócio cresceu, mas a operação não acompanhou
              </h2>
              <ul className="mt-6 space-y-4 text-base text-slate-100">
                {urgentPains.map((pain) => (
                  <li className="feature-item" key={pain}>
                    {pain}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.4em] text-brand-300">
                Impactos que buscamos
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {kpis.map((kpi) => (
                  <div className="metric-card" key={kpi.label}>
                    <p className="text-3xl font-bold text-white">{kpi.value}</p>
                    <p className="text-sm uppercase tracking-wide text-slate-400">
                      {kpi.label}
                    </p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm text-slate-400">
                *Exemplos de impacto para orientar a conversa comercial. Troque por números reais assim que tiver cases auditados.
              </p>
            </div>
          </section>

          <section id="pilares">
            <SectionHeading
              eyebrow="Oferta"
              title="O que você compra no projeto inicial"
              description="Um sprint com começo, meio e fim para destravar o problema mais caro da operação."
            />
            <div className="mt-12 grid gap-8 lg:grid-cols-3">
              {pillars.map((pillar) => (
                <article className="pillar" key={pillar.title}>
                  <p className="text-sm font-semibold uppercase tracking-[0.4em] text-brand-200">
                    {pillar.period}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold text-white">{pillar.title}</h3>
                  <ul className="mt-4 space-y-3 text-sm text-slate-200">
                    {pillar.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                  <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-300">
                    {pillar.output}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="cases" className="rounded-[36px] border border-white/10 bg-white/5 p-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.4em] text-brand-300">
                  Tipos de projeto
                </p>
                <h2 className="mt-2 text-3xl font-semibold text-white">
                  Escopos que mais aparecem nas conversas com clientes
                </h2>
              </div>
              <a
                href="mailto:oi@mosaicharborventures.com?subject=Quero%20receber%20um%20escopo%20exemplo"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2 text-sm font-semibold text-white transition hover:border-white/60 hover:bg-white/10"
              >
                Receber escopo exemplo
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 12h16m0 0-4 4m4-4-4-4"
                  />
                </svg>
              </a>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {cases.map((item) => (
                <div className="case-highlight" key={item.title}>
                  <p className="text-sm font-semibold text-brand-200">{item.title}</p>
                  <p className="mt-2 text-lg text-white">{item.description}</p>
                  <p className="mt-4 text-xs uppercase tracking-wide text-slate-400">
                    {item.footnote}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section id="scorecard">
            <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
              <div>
                <SectionHeading
                  eyebrow="Diagnóstico rápido"
                  title="5 sinais de que o projeto precisa começar agora"
                  description="Marque os critérios e veja se já existe contexto para um sprint de TI orientado a resultado."
                  align="left"
                />
                <ul className="mt-6 space-y-4 text-sm text-slate-200">
                  <li>Faturamento digital consistente e metas agressivas para os próximos 90 dias.</li>
                  <li>Integrações críticas falhando ou demandando trabalho manual frequente.</li>
                  <li>Ausência de squad tech interno capaz de tocar automações end-to-end.</li>
                  <li>Board pressionando por impacto em margem, produtividade e crescimento.</li>
                  <li>Decisor principal disposto a participar do diagnóstico.</li>
                </ul>
              </div>
              <div className="rounded-[36px] border border-white/10 bg-white/5 p-8">
                <div className="flex flex-col items-center gap-6">
                  <div
                    className="score-progress"
                    style={{
                      background: `conic-gradient(var(--color-brand-500) ${progressPercent}%, rgba(15,23,42,0.6) ${progressPercent}% 100%)`,
                    }}
                  >
                    <div className="score-progress__value">
                      {totalScore}
                      <span className="block text-xs font-normal text-slate-400">
                        de {MAX_SCORE}
                      </span>
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-sm uppercase tracking-[0.4em] text-slate-400">
                      Diagnóstico em tempo real
                    </p>
                    <p className="mt-2 text-2xl font-semibold text-brand-200">
                      {verdict}
                    </p>
                    <p className="text-sm text-slate-400">
                      Acima de 16 pontos, o cenário já justifica um diagnóstico executivo.
                    </p>
                  </div>
                </div>
                <form className="mt-8 space-y-4">
                  {scorecardItems.map((item, index) => (
                    <label className="score-item" key={item.title}>
                      <input
                        type="checkbox"
                        aria-label={item.title}
                        checked={scoreState[index]}
                        onChange={() => handleScoreToggle(index)}
                      />
                      <div>
                        <p className="text-base font-semibold text-white">{item.title}</p>
                        <p className="text-sm text-slate-300">{item.description}</p>
                      </div>
                      <span className="text-xs font-semibold text-brand-200">
                        {item.weight} pts
                      </span>
                    </label>
                  ))}
                </form>
              </div>
            </div>
          </section>

          <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.4em] text-brand-300">
                Processo comercial
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-white">
                O que acontece depois do primeiro contato
              </h2>
              <ol className="mt-6 space-y-4 text-slate-200">
                <li className="feature-item">
                  Entendemos a meta, o gargalo principal e o custo de não resolver isso agora.
                </li>
                <li className="feature-item">
                  Mapeamos stack, processos, dependências e o nível de urgência do projeto.
                </li>
                <li className="feature-item">
                  Voltamos com um escopo enxuto, cronograma, investimento e critério de sucesso.
                </li>
                <li className="feature-item">
                  Se fizer sentido, começamos pelo problema que mais destrava resultado nos próximos 60 dias.
                </li>
              </ol>
            </div>
            <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-brand-500/20 to-slate-900 p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.4em] text-white/70">
                Com quem normalmente falamos
              </p>
              <div className="mt-4 space-y-4">
                {stakeholders.map((stakeholder) => (
                  <div className="rounded-2xl bg-white/5 p-4" key={stakeholder.title}>
                    <p className="text-sm font-semibold text-brand-100">
                      {stakeholder.title}
                    </p>
                    <p className="text-lg font-semibold text-white">
                      {stakeholder.role}
                    </p>
                    <p className="text-sm text-slate-300">
                      {stakeholder.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="faq" className="rounded-[36px] border border-white/10 bg-white/5 p-8">
            <SectionHeading
              eyebrow="FAQ"
              title="Perguntas que qualificam o projeto de verdade"
              description="Elas ajudam a separar curiosidade de prioridade e deixam a proposta mais forte."
            />
            <div className="mt-10 space-y-4" id="faq-accordion">
              {faqItems.map((item, index) => {
                const isActive = activeFaq === index;
                return (
                  <div className={`faq-item ${isActive ? "active" : ""}`} key={item.question}>
                    <button
                      type="button"
                      className="faq-trigger"
                      onClick={() => handleFaqToggle(index)}
                    >
                      {item.question}
                    </button>
                    <div className="faq-content">
                      <p>{item.answer}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          <section id="cta" className="px-0">
            <div className="cta-card text-center text-white">
              <div className="cta-ring" aria-hidden="true" />
              <p className="text-sm font-semibold uppercase tracking-[0.5em] text-white/70">
                Diagnóstico inicial
              </p>
              <h2 className="mt-4 text-4xl font-semibold">
                30 minutos para entender onde sua operação está vazando dinheiro
              </h2>
              <p className="mt-4 text-lg text-white/90">
                Se houver fit, você sai com direção, prioridade e um próximo passo claro. Se não houver, eu te digo isso sem enrolação.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href="mailto:oi@mosaicharborventures.com"
                  className="inline-flex w-full items-center justify-center rounded-full bg-white px-8 py-3 text-base font-semibold text-brand-700 shadow-lg shadow-brand-900/40 transition hover:-translate-y-0.5 hover:bg-slate-50 sm:w-auto"
                >
                  Quero conversar
                </a>
                <button
                  type="button"
                  className="inline-flex w-full items-center justify-center rounded-full border border-white/70 px-8 py-3 text-base font-semibold text-white transition hover:bg-white/10 sm:w-auto"
                >
                  Ver agenda disponível
                </button>
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t border-white/10 bg-slate-950/80 py-10">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-slate-400 md:flex-row">
            <p>
              © <span>{currentYear}</span> Mosaic Harbor Ventures · Todos os direitos reservados.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <a href="tel:+5511987654321" className="hover:text-white">
                +55 11 99559-7242
              </a>
              <a href="mailto:oi@mosaicharborventures.com" className="hover:text-white">
                oi@mosaicharborventures.com
              </a>
              <a href="#modelo" className="hover:text-white">
                Método
              </a>
            </div>
          </div>
        </footer>
      </div>
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        <a
          href="https://calendar.app.google/KSjQQGr8uZmsFTwW6"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-brand-500 px-4 py-2 text-sm font-semibold text-white shadow-xl shadow-brand-500/50 transition hover:-translate-y-0.5 hover:bg-brand-400"
        >
          <span className="rounded-full bg-white/20 p-1.5">
            <CalendarIcon className="h-4 w-4" />
          </span>
          Ver agenda
        </a>
        <a
          href="https://wa.me/5511995597242"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-white shadow-xl shadow-emerald-500/50 transition hover:-translate-y-0.5 hover:bg-emerald-400"
        >
          <span className="rounded-full bg-white/20 p-1.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2c-5.421 0-9.816 3.99-9.816 8.912 0 1.764.604 3.44 1.745 4.88L2 22l5.49-1.8c1.328.364 2.07.51 3.704.51 5.42 0 9.806-3.99 9.806-8.912C21.999 5.991 17.62 2 12 2Zm0 1.8c4.454 0 8.016 3.141 8.016 7.012 0 4.013-3.605 7.114-8.016 7.114-1.52 0-2.19-.182-3.468-.53l-.41-.112-3.18 1.042.84-2.743-.18-.224c-1.08-1.347-1.63-2.79-1.63-4.547 0-3.872 3.56-7.012 8.016-7.012Zm-3.38 4.25-.363.018c-.414.02-.855.218-1.017.745-.226.727-.474 2.228-.226 2.387.352.224.581.35.957.564.375.213.862.47 1.003.525.14.056.235.083.33-.083.095-.167.382-.557.482-.668.1-.111.2-.124.375-.07.176.056 1.118.49 1.31.58.193.09.327.134.375.212.05.079.05.45-.088.883-.139.433-.827.797-1.143.85-.315.055-.604.05-.969-.056-.365-.105-1.162-.36-1.654-.805-.493-.447-1.84-1.704-1.84-3.274 0-1.568.974-2.327 1.321-2.645.347-.318.764-.416.978-.416.215 0 .493.007.708.012.215.007.56-.09.874.334.315.423 1.105 1.663 1.205 1.788.1.125.166.276.026.498-.139.221-.207.36-.414.55-.206.19-.441.525-.63.594-.19.07-.284.062-.482-.07-.198-.132-.837-.394-1.363-.65-.526-.254-.478-.43-.367-.606.111-.175.321-.457.453-.602.132-.146.167-.219.25-.361.083-.142.042-.264.0-.37-.042-.106-.367-.91-.525-1.213-.158-.303-.329-.312-.485-.313Z" />
            </svg>
          </span>
          Fale no WhatsApp
        </a>
      </div>
    </div>
  );
}
