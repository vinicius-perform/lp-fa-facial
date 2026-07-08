import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent, type ReactNode } from "react";
import { ArrowRight, Play, DollarSign, TrendingUp, Target, Check, Instagram } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});



interface CaseStudy {
  city: string;
  videoUrl: string;
  thumbnail: string;
  headline: ReactNode;
  stats: {
    investment: string;
    revenue: string;
    roi: string;
  };
  bullets: string[];
}

const CASE_STUDIES: CaseStudy[] = [
  {
    city: "FORTALEZA/CE",
    videoUrl: "https://fazendoacontecer.site/wp-content/uploads/2026/06/lannay.webm",
    thumbnail: "/thumb lannay.webp",
    headline: (
      <>
        Essa cirurgiã-dentista multiplicou seus resultados, saindo de <span className="text-neon font-bold">R$ 30 mil</span> para mais de <span className="text-neon font-bold">R$ 500 mil/mês</span> com apenas <span className="text-neon font-bold">R$ 12 mil</span> de investimento.
      </>
    ),
    stats: {
      investment: "R$ 12 mil",
      revenue: "R$ 500 mil+",
      roi: "41x ROI",
    },
    bullets: [
      "Estruturação comercial e processos de captação desenhados sob medida.",
      "Time treinado para pré-atendimento e conversão em alta performance.",
      "Previsibilidade absoluta com rastreabilidade total de cada lead gerado.",
    ],
  },
  {
    city: "SÃO PAULO/SP",
    videoUrl: "https://fazendoacontecer.site/wp-content/uploads/2026/01/dep-dramarcela-1.webm",
    thumbnail: "/thumb marcela.webp",
    headline: (
      <>
        Como essa médica largou os plantões exaustivos e hoje fatura mais de <span className="text-neon font-bold">R$ 220 mil</span> com investimento de apenas <span className="text-neon font-bold">R$ 10 mil</span>.
      </>
    ),
    stats: {
      investment: "R$ 10 mil",
      revenue: "R$ 220 mil+",
      roi: "22x ROI",
    },
    bullets: [
      "Transição segura e planejada dos plantões para o consultório próprio.",
      "Geração de demanda qualificada focada em procedimentos de alto valor.",
      "Comercial treinado para agendamento e fechamento na primeira consulta.",
    ],
  },
  {
    city: "VILA VELHA/ES",
    videoUrl: "https://fazendoacontecer.site/wp-content/uploads/2026/07/uri_ifs___V_MO7-PeBSuqG1Oeps5YgIKtnJW3-9mhF2JQC4TC9nHHU.webm",
    thumbnail: "/thumb dr pedro.png",
    headline: (
      <>
        Como o Dr. Pedro Lima faturou <span className="text-neon font-bold">R$ 318 mil</span> em Janeiro (mês tradicionalmente ruim) investindo apenas <span className="text-neon font-bold">R$ 21 mil</span>.
      </>
    ),
    stats: {
      investment: "R$ 21 mil",
      revenue: "R$ 318 mil",
      roi: "15x ROI",
    },
    bullets: [
      "Metodologia ativa que quebra a barreira da sazonalidade comercial.",
      "Acompanhamento em tempo real das métricas do CRM e de conversão.",
      "Processo comercial previsível que garante estabilidade financeira.",
    ],
  },
  {
    city: "BRASÍLIA/DF",
    videoUrl: "https://fazendoacontecer.site/wp-content/uploads/2026/07/uri_ifs___V_015JtsY5elTU0ZxaDbcJI6sQBqUYryenRf0yFICm7Gw.webm",
    thumbnail: "/thumb cris.png",
    headline: (
      <>
        Como o Dr. Cristiano faturou mais de <span className="text-neon font-bold">R$ 550 mil</span> nos seus 3 primeiros meses de parceria com a FA.
      </>
    ),
    stats: {
      investment: "R$ 20 mil",
      revenue: "R$ 550 mil",
      roi: "27x ROI",
    },
    bullets: [
      "Internalização comercial completa eliminando tarefas administrativas do médico.",
      "Agenda preenchida apenas com pacientes pré-qualificados e validados.",
      "Faturamento acelerado e escalável desde as primeiras semanas de operação.",
    ],
  },
];

