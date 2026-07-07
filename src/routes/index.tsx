import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { ArrowUpRight, Play } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

const LOGOS = [
  { name: "Prime Estética", serif: false },
  { name: "Harmonie", serif: true },
  { name: "Mariana Derme", serif: true },
  { name: "Bodyplastia", serif: false },
  { name: "Essenza", serif: true },
  { name: "Núcleo Facial", serif: false },
  { name: "Renovare", serif: true },
  { name: "Avanti", serif: false },
];

const CASES = [
  { tag: "Clínica de estética", headline: "Transformamos contatos em pacientes todos os meses", name: "Dra. Camila Torres" },
  { tag: "Harmonização facial", headline: "Encontramos gargalos que impediam novas avaliações", name: "Dr. Rafael Menezes" },
  { tag: "Estética avançada", headline: "Deixamos de depender apenas de indicação", name: "Instituto Vértice" },
  { tag: "Clínica premium", headline: "Organizamos o comercial e o acompanhamento", name: "Dra. Letícia Andrade" },
  { tag: "Procedimentos high ticket", headline: "Enxergamos onde as oportunidades se perdiam", name: "Núcleo Prime" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <Hero />
      <Cases />
      <Footer />
    </div>
  );
}

function Logo() {
  return (
    <a href="#topo" className="group flex items-center gap-2.5">
      <span className="relative flex h-9 w-9 items-center justify-center rounded-full border border-border bg-[#0a0a0a]">
        <span className="font-display text-[13px] font-bold tracking-tight text-foreground">FA</span>
        <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-neon glow-neon" />
      </span>
      <span className="hidden text-[11px] font-medium uppercase tracking-[0.24em] text-muted-foreground group-hover:text-foreground sm:inline">
        Fazendo Acontecer
      </span>
    </a>
  );
}

