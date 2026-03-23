"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "FDE", href: "#modelo" },
  { label: "Oferta", href: "#pilares" },
  { label: "Projetos", href: "#cases" },
  { label: "Diagnóstico", href: "#scorecard" },
  { label: "FAQ", href: "#faq" },
  { label: "Blog", href: "/blog" },
];

const heroStats = [
  { label: "Modelo", value: "Forward deployed" },
  { label: "Resposta", value: "dias, não trimestres" },
  { label: "Modo", value: "cliente + código" },
];

const buyerOutcomes = [
  "Menos atraso para colocar operação crítica em produção.",
  "Menos retrabalho entre times de operações, dados e engenharia.",
  "Mais clareza para decidir com dado confiável em vez de reconciliação manual.",
];

const heroSignals = [
  "ERP, planilhas e APIs que não conversam",
  "Fluxo operacional dependente de reconciliação manual",
  "Stack legado impedindo resposta rápida ao negócio",
];

const blueprintSteps = [
  "Entramos no contexto real do cliente para entender um problema ainda mal definido.",
  "Construímos software útil no ambiente real: integrações, pipelines, APIs, dashboards e automações.",
  "Iteramos com feedback direto até a solução sair do PowerPoint e virar operação.",
];

const differentiators = [
  {
    title: "Problema real, não briefing bonito",
    description:
      "FDE começa onde o caos está: dado ruim, sistema legado, processo quebrado e urgência de negócio.",
    chips: ["Contexto real", "Ambiguidade resolvida"],
  },
  {
    title: "Engenharia na linha de frente",
    description:
      "O engenheiro fala com usuário, entende restrições e implementa sem depender de camadas de repasse.",
    chips: ["Cliente no loop", "Execução end-to-end"],
  },
  {
    title: "Impacto antes de perfeição",
    description:
      "O objetivo não é arquitetura perfeita. É resolver o problema agora e medir valor rápido.",
    chips: ["Software útil", "Impacto imediato"],
  },
];

const revenuePrinciples = [
  "O engenheiro trabalha perto do usuário final, não escondido atrás de tickets.",
  "A solução nasce no ambiente real do cliente, com sistemas, dados e restrições de verdade.",
  "A lógica é curta: entender, construir, testar com o time e colocar para rodar.",
];

const factoryMoves = [
  {
    title: "Entender o terreno",
    description:
      "Mapeamos dor, dado, sistema legado, gargalos e o que impede o cliente de operar melhor hoje.",
    detail: "Imersão no problema",
  },
  {
    title: "Construir no campo",
    description:
      "Criamos a solução mais direta para gerar valor: pipeline, API, dashboard, automação ou workflow crítico.",
    detail: "Entrega rápida e útil",
  },
  {
    title: "Iterar com feedback",
    description:
      "Ajustamos com usuário real até a solução funcionar no mundo bagunçado, não só no ambiente de teste.",
    detail: "Valor medido na prática",
  },
];

const urgentPains = [
  "O problema existe, mas o caso enterprise é cheio de exceção, dependência e dono parcial.",
  "Os dados estão espalhados entre ERP, BI, planilhas, APIs internas e sistemas legados que não conversam.",
  "A equipe interna está ocupada mantendo operação e não consegue atacar o gargalo até o fim.",
  "Existe urgência de negócio, mas o produto padrão não cobre compliance, processo e legado ao mesmo tempo.",
  "A operação precisa de software útil agora, não de mais um roadmap genérico de transformação.",
];

const kpis = [
  { value: "dias", label: "para sair da análise para entrega" },
  { value: "1 time", label: "falando com cliente e código" },
  { value: "0 repasses", label: "entre problema e implementação" },
  { value: "real", label: "feedback de usuário no ciclo" },
];

