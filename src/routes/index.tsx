import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, type FormEvent } from "react";
import { 
  ArrowRight, 
  ArrowLeft, 
  Play, 
  Check, 
  Instagram, 
  ChevronDown, 
  ChevronUp, 
  Loader2, 
  X, 
  Clock,
  TrendingUp,
  ShieldCheck,
  Target,
  Sparkles
} from "lucide-react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";

export const Route = createFileRoute("/")({
  component: Index,
});

// Dados reais do gráfico de faturamento da Dra. Lannay
const LANNAY_GROWTH_DATA = [
  { stage: "Fase Inicial", faturamento: 30, label: "R$ 30 mil/mês" },
  { stage: "Implementação FA", faturamento: 150, label: "R$ 150 mil/mês" },
  { stage: "Escala Full Face", faturamento: 320, label: "R$ 320 mil/mês" },
  { stage: "Pico Atual", faturamento: 500, label: "+R$ 500 mil/mês" },
];

// Tracking Helper
const trackCustomEvent = (eventName: string, params: Record<string, any> = {}) => {
  if (typeof window !== "undefined") {
    const win = window as any;
    if (typeof win.fbq === "function") {
      win.fbq("trackCustom", eventName, params);
    }
    if (win.dataLayer && Array.isArray(win.dataLayer)) {
      win.dataLayer.push({ event: eventName, ...params });
    }
  }
};

function Index() {
  const [activeVideoUrl, setActiveVideoUrl] = useState<string | null>(null);
  const [, setLeadName] = useState("");
  const [utms, setUtms] = useState({
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_content: "",
    utm_term: "",
    fbclid: "",
    gclid: ""
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const win = window as any;
      if (typeof win.fbq === "function") {
        win.fbq("track", "PageView");
        win.fbq("track", "ViewContent", { content_name: "Diagnostico Estrategico FA Facial" });
      }
    }

    const params = new URLSearchParams(window.location.search);
    const getParam = (...names: string[]) => {
      for (const name of names) {
        const val = params.get(name);
        if (val) return val;
      }
      return "";
    };

    const utmCampaign = getParam("utm_campaign", "campaign_name", "campaign_id", "campaign");
    const utmMedium = getParam("utm_medium", "adset_name", "adset_id", "adset");
    const utmContent = getParam("utm_content", "ad_name", "ad_id", "ad");
    const utmSource = getParam("utm_source", "source", "placement");

    setUtms({
      utm_source: utmSource,
      utm_medium: utmMedium,
      utm_campaign: utmCampaign,
      utm_content: utmContent,
      utm_term: getParam("utm_term", "keyword"),
      fbclid: getParam("fbclid"),
      gclid: getParam("gclid"),
      meta_campanha: utmCampaign,
      meta_conjunto: utmMedium,
      meta_anuncio: utmContent,
      meta_posicionamento: utmSource
    });

    let scroll50Fired = false;
    let scroll75Fired = false;

    const handleScrollTracking = () => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      if (scrollPercent >= 50 && !scroll50Fired) {
        scroll50Fired = true;
        trackCustomEvent("Scroll50");
      }
      if (scrollPercent >= 75 && !scroll75Fired) {
        scroll75Fired = true;
        trackCustomEvent("Scroll75");
      }
    };

    window.addEventListener("scroll", handleScrollTracking);
    return () => window.removeEventListener("scroll", handleScrollTracking);
  }, []);

  const handleOpenVideo = (videoUrl: string) => {
    trackCustomEvent("CaseVideoPlay", { video_url: videoUrl });
    setActiveVideoUrl(videoUrl);
  };

  const handleCloseVideo = () => {
    setActiveVideoUrl(null);
  };

  return (
    <div className="min-h-screen bg-[#050705] text-[#F4F6F1] font-sans selection:bg-[#8CFF00] selection:text-[#050705]">
      
      {/* Barra de Qualificação Superior */}
      <div className="bg-[#E10614] border-b border-red-800 py-3 px-4 flex items-center justify-center gap-2.5 text-xs sm:text-sm font-black text-[#FFFFFF] uppercase tracking-widest shrink-0 text-center shadow-md">
        <span className="h-2.5 w-2.5 rounded-full bg-[#FFFFFF] animate-pulse" />
        <span>DIAGNÓSTICO ESTRATÉGICO EXCLUSIVO PARA HARMONIZAÇÃO FACIAL E FULL FACE</span>
      </div>

      {/* 1. HERO COM FORMULÁRIO */}
      <Hero setLeadName={setLeadName} utms={utms} />

      {/* 2. DEPOIMENTO DA DRA. LANNAY */}
      <DepoimentoLannaySection onOpenVideo={handleOpenVideo} />

      {/* 3. GRÁFICO DE CRESCIMENTO DE FATURAMENTO */}
      <GraficoCrescimentoSection />

      {/* 4. COMO FUNCIONA O DIAGNÓSTICO */}
      <ComoFuncionaDiagnosticoSection />

      {/* 5. PERGUNTAS FREQUENTES */}
      <FaqSection />

      {/* 6. CTA FINAL */}
      <CtaFinalSection />

      {/* FOOTER */}
      <Footer />

      {/* CTA FIXO NO MOBILE */}
      <CtaFixoMobile />

      {/* Modal de Vídeo */}
      {activeVideoUrl && (
        <VideoModal videoUrl={activeVideoUrl} onClose={handleCloseVideo} />
      )}

    </div>
  );
}

