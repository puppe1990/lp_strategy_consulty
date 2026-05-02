"use client";

import Image from "next/image";
import Link from "next/link";
import type { FormEvent } from "react";
import { useState } from "react";

const navLinks = [
  { label: "Como funciona", href: "#modelo" },
  { label: "Oferta", href: "#pilares" },
  { label: "Intervenções", href: "#cases" },
  { label: "Diagnóstico", href: "#scorecard" },
  { label: "FAQ", href: "#faq" },
  { label: "Blog", href: "/blog" },
];

const heroStats = [
  { label: "Foco", value: "1 gargalo crítico" },
  { label: "Ritmo", value: "diagnóstico rápido" },
  { label: "Entrega", value: "ambiente real" },
];

const buyerOutcomes = [
  "Colocar um fluxo crítico para rodar sem depender de reconciliação manual.",
  "Reduzir handoff entre operação, dados e engenharia na hora de destravar a execução.",
  "Tomar decisão com uma camada operacional confiável, não com planilhas brigando entre si.",
];

const heroSignals = [
  "ERP, planilhas e APIs que não conversam",
  "Operação crítica parada em workarounds",
  "Legado impedindo resposta rápida do time interno",
];

const blueprintSteps = [
  "Entramos no fluxo real com quem opera, decide e sofre o gargalo todo dia.",
  "Desenhamos a menor intervenção que já tira o problema do limbo: integração, automação, dashboard ou workflow.",
  "Validamos no ambiente real e saímos com critério claro para expandir, internalizar ou encerrar.",
];

const differentiators = [
  {
    title: "Escopo orientado ao travamento real",
    description:
      "A conversa começa no gargalo que custa tempo, margem ou SLA, não em uma lista genérica de desejos.",
    chips: ["Prioridade real", "Recorte claro"],
  },
  {
    title: "Entrega sem teatro de repasse",
    description:
      "Quem entende a operação participa da implementação, então a solução perde menos contexto no caminho.",
    chips: ["Operação no loop", "Execução direta"],
  },
  {
    title: "Decisão objetiva no fim do ciclo",
    description:
      "O entregável não é só código: é clareza sobre continuar, expandir ou matar a iniciativa sem ficção estratégica.",
    chips: ["Software útil", "Próximo passo claro"],
  },
];

const revenuePrinciples = [
  "Você traz um problema específico, não um programa abstrato de transformação.",
  "A intervenção nasce no ambiente real, com os sistemas, exceções e restrições que já existem.",
  "O ciclo é curto: entender, entregar a primeira versão útil e decidir o próximo passo com evidência.",
];

const factoryMoves = [
  {
    title: "Ler o travamento",
    description:
      "Mapeamos onde a operação quebra, quem perde com isso e o que torna o caso difícil no ambiente real.",
    detail: "Diagnóstico direto",
  },
  {
    title: "Entrar com a menor alavanca útil",
    description:
      "Atacamos o ponto com mais retorno imediato: integração, workflow, camada de dados ou automação crítica.",
    detail: "Sprint embarcado",
  },
  {
    title: "Decidir o destino",
    description:
      "Com a solução rodando, definimos se faz sentido expandir, internalizar no time principal ou parar por ali.",
    detail: "Hand-off ou expansão",
  },
];

const urgentPains = [
  "Existe um gargalo com impacto claro em operação, margem, SLA ou tempo de resposta.",
  "O problema atravessa legado, regra operacional, exceção e dependência entre áreas.",
  "O time interno sabe que precisa resolver, mas está preso entre manutenção, backlog e política.",
  "A empresa precisa testar uma saída prática antes de abrir um projeto maior ou prometer replatforming.",
];

const kpis = [
  { value: "1 escopo", label: "por ciclo para evitar dispersão" },
  { value: "1 time", label: "responsável do diagnóstico ao código" },
  { value: "0 handoff", label: "crítico entre entendimento e entrega" },
  { value: "uso real", label: "como critério para decidir evolução" },
];