const pillars = [
  {
    period: "Fase 1",
    title: "Imersão no problema",
    bullets: [
      "Conversas com stakeholders e usuários para entender a dor sem abstração.",
      "Leitura do stack, dos dados e das restrições reais de segurança, processo e legado.",
      "Escolha do problema com maior impacto e menor caminho até valor.",
    ],
    output: "Output: definição clara do problema e critério de sucesso.",
  },
  {
    period: "Fase 2",
    title: "Construção forward deployed",
    bullets: [
      "Pipelines, APIs, dashboards, automações e integrações no ambiente real do cliente.",
      "Código orientado a utilidade imediata, não a uma abstração elegante demais para o momento.",
      "Iterações curtas com demonstração frequente para ajustar rumo rápido.",
    ],
    output: "Output: solução funcional rodando onde o problema acontece.",
  },
  {
    period: "Fase 3",
    title: "Evolução para produto ou operação",
    bullets: [
      "Refino da solução a partir de uso real e novos aprendizados do cliente.",
      "Documentação do que precisa virar processo interno, feature ou produto.",
      "Transferência do que fizer sentido para o time principal ou continuidade embarcada.",
    ],
    output: "Output: valor entregue e caminho claro para escalar o que funcionou.",
  },
];

// Casos exibidos na seção "Prova social". Cada item segue o formato
// título → impacto em uma linha → instrução para evoluir a prova.
const cases = [
  {
    title: "Operação presa entre ERP, planilhas e APIs internas",
    description:
      "Problema: o time perde horas conciliando informação entre sistemas que não batem. Intervenção: pipeline operacional e camada de visibilidade no ambiente real. Resultado esperado: decisão no mesmo dia sem depender de reconciliação manual.",
    footnote: "Troque por horas economizadas, backlog reduzido ou tempo de fechamento quando tiver caso auditado.",
  },
  {
    title: "Risco, SLA ou exceção operacional chegando tarde demais",
    description:
      "Problema: a equipe só enxerga o desvio quando o impacto já aconteceu. Intervenção: fluxo de decisão com regras, alertas e contexto operacional. Resultado esperado: resposta mais rápida e menos erro em cadeia.",
    footnote: "Troque por SLA, perdas evitadas ou redução de incidentes quando tiver números reais.",
  },
  {
    title: "Capacidade crítica fora do produto padrão",
    description:
      "Problema: o contexto enterprise exige uma capacidade que o stack atual não entrega. Intervenção: software customizado conectado ao processo real. Resultado esperado: validar utilidade rápido antes de institucionalizar a solução.",
    footnote: "Troque por adoção, tempo de resposta ou impacto financeiro assim que tiver prova auditada.",
  },
];

const stakeholders = [
  {
    title: "Decisor",
    role: "COO, CTO, diretor de operações ou líder de transformação",
    description: "Tem um gargalo crítico demais para esperar o ritmo normal do roadmap.",
  },
  {
    title: "Usuário operacional",
    role: "Gerente de operações, dados, risco, supply ou backoffice",
    description: "Conhece a exceção real, o retrabalho e o que precisa funcionar de verdade.",
  },
  {
    title: "Áreas impactadas",
    role: "Operações, dados, engenharia, financeiro e negócio",
    description: "Precisam de uma mesma camada de verdade para operar sem ruído entre áreas.",
  },
];

const scorecardItems = [
  {
    title: "Problema específico e urgente",
    description: "Existe dor concreta e ela já está custando tempo, dinheiro ou operação.",
    weight: 5,
  },
  {
    title: "Contexto caótico ou legado",
    description: "Dados bagunçados, integrações frágeis, ERP rígido ou sistema legado sem dono claro.",
    weight: 4,
  },
  {
    title: "Cliente precisa de proximidade",
    description: "O caso exige engenheiro falando direto com operação, dados e decisores.",
    weight: 3,
  },
  {
    title: "Valor precisa aparecer rápido",
    description: "Não há espaço para discovery longo sem entrega prática.",
    weight: 4,
  },
  {
    title: "Existe caminho para escala",
    description: "Se funcionar, a solução pode virar operação recorrente ou produto.",
    weight: 4,
  },
];