function Hero() {
  return (
    <section id="topo" className="relative">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-64 -left-40 h-[620px] w-[620px] rounded-full opacity-25 blur-[160px]"
          style={{ background: "radial-gradient(circle, #95EC00 0%, transparent 65%)" }}
        />
        <div
          className="absolute top-1/2 -right-60 h-[720px] w-[720px] rounded-full opacity-[0.12] blur-[180px]"
          style={{ background: "radial-gradient(circle, #ffffff 0%, transparent 70%)" }}
        />
        {/* faint dot grid */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1240px] px-6 pt-7 pb-20 lg:pt-9 lg:pb-28">
        <header className="flex items-center justify-between">
          <Logo />
          <a
            href="#form"
            className="group inline-flex items-center gap-1.5 text-[13px] font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-neon" />
            Diagnóstico gratuito
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </header>

        <div className="mt-16 grid gap-16 lg:mt-24 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
          {/* LEFT */}
          <div className="min-w-0">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-[#0d0d0d] py-1.5 pl-1.5 pr-3.5 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
              <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-neon">
                <span className="h-1 w-1 rounded-full bg-black" />
              </span>
              Para clínicas de alta performance
            </div>

            <h1 className="mt-7 font-display text-[2.5rem] font-medium leading-[1.02] tracking-[-0.03em] text-foreground sm:text-[3.25rem] lg:text-[4rem]">
              Um{" "}
              <span className="font-serif-display font-normal text-neon">Diagnóstico Estratégico</span>{" "}
              para gerar mais{" "}
              <span className="font-serif-display font-normal">pacientes qualificados</span>{" "}
              e organizar o crescimento da sua clínica nos{" "}
              <span className="text-neon">próximos 90 dias</span>.
            </h1>

            <p className="mt-7 max-w-xl text-[15px] leading-[1.7] text-muted-foreground sm:text-base">
              Mais do que atrair contatos, a FA ajuda clínicas de estética a identificarem gargalos na captação,
              atendimento, vendas e acompanhamento comercial — transformando oportunidades em pacientes reais.
            </p>

            {/* Social proof */}
            <div className="mt-14">
              <div className="flex items-center gap-4">
                <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
                <p className="text-[10.5px] font-medium uppercase tracking-[0.24em] text-muted-foreground">
                  Confiam na FA
                </p>
                <div className="h-px flex-1 bg-gradient-to-l from-border to-transparent" />
              </div>
              <div className="mt-7 grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4">
                {LOGOS.map((l) => (
                  <div
                    key={l.name}
                    className={`flex h-8 items-center text-[15px] tracking-tight text-muted-foreground/60 transition-colors hover:text-foreground ${
                      l.serif ? "font-serif-display text-[18px]" : "font-display font-semibold"
                    }`}
                  >
                    {l.name}
                  </div>
                ))}
              </div>
              <p className="mt-6 max-w-md text-[12.5px] leading-relaxed text-muted-foreground/70">
                Clínicas e profissionais da saúde estruturam crescimento com demanda, vendas e dados.
              </p>
            </div>
          </div>

          {/* RIGHT — Form */}
          <div id="form" className="lg:sticky lg:top-8">
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  );
}

function LeadForm() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputCls =
    "w-full rounded-lg border border-border/80 bg-[#0b0b0b] px-4 py-3.5 text-[14px] text-foreground placeholder:text-muted-foreground/50 outline-none transition-all focus:border-neon/60 focus:ring-2 focus:ring-neon/20";

  if (submitted) {
    return (
      <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-b from-[#161616] to-[#0e0e0e] p-10 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]">
        <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full bg-neon glow-neon">
          <ArrowUpRight className="h-6 w-6 text-black" />
        </div>
        <h3 className="font-display text-2xl font-semibold tracking-tight text-foreground">
          Solicitação recebida.
        </h3>
        <p className="mt-3 text-[14px] leading-relaxed text-muted-foreground">
          Em breve nossa equipe entra em contato para agendar seu Diagnóstico Estratégico.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="relative overflow-hidden rounded-3xl border border-[#242424] bg-gradient-to-b from-[#161616] to-[#0e0e0e] p-6 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)] sm:p-8"
    >
      {/* subtle top accent */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neon/60 to-transparent" />

      <div className="mb-7 flex items-start justify-between gap-4">
        <div>
          <p className="text-[10.5px] font-semibold uppercase tracking-[0.22em] text-neon">
            Vagas limitadas
          </p>
          <h2 className="mt-2.5 font-display text-[26px] font-semibold leading-[1.1] tracking-[-0.02em] text-foreground">
            Solicite seu{" "}
            <span className="font-serif-display font-normal">diagnóstico</span>{" "}
            gratuito
          </h2>
        </div>
        <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border">
          <span className="h-1.5 w-1.5 rounded-full bg-neon" />
        </span>
      </div>

      <div className="space-y-2.5">
        <input required type="text" placeholder="Nome completo" className={inputCls} />
        <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
          <input required type="tel" placeholder="WhatsApp" className={inputCls} />
          <input required type="email" placeholder="E-mail" className={inputCls} />
        </div>
        <input required type="text" placeholder="Nome da sua clínica" className={inputCls} />
        <input required type="text" placeholder="Cidade / Estado" className={inputCls} />

        <select required defaultValue="" className={inputCls}>
          <option value="" disabled>Qual o principal objetivo hoje?</option>
          <option>Atrair mais pacientes qualificados</option>
          <option>Melhorar o atendimento comercial</option>
          <option>Vender procedimentos de maior valor</option>
          <option>Organizar CRM e acompanhamento</option>
          <option>Aumentar previsibilidade de vendas</option>
          <option>Ainda não sei exatamente</option>
        </select>

        <select required defaultValue="" className={inputCls}>
          <option value="" disabled>Faturamento mensal aproximado</option>
          <option>Até R$30 mil / mês</option>
          <option>R$30 mil a R$80 mil / mês</option>
          <option>R$80 mil a R$150 mil / mês</option>
          <option>R$150 mil a R$300 mil / mês</option>
          <option>Acima de R$300 mil / mês</option>
        </select>

        <select required defaultValue="" className={inputCls}>
          <option value="" disabled>Já investe em tráfego pago?</option>
          <option>Sim, atualmente</option>
          <option>Já investi, mas parei</option>
          <option>Ainda não invisto</option>
          <option>Não sei responder</option>
        </select>
      </div>

      <button
        type="submit"
        className="group mt-6 inline-flex w-full items-center justify-between gap-2 rounded-lg bg-neon px-6 py-4 text-[12.5px] font-semibold uppercase tracking-[0.16em] text-black transition-all hover:bg-[#B6FF35] hover:shadow-[0_0_50px_-6px_rgba(149,236,0,0.6)]"
      >
        <span className="flex-1 text-center">Quero receber meu diagnóstico</span>
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </button>

      <p className="mt-4 text-center text-[11.5px] text-muted-foreground/80">
        Análise gratuita sujeita à disponibilidade da equipe FA.
      </p>
    </form>
  );
}

function Cases() {
  return (
    <section className="relative border-t border-border/60 bg-background py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full opacity-[0.08] blur-[160px]"
          style={{ background: "radial-gradient(circle, #95EC00 0%, transparent 70%)" }}
        />
      </div>

      <div className="relative mx-auto max-w-[1240px] px-6">
        <div className="flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-neon/40 bg-neon/5 px-4 py-1.5 text-[10.5px] font-semibold uppercase tracking-[0.22em] text-neon">
            <span className="h-1 w-1 rounded-full bg-neon" />
            Cases de sucesso
          </span>
          <h2 className="mt-6 font-display text-[2rem] font-medium leading-[1.05] tracking-[-0.03em] text-foreground sm:text-[2.75rem] lg:text-[3.25rem]">
            Nossos{" "}
            <span className="font-serif-display font-normal">resultados</span>{" "}
            falam por nós
          </h2>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CASES.slice(0, 3).map((c, i) => (
            <CaseCard key={i} {...c} />
          ))}
        </div>
        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:mx-auto lg:max-w-[66.67%] lg:grid-cols-2">
          {CASES.slice(3, 5).map((c, i) => (
            <CaseCard key={i} {...c} />
          ))}
        </div>

        <div className="mt-20 flex flex-col items-center gap-4">
          <a
            href="#form"
            className="group inline-flex items-center gap-3 rounded-full bg-neon px-8 py-4 text-[12.5px] font-semibold uppercase tracking-[0.16em] text-black transition-all hover:bg-[#B6FF35] hover:shadow-[0_0_50px_-6px_rgba(149,236,0,0.6)]"
          >
            Quero receber meu diagnóstico
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <p className="text-[12px] text-muted-foreground">
            Análise gratuita e sem compromisso.
          </p>
        </div>
      </div>
    </section>
  );
}

function CaseCard({ tag, headline, name }: { tag: string; headline: string; name: string }) {
  return (
    <div className="group relative aspect-[9/14] overflow-hidden rounded-2xl border border-border bg-[#0c0c0c] transition-all duration-500 hover:border-neon/40 hover:shadow-[0_0_80px_-20px_rgba(149,236,0,0.4)]">
      {/* Placeholder abstract portrait */}
      <div
        className="absolute inset-0 transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
        style={{
          background:
            "radial-gradient(ellipse 60% 55% at 50% 32%, #2a2a2a 0%, #151515 45%, #0a0a0a 75%), linear-gradient(180deg, #141414 0%, #050505 100%)",
        }}
      />
      {/* soft neon aura */}
      <div
        className="absolute inset-0 opacity-40 mix-blend-screen"
        style={{
          background:
            "radial-gradient(circle at 75% 20%, rgba(149,236,0,0.18), transparent 45%), radial-gradient(circle at 15% 85%, rgba(255,255,255,0.05), transparent 40%)",
        }}
      />
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 via-45% to-black/10" />

      {/* Tag */}
      <div className="absolute left-4 top-4 z-10">
        <span className="inline-flex items-center rounded-full border border-white/15 bg-black/50 px-3 py-1 text-[9.5px] font-semibold uppercase tracking-[0.18em] text-foreground backdrop-blur-md">
          {tag}
        </span>
      </div>

      {/* Play button */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="relative">
          <div className="absolute inset-0 -m-3 rounded-full bg-neon/20 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
          <div className="relative flex h-[68px] w-[68px] items-center justify-center rounded-full bg-neon shadow-[0_0_40px_rgba(149,236,0,0.55)] transition-transform duration-500 group-hover:scale-110">
            <Play className="h-6 w-6 translate-x-0.5 fill-black text-black" />
          </div>
        </div>
      </div>

      {/* Bottom content */}
      <div className="absolute inset-x-0 bottom-0 z-10 p-5">
        <p className="font-display text-[15px] font-medium leading-[1.25] tracking-[-0.01em] text-foreground">
          "{headline}"
        </p>
        <div className="mt-3 flex items-center justify-between">
          <span className="font-serif-display text-[14px] text-muted-foreground">
            {name}
          </span>
          <div className="flex items-center gap-1.5">
            <span className="text-[9.5px] font-bold tracking-[0.2em] text-foreground">FA</span>
            <span className="h-1 w-1 rounded-full bg-neon" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-[1240px] flex-col items-center justify-between gap-4 px-6 py-8 text-[13px] text-muted-foreground sm:flex-row">
        <p>
          © 2026{" "}
          <span className="font-display font-semibold text-foreground">FA</span>{" "}
          <span className="font-serif-display">Fazendo Acontecer</span>
        </p>
        <div className="flex items-center gap-8">
          <a href="#" className="transition-colors hover:text-foreground">Termos de uso</a>
          <a href="#" className="transition-colors hover:text-foreground">Política de privacidade</a>
        </div>
      </div>
    </footer>
  );
}
