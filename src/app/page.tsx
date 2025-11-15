"use client";

import { useState } from "react";

const navLinks = [
  { label: "ICP", href: "#segmento" },
  { label: "Oferta", href: "#pilares" },
  { label: "Scorecard", href: "#scorecard" },
  { label: "FAQ", href: "#faq" },
];

const heroStats = [
  { label: "Ticket por sprint", value: "R$ 50k" },
  { label: "Foco em", value: "60 dias" },
  { label: "Perfil ideal", value: "R$300k+/mês" },
];

const blueprintSteps = [
  "Diagnóstico 360° do P&L digital e do stack (semana 1-2)",
  "Execução intensiva: integrações, funis e dashboards prontos (semanas 3-7)",
  "Otimização contínua e playbooks proprietários (semana 8+)",
];

const differentiators = [
  {
    title: "Blueprint vivo",
    description:
      "Roadmap atualizado semanalmente com metas por KPI e governança clara.",
    chips: ["Diagnóstico 360°", "Metas compartilhadas"],
  },
  {
    title: "Stack integrado",
    description:
      "Integrações, funis e dashboards saem do papel em até 60 dias com squad único.",
    chips: ["Integrações críticas", "Dados em tempo real"],
  },
  {
    title: "Playbooks proprietários",
    description:
      "Testes semanais, documentação viva e rituais executivos para sustentar o crescimento.",
    chips: ["Teste & learn", "Retainer contínuo"],
  },
];

const segmentHighlights = [
  "Stack típico: Shopify/VTEX/Nuvemshop + ERP + CRM + mídia multicanal.",
  "Integrações frágeis e dados espalhados em planilhas.",
  "Operações em capitais (SP/RJ/BH) ou polos com logística madura.",
];

const urgentPains = [
  "Integrações entre e-commerce, ERP, logística e CRM quebram semanalmente.",
  "CAC/ROAS disparam porque funis multicanais não conversam.",
  "Não há dashboards confiáveis de estoque, margem e cohorts.",
  "Backlog de features/MVPs parado por falta de squad técnico.",
  "Board exige impacto em faturamento, margem e produtividade em ≤90 dias.",
];

const kpis = [
  { value: "-30%", label: "Tempo conciliando dados" },
  { value: "+35%", label: "Crescimento de faturamento" },
  { value: "-20%", label: "CAC/ROAS otimizado" },
  { value: "+100%", label: "Visibilidade em tempo real" },
];

const pillars = [
  {
    period: "Semana 1-2",
    title: "Estratégia",
    bullets: [
      "Diagnóstico 360° do P&L digital e processos.",
      "Plano de 90 dias com metas por KPI.",
      "Blueprint de automação e arquitetura.",
    ],
    output: "Output: board deck + roadmap priorizado por impacto.",
  },
  {
    period: "Semanas 3-7",
    title: "Execução",
    bullets: [
      "Integrações entre plataformas, ERP e CRM.",
      "Landing pages, funis multicanais e automações.",
      "Dashboards de estoque, margem e cohorts.",
    ],
    output: "Output: stack integrado, funis live e dados confiáveis.",
  },
  {
    period: "Semana 8+",
    title: "Análise contínua",
    bullets: [
      "Monitoramento de KPIs e testes semanais.",
      "Suporte executivo e governança.",
      "Playbooks e documentação proprietária.",
    ],
    output: "Output: retainer de otimização (R$5k/mês em média).",
  },
];

const cases = [
  {
    title: "Clínica digital",
    description: "Automação de funil reduziu 40% do tempo da equipe comercial.",
    footnote: "Placeholder — substitua pelos seus números reais.",
  },
  {
    title: "E-commerce de beleza",
    description: "Integrações e CRM elevaram o faturamento em 35% em 90 dias.",
    footnote: "Atualize com dados auditados para reforçar credibilidade.",
  },
  {
    title: "Infoprodutor 7 dígitos",
    description:
      "Dashboard unificado reduziu CAC em 20% com otimizações semanais.",
    footnote: "Transforme em storytelling com gráfico antes/depois.",
  },
];

const internalSteps = [
  "Mapeamos 30 contas-alvo e aplicamos o scorecard.",
  "Montamos deck/one-pager com a oferta em 3 pilares.",
  "Rodamos workshop/diagnóstico gratuito de 45 min como porta de entrada.",
  "Documentamos métricas antes/depois para storytelling.",
];