const faqItems = [
  {
    question:
      "Qual problema real continua aberto porque ninguém consegue modelar direito?",
    answer:
      "Esse é o ponto de partida ideal para FDE: ambiguidade alta, urgência alta e necessidade de ação concreta.",
  },
  {
    question:
      "Quais sistemas, dados ou restrições tornam esse problema difícil no mundo real?",
    answer:
      "É aqui que aparecem legado, compliance, ERP rígido, planilha paralela e exceções que o produto padrão não cobre.",
  },
  {
    question: "O que já foi tentado e por que ainda não funciona no ambiente do cliente?",
    answer:
      "A resposta mostra se o problema é técnico, político, operacional ou tudo isso ao mesmo tempo.",
  },
  {
    question: "Qual decisão precisa melhorar assim que a solução entrar no ar?",
    answer:
      "FDE bom não entrega só visibilidade; entrega capacidade de responder melhor e mais rápido na operação.",
  },
  {
    question:
      "Se isso funcionar, vira processo interno, feature de produto ou nova frente operacional?",
    answer:
      "Essa visão evita projeto descartável e ajuda a desenhar uma solução com caminho de continuidade.",
  },
  {
    question: "O que acontece se nada mudar nas próximas semanas?",
    answer:
      "A urgência real é o filtro mais honesto para saber se o modelo forward deployed faz sentido agora.",
  },
];