// ==================== 1. HERO SECTION ====================
interface HeroProps {
  setLeadName: (val: string) => void;
  utms: any;
}

function Hero({ setLeadName, utms }: HeroProps) {
  const bulletPoints = [
    "Mais consultas de Full Face. Menos leads curiosos.",
    "Estratégia focada em procedimentos de alta margem.",
    "Tráfego orientado a agendamento e fechamento."
  ];

  return (
    <section id="topo" className="relative overflow-hidden bg-[#050705] pt-6 pb-12 lg:pt-10 lg:pb-16 min-h-[85vh] flex flex-col justify-center border-b border-[#252A25]">
      <div className="relative z-20 w-full mx-auto max-w-7xl px-5 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Esquerda: Copy Principal (58%) */}
          <div className="lg:col-span-7 flex flex-col text-left">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-md bg-[#0B0E0B] border border-[#252A25] px-3.5 py-1.5 text-[11px] font-black uppercase tracking-[0.2em] text-[#8CFF00]">
                <Sparkles className="h-3.5 w-3.5 text-[#8CFF00]" />
                DIAGNÓSTICO PARA ESPECIALISTAS EM FULL FACE
              </span>
            </div>

            <h1 className="mt-4 text-[34px] sm:text-[44px] lg:text-[52px] font-black leading-[1.1] tracking-tight text-[#FFFFFF]">
              Transforme seu tráfego em <span className="text-[#8CFF00]">consultas de Full Face</span> — e as consultas em lucro no procedimento.
            </h1>

            <p className="mt-5 text-[16px] sm:text-[18px] lg:text-[19px] leading-relaxed text-[#F4F6F1]/90 font-medium max-w-2xl">
              A FA estrutura posicionamento, criativos e campanhas para atrair pacientes mais qualificados, aumentar os agendamentos e escalar procedimentos de ticket alto.
            </p>

            {/* Bullet points */}
            <div className="mt-6 space-y-3 max-w-2xl">
              {bulletPoints.map((bp, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#8CFF00] mt-0.5 shadow-sm">
                    <Check className="h-3.5 w-3.5 text-[#050705] stroke-[3]" />
                  </div>
                  <span className="text-sm sm:text-base font-semibold text-[#F4F6F1]">{bp}</span>
                </div>
              ))}
            </div>

            {/* Prova Rápida Chamada */}
            <div className="mt-8 pt-6 border-t border-[#252A25] flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-[#8CFF00] animate-ping" />
              <p className="text-xs sm:text-sm font-semibold text-[#8CFF00] tracking-wide">
                Veja como a Dra. Lannay ultrapassou R$ 500 mil mensais com uma operação focada em Full Face.
              </p>
            </div>
          </div>

          {/* Direita: Card Formulário Off-White */}
          <div id="hero-form-wrapper" className="lg:col-span-5 w-full max-w-[460px] mx-auto lg:mx-0 scroll-mt-16">
            <MultistepFormCard setLeadName={setLeadName} utms={utms} formId="hero_form" />
          </div>

        </div>
      </div>
    </section>
  );
}

// FORMULÁRIO 2 ETAPAS INTEGRADO
interface MultistepFormCardProps {
  setLeadName: (val: string) => void;
  utms: any;
  formId: string;
}

function MultistepFormCard({ setLeadName, utms, formId }: MultistepFormCardProps) {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [instagram, setInstagram] = useState("");
  const [especialidade, setEspecialidade] = useState("Harmonização facial / Full Face");
  
  const [faturamento, setFaturamento] = useState("");
  const [investimento, setInvestimento] = useState("");
  const [gargalo, setGargalo] = useState("");
  const [prazo, setPrazo] = useState("");

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let input = e.target.value.replace(/\D/g, "");
    if (input.length > 11) input = input.substring(0, 11);
    
    let formatted = "";
    if (input.length > 0) {
      formatted = `(${input.substring(0, 2)}`;
    }
    if (input.length > 2) {
      formatted += `) ${input.substring(2, 7)}`;
    }
    if (input.length > 7) {
      formatted += `-${input.substring(7, 11)}`;
    }
    setPhone(formatted || input);
  };

  const handleNextStep = () => {
    if (!name || name.trim().length < 3) {
      alert("Por favor, informe seu nome completo.");
      return;
    }
    if (!phone || phone.replace(/\D/g, "").length < 10) {
      alert("Por favor, informe um WhatsApp válido com DDD.");
      return;
    }
    
    trackCustomEvent("FormStepComplete", { step: 1, form_id: formId });
    setStep(2);
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!instagram || instagram.trim().length < 2) {
      alert("Por favor, informe o Instagram da clínica.");
      return;
    }
    if (!especialidade) {
      alert("Por favor, selecione a principal especialidade.");
      return;
    }
    if (!faturamento || !investimento || !gargalo || !prazo) {
      alert("Por favor, preencha todos os campos da etapa de qualificação.");
      return;
    }

    setIsSubmitting(true);
    setLeadName(name);

    let score = 0;
    if (faturamento === "Entre R$ 35 mil e R$ 60 mil") score += 20;
    else if (faturamento === "Entre R$ 60 mil e R$ 100 mil") score += 40;
    else if (faturamento === "Entre R$ 100 mil e R$ 200 mil") score += 60;
    else if (faturamento === "Entre R$ 200 mil e R$ 500 mil") score += 80;
    else if (faturamento === "Acima de R$ 500 mil") score += 100;

    if (investimento === "Ainda não invisto") score += 5;
    else if (investimento === "Até R$ 3 mil") score += 10;
    else if (investimento === "Entre R$ 3 mil e R$ 7 mil") score += 20;
    else if (investimento === "Entre R$ 7 mil e R$ 15 mil") score += 30;
    else if (investimento === "Acima de R$ 15 mil") score += 40;
    else score += 5;

    let leadType: "A" | "B" | "C" | "D" = "C";
    if (score >= 90) leadType = "A";
    else if (score >= 60) leadType = "B";
    else if (score >= 35) leadType = "C";
    else leadType = "D";

    const payload = {
      timestamp: new Date().toLocaleString("pt-BR"),
      name: name,
      phone: phone,
      email: `${name.toLowerCase().replace(/\s+/g, "").replace(/[^a-z0-9]/g, "")}@exemplo.com`,
      clinicInstagram: instagram,
      clinicName: instagram,
      objective: gargalo,
      revenue: faturamento,
      traffic: investimento,
      score: score,
      leadType: leadType,

      nome: name,
      whatsapp: phone,
      instagram_clinica: instagram,
      especialidade: especialidade,
      faturamento_mensal: faturamento,
      investimento_marketing: investimento,
      objetivo_principal: gargalo,
      prazo_inicio: prazo,

      form_used: formId,
      
      // Meta Ads & UTMs principais
      meta_campanha: utms.meta_campanha || utms.utm_campaign,
      meta_conjunto: utms.meta_conjunto || utms.utm_medium,
      meta_anuncio: utms.meta_anuncio || utms.utm_content,
      meta_posicionamento: utms.meta_posicionamento || utms.utm_source,

      // Aliases em português para colunas diretas da planilha
      campanha: utms.meta_campanha || utms.utm_campaign,
      conjunto_anuncios: utms.meta_conjunto || utms.utm_medium,
      conjunto: utms.meta_conjunto || utms.utm_medium,
      anuncio: utms.meta_anuncio || utms.utm_content,
      posicionamento: utms.meta_posicionamento || utms.utm_source,

      // Mapeamento padrão UTM
      utm_source: utms.utm_source,
      utm_medium: utms.utm_medium,
      utm_campaign: utms.utm_campaign,
      utm_content: utms.utm_content,
      utm_term: utms.utm_term,
      fbclid: utms.fbclid,
      gclid: utms.gclid,
      pagina_origem: typeof window !== "undefined" ? window.location.href : "",
      data_horario: new Date().toLocaleString("pt-BR")
    };

    try {
      const WEBHOOK_URL = import.meta.env.VITE_SHEETS_WEBHOOK_URL || "https://script.google.com/macros/s/AKfycbxzxSGNIoE8D1gkCctxIdziyTBJ-1V8WKgB9A72eKpBNnwl9NheI2NzmBf_SayJAtwi6w/exec";
      
      await fetch(WEBHOOK_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(payload),
      });

      if (typeof window !== "undefined") {
        const win = window as any;
        if (typeof win.fbq === "function") {
          win.fbq("track", "Lead", {
            content_name: "Diagnostico Estrategico FA Facial",
            currency: "BRL",
            predicted_lead_type: `Lead ${leadType}`
          });
          win.fbq("trackCustom", "LeadForm", {
            content_name: "Diagnostico Estrategico FA Facial",
            form_used: formId,
            predicted_lead_type: `Lead ${leadType}`
          });
          win.fbq("trackCustom", `Lead ${leadType}`, {
            content_name: "Diagnostico Estrategico FA Facial",
            score: score
          });
        }
        if (win.dataLayer && Array.isArray(win.dataLayer)) {
          win.dataLayer.push({
            event: "lead_form_submitted",
            form_used: formId,
            lead_type: `Lead ${leadType}`
          });
        }

        window.location.href = "https://wa.link/wl1a3w";
      }
    } catch (error) {
      console.error("Erro ao enviar lead:", error);
      if (typeof window !== "undefined") {
        window.location.href = "https://wa.link/wl1a3w";
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputCls =
    "w-full h-[52px] rounded-lg border border-[#DDE2D9] bg-[#FFFFFF] px-4 text-sm text-[#050705] placeholder:text-[#667066]/70 outline-none transition-all focus:border-[#8CFF00] focus:ring-2 focus:ring-[#8CFF00]/40 font-medium";

  return (
    <div className="rounded-2xl border border-[#DDE2D9] bg-[#F4F6F1] p-6 sm:p-7 shadow-2xl relative text-left text-[#050705]">
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="inline-flex items-center gap-1.5 rounded bg-[#050705] px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-[#8CFF00]">
            <Clock className="h-3 w-3" />
            Leva cerca de 1 minuto
          </span>
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#667066]">
            Etapa {step} de 2
          </span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#050705] tracking-tight leading-tight">
          Descubra o que está travando suas vendas de Full Face
        </h2>
        <p className="mt-1.5 text-xs sm:text-sm text-[#667066] leading-relaxed">
          Responda em menos de um minuto e receba uma análise da sua operação.
        </p>
      </div>

      <div className="mb-5">
        <div className="h-2 w-full bg-[#DDE2D9] rounded-full overflow-hidden">
          <div 
            className="h-full bg-[#8CFF00] transition-all duration-300 rounded-full"
            style={{ width: `${(step / 2) * 100}%` }}
          />
        </div>
      </div>

      <form onSubmit={onSubmit} className="space-y-3.5">
        {step === 1 && (
          <div className="space-y-3.5">
            <div>
              <label className="block text-[11px] font-extrabold uppercase tracking-wider text-[#050705] mb-1">
                Nome Completo *
              </label>
              <input 
                required 
                type="text" 
                placeholder="Ex: Dra. Juliana Souza" 
                value={name}
                onFocus={() => trackCustomEvent("FormStart", { form_id: formId })}
                onChange={e => setName(e.target.value)}
                className={inputCls} 
              />
            </div>
            <div>
              <label className="block text-[11px] font-extrabold uppercase tracking-wider text-[#050705] mb-1">
                WhatsApp com DDD *
              </label>
              <input 
                required 
                type="tel" 
                placeholder="Ex: (11) 99999-9999" 
                value={phone}
                onChange={handlePhoneChange}
                className={inputCls} 
              />
            </div>
            
            <button
              type="button"
              onClick={handleNextStep}
              className="mt-2 w-full inline-flex h-[54px] items-center justify-center gap-2 rounded-lg bg-[#8CFF00] px-6 text-xs sm:text-sm font-black uppercase tracking-wider text-[#050705] transition-all hover:bg-[#68BF00] cursor-pointer shadow-md"
            >
              CONTINUAR PARA MINHA ANÁLISE
              <ArrowRight className="h-4.5 w-4.5 text-[#050705]" />
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-3">
            <div>
              <label className="block text-[11px] font-extrabold uppercase tracking-wider text-[#050705] mb-1">
                Instagram da Clínica *
              </label>
              <input 
                required 
                type="text" 
                placeholder="Ex: @clinicasouzaestetica" 
                value={instagram}
                onChange={e => setInstagram(e.target.value)}
                className={inputCls} 
              />
            </div>
            <div>
              <label className="block text-[11px] font-extrabold uppercase tracking-wider text-[#050705] mb-1">
                Principal Especialidade *
              </label>
              <select required value={especialidade} onChange={e => setEspecialidade(e.target.value)} className={inputCls}>
                <option value="Harmonização facial / Full Face">Harmonização facial / Full Face</option>
                <option value="Face to Face">Face to Face</option>
                <option value="Odontologia Estética / HOF">Odontologia Estética / HOF</option>
                <option value="Dermatologia Estética">Dermatologia Estética</option>
                <option value="Cirurgia Plástica Facial">Cirurgia Plástica Facial</option>
                <option value="Outra especialidade de alto ticket">Outra especialidade de alto ticket</option>
              </select>
            </div>
            <div>
              <label className="block text-[11px] font-extrabold uppercase tracking-wider text-[#050705] mb-1">
                Faturamento Médio Mensal *
              </label>
              <select required value={faturamento} onChange={e => setFaturamento(e.target.value)} className={inputCls}>
                <option value="" disabled>Selecione a faixa de faturamento</option>
                <option>Entre R$ 35 mil e R$ 60 mil</option>
                <option>Entre R$ 60 mil e R$ 100 mil</option>
                <option>Entre R$ 100 mil e R$ 200 mil</option>
                <option>Entre R$ 200 mil e R$ 500 mil</option>
                <option>Acima de R$ 500 mil</option>
              </select>
            </div>
            <div>
              <label className="block text-[11px] font-extrabold uppercase tracking-wider text-[#050705] mb-1">
                Investimento Atual em Marketing *
              </label>
              <select required value={investimento} onChange={e => setInvestimento(e.target.value)} className={inputCls}>
                <option value="" disabled>Selecione a verba de anúncios</option>
                <option>Ainda não invisto</option>
                <option>Até R$ 3 mil</option>
                <option>Entre R$ 3 mil e R$ 7 mil</option>
                <option>Entre R$ 7 mil e R$ 15 mil</option>
                <option>Acima de R$ 15 mil</option>
              </select>
            </div>
            <div>
              <label className="block text-[11px] font-extrabold uppercase tracking-wider text-[#050705] mb-1">
                Principal Gargalo da Operação *
              </label>
              <select required value={gargalo} onChange={e => setGargalo(e.target.value)} className={inputCls}>
                <option value="" disabled>Qual o maior desafio hoje?</option>
                <option>Qualidade dos leads (muito lead curioso)</option>
                <option>Agendamento de consultas de Full Face</option>
                <option>Conversão em procedimentos de ticket alto</option>
                <option>Posicionamento e atrair o paciente certo</option>
                <option>Previsibilidade de faturamento mensal</option>
                <option>Não sei identificar</option>
              </select>
            </div>
            <div>
              <label className="block text-[11px] font-extrabold uppercase tracking-wider text-[#050705] mb-1">
                Prazo Estimado para Iniciar *
              </label>
              <select required value={prazo} onChange={e => setPrazo(e.target.value)} className={inputCls}>
                <option value="" disabled>Selecione um prazo estimado</option>
                <option>Quero iniciar agora</option>
                <option>Nos próximos 30 dias</option>
                <option>Nos próximos 60 a 90 dias</option>
                <option>Estou pesquisando possibilidades</option>
              </select>
            </div>

            <div className="flex gap-2 pt-2">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="inline-flex h-[54px] w-14 shrink-0 items-center justify-center rounded-lg border border-[#DDE2D9] bg-[#FFFFFF] text-[#050705] hover:bg-[#DDE2D9] transition-all cursor-pointer"
              >
                <ArrowLeft className="h-5 w-5 text-[#050705]" />
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex h-[54px] flex-grow items-center justify-center gap-2 rounded-lg bg-[#8CFF00] px-4 text-xs sm:text-sm font-black uppercase tracking-wider text-[#050705] transition-all hover:bg-[#68BF00] cursor-pointer shadow-md disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin text-[#050705]" />
                    Processando...
                  </>
                ) : (
                  <>
                    QUERO MAIS CONSULTAS DE FULL FACE
                  </>
                )}
              </button>
            </div>
          </div>
        )}

        <div className="mt-4 pt-3 border-t border-[#DDE2D9] text-center space-y-1">
          <p className="text-xs font-bold text-[#050705]">
            Diagnóstico gratuito, sem compromisso e destinado a clínicas com operação validada.
          </p>
        </div>

      </form>
    </div>
  );
}