const WHATSAPP_URL = import.meta.env.VITE_WHATSAPP_URL || "https://wa.me/5511952453638";

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Top Banner Exclusivo */}
      <div className="bg-[#E10614] text-white py-2.5 px-4 text-center text-xs sm:text-sm font-black tracking-widest uppercase shrink-0">
        *EXCLUSIVO PARA CLÍNICAS E CONSULTÓRIOS QUE FATURAM ACIMA DE 35K/MÊS
      </div>
      <Hero />
      <Cases />
      <Footer />
    </div>
  );
}

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <span className="text-2xl font-black tracking-tight text-foreground">
        FA
      </span>
      <span className="h-2 w-2 rounded-full bg-neon glow-neon" />
      <span className="hidden text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground sm:inline">
        Fazendo Acontecer
      </span>
    </div>
  );
}

function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden min-h-[85svh] lg:min-h-screen flex flex-col justify-center bg-background">
      {/* Glows abstractos de fundo */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full opacity-20 blur-[130px]" style={{ background: "radial-gradient(circle, #95EC00 0%, transparent 70%)" }} />
        <div className="absolute top-1/3 -right-40 h-[600px] w-[600px] rounded-full opacity-15 blur-[150px]" style={{ background: "radial-gradient(circle, #95EC00 0%, transparent 70%)" }} />
      </div>

      {/* Grid sutil em verde */}
      <div
        className="pointer-events-none absolute inset-0 z-10 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #95EC00 1px, transparent 1px), linear-gradient(to bottom, #95EC00 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* ===== CONTENT ===== */}
      <div className="relative z-20 w-full py-20 lg:py-0">
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="max-w-3xl lg:max-w-4xl text-center lg:text-left flex flex-col items-center lg:items-start">
            <h1 className="text-[32px] sm:text-5xl lg:text-6xl font-black leading-[1.05] lg:leading-[1.1] tracking-tight text-foreground">
              Aumentamos o <span className="text-neon">faturamento da sua clínica</span> internalizando o seu comercial e implantando a nossa metodologia de <span className="text-neon">geração de demanda, vendas e dados</span>.
            </h1>
            <p className="mt-6 text-base sm:text-lg lg:text-xl leading-relaxed text-muted-foreground/90 font-medium max-w-2xl">
              Entregamos o paciente na sua agenda para você realizar a consulta e fechar seu protocolo ou procedimento.
            </p>
            <div className="mt-10 flex w-full justify-center lg:justify-start">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full max-w-sm lg:w-auto h-[54px] sm:h-[58px] items-center justify-center gap-2 rounded-lg bg-neon px-8 text-sm sm:text-base font-extrabold uppercase tracking-wider text-black transition-all hover:bg-[#B6FF35] glow-neon"
              >
                Quero receber meu diagnóstico
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



function Cases() {
  return (
    <section className="relative border-t border-border/50 bg-background py-16 lg:py-24 space-y-12">
      {/* Title section */}
      <div className="relative mx-auto max-w-7xl px-6 mb-16 text-center">
        <span className="inline-flex items-center rounded-full border border-neon/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-neon bg-neon/5">
          Cases de sucesso
        </span>
        <h2 className="mt-5 text-3xl font-black tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          Nossos resultados falam por nós
        </h2>
      </div>

      {CASE_STUDIES.map((c, i) => (
        <CaseStudySection key={i} study={c} index={i} />
      ))}

      <div className="mt-20 flex justify-center pt-8">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-neon px-8 py-4 text-sm font-bold uppercase tracking-wider text-black transition-all hover:bg-[#B6FF35] glow-neon"
        >
          Quero receber meu diagnóstico
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}

function CaseStudySection({ study, index }: { study: CaseStudy; index: number }) {
  const isReversed = index % 2 === 1;

  return (
    <div className={`w-full py-16 lg:py-24 ${index % 2 === 1 ? "bg-[#090909]/40 border-y border-border/20" : ""}`}>
      <div className="mx-auto max-w-7xl px-6">
        <div className={`flex flex-col lg:flex-row items-center lg:items-start justify-center gap-12 lg:gap-16 ${isReversed ? "lg:flex-row-reverse" : ""}`}>
          {/* Left / Info Column */}
          <div className="w-full lg:max-w-[620px] flex flex-col">
            {/* Top tag */}
            <div className="flex items-center gap-3">
              <span className="h-px w-6 bg-neon" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                Depoimento & Resultados
              </span>
            </div>

            {/* Title */}
            <h3 className="mt-5 text-3xl sm:text-4xl font-black tracking-tight text-foreground uppercase leading-tight">
              Case de sucesso de
              <span className="block mt-2 text-neon underline decoration-2 underline-offset-8">
                {study.city}
              </span>
            </h3>

            {/* Headline */}
            <p className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed font-medium">
              {study.headline}
            </p>

            {/* Metrics cards grid */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 mt-8">
              <div className="rounded-2xl border border-border/60 bg-[#111111]/70 p-3 sm:p-4 shadow-lg backdrop-blur-sm">
                <div className="flex items-center gap-1.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                  <DollarSign className="h-3.5 w-3.5 text-neon" />
                  Investimento
                </div>
                <p className="mt-2 text-sm sm:text-base font-black text-foreground">
                  {study.stats.investment}
                </p>
              </div>

              <div className="rounded-2xl border border-border/60 bg-[#111111]/70 p-3 sm:p-4 shadow-lg backdrop-blur-sm">
                <div className="flex items-center gap-1.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                  <TrendingUp className="h-3.5 w-3.5 text-neon" />
                  Faturamento
                </div>
                <p className="mt-2 text-sm sm:text-base font-black text-foreground">
                  {study.stats.revenue}
                </p>
              </div>

              <div className="rounded-2xl border border-border/60 bg-[#111111]/70 p-3 sm:p-4 shadow-lg backdrop-blur-sm">
                <div className="flex items-center gap-1.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                  <Target className="h-3.5 w-3.5 text-neon" />
                  Retorno (ROI)
                </div>
                <p className="mt-2 text-sm sm:text-base font-black text-neon">
                  {study.stats.roi}
                </p>
              </div>
            </div>

            {/* Bullet points */}
            <div className="mt-8 space-y-4">
              {study.bullets.map((bullet, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-neon/20 bg-neon/10 text-neon">
                    <Check className="h-3 w-3" />
                  </div>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {bullet}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right / Video Column */}
          <div className="w-full max-w-[280px] lg:max-w-[300px] shrink-0 mx-auto lg:mx-0">
            <CaseVideo videoUrl={study.videoUrl} thumbnail={study.thumbnail} />
          </div>
        </div>
      </div>
    </div>
  );
}

function CaseVideo({ videoUrl, thumbnail }: { videoUrl: string; thumbnail?: string }) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div
      onClick={() => {
        if (!isPlaying) setIsPlaying(true);
      }}
      className="group relative aspect-[9/16] overflow-hidden rounded-3xl border border-[#222222] bg-[#0e0e0e] transition-all cursor-pointer hover:border-neon/40 hover:shadow-[0_0_60px_-20px_rgba(149,236,0,0.3)] w-full shadow-2xl"
    >
      {isPlaying ? (
        <div className="absolute inset-0 z-20 bg-black">
          <video
            src={videoUrl}
            controls
            autoPlay
            playsInline
            className="h-full w-full object-cover"
          />
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsPlaying(false);
            }}
            className="absolute top-4 right-4 z-30 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-sm transition-all hover:bg-black/80 hover:scale-105"
          >
            ✕
          </button>
        </div>
      ) : (
        <>
          {thumbnail ? (
            <img
              src={thumbnail}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-102"
              alt="Case thumbnail"
            />
          ) : (
            <video
              src={`${videoUrl}#t=0.1`}
              preload="metadata"
              muted
              playsInline
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-102"
            />
          )}

          {/* Overlay gradient to keep it looking dark and premium */}
          <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:bg-black/5" />

          {/* Play button (only if not already included in the thumbnail) */}
          {!thumbnail && (
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-neon shadow-[0_0_40px_rgba(149,236,0,0.6)] transition-transform group-hover:scale-110">
                <Play className="h-6 w-6 translate-x-0.5 fill-black text-black" />
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}



function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-muted-foreground sm:flex-row">
        <p>Copyright © 2026 FA — Fazendo Acontecer</p>
        <div className="flex items-center gap-6">
          <a href="#" className="transition-colors hover:text-foreground">Termos de uso</a>
          <a href="#" className="transition-colors hover:text-foreground">Política de privacidade</a>
        </div>
      </div>
    </footer>
  );
}