const stakeholders = [
  {
    title: "Economic buyer",
    role: "CEO / Diretor de E-commerce",
    description: "Responsável pelo P&L digital e pela assinatura do projeto.",
  },
  {
    title: "Champion",
    role: "Gerente de operações digital",
    description: "Sente as dores de integrações e dados no dia a dia.",
  },
  {
    title: "Influenciadores",
    role: "Heads de marketing, logística e CX",
    description: "Precisam de visibilidade de KPIs para operar com confiança.",
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
      "Entenda se a meta é incremental ou transformacional, quais KPIs suportam o objetivo e qual o impacto financeiro do atraso.",
  },
  {
    question:
      "Quais sistemas não conversam e quanto tempo o time perde conciliando dados?",
    answer:
      "Quantifique horas perdidas, stacks envolvidos e riscos (rupturas, CAC inflado, falta de estoque).",
  },
  {
    question: "Que automações ou produtos já tentaram e por que não escalaram?",
    answer:
      "Mapeie aprendizados, fornecedores anteriores e expectativas de velocidade.",
  },
  {
    question: "Qual KPI precisa mexer primeiro (ROAS, estoque, LTV, NPS)?",
    answer:
      "Define prioridades do sprint e cria sentido de foco para as entregas das semanas 3-7.",
  },
  {
    question:
      "Quem decide sobre investimentos deste porte e qual o processo de aprovação?",
    answer:
      "Identifique patrocinadores, prazos de procurement e a necessidade de envolver conselho.",
  },
  {
    question: "O que acontece se nada mudar nos próximos três meses?",
    answer:
      "Traga urgência mensurando perdas, riscos e impactos em margem ou valuation.",
  },
];