// ==================== 2. DEPOIMENTO DA DRA. LANNAY ====================
interface DepoimentoLannaySectionProps {
  onOpenVideo: (url: string) => void;
}

function DepoimentoLannaySection({ onOpenVideo }: DepoimentoLannaySectionProps) {
  const videoUrl = "https://fazendoacontecer.site/wp-content/uploads/2026/06/lannay.webm";
  const thumbnail = "/thumb lannay.webp";

  const scrollToForm = () => {
    trackCustomEvent("LannayCaseCTAClick");
    const element = document.getElementById("hero-form-wrapper");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="bg-[#050705] border-b border-[#252A25] py-14 lg:py-18 text-[#F4F6F1]">
      <div className="mx-auto max-w-5xl px-5 sm:px-6">
        
        <div className="text-center mb-10 max-w-3xl mx-auto">
          <span className="inline-flex items-center rounded-md bg-[#0B0E0B] border border-[#252A25] px-3.5 py-1 text-[11px] font-black uppercase tracking-[0.2em] text-[#8CFF00]">
            CASE REAL DE FULL FACE
          </span>
          <h2 className="mt-3.5 text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-[#FFFFFF]">
            Veja como a Dra. Lannay transformou sua operação com uma estratégia voltada para harmonização facial.
          </h2>
        </div>

        <div className="rounded-2xl border border-[#252A25] bg-[#0B0E0B] p-6 sm:p-9 flex flex-col md:flex-row items-center gap-8 lg:gap-10 shadow-2xl text-left max-w-4xl mx-auto">
          
          {/* Thumbnail do Vídeo com Play Button */}
          <div className="w-full md:w-[240px] shrink-0">
            <div 
              onClick={() => onOpenVideo(videoUrl)}
              className="group relative aspect-[9/16] w-full max-w-[210px] mx-auto rounded-xl border border-[#252A25] bg-[#050705] overflow-hidden cursor-pointer shadow-xl hover:border-[#8CFF00]/60 transition-all"
            >
              <img 
                src={thumbnail} 
                alt="Depoimento Dra. Lannay" 
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#8CFF00] text-[#050705] shadow-xl group-hover:scale-110 transition-transform">
                  <Play className="h-6 w-6 fill-[#050705] translate-x-0.5 text-[#050705]" />
                </div>
              </div>
            </div>
            <p className="mt-2 text-center text-[11px] font-bold text-[#8CFF00] uppercase tracking-wider">
              Clique para assistir ao depoimento
            </p>
          </div>

          {/* Dados e Apoio */}
          <div className="flex-1 flex flex-col justify-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#667066] block">
                FORTALEZA / CE — ODONTOLOGIA ESTÉTICA & HOF
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-[#FFFFFF] mt-1">
                Dra. Lannay
              </h3>
            </div>

            <div className="mt-4 p-4 rounded-xl border border-[#8CFF00]/30 bg-[#8CFF00]/5">
              <span className="text-xs uppercase font-extrabold tracking-widest text-[#8CFF00] block mb-1">
                Resultado principal em destaque
              </span>
              <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#8CFF00] block tracking-tight">
                Mais de R$ 500 mil em faturamento mensal
              </span>
            </div>

            <p className="mt-4 text-sm sm:text-base text-[#F4F6F1]/90 leading-relaxed font-medium">
              Com uma estratégia alinhando posicionamento, aquisição de pacientes e estrutura de conversão, a operação ganhou escala em procedimentos de harmonização facial.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => onOpenVideo(videoUrl)}
                className="inline-flex h-[48px] items-center justify-center gap-2 rounded-lg border border-[#252A25] bg-[#050705] px-5 text-xs font-black uppercase tracking-wider text-[#F4F6F1] hover:border-[#8CFF00] hover:text-[#8CFF00] transition-all cursor-pointer"
              >
                <Play className="h-4 w-4 fill-current" />
                Assistir Vídeo do Case
              </button>
              <button
                onClick={scrollToForm}
                className="inline-flex h-[48px] items-center justify-center gap-2 rounded-lg bg-[#8CFF00] px-6 text-xs font-black uppercase tracking-wider text-[#050705] hover:bg-[#68BF00] transition-all cursor-pointer shadow-md"
              >
                SOLICITAR MEU DIAGNÓSTICO
                <ArrowRight className="h-4 w-4 text-[#050705]" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

// ==================== 3. GRÁFICO DE CRESCIMENTO DE FATURAMENTO ====================
function GraficoCrescimentoSection() {
  return (
    <section className="bg-[#050705] border-b border-[#252A25] py-14 lg:py-18 text-[#F4F6F1]">
      <div className="mx-auto max-w-5xl px-5 sm:px-6">
        
        <div className="text-center mb-8 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 rounded-md bg-[#0B0E0B] border border-[#252A25] px-3.5 py-1 text-[11px] font-black uppercase tracking-[0.2em] text-[#8CFF00]">
            <TrendingUp className="h-3.5 w-3.5 text-[#8CFF00]" />
            ESCALA RECOMPENSADORA
          </span>
          <h2 className="mt-3.5 text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-[#FFFFFF]">
            Crescimento de faturamento da operação da Dra. Lannay
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#F4F6F1]/80 font-medium leading-relaxed max-w-2xl mx-auto">
            Um exemplo de como uma estrutura voltada para harmonização facial pode escalar quando marketing, posicionamento e conversão trabalham juntos.
          </p>
        </div>

        {/* Card do Gráfico com Design Premium Dark */}
        <div className="rounded-2xl border border-[#252A25] bg-[#0B0E0B] p-6 sm:p-8 shadow-2xl max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-[#252A25]">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#667066]">Evolução de Faturamento Mensal</span>
              <h3 className="text-xl font-black text-[#FFFFFF]">Dra. Lannay (Harmonização Facial)</h3>
            </div>
            <div className="flex items-center gap-2 bg-[#050705] border border-[#252A25] px-3 py-1.5 rounded-lg text-xs font-bold text-[#8CFF00]">
              <span className="h-2 w-2 rounded-full bg-[#8CFF00]" />
              R$ 30k ➔ +R$ 500k/mês
            </div>
          </div>

          {/* Gráfico Recharts */}
          <div className="w-full h-[280px] sm:h-[320px] pt-2">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={LANNAY_GROWTH_DATA} margin={{ top: 20, right: 30, left: 10, bottom: 0 }}>
                <defs>
                  <linearGradient id="neonGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8CFF00" stopOpacity={0.45} />
                    <stop offset="95%" stopColor="#8CFF00" stopOpacity={0.0} />
                  </linearGradient>
                </defs>
                <XAxis 
                  dataKey="stage" 
                  stroke="#667066" 
                  tickLine={false} 
                  axisLine={{ stroke: "#252A25" }}
                  tick={{ fill: "#F4F6F1", fontSize: 12, fontWeight: 700 }}
                />
                <YAxis 
                  stroke="#667066" 
                  tickLine={false} 
                  axisLine={{ stroke: "#252A25" }}
                  tick={{ fill: "#667066", fontSize: 11 }}
                  unit="k"
                />
                <Tooltip 
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      const data = payload[0].payload;
                      return (
                        <div className="bg-[#050705] border border-[#8CFF00] p-3 rounded-lg shadow-xl text-left">
                          <p className="text-xs font-bold text-[#667066] uppercase tracking-wider">{data.stage}</p>
                          <p className="text-lg font-black text-[#8CFF00] mt-0.5">{data.label}</p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Area 
                  type="monotone" 
                  dataKey="faturamento" 
                  stroke="#8CFF00" 
                  strokeWidth={3} 
                  fillOpacity={1} 
                  fill="url(#neonGradient)" 
                  dot={{ fill: "#050705", stroke: "#8CFF00", strokeWidth: 3, r: 6 }}
                  activeDot={{ r: 8, fill: "#8CFF00", stroke: "#FFFFFF", strokeWidth: 2 }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Texto de apoio abaixo do gráfico */}
          <div className="mt-8 pt-6 border-t border-[#252A25] text-center max-w-2xl mx-auto space-y-2">
            <p className="text-sm sm:text-base font-extrabold text-[#F4F6F1] leading-relaxed">
              O objetivo não é apenas gerar leads. É criar uma operação capaz de transformar demanda em consultas e consultas em procedimentos de maior margem.
            </p>
            <p className="text-[11px] font-medium text-[#667066]">
              * Os resultados variam conforme mercado, oferta, equipe, investimento e execução.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

// ==================== 4. COMO FUNCIONA O DIAGNÓSTICO ====================
function ComoFuncionaDiagnosticoSection() {
  const passos = [
    {
      num: "01",
      title: "Você preenche o formulário",
      desc: "Compartilha rapidamente algumas informações sobre sua clínica e o momento atual da operação."
    },
    {
      num: "02",
      title: "Nossa equipe faz a análise",
      desc: "Avaliamos posicionamento, captação, potencial de consulta e principais gargalos."
    },
    {
      num: "03",
      title: "Você recebe um direcionamento claro",
      desc: "Mostramos o que está travando seu crescimento e qual o próximo passo faz mais sentido."
    }
  ];

  return (
    <section className="bg-[#F4F6F1] border-b border-[#DDE2D9] py-14 lg:py-18 text-[#050705]">
      <div className="mx-auto max-w-5xl px-5 sm:px-6 text-center">
        
        <span className="inline-flex items-center gap-1.5 rounded-md bg-[#FFFFFF] border border-[#DDE2D9] px-3.5 py-1 text-[11px] font-black uppercase tracking-[0.2em] text-[#050705]">
          <Target className="h-3.5 w-3.5 text-[#050705]" />
          PASSO A PASSO
        </span>
        <h2 className="mt-3.5 text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-[#050705]">
          Como funciona o diagnóstico da sua operação
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 text-left">
          {passos.map((p, idx) => (
            <div key={idx} className="rounded-2xl border border-[#DDE2D9] bg-[#FFFFFF] p-7 shadow-sm flex flex-col justify-between hover:border-[#8CFF00] transition-colors">
              <div>
                <span className="block text-3xl font-black text-[#5FAE00] mb-3">{p.num}</span>
                <h3 className="text-lg font-extrabold text-[#050705]">{p.title}</h3>
                <p className="mt-2 text-xs sm:text-sm text-[#667066] leading-relaxed font-medium">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <p className="text-xs text-[#667066] font-bold">
            * Sem compromisso de contratação.
          </p>
        </div>

      </div>
    </section>
  );
}

// ==================== 5. PERGUNTAS FREQUENTES (FAQ) ====================
function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleIndex = (idx: number) => {
    setActiveIndex(prev => prev === idx ? null : idx);
  };

  const faqs = [
    {
      q: "Esse diagnóstico é realmente gratuito?",
      a: "Sim. A análise inicial é gratuita e sem compromisso."
    },
    {
      q: "A FA atende clínicas e profissionais de harmonização facial?",
      a: "Sim. Esta página foi criada especificamente para especialistas e clínicas que atuam com harmonização facial, Full Face e procedimentos faciais de maior valor."
    },
    {
      q: "O foco é gerar pacientes para consulta ou apenas leads?",
      a: "O objetivo é estruturar uma operação para atrair pacientes com potencial de consulta e fechamento, e não apenas aumentar volume de leads sem qualidade."
    },
    {
      q: "Preciso já investir em tráfego?",
      a: "Não necessariamente. O diagnóstico serve justamente para entender o momento atual da operação e identificar o melhor próximo passo."
    },
    {
      q: "A FA garante resultado?",
      a: "Não existe garantia de resultado. O desempenho depende de fatores como mercado, oferta, investimento, equipe e execução. O papel da FA é estruturar a estratégia para aumentar as chances de crescimento com consistência."
    },
    {
      q: "O que acontece depois que eu preencher?",
      a: "Nossa equipe analisa suas respostas e entra em contato para aprofundar o diagnóstico da operação."
    }
  ];

  return (
    <section className="bg-[#050705] border-b border-[#252A25] py-14 lg:py-18 text-[#F4F6F1]">
      <div className="mx-auto max-w-3xl px-5 sm:px-6">
        
        <div className="text-center mb-10 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 rounded-md bg-[#0B0E0B] border border-[#252A25] px-3.5 py-1 text-[11px] font-black uppercase tracking-[0.2em] text-[#8CFF00]">
            <ShieldCheck className="h-3.5 w-3.5 text-[#8CFF00]" />
            TIRA-DÚVIDAS
          </span>
          <h2 className="mt-3.5 text-2xl sm:text-3xl font-black tracking-tight text-[#FFFFFF]">
            Perguntas frequentes
          </h2>
        </div>

        <div className="space-y-3 text-left">
          {faqs.map((f, idx) => {
            const isOpen = activeIndex === idx;
            return (
              <div key={idx} className="rounded-xl border border-[#252A25] bg-[#0B0E0B] overflow-hidden transition-colors hover:border-[#252A25]/80">
                <button
                  onClick={() => toggleIndex(idx)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left font-bold text-sm sm:text-base text-[#F4F6F1] hover:bg-[#050705] transition-colors cursor-pointer"
                >
                  <span className="pr-4">{f.q}</span>
                  {isOpen ? (
                    <ChevronUp className="h-5 w-5 text-[#8CFF00] shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-[#8CFF00] shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="p-4 sm:p-5 border-t border-[#252A25] bg-[#050705] text-xs sm:text-sm text-[#F4F6F1]/85 leading-relaxed font-medium animate-fade-in">
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

// ==================== 6. CTA FINAL ====================
function CtaFinalSection() {
  const scrollToForm = () => {
    trackCustomEvent("FinalSectionCTAClick");
    const element = document.getElementById("hero-form-wrapper");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="final-form-wrapper" className="bg-[#050705] py-14 lg:py-20 text-[#F4F6F1] scroll-mt-16 border-t border-[#252A25]">
      <div className="mx-auto max-w-3xl px-5 sm:px-6 text-center">
        
        <span className="inline-flex items-center rounded-md bg-[#0B0E0B] border border-[#252A25] px-3.5 py-1 text-[11px] font-black uppercase tracking-[0.2em] text-[#8CFF00]">
          PRÓXIMO PASSO
        </span>
        <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-[#FFFFFF] max-w-2xl mx-auto">
          Se você quer mais pacientes de harmonização facial no consultório, o primeiro passo é descobrir o que está travando sua operação.
        </h2>
        <p className="mt-4 text-sm sm:text-base text-[#F4F6F1]/80 font-medium leading-relaxed max-w-xl mx-auto">
          Solicite um diagnóstico gratuito e entenda como sua clínica pode crescer com mais consultas e mais potencial de faturamento em Full Face.
        </p>

        <div className="mt-8">
          <button
            onClick={scrollToForm}
            className="inline-flex h-[56px] w-full sm:w-auto items-center justify-center gap-2.5 rounded-xl bg-[#8CFF00] px-9 text-xs sm:text-sm font-black uppercase tracking-wider text-[#050705] hover:bg-[#68BF00] transition-all cursor-pointer shadow-xl hover:scale-[1.02]"
          >
            QUERO RECEBER MEU DIAGNÓSTICO
            <ArrowRight className="h-5 w-5 text-[#050705]" />
          </button>
        </div>

        <p className="mt-5 text-xs font-semibold text-[#667066]">
          Gratuito, sem compromisso e destinado a clínicas com operação validada.
        </p>

      </div>
    </section>
  );
}

// ==================== FOOTER & COMPONENTES AUXILIARES ====================
function Footer() {
  return (
    <footer className="border-t border-[#252A25] bg-[#050705] text-[#667066]">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 border-b border-[#252A25]/40 text-xs font-semibold">
        
        <div className="flex items-center gap-2">
          <span className="text-xl font-black text-[#F4F6F1]">FA</span>
          <span className="h-1.5 w-1.5 rounded-full bg-[#8CFF00]" />
          <span className="font-bold text-[#F4F6F1]">Fazendo Acontecer — Harmonização Facial</span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6">
          <a href="#" className="hover:text-[#F4F6F1] transition-colors">Termos de uso</a>
          <a href="#" className="hover:text-[#F4F6F1] transition-colors">Política de privacidade</a>
          <a 
            href={import.meta.env.VITE_INSTAGRAM_URL || "https://www.instagram.com/fazendoacontecer.ofc/"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-[#8CFF00] transition-colors"
          >
            <Instagram className="h-3.5 w-3.5" />
            Instagram
          </a>
        </div>

      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-6 py-6 text-center text-[10px] text-[#667066] space-y-2 font-medium">
        <p className="max-w-4xl mx-auto leading-relaxed">
          Os resultados apresentados referem-se a casos específicos e não representam garantia de desempenho. Os resultados podem variar conforme mercado, investimento, oferta, equipe, atendimento e execução.
        </p>
        <p>
          Copyright © 2026 Fazendo Acontecer — Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

function CtaFixoMobile() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroForm = document.getElementById("hero-form-wrapper");
      const finalForm = document.getElementById("final-form-wrapper");

      let isHeroFormVisible = false;
      let isFinalFormVisible = false;

      if (heroForm) {
        const rect = heroForm.getBoundingClientRect();
        isHeroFormVisible = rect.top < window.innerHeight && rect.bottom > 0;
      }

      if (finalForm) {
        const rect = finalForm.getBoundingClientRect();
        isFinalFormVisible = rect.top < window.innerHeight && rect.bottom > 0;
      }

      const pastHero = window.scrollY > 250;
      setIsVisible(pastHero && !isHeroFormVisible && !isFinalFormVisible);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToForm = () => {
    trackCustomEvent("MobileStickyCTAClick");
    const element = document.getElementById("hero-form-wrapper");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={`fixed bottom-0 left-0 w-full z-40 p-2.5 bg-[#050705]/95 border-t border-[#252A25] md:hidden backdrop-blur-md transition-all duration-300 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none"}`}>
      <button
        onClick={scrollToForm}
        className="w-full h-12 inline-flex items-center justify-center gap-2 rounded-lg bg-[#8CFF00] text-xs font-black uppercase tracking-wider text-[#050705] shadow-lg cursor-pointer font-bold"
      >
        QUERO RECEBER MEU DIAGNÓSTICO
        <ArrowRight className="h-4 w-4 text-[#050705]" />
      </button>
    </div>
  );
}

interface VideoModalProps {
  videoUrl: string;
  onClose: () => void;
}

function VideoModal({ videoUrl, onClose }: VideoModalProps) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-fade-in">
      <div className="relative w-full max-w-[320px] aspect-[9/16] rounded-2xl border border-[#252A25] bg-[#050705] overflow-hidden shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 flex h-8 w-8 items-center justify-center rounded-full bg-black/70 text-[#F4F6F1] border border-[#252A25] hover:bg-[#8CFF00] hover:text-[#050705] transition-colors cursor-pointer"
        >
          <X className="h-4 w-4" />
        </button>
        <video
          src={videoUrl}
          controls
          autoPlay
          playsInline
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}