const verdictCopy = {
  perfect: "Cenário ideal para FDE agora",
  good: "Bom fit para engenharia forward deployed",
  medium: "Há dor, mas ainda falta clareza de prioridade",
  low: "Ainda não parece um caso para FDE",
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
                  Forward deployed engineering
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
          <section className="hero-stage grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="space-y-8">
              <div className="hero-kicker">
                <span className="hero-kicker__line" />
                <span className="hero-kicker__label">Mosaic Harbor Ventures</span>
                <span className="hero-kicker__line" />
              </div>
              <div className="space-y-5">
                <p className="text-xs uppercase tracking-[0.55em] text-brand-100/80">
                  Forward Deployed Engineers
                </p>
                <h1 className="max-w-4xl text-5xl font-semibold leading-[0.96] text-white sm:text-6xl xl:text-7xl">
                  Para operações enterprise travadas por dados ruins e sistemas legados
                </h1>
                <p className="max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl">
                  Entramos ao lado de times de operações, dados e tecnologia para resolver gargalos críticos com software útil em dias ou semanas. Menos repasse, menos reconciliação manual, mais resposta real no ambiente enterprise.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 text-sm text-slate-200">
                {heroSignals.map((signal) => (
                  <span key={signal} className="rounded-full border border-white/12 bg-white/5 px-4 py-2">
                    {signal}
                  </span>
                ))}
              </div>
              <ul className="grid max-w-4xl gap-3 text-sm text-slate-200 sm:grid-cols-3">
                {buyerOutcomes.map((outcome) => (
                  <li className="feature-item" key={outcome}>
                    {outcome}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="#cta"
                  className="inline-flex items-center justify-center rounded-full bg-brand-500 px-8 py-3 text-base font-semibold text-slate-950 shadow-lg shadow-brand-500/40 transition hover:-translate-y-0.5 hover:bg-brand-300"
                >
                  Pedir triagem do caso
                </a>
                <a
                  href="https://calendar.app.google/KSjQQGr8uZmsFTwW6"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-8 py-3 text-base font-semibold text-white transition hover:border-brand-200/50 hover:bg-white/10"
                >
                  Ver agenda de 30 min
                  <CalendarIcon className="h-5 w-5" />
                </a>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {heroStats.map((stat) => (
                  <div key={stat.label} className="stat-card hero-stat">
                    <p className="text-xs uppercase tracking-[0.4em] text-slate-400">
                      {stat.label}
                    </p>
                    <p className="mt-3 text-2xl font-semibold text-white">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="signal-stage">
              <div className="signal-grid" aria-hidden="true" />
              <div className="signal-rings" aria-hidden="true" />
              <p className="signal-eyebrow">Field Brief</p>
              <div className="signal-monogram" aria-hidden="true">
                FDE
              </div>
              <h3 className="relative mt-8 max-w-sm text-3xl font-semibold text-white sm:text-4xl">
                Um engenheiro dentro da operação enterprise, não um fornecedor fora dela
              </h3>
              <ul className="relative mt-8 space-y-5 text-base text-slate-200">
                {blueprintSteps.map((step, index) => (
                  <li className="signal-step" key={step}>
                    <span className="badge">{index + 1}</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
              <div className="signal-quote">
                <p className="text-sm uppercase tracking-[0.4em] text-brand-100/65">
                  Mensagem central
                </p>
                <p className="mt-3 text-lg font-semibold leading-relaxed text-white">
                  &quot;FDE não espera o cliente se adaptar ao produto. O engenheiro se adapta ao problema, constrói a solução e mede o impacto no campo.&quot;
                </p>
              </div>
            </div>
          </section>

          <div className="section-divider" aria-hidden="true" />

          <section id="modelo" className="space-y-10 rounded-[36px] border border-white/10 bg-white/5 p-8 sm:p-12">
            <SectionHeading
              eyebrow="FDE"
              title="Por que esse modelo funciona em operações complexas"
              description="Ele reduz a distância entre exceção operacional, dado quebrado e implementação real."
              align="left"
            />
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="space-y-5">
                <p className="text-slate-300">
                  Se o caso trava porque tudo depende de legado, exceção, regra operacional e urgência, FDE tende a funcionar melhor do que discovery longo com repasse entre times.
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
              title="O que muda quando o engenheiro entra no chão da operação"
              description="A conversa sai da abstração e vira solução testável com dono, contexto e impacto operacional."
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
                Entramos quando o gargalo enterprise é importante demais para continuar no limbo
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
                *Aqui o valor aparece em velocidade, utilidade e proximidade com o problema. Troque por números reais quando tiver casos auditados.
              </p>
            </div>
          </section>

          <section id="pilares">
            <SectionHeading
              eyebrow="Oferta"
              title="Como uma atuação forward deployed é estruturada"
              description="Um ciclo curto de imersão, construção e iteração para transformar ambiguidade em software funcional."
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
                  Casos em que FDE entrega mais valor em enterprise
                </h2>
                <p className="mt-3 max-w-2xl text-slate-300">
                  O padrão é sempre o mesmo: um gargalo operacional caro, um contexto legado e uma pressão real para responder rápido.
                </p>
              </div>
              <a
                href="mailto:oi@mosaicharborventures.com?subject=Quero%20receber%20um%20escopo%20exemplo"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2 text-sm font-semibold text-white transition hover:border-white/60 hover:bg-white/10"
              >
                Receber exemplo de escopo
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
                  title="5 sinais de que você precisa de um FDE"
                  description="Marque os critérios e veja se o caso pede proximidade, velocidade e engenharia no contexto enterprise."
                  align="left"
                />
                <ul className="mt-6 space-y-4 text-sm text-slate-200">
                  <li>O problema custa tempo, margem, SLA ou capacidade de resposta toda semana.</li>
                  <li>O ambiente real é bagunçado demais para depender de solução genérica ou backlog comum.</li>
                  <li>Usuários e stakeholders precisam falar com quem implementa, não com intermediários.</li>
                  <li>Existe urgência suficiente para preferir software útil rápido a arquitetura perfeita lenta.</li>
                  <li>Se der certo, há caminho claro para virar operação, processo interno ou feature.</li>
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
                      Acima de 16 pontos, o caso já justifica uma conversa de discovery com viés FDE.
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
                O que acontece quando você traz um problema para nós
              </h2>
              <ol className="mt-6 space-y-4 text-slate-200">
                <li className="feature-item">
                  Entendemos a dor, quem perde com ela e por que ela continua aberta na operação.
                </li>
                <li className="feature-item">
                  Mapeamos stack, dados, restrições, legado e onde a solução costuma quebrar no mundo real.
                </li>
                <li className="feature-item">
                  Voltamos com hipótese de solução, escopo inicial e o que precisa acontecer para justificar o investimento.
                </li>
                <li className="feature-item">
                  Se houver fit, começamos pequeno, validamos rápido e expandimos o que provar valor operacional.
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
              title="Perguntas que definem se o caso é forward deployed"
              description="Elas ajudam a entender se o problema precisa de proximidade, velocidade e engenharia dentro do contexto enterprise."
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
                Discovery FDE
              </p>
              <h2 className="mt-4 text-4xl font-semibold">
                30 minutos para decidir se isso é caso de Forward Deployed Engineers
              </h2>
              <p className="mt-4 text-lg text-white/90">
                Traga um gargalo real de operações, dados ou legado. A conversa termina com leitura inicial do caso, hipótese de abordagem e um critério objetivo para decidir se faz sentido avançar ou encerrar ali.
              </p>
              <p className="mt-3 text-sm text-white/75">
                Se não houver fit para atuação forward deployed, a resposta é direta. Sem proposta forçada.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href="mailto:oi@mosaicharborventures.com"
                  className="inline-flex w-full items-center justify-center rounded-full bg-white px-8 py-3 text-base font-semibold text-brand-700 shadow-lg shadow-brand-900/40 transition hover:-translate-y-0.5 hover:bg-slate-50 sm:w-auto"
                >
                  Quero a triagem inicial
                </a>
                <a
                  href="https://calendar.app.google/KSjQQGr8uZmsFTwW6"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-full border border-white/70 px-8 py-3 text-base font-semibold text-white transition hover:bg-white/10 sm:w-auto"
                >
                  Ver agenda disponível
                </a>
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
                FDE
              </a>
            </div>
          </div>
        </footer>
      </div>
      <div className="floating-actions">
        <a
          href="https://calendar.app.google/KSjQQGr8uZmsFTwW6"
          target="_blank"
          rel="noreferrer"
          className="floating-actions__primary"
        >
          <span className="rounded-full bg-black/15 p-1.5">
            <CalendarIcon className="h-4 w-4" />
          </span>
          Agenda
        </a>
        <a
          href="https://wa.me/5511995597242"
          target="_blank"
          rel="noreferrer"
          className="floating-actions__secondary"
        >
          <span className="rounded-full bg-white/12 p-1.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2c-5.421 0-9.816 3.99-9.816 8.912 0 1.764.604 3.44 1.745 4.88L2 22l5.49-1.8c1.328.364 2.07.51 3.704.51 5.42 0 9.806-3.99 9.806-8.912C21.999 5.991 17.62 2 12 2Zm0 1.8c4.454 0 8.016 3.141 8.016 7.012 0 4.013-3.605 7.114-8.016 7.114-1.52 0-2.19-.182-3.468-.53l-.41-.112-3.18 1.042.84-2.743-.18-.224c-1.08-1.347-1.63-2.79-1.63-4.547 0-3.872 3.56-7.012 8.016-7.012Zm-3.38 4.25-.363.018c-.414.02-.855.218-1.017.745-.226.727-.474 2.228-.226 2.387.352.224.581.35.957.564.375.213.862.47 1.003.525.14.056.235.083.33-.083.095-.167.382-.557.482-.668.1-.111.2-.124.375-.07.176.056 1.118.49 1.31.58.193.09.327.134.375.212.05.079.05.45-.088.883-.139.433-.827.797-1.143.85-.315.055-.604.05-.969-.056-.365-.105-1.162-.36-1.654-.805-.493-.447-1.84-1.704-1.84-3.274 0-1.568.974-2.327 1.321-2.645.347-.318.764-.416.978-.416.215 0 .493.007.708.012.215.007.56-.09.874.334.315.423 1.105 1.663 1.205 1.788.1.125.166.276.026.498-.139.221-.207.36-.414.55-.206.19-.441.525-.63.594-.19.07-.284.062-.482-.07-.198-.132-.837-.394-1.363-.65-.526-.254-.478-.43-.367-.606.111-.175.321-.457.453-.602.132-.146.167-.219.25-.361.083-.142.042-.264.0-.37-.042-.106-.367-.91-.525-1.213-.158-.303-.329-.312-.485-.313Z" />
            </svg>
          </span>
          WhatsApp
        </a>
      </div>
    </div>
  );
}