const verdictCopy = {
  perfect: "Lead perfeito — priorize para a próxima sprint",
  good: "Ótimo fit — avance para diagnóstico",
  medium: "Investigue melhor antes de avançar",
  low: "Provavelmente fora do ICP",
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
                HQ
              </span>
              <div>
                <p className="text-[11px] uppercase tracking-[0.4em] text-slate-400">
                  Consultoria híbrida
                </p>
                <p className="text-sm font-semibold text-white">Hub de Crescimento</p>
              </div>
            </div>
            <div className="hidden items-center gap-6 text-slate-300 md:flex">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium transition hover:text-white"
                >
                  {link.label}
                </a>
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
                Ideal para e-commerces que já faturam alto
              </span>
              <div className="space-y-5">
                <p className="text-xs uppercase tracking-[0.4em] text-brand-200">
                  Consultoria híbrida
                </p>
                <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
                  Cresça 2x com tecnologia, automação e estratégia em um único squad
                </h1>
                <p className="text-lg text-slate-300">
                  Desenhamos, implementamos e otimizamos uma arquitetura digital completa em até 60 dias.
                  Diagnóstico 360°, integrações entre e-commerce, ERP, CRM e logística, funis multicanais e dashboards em tempo real em um único contrato.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="#cta"
                  className="inline-flex items-center justify-center rounded-full bg-brand-500 px-8 py-3 text-base font-semibold text-white shadow-lg shadow-brand-500/50 transition hover:bg-brand-600"
                >
                  Agendar diagnóstico gratuito
                </a>
                <a
                  href="#pilares"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-3 text-base font-semibold text-white transition hover:border-white/60 hover:bg-white/10"
                >
                  Ver como entregamos
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
                Arquitetura em camadas
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-white">
                Blueprint que guia todo o projeto
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
                  “Ajudamos empresas que já faturam a escalar com tecnologia, automação e estratégia, entregando resultados mensuráveis em 60 dias.”
                </p>
              </div>
            </div>
          </section>

          <div className="section-divider" aria-hidden="true" />

          <section id="segmento" className="space-y-10 rounded-[36px] border border-white/10 bg-white/5 p-8 sm:p-12">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm font-semibold uppercase tracking-[0.4em] text-brand-300">
                Quem atendemos
              </p>
              <span className="rounded-full border border-brand-500/20 bg-brand-500/10 px-4 py-1 text-xs font-semibold text-brand-200">
                ICP validado para e-commerces/DTC
              </span>
            </div>
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="space-y-4">
                <h2 className="text-3xl font-semibold text-white">Segmento prioritário</h2>
                <p className="text-slate-300">
                  Marcas DTC de moda, beleza, saúde ou alimentos/bebidas que faturam entre R$300k e R$1,5M/mês e querem dobrar o canal digital em 12 meses.
                  Produto validado, marketing ativo e ausência de squad tech interno.
                </p>
                <ul className="space-y-3 text-sm text-slate-300">
                  {segmentHighlights.map((highlight) => (
                    <li className="feature-item" key={highlight}>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid gap-4">
                <div className="card">
                  <p className="text-sm font-semibold text-brand-200">Por que pagam R$50k?</p>
                  <p className="mt-2 text-slate-100">
                    Já validaram produto, possuem caixa, têm metas agressivas e querem um parceiro capaz de diagnosticar + implementar sem fricção.
                  </p>
                </div>
                <div className="card">
                  <p className="text-sm font-semibold text-brand-200">Stakeholders envolvidos</p>
                  <ul className="mt-2 list-disc pl-5 text-sm text-slate-200">
                    <li>Economic buyer: CEO, fundador ou Diretor de E-commerce.</li>
                    <li>Champion: gerente de operações digital/comercial.</li>
                    <li>Influenciadores: heads de marketing, logística e CX.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-[36px] border border-white/10 bg-white/5 p-8">
            <SectionHeading
              eyebrow="Por que ganhamos"
              title="Design de serviço completo, do diagnóstico ao retainer"
              description="Reunimos estratégia, tecnologia e automação com ownership total do roadmap."
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
                Dores urgentes
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-white">
                Fomos desenhados para apagar incêndios crônicos
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
                KPIs que movemos
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
                *Resultados ilustrativos baseados na metodologia aplicada em projetos similares.
              </p>
            </div>
          </section>

          <section id="pilares">
            <SectionHeading
              eyebrow="Oferta premium"
              title="Um mesmo time para estratégia, execução e otimização"
              description="Nosso modelo híbrido evita repasses, elimina a queda de informação e garante time-to-value agressivo."
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
                  Prova social
                </p>
                <h2 className="mt-2 text-3xl font-semibold text-white">
                  Cases prontos para apresentar ao board
                </h2>
              </div>
              <button className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2 text-sm font-semibold text-white transition hover:border-white/60 hover:bg-white/10">
                Baixar deck resumido
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
              </button>
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
                  eyebrow="Scorecard"
                  title="5 sinais de que somos o parceiro certo"
                  description="Marque os critérios e descubra se o ICP soma ao menos 16 pontos. Use a mesma régua no CRM para priorizar outbound."
                  align="left"
                />
                <ul className="mt-6 space-y-4 text-sm text-slate-200">
                  <li>Receita mensal ≥ R$300k em e-commerce.</li>
                  <li>2+ integrações críticas falhando atualmente.</li>
                  <li>Sem squad tech dedicado (dependem de terceiros).</li>
                  <li>Meta agressiva em ≤90 dias já com orçamento reservado.</li>
                  <li>CEO/Diretor presente na call de diagnóstico.</li>
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
                      Lead ideal precisa somar ≥16 pontos.
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
                Como trabalhamos
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-white">
                Próximos passos internos
              </h2>
              <ol className="mt-6 space-y-4 text-slate-200">
                {internalSteps.map((step) => (
                  <li className="feature-item" key={step}>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
            <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-brand-500/20 to-slate-900 p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.4em] text-white/70">
                Stakeholders alinhados
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
              eyebrow="FAQ diagnóstico"
              title="Perguntas que destravam a conversa certa"
              description="Use-as durante o workshop gratuito para mapear urgência, orçamento e processo decisório."
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
                Workshop gratuito
              </p>
              <h2 className="mt-4 text-4xl font-semibold">
                45 minutos para mapear seu roadmap de crescimento
              </h2>
              <p className="mt-4 text-lg text-white/90">
                Receba um diagnóstico inicial, plano de 90 dias e estimativa de investimento. Sem compromisso.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href="mailto:oi@hubdecrescimento.com"
                  className="inline-flex w-full items-center justify-center rounded-full bg-white px-8 py-3 text-base font-semibold text-brand-700 shadow-lg shadow-brand-900/40 transition hover:-translate-y-0.5 hover:bg-slate-50 sm:w-auto"
                >
                  Quero meu diagnóstico
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
              © <span>{currentYear}</span> Hub de Crescimento · Todos os direitos reservados.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <a href="tel:+5511987654321" className="hover:text-white">
                +55 11 98765-4321
              </a>
              <a href="mailto:oi@hubdecrescimento.com" className="hover:text-white">
                oi@hubdecrescimento.com
              </a>
              <a href="#segmento" className="hover:text-white">
                ICP
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