const pillars = [
  {
    period: "Etapa 1",
    title: "Diagnóstico do caso",
    bullets: [
      "Conversas com quem decide e com quem opera para fechar um recorte que caiba em execução.",
      "Leitura do stack, das dependências e das restrições que derrubam soluções genéricas.",
      "Definição de sucesso: o que precisa mudar para a intervenção se pagar.",
    ],
    output: "Saída: problema fechado, hipótese de intervenção e critério objetivo de avanço.",
  },
  {
    period: "Etapa 2",
    title: "Sprint de intervenção",
    bullets: [
      "Construção da menor solução útil no ambiente real: integração, automação, dashboard ou camada operacional.",
      "Iterações curtas com demonstração frequente para evitar semanas de construção invisível.",
      "Ajuste fino com contexto de negócio, não só com critério técnico.",
    ],
    output: "Saída: intervenção funcional no ponto em que o gargalo realmente acontece.",
  },
  {
    period: "Etapa 3",
    title: "Decisão de continuidade",
    bullets: [
      "Leitura do uso real para decidir se o caso merece expansão ou se já cumpriu o papel.",
      "Documentação do que precisa virar processo interno, produto ou backlog estruturado.",
      "Transferência para o time principal quando a solução deixa de exigir proximidade embarcada.",
    ],
    output: "Saída: valor entregue e um próximo passo claro, sem proposta empurrada.",
  },
];

const cases = [
  {
    title: "Reconciliação operacional entre ERP, planilhas e APIs",
    description:
      "Quando o fechamento depende de conciliação manual entre fontes que se contradizem, a intervenção costuma ser uma camada operacional única com regras, alertas e trilha de exceções.",
    footnote:
      "Bom fit quando a dor já aparece toda semana e ninguém quer abrir mais uma planilha para sobreviver.",
  },
  {
    title: "Risco ou SLA descoberto tarde demais",
    description:
      "Quando o desvio só aparece depois do estrago, o trabalho tende a combinar monitoramento orientado à decisão, regras de resposta e contexto suficiente para agir sem caça ao culpado.",
    footnote:
      "Bom fit quando visibilidade isolada não basta e a operação precisa responder mais cedo.",
  },
  {
    title: "Capacidade importante fora do produto padrão",
    description:
      "Quando a empresa precisa de uma capacidade que o stack atual não entrega, a saída costuma ser validar uma solução conectada ao processo real antes de institucionalizar produto, time ou plataforma.",
    footnote:
      "Bom fit quando o risco de esperar o roadmap é maior do que o custo de testar a solução certa agora.",
  },
];

const stakeholders = [
  {
    title: "Decisor",
    role: "COO, CTO, diretor de operações ou líder de transformação",
    description: "Tem um problema importante demais para ficar preso ao ritmo normal do roadmap.",
  },
  {
    title: "Usuário operacional",
    role: "Gerente de operações, dados, risco, supply ou backoffice",
    description: "Conhece o retrabalho, a exceção real e o ponto em que o fluxo quebra de verdade.",
  },
  {
    title: "Áreas impactadas",
    role: "Operações, dados, engenharia, financeiro e negócio",
    description:
      "Precisam da mesma leitura operacional para parar de discutir qual número está certo.",
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
    description:
      "Dados bagunçados, integrações frágeis, ERP rígido ou sistema legado sem dono claro.",
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
    question: "Qual problema real continua aberto porque ninguém consegue modelar direito?",
    answer:
      "Esse é o ponto de partida ideal para FDE: ambiguidade alta, urgência alta e necessidade de ação concreta.",
  },
  {
    question: "Quais sistemas, dados ou restrições tornam esse problema difícil no mundo real?",
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
  perfect: "Caso forte para intervenção agora",
  good: "Bom fit para uma sprint embarcada",
  medium: "Há dor, mas o recorte ainda está difuso",
  low: "Ainda não parece um caso prioritário",
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

function SectionHeading({ eyebrow, title, description, align = "center" }: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto max-w-3xl text-center" : "text-left";
  return (
    <div className={`space-y-3 ${alignment}`}>
      <p className="text-brand-300 text-xs font-semibold tracking-[0.4em] uppercase">{eyebrow}</p>
      <h2 className="text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
      {description ? <p className="text-lg text-slate-300">{description}</p> : null}
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
  const [scoreState, setScoreState] = useState<boolean[]>(() => scorecardItems.map(() => false));
  const [activeFaq, setActiveFaq] = useState<number>(-1);
  const [isSubmittingProject, setIsSubmittingProject] = useState(false);
  const [projectSubmitStatus, setProjectSubmitStatus] = useState<"idle" | "success" | "error">(
    "idle"
  );

  const totalScore = scorecardItems.reduce(
    (sum, item, index) => sum + (scoreState[index] ? item.weight : 0),
    0
  );
  const verdict = getVerdict(totalScore);
  const progressPercent = Math.min(100, Math.max(0, Math.round((totalScore / MAX_SCORE) * 100)));
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

  const handleProjectSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmittingProject(true);
    setProjectSubmitStatus("idle");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mkoprwzg", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      form.reset();
      setProjectSubmitStatus("success");
    } catch {
      setProjectSubmitStatus("error");
    } finally {
      setIsSubmittingProject(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <div className="noise-overlay" aria-hidden="true" />
      <div className="background-grid" aria-hidden="true" />
      <div className="blur-blob brand -top-48 -left-40" aria-hidden="true" />
      <div className="blur-blob violet top-1/3 right-[-160px]" aria-hidden="true" />
      <div className="relative z-10">
        <header className="mx-auto max-w-6xl px-6 pt-8">
          <nav className="flex flex-wrap items-center justify-between gap-4 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm shadow-lg shadow-black/30 backdrop-blur">
            <div className="flex items-center gap-4">
              <Image
                src="/mosaic-harbor-mark.png"
                alt="Mosaic Harbor Ventures"
                width={256}
                height={183}
                className="h-11 w-auto"
              />
              <div>
                <p className="text-[11px] tracking-[0.4em] text-slate-400 uppercase">
                  Forward deployed engineering
                </p>
                <p className="brand-gold-text text-sm font-semibold">Mosaic Harbor Ventures</p>
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
              Agendar triagem
            </a>
          </nav>
        </header>

        <main className="mx-auto max-w-6xl space-y-24 px-6 pt-12 pb-24">
          <section className="hero-stage grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="space-y-8">
              <div className="hero-kicker">
                <span className="hero-kicker__line" />
                <span className="brand-gold-text text-center text-[0.72rem] font-semibold tracking-[0.32em] uppercase sm:text-[0.82rem]">
                  Mosaic Harbor Ventures
                </span>
                <span className="hero-kicker__line" />
              </div>
              <div className="space-y-5">
                <p className="text-brand-100/80 text-xs tracking-[0.55em] uppercase">
                  Operações, dados e legado
                </p>
                <h1 className="max-w-4xl text-5xl leading-[0.96] font-semibold text-white sm:text-6xl xl:text-7xl">
                  Destravamos operações enterprise críticas antes que o gargalo vire rotina
                </h1>
                <p className="max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl">
                  Entramos ao lado do time para atacar um problema específico de operação, dados ou
                  legado com uma intervenção curta e aplicada no ambiente real. O objetivo é
                  simples: tirar o caso do limbo e devolver capacidade de resposta.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 text-sm text-slate-200">
                {heroSignals.map((signal) => (
                  <span
                    key={signal}
                    className="rounded-full border border-white/12 bg-white/5 px-4 py-2"
                  >
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
                  className="bg-brand-500 shadow-brand-500/40 hover:bg-brand-300 inline-flex items-center justify-center rounded-full px-8 py-3 text-base font-semibold text-slate-950 shadow-lg transition hover:-translate-y-0.5"
                >
                  Agendar triagem de 30 min
                </a>
                <a
                  href="#cases"
                  className="hover:border-brand-200/50 inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-8 py-3 text-base font-semibold text-white transition hover:bg-white/10"
                >
                  Ver tipos de intervenção
                </a>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {heroStats.map((stat) => (
                  <div key={stat.label} className="stat-card hero-stat">
                    <p className="text-xs tracking-[0.4em] text-slate-400 uppercase">
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
                Uma sprint aplicada no problema que o backlog normal não consegue fechar
              </h3>
              <p className="relative mt-4 max-w-md text-base leading-relaxed text-slate-300">
                O modelo forward deployed entra quando o caso exige proximidade com operação,
                contexto técnico e uma decisão rápida sobre continuar ou não.
              </p>
              <ul className="relative mt-8 space-y-5 text-base text-slate-200">
                {blueprintSteps.map((step, index) => (
                  <li className="signal-step" key={step}>
                    <span className="badge">{index + 1}</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
              <div className="signal-quote">
                <p className="text-brand-100/65 text-sm tracking-[0.4em] uppercase">Critério</p>
                <p className="mt-3 text-lg leading-relaxed font-semibold text-white">
                  &quot;Se o problema precisa de contexto real para ser resolvido, ele precisa de
                  uma intervenção que viva no contexto real.&quot;
                </p>
              </div>
            </div>
          </section>

          <div className="section-divider" aria-hidden="true" />

          <section
            id="modelo"
            className="space-y-10 rounded-[36px] border border-white/10 bg-white/5 p-8 sm:p-12"
          >
            <SectionHeading
              eyebrow="Como funciona"
              title="Quando a sprint embarcada faz mais sentido do que discovery longo"
              description="Ela encurta a distância entre gargalo operacional, contexto técnico e entrega útil."
              align="left"
            />
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="space-y-5">
                <p className="text-slate-300">
                  Esse formato funciona quando o caso mistura legado, exceção operacional e urgência
                  suficiente para não caber em uma fila normal de backlog.
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
                    <p className="text-brand-200 text-sm font-semibold">{move.title}</p>
                    <p className="mt-2 text-slate-100">{move.description}</p>
                    <p className="mt-2 text-xs tracking-[0.3em] text-slate-500 uppercase">
                      {move.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="rounded-[36px] border border-white/10 bg-white/5 p-8">
            <SectionHeading
              eyebrow="Diferença prática"
              title="O que muda quando o problema ganha dono até a entrega"
              description="A conversa sai do manifesto e vira recorte, intervenção e decisão de continuidade."
            />
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {differentiators.map((item) => (
                <div className="case-highlight h-full" key={item.title}>
                  <p className="text-brand-200 text-sm font-semibold">{item.title}</p>
                  <p className="mt-3 text-base text-slate-200">{item.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-300">
                    {item.chips.map((chip) => (
                      <span key={chip} className="rounded-full border border-white/10 px-3 py-1">
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="grid gap-6 md:grid-cols-2">
            <div className="from-brand-500/30 shadow-brand-900/40 rounded-3xl border border-white/10 bg-gradient-to-b to-slate-900 p-8 shadow-lg">
              <p className="text-sm font-semibold tracking-[0.4em] text-white/70 uppercase">
                Sinais de prioridade
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-white">
                Entramos quando o problema já cobra caro demais para continuar sem dono
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
              <p className="text-brand-300 text-sm font-semibold tracking-[0.4em] uppercase">
                O que a atuação prioriza
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {kpis.map((kpi) => (
                  <div className="metric-card" key={kpi.label}>
                    <p className="text-3xl font-bold text-white">{kpi.value}</p>
                    <p className="text-sm tracking-wide text-slate-400 uppercase">{kpi.label}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm text-slate-400">
                Valor aqui significa encurtar decisão, reduzir atrito operacional e provar rápido se
                vale expandir a solução.
              </p>
            </div>
          </section>

          <section id="pilares">
            <SectionHeading
              eyebrow="Oferta"
              title="Como estruturamos uma intervenção curta e aplicada"
              description="Três etapas para sair de um gargalo difuso para uma decisão objetiva sobre o que fazer com ele."
            />
            <div className="mt-12 grid gap-8 lg:grid-cols-3">
              {pillars.map((pillar) => (
                <article className="pillar" key={pillar.title}>
                  <p className="text-brand-200 text-sm font-semibold tracking-[0.4em] uppercase">
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
                <p className="text-brand-300 text-sm font-semibold tracking-[0.4em] uppercase">
                  Intervenções típicas
                </p>
                <h2 className="mt-2 text-3xl font-semibold text-white">
                  Exemplos de problema em que esse formato costuma funcionar
                </h2>
                <p className="mt-3 max-w-2xl text-slate-300">
                  Não são cases maquiados. São padrões de problema em que a proximidade com operação
                  e legado costuma acelerar a resposta.
                </p>
              </div>
              <a
                href="mailto:oi@mosaicharborventures.com?subject=Quero%20receber%20um%20escopo%20exemplo"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2 text-sm font-semibold text-white transition hover:border-white/60 hover:bg-white/10"
              >
                Pedir exemplo de escopo
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
                  <p className="text-brand-200 text-sm font-semibold">{item.title}</p>
                  <p className="mt-2 text-lg text-white">{item.description}</p>
                  <p className="mt-4 text-xs tracking-wide text-slate-400 uppercase">
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
                  title="5 sinais de que vale trazer esse caso para a triagem"
                  description="Marque os critérios para entender se o problema pede uma intervenção curta e embarcada."
                  align="left"
                />
                <ul className="mt-6 space-y-4 text-sm text-slate-200">
                  <li>
                    O problema custa tempo, margem, SLA ou capacidade de resposta toda semana.
                  </li>
                  <li>
                    O ambiente real é bagunçado demais para depender de solução genérica ou backlog
                    comum.
                  </li>
                  <li>
                    Usuários e stakeholders precisam falar com quem implementa, não com
                    intermediários.
                  </li>
                  <li>
                    Existe urgência suficiente para preferir software útil rápido a arquitetura
                    perfeita lenta.
                  </li>
                  <li>
                    Se der certo, há caminho claro para virar operação, processo interno ou feature.
                  </li>
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
                    <p className="text-sm tracking-[0.4em] text-slate-400 uppercase">
                      Diagnóstico em tempo real
                    </p>
                    <p className="text-brand-200 mt-2 text-2xl font-semibold">{verdict}</p>
                    <p className="text-sm text-slate-400">
                      Acima de 16 pontos, o caso já justifica uma triagem de discovery aplicada ao
                      problema.
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
                      <span className="text-brand-200 text-xs font-semibold">
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
              <p className="text-brand-300 text-sm font-semibold tracking-[0.4em] uppercase">
                Como começa
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-white">
                O que acontece depois da primeira conversa
              </h2>
              <ol className="mt-6 space-y-4 text-slate-200">
                <li className="feature-item">
                  Entendemos a dor, quem perde com ela e por que ela continua aberta.
                </li>
                <li className="feature-item">
                  Mapeamos stack, dados, restrições e onde a resposta tende a quebrar no mundo real.
                </li>
                <li className="feature-item">
                  Voltamos com hipótese de intervenção, escopo inicial e critério para justificar o
                  investimento.
                </li>
                <li className="feature-item">
                  Se houver fit, começamos pequeno e só expandimos o que provar valor operacional.
                </li>
              </ol>
            </div>
            <div className="from-brand-500/20 rounded-3xl border border-white/10 bg-gradient-to-b to-slate-900 p-8">
              <p className="text-sm font-semibold tracking-[0.4em] text-white/70 uppercase">
                Quem costuma puxar essa conversa
              </p>
              <div className="mt-4 space-y-4">
                {stakeholders.map((stakeholder) => (
                  <div className="rounded-2xl bg-white/5 p-4" key={stakeholder.title}>
                    <p className="text-brand-100 text-sm font-semibold">{stakeholder.title}</p>
                    <p className="text-lg font-semibold text-white">{stakeholder.role}</p>
                    <p className="text-sm text-slate-300">{stakeholder.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="faq" className="rounded-[36px] border border-white/10 bg-white/5 p-8">
            <SectionHeading
              eyebrow="FAQ"
              title="Perguntas úteis para chegar melhor na primeira conversa"
              description="Se você consegue responder essas perguntas, a triagem fica mais rápida e mais objetiva."
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
            <div className="cta-card text-white">
              <div className="cta-ring" aria-hidden="true" />
              <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                <div className="relative z-10">
                  <p className="text-sm font-semibold tracking-[0.5em] text-white/70 uppercase">
                    Submeter projeto
                  </p>
                  <h2 className="mt-4 text-4xl font-semibold">
                    Envie o caso e filtramos rápido se existe fit para uma intervenção Mosaic Harbor
                    Ventures
                  </h2>
                  <p className="mt-4 text-lg text-white/90">
                    Use o formulário para resumir o projeto, o gargalo operacional e o contexto
                    técnico. A triagem serve para dizer com clareza se vale avançar agora, o que
                    precisa entrar no recorte inicial e onde o caso tende a quebrar.
                  </p>
                  <p className="mt-3 text-sm text-white/75">
                    Se o caso fizer sentido, voltamos com próximos passos objetivos. Se não fizer, a
                    resposta também é direta.
                  </p>
                  <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                    <a
                      href="https://calendly.com/matheus-puppe"
                      target="_blank"
                      rel="noreferrer"
                      className="text-brand-700 shadow-brand-900/40 inline-flex w-full items-center justify-center rounded-full bg-white px-8 py-3 text-base font-semibold shadow-lg transition hover:-translate-y-0.5 hover:bg-slate-50 sm:w-auto"
                    >
                      Ver agenda disponível
                    </a>
                    <a
                      href="mailto:oi@mosaicharborventures.com"
                      className="inline-flex w-full items-center justify-center rounded-full border border-white/70 px-8 py-3 text-base font-semibold text-white transition hover:bg-white/10 sm:w-auto"
                    >
                      Falar por email
                    </a>
                  </div>
                </div>

                <form
                  action="https://formspree.io/f/mkoprwzg"
                  method="POST"
                  onSubmit={handleProjectSubmit}
                  className="relative z-10 space-y-5 rounded-[2rem] border border-white/12 bg-slate-950/45 p-6 shadow-2xl shadow-black/30 backdrop-blur"
                >
                  <input
                    type="hidden"
                    name="_subject"
                    value="Nova submissão de projeto - Mosaic Harbor Ventures"
                  />

                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="space-y-2">
                      <span className="text-sm font-medium text-slate-200">Nome</span>
                      <input
                        type="text"
                        name="name"
                        required
                        className="focus:border-brand-300 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white transition outline-none placeholder:text-slate-500 focus:bg-white/8"
                        placeholder="Seu nome"
                      />
                    </label>
                    <label className="space-y-2">
                      <span className="text-sm font-medium text-slate-200">Email</span>
                      <input
                        type="email"
                        name="email"
                        required
                        className="focus:border-brand-300 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white transition outline-none placeholder:text-slate-500 focus:bg-white/8"
                        placeholder="voce@empresa.com"
                      />
                    </label>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="space-y-2">
                      <span className="text-sm font-medium text-slate-200">Empresa</span>
                      <input
                        type="text"
                        name="company"
                        className="focus:border-brand-300 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white transition outline-none placeholder:text-slate-500 focus:bg-white/8"
                        placeholder="Nome da empresa"
                      />
                    </label>
                    <label className="space-y-2">
                      <span className="text-sm font-medium text-slate-200">Cargo</span>
                      <input
                        type="text"
                        name="role"
                        className="focus:border-brand-300 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white transition outline-none placeholder:text-slate-500 focus:bg-white/8"
                        placeholder="COO, CTO, Ops, Dados..."
                      />
                    </label>
                  </div>

                  <label className="space-y-2">
                    <span className="text-sm font-medium text-slate-200">Projeto ou frente</span>
                    <input
                      type="text"
                      name="project"
                      required
                      className="focus:border-brand-300 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white transition outline-none placeholder:text-slate-500 focus:bg-white/8"
                      placeholder="Ex.: reconciliação operacional entre ERP e planilhas"
                    />
                  </label>

                  <label className="space-y-2">
                    <span className="text-sm font-medium text-slate-200">Gargalo principal</span>
                    <textarea
                      name="problem"
                      required
                      rows={4}
                      className="focus:border-brand-300 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white transition outline-none placeholder:text-slate-500 focus:bg-white/8"
                      placeholder="Descreva o problema, onde ele trava a operação e o impacto em SLA, margem ou tempo."
                    />
                  </label>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="space-y-2">
                      <span className="text-sm font-medium text-slate-200">
                        Stack e sistemas envolvidos
                      </span>
                      <textarea
                        name="systems"
                        rows={3}
                        className="focus:border-brand-300 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white transition outline-none placeholder:text-slate-500 focus:bg-white/8"
                        placeholder="ERP, planilhas, APIs, legado, BI..."
                      />
                    </label>
                    <label className="space-y-2">
                      <span className="text-sm font-medium text-slate-200">Urgência e prazo</span>
                      <textarea
                        name="timeline"
                        rows={3}
                        className="focus:border-brand-300 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white transition outline-none placeholder:text-slate-500 focus:bg-white/8"
                        placeholder="O que precisa mudar e em quanto tempo?"
                      />
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmittingProject}
                    className="bg-brand-500 shadow-brand-500/40 hover:bg-brand-300 inline-flex w-full items-center justify-center rounded-full px-8 py-3 text-base font-semibold text-slate-950 shadow-lg transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {isSubmittingProject ? "Enviando projeto..." : "Submeter projeto"}
                  </button>

                  {projectSubmitStatus === "success" ? (
                    <p className="text-sm text-emerald-300">
                      Projeto enviado. A Mosaic Harbor Ventures recebeu a submissão.
                    </p>
                  ) : null}

                  {projectSubmitStatus === "error" ? (
                    <p className="text-sm text-rose-300">
                      Não foi possível enviar agora. Tente novamente ou envie para{" "}
                      <a href="mailto:oi@mosaicharborventures.com" className="underline">
                        oi@mosaicharborventures.com
                      </a>
                      .
                    </p>
                  ) : null}
                </form>
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t border-white/10 bg-slate-950/80 py-10">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-slate-400 md:flex-row">
            <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
              <div className="flex items-center gap-4">
                <Image
                  src="/mosaic-harbor-mark.png"
                  alt="Mosaic Harbor Ventures"
                  width={256}
                  height={183}
                  className="h-11 w-auto"
                />
                <div>
                  <p className="text-[11px] tracking-[0.4em] text-slate-500 uppercase">
                    Forward deployed engineering
                  </p>
                  <p className="brand-gold-text text-sm font-semibold">Mosaic Harbor Ventures</p>
                </div>
              </div>
              <p>
                © <span>{currentYear}</span> Mosaic Harbor Ventures · Todos os direitos reservados.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-6">
              <a href="tel:+5511987654321" className="hover:text-white">
                +55 11 99559-7242
              </a>
              <a href="mailto:oi@mosaicharborventures.com" className="hover:text-white">
                oi@mosaicharborventures.com
              </a>
              <a href="#modelo" className="hover:text-white">
                Como funciona
              </a>
            </div>
          </div>
        </footer>
      </div>
      <div className="floating-actions">
        <a
          href="https://calendly.com/matheus-puppe"
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
