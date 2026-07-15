import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useRef, type FormEvent, type ReactNode } from "react";
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
  ShieldCheck, 
  Clock,
  Sparkles,
  Lock,
  TrendingUp,
  Target,
  FileSearch,
  CheckCircle2
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

interface CaseStudy {
  id: string;
  name: string;
  city: string;
  specialty: string;
  videoUrl: string;
  thumbnail: string;
  headline: ReactNode;
  previousScenario: string;
  strategy: string;
  stats: {
    investment: string;
    revenue: string;
    roas: string;
  };
  actions: string[];
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: "lannay",
    name: "Drª Lannay",
    city: "FORTALEZA/CE",
    specialty: "Odontologia Estética & Harmonização Facial",
    videoUrl: "https://fazendoacontecer.site/wp-content/uploads/2026/06/lannay.webm",
    thumbnail: "/thumb lannay.webp",
    headline: (
      <>
        Multiplicou seus resultados de consultório, saindo de <span className="font-bold">R$ 30 mil</span> para mais de <span className="font-extrabold text-[#5FAE00]">R$ 500 mil/mês</span>.
      </>
    ),
    previousScenario: "Faturamento estagnado em R$ 30 mil/mês, dependente de indicações de boca em boca e sem controle de novos pacientes.",
    strategy: "Estruturação completa da captação ativa por procedimentos de alta rentabilidade e treinamento prático de fechamentos comerciais.",
    stats: {
      investment: "R$ 12 mil",
      revenue: "R$ 500 mil+",
      roas: "41x Mídia",
    },
    actions: [
      "Processo de pré-atendimento comercial estruturado para resposta em poucos minutos.",
      "Captação constante de leads qualificados buscando procedimentos estéticos específicos.",
      "Clínica com agenda previsível e metas financeiras alcançadas com consistência."
    ],
  },
  {
    id: "marcela",
    name: "Drª Marcela",
    city: "SÃO PAULO/SP",
    specialty: "Dermatologia Estética",
    videoUrl: "https://fazendoacontecer.site/wp-content/uploads/2026/01/dep-dramarcela-1.webm",
    thumbnail: "/thumb marcela.webp",
    headline: (
      <>
        Largou plantões exaustivos em hospitais e hoje fatura mais de <span className="font-extrabold text-[#5FAE00]">R$ 220 mil/mês</span> no consultório próprio.
      </>
    ),
    previousScenario: "Dependência de plantões em hospitais para complementar renda, restando pouco tempo para o consultório particular.",
    strategy: "Posicionamento digital de autoridade focado em tratamentos faciais de alto ticket com triagem comercial rápida.",
    stats: {
      investment: "R$ 10 mil",
      revenue: "R$ 220 mil+",
      roas: "22x Mídia",
    },
    actions: [
      "Transição segura de carreira, abandonando definitivamente a rotina de plantões.",
      "Atração de pacientes qualificados para pacotes de tratamentos estéticos premium.",
      "Qualificação comercial da recepção antes mesmo da primeira consulta."
    ],
  },
  {
    id: "pedro",
    name: "Dr. Pedro Lima",
    city: "VILA VELHA/ES",
    specialty: "Harmonização Facial & Corporal",
    videoUrl: "https://fazendoacontecer.site/wp-content/uploads/2026/07/uri_ifs___V_MO7-PeBSuqG1Oeps5YgIKtnJW3-9mhF2JQC4TC9nHHU.webm",
    thumbnail: "/thumb dr pedro.png",
    headline: (
      <>
        Faturou <span className="font-extrabold text-[#5FAE00]">R$ 318 mil</span> em Janeiro (mês tradicionalmente lento) com investimento planejado de anúncios.
      </>
    ),
    previousScenario: "Instabilidade e queda de faturamento sazonal em períodos de início de ano.",
    strategy: "Implementação de cadências ativas de contato e automação comercial no CRM para reengajamento da base.",
    stats: {
      investment: "R$ 21 mil",
      revenue: "R$ 318 mil",
      roas: "15x Mídia",
    },
    actions: [
      "Quebra da barreira de sazonalidade comercial com atração ativa.",
      "Acompanhamento em tempo real das métricas do CRM pelo painel integrado.",
      "Processo de vendas estruturado para evitar desperdício de contatos antigos."
    ],
  },
  {
    id: "cristiano",
    name: "Dr. Cristiano",
    city: "BRASÍLIA/DF",
    specialty: "Cirurgia Plástica & Estética Avançada",
    videoUrl: "https://fazendoacontecer.site/wp-content/uploads/2026/07/uri_ifs___V_015JtsY5elTU0ZxaDbcJI6sQBqUYryenRf0yFICm7Gw.webm",
    thumbnail: "/thumb cris.png",
    headline: (
      <>
        Ultrapassou <span className="font-extrabold text-[#5FAE00]">R$ 550 mil</span> nos seus 3 primeiros meses de parceria comercial.
      </>
    ),
    previousScenario: "Atendimento comercial desorganizado e dependência do tempo do médico na triagem.",
    strategy: "Internalização comercial completa com triagem especializada e automação de agendamentos.",
    stats: {
      investment: "R$ 20 mil",
      revenue: "R$ 550 mil",
      roas: "27x Mídia",
    },
    actions: [
      "Foco médico total nas cirurgias e procedimentos de alta complexidade.",
      "Triagem especializada eliminando ruídos no agendamento.",
      "Escala acelerada nos primeiros 90 dias de implantação."
    ],
  },
];

// Funções utilitárias para tracking
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
  const [leadName, setLeadName] = useState("");
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
    // PageView Event Tracking Confirmation
    if (typeof window !== "undefined") {
      const win = window as any;
      if (typeof win.fbq === "function") {
        win.fbq("track", "PageView");
        win.fbq("track", "ViewContent", { content_name: "Diagnostico FA 360" });
      }
    }

    const params = new URLSearchParams(window.location.search);
    const getParam = (name: string) => params.get(name) || "";
    setUtms({
      utm_source: getParam("utm_source"),
      utm_medium: getParam("utm_medium"),
      utm_campaign: getParam("utm_campaign"),
      utm_content: getParam("utm_content"),
      utm_term: getParam("utm_term"),
      fbclid: getParam("fbclid"),
      gclid: getParam("gclid")
    });

    // Tracking de Scroll Depth
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
      
      {/* 1. Barra de Qualificação Superior (Discreta e Escura) */}
      <div className="bg-[#0B0E0B] border-b border-[#252A25] py-2.5 px-4 flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-[#F4F6F1] uppercase tracking-wider shrink-0 text-center">
        <span className="h-2 w-2 rounded-full bg-[#8CFF00] animate-pulse" />
        <span>DIAGNÓSTICO GRATUITO PARA CLÍNICAS COM FATURAMENTO A PARTIR DE R$ 35 MIL/MÊS</span>
      </div>

      {/* 2. Header Simples */}
      <Header />

      {/* 3. Hero Section com Formulário */}
      <Hero setLeadName={setLeadName} utms={utms} />

      {/* 4. Faixa de Prova Imediatamente Após o Hero */}
      <FaixaProvaSection />

      {/* 5. Case Principal (Drª Lannay) */}
      <CasePrincipalSection onOpenVideo={handleOpenVideo} />

      {/* 6. Seção "O Que Você Recebe" */}
      <OQueVoceRecebeSection />

      {/* 7. Seção de Identificação do Problema */}
      <ProblemasSection />

      {/* 8. Para Quem É */}
      <ParaQuemSection />

      {/* 9. Cases Secundários */}
      <CasesSecundariosSection onOpenVideo={handleOpenVideo} />

      {/* 10. Como Funciona */}
      <ComoFuncionaSection />

      {/* 11. Duas Formas de Atuação */}
      <FormasAtuacaoSection />

      {/* 12. FAQ Accordion */}
      <FaqSection />

      {/* 13. Formulário Final */}
      <FormularioFinalSection setLeadName={setLeadName} utms={utms} />

      {/* 14. Footer */}
      <Footer />

      {/* 15. CTA Fixo no Mobile */}
      <CtaFixoMobile />

      {/* Modal de Depoimento em Vídeo */}
      {activeVideoUrl && (
        <VideoModal videoUrl={activeVideoUrl} onClose={handleCloseVideo} />
      )}

    </div>
  );
}

// ==================== COMPONENTES DETALHADOS ====================

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToForm = () => {
    trackCustomEvent("HeaderCTAClick");
    const element = document.getElementById("hero-form-wrapper");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={`sticky top-0 left-0 w-full z-30 transition-all duration-300 ${isScrolled ? "bg-[#050705]/90 border-b border-[#252A25] py-3.5 backdrop-blur-md" : "bg-[#050705] border-b border-[#252A25]/40 py-4"}`}>
      <div className="mx-auto max-w-7xl px-5 sm:px-6 flex items-center justify-between">
        
        {/* Logo FA */}
        <div className="flex items-center gap-2">
          <span className="text-xl sm:text-2xl font-black tracking-tight text-[#F4F6F1]">
            FA
          </span>
          <span className="h-2 w-2 rounded-full bg-[#8CFF00]" />
          <span className="hidden sm:inline text-xs font-semibold uppercase tracking-widest text-[#667066]">
            Fazendo Acontecer
          </span>
        </div>

        {/* Texto discreto no centro */}
        <p className="hidden md:block text-xs font-semibold uppercase tracking-widest text-[#667066]">
          Crescimento para clínicas
        </p>

        {/* Botão à direita */}
        <button 
          onClick={scrollToForm}
          className="inline-flex h-10 items-center justify-center rounded-lg border border-[#8CFF00] px-4 text-xs font-bold uppercase tracking-wider text-[#8CFF00] hover:bg-[#8CFF00] hover:text-[#050705] transition-all duration-200 cursor-pointer"
        >
          Diagnóstico gratuito
        </button>

      </div>
    </header>
  );
}

interface HeroProps {
  setLeadName: (val: string) => void;
  utms: any;
}

function Hero({ setLeadName, utms }: HeroProps) {
  const chips = [
    "Harmonização facial",
    "Full Face",
    "Harmonização corporal",
    "Odontologia estética",
    "Estética avançada"
  ];

  return (
    <section id="topo" className="relative overflow-hidden bg-[#050705] pt-8 pb-14 lg:py-16">
      
      {/* Brilhos radial verde sutil */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div 
          className="absolute top-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full opacity-[0.04] blur-[120px]" 
          style={{ background: "radial-gradient(circle, #8CFF00 0%, transparent 70%)" }} 
        />
      </div>

      <div className="relative z-20 w-full mx-auto max-w-7xl px-5 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          
          {/* Coluna Esquerda: Texto e Benefícios (54%) */}
          <div className="lg:col-span-7 flex flex-col text-left pt-2">
            
            {/* Eyebrow */}
            <div>
              <span className="inline-flex items-center rounded-md bg-[#0B0E0B] border border-[#252A25] px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#8CFF00]">
                DIAGNÓSTICO ESTRATÉGICO FA
              </span>
            </div>

            {/* Headline Principal */}
            <h1 className="mt-5 text-[32px] sm:text-[42px] lg:text-[46px] xl:text-[52px] font-black leading-[1.1] tracking-tight text-[#FFFFFF]">
              Antes de investir mais um real em tráfego, descubra onde sua clínica está <span className="text-[#8CFF00]">perdendo agendamentos, procedimentos e faturamento.</span>
            </h1>

            {/* Subheadline */}
            <p className="mt-5 text-[16px] sm:text-[18px] leading-relaxed text-[#F4F6F1]/90 font-medium max-w-2xl">
              Em uma análise gratuita, a FA avalia seu posicionamento, sua geração de demanda e sua conversão para apontar os gargalos que mais limitam o crescimento da operação.
            </p>
            
            {/* Benefícios (Apenas 3) */}
            <div className="mt-7 space-y-3 max-w-xl">
              <div className="flex items-start gap-3">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#8CFF00]/15 mt-0.5">
                  <Check className="h-3.5 w-3.5 text-[#8CFF00]" />
                </div>
                <span className="text-sm font-semibold text-[#F4F6F1]">
                  Identifique onde seus leads deixam de avançar.
                </span>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#8CFF00]/15 mt-0.5">
                  <Check className="h-3.5 w-3.5 text-[#8CFF00]" />
                </div>
                <span className="text-sm font-semibold text-[#F4F6F1]">
                  Descubra o que deve ser corrigido primeiro.
                </span>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#8CFF00]/15 mt-0.5">
                  <Check className="h-3.5 w-3.5 text-[#8CFF00]" />
                </div>
                <span className="text-sm font-semibold text-[#F4F6F1]">
                  Entenda qual estrutura faz sentido para o momento da clínica.
                </span>
              </div>
            </div>

            {/* Público e Chips */}
            <div className="mt-8 pt-6 border-t border-[#252A25]/60 max-w-xl">
              <p className="text-xs font-bold uppercase tracking-wider text-[#667066]">
                Para médicos, cirurgiões-dentistas e empresários de clínicas com operação validada.
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {chips.map((chip, idx) => (
                  <span 
                    key={idx} 
                    className="rounded-md border border-[#252A25] bg-[#0B0E0B] px-3 py-1 text-xs font-semibold text-[#F4F6F1]"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>

            {/* Prova Imediata na Primeira Dobra */}
            <div className="mt-6 pt-5 border-t border-[#252A25]/40 max-w-xl">
              <p className="text-xs font-bold text-[#F4F6F1] leading-relaxed">
                Cases reais de clínicas que ultrapassaram R$ 220 mil, R$ 318 mil, R$ 500 mil e R$ 550 mil em faturamento mensal.
              </p>
              <p className="mt-1 text-[11px] text-[#667066]">
                * Resultados específicos de cada operação. Não representam garantia de desempenho.
              </p>
            </div>

          </div>

          {/* Coluna Direita: Formulário Card Off-White (46%) */}
          <div id="hero-form-wrapper" className="lg:col-span-5 w-full max-w-lg mx-auto lg:mx-0 scroll-mt-20">
            <MultistepFormCard setLeadName={setLeadName} utms={utms} formId="hero" />
          </div>

        </div>
      </div>
    </section>
  );
}

// Componente do Formulário de 2 Etapas em Card Off-White
interface MultistepFormCardProps {
  setLeadName: (val: string) => void;
  utms: any;
  formId: string;
}

function MultistepFormCard({ setLeadName, utms, formId }: MultistepFormCardProps) {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  // Campos do Formulário (Preservados exatamente)
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [instagram, setInstagram] = useState("");
  const [especialidade, setEspecialidade] = useState("");
  
  const [faturamento, setFaturamento] = useState("");
  const [investimento, setInvestimento] = useState("");
  const [gargalo, setGargalo] = useState("");
  const [prazo, setPrazo] = useState("");

  // Máscara de WhatsApp (XX) XXXXX-XXXX
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

    // Score de qualificação mantido rigorosamente
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

    // Payload idêntico ao CRM Dot.Sales
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

      // Disparar Pixel somente após confirmação do envio ao CRM
      if (typeof window !== "undefined") {
        const win = window as any;
        if (typeof win.fbq === "function") {
          win.fbq("track", "Lead", {
            content_name: "Diagnostico FA 360",
            currency: "BRL",
            predicted_lead_type: `Lead ${leadType}`
          });
          win.fbq("trackCustom", "LeadForm", {
            content_name: "Diagnostico FA 360",
            predicted_lead_type: `Lead ${leadType}`
          });
          win.fbq("trackCustom", `Lead ${leadType}`, {
            content_name: "Diagnostico FA 360",
            score: score
          });
        }
        if (win.dataLayer && Array.isArray(win.dataLayer)) {
          win.dataLayer.push({
            event: "lead_form_submitted",
            lead_type: `Lead ${leadType}`
          });
        }

        // Redirecionamento direto para o WhatsApp do comercial
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
    "w-full h-[54px] rounded-lg border border-[#DDE2D9] bg-[#FFFFFF] px-4 text-sm text-[#050705] placeholder:text-[#667066]/70 outline-none transition-all focus:border-[#8CFF00] focus:ring-2 focus:ring-[#8CFF00]/40 font-medium";

  return (
    <div ref={formRef} className="rounded-2xl border border-[#DDE2D9] bg-[#F4F6F1] p-6 sm:p-7 shadow-2xl relative text-left text-[#050705]">
      
      {/* Título e Subtítulo do Card */}
      <div className="mb-5">
        <div className="flex items-center justify-between mb-2">
          <span className="inline-flex items-center gap-1.5 rounded-md bg-[#050705] px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-[#8CFF00]">
            <Clock className="h-3 w-3" />
            Leva menos de 1 minuto
          </span>
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#667066]">
            Etapa {step} de 2
          </span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#050705] tracking-tight leading-tight">
          Receba uma análise dos gargalos da sua clínica
        </h2>
        <p className="mt-1.5 text-xs sm:text-sm text-[#667066] leading-relaxed">
          Preencha as informações abaixo. Nossa equipe analisará o momento da sua operação antes de entrar em contato.
        </p>
      </div>

      {/* Progresso do Formulário */}
      <div className="mb-5">
        <div className="h-2 w-full bg-[#DDE2D9] rounded-full overflow-hidden">
          <div 
            className="h-full bg-[#8CFF00] transition-all duration-300 rounded-full"
            style={{ width: `${(step / 2) * 100}%` }}
          />
        </div>
      </div>

      <form onSubmit={onSubmit} className="space-y-4">
        
        {/* ETAPA 1: Identificação Rápida */}
        {step === 1 && (
          <div className="space-y-4 animate-fade-in">
            <div>
              <label className="block text-[11px] font-extrabold uppercase tracking-wider text-[#050705] mb-1.5">
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
              <label className="block text-[11px] font-extrabold uppercase tracking-wider text-[#050705] mb-1.5">
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
              className="mt-2 w-full inline-flex h-[54px] items-center justify-center gap-2 rounded-lg bg-[#8CFF00] px-6 text-xs sm:text-sm font-black uppercase tracking-wider text-[#050705] transition-all hover:bg-[#5FAE00] hover:text-white cursor-pointer shadow-md"
            >
              CONTINUAR
              <ArrowRight className="h-4.5 w-4.5" />
            </button>
          </div>
        )}

        {/* ETAPA 2: Qualificação Operacional */}
        {step === 2 && (
          <div className="space-y-3.5 animate-fade-in">
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
                <option value="" disabled>Selecione uma especialidade</option>
                <option>Harmonização facial</option>
                <option>Full Face / Face to Face</option>
                <option>Harmonização corporal</option>
                <option>Remodelação corporal</option>
                <option>Procedimentos glúteos</option>
                <option>Odontologia estética</option>
                <option>Dermatologia estética</option>
                <option>Cirurgia plástica</option>
                <option>Emagrecimento</option>
                <option>Estética avançada</option>
                <option>Outra especialidade</option>
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
                <option>Posicionamento e conteúdo</option>
                <option>Geração de leads</option>
                <option>Qualidade dos leads</option>
                <option>Agendamento de consultas</option>
                <option>Atendimento dos contatos</option>
                <option>Follow-up</option>
                <option>Conversão em procedimentos</option>
                <option>Falta de dados</option>
                <option>Dependência de indicações</option>
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

            <div className="flex gap-2.5 pt-2">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="inline-flex h-[54px] w-14 shrink-0 items-center justify-center rounded-lg border border-[#DDE2D9] bg-[#FFFFFF] text-[#050705] hover:bg-[#DDE2D9] transition-all cursor-pointer"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex h-[54px] flex-grow items-center justify-center gap-2 rounded-lg bg-[#8CFF00] px-4 text-xs sm:text-sm font-black uppercase tracking-wider text-[#050705] transition-all hover:bg-[#5FAE00] hover:text-white cursor-pointer shadow-md disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Processando...
                  </>
                ) : (
                  <>
                    QUERO IDENTIFICAR OS GARGALOS DA MINHA CLÍNICA
                  </>
                )}
              </button>
            </div>
          </div>
        )}

        {/* Microcopy e Ícone de Segurança */}
        <div className="mt-4 pt-3 border-t border-[#DDE2D9] text-center flex items-center justify-center gap-2 text-xs font-semibold text-[#667066]">
          <Lock className="h-3.5 w-3.5 text-[#5FAE00]" />
          <span>Gratuito, sem compromisso e com análise personalizada.</span>
        </div>

      </form>

      {/* Benefícios de Risco Reverso */}
      <div className="mt-4 grid grid-cols-3 gap-1 text-center pt-3 border-t border-[#DDE2D9]/70 text-[10px] font-bold uppercase tracking-wider text-[#050705]">
        <div>• Análise gratuita</div>
        <div>• Sem compromisso</div>
        <div>• Sem plano antecipado</div>
      </div>

    </div>
  );
}

// 4. Faixa de Prova Social Imediatamente Após o Hero
function FaixaProvaSection() {
  return (
    <section className="bg-[#F4F6F1] border-y border-[#DDE2D9] py-8 text-[#050705]">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 justify-items-center text-center items-center font-bold">
          
          <div className="flex flex-col">
            <span className="text-3xl lg:text-4xl font-black text-[#050705] tracking-tight">
              R$ 550 mil+
            </span>
            <span className="mt-1 text-[11px] font-bold uppercase tracking-wider text-[#667066]">
              Faturamento mensal em case real
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-3xl lg:text-4xl font-black text-[#050705] tracking-tight">
              R$ 500 mil+
            </span>
            <span className="mt-1 text-[11px] font-bold uppercase tracking-wider text-[#667066]">
              Faturamento mensal em case real
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-3xl lg:text-4xl font-black text-[#050705] tracking-tight">
              R$ 318 mil+
            </span>
            <span className="mt-1 text-[11px] font-bold uppercase tracking-wider text-[#667066]">
              Faturamento mensal em case real
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-3xl lg:text-4xl font-black text-[#050705] tracking-tight">
              R$ 220 mil+
            </span>
            <span className="mt-1 text-[11px] font-bold uppercase tracking-wider text-[#667066]">
              Faturamento mensal em case real
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}

// 5. Case Principal (PROVA, NÃO APENAS PROMESSA)
interface CasePrincipalSectionProps {
  onOpenVideo: (url: string) => void;
}

function CasePrincipalSection({ onOpenVideo }: CasePrincipalSectionProps) {
  const caseDestaque = CASE_STUDIES[0]; // Drª Lannay
  
  const scrollToForm = () => {
    trackCustomEvent("MainCaseCTAClick");
    const element = document.getElementById("hero-form-wrapper");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="bg-[#050705] border-b border-[#252A25] py-16 lg:py-24 text-[#F4F6F1]">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        
        {/* Cabeçalho */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <span className="inline-flex items-center rounded-md bg-[#0B0E0B] border border-[#252A25] px-3.5 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#8CFF00]">
            PROVA, NÃO APENAS PROMESSA
          </span>
          <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-[#FFFFFF]">
            Veja o que aconteceu quando demanda, atendimento e acompanhamento começaram a trabalhar juntos.
          </h2>
        </div>

        {/* Layout do Case Principal */}
        <div className="rounded-2xl border border-[#252A25] bg-[#0B0E0B] p-6 sm:p-10 flex flex-col lg:flex-row items-center gap-10 md:gap-12 shadow-xl">
          
          {/* Vídeo à esquerda */}
          <div className="w-full lg:w-[260px] shrink-0">
            <div 
              onClick={() => onOpenVideo(caseDestaque.videoUrl)}
              className="group relative aspect-[9/16] w-full max-w-[220px] mx-auto rounded-2xl border border-[#252A25] bg-[#050705] overflow-hidden cursor-pointer shadow-lg hover:border-[#8CFF00]/40 transition-all duration-300"
            >
              <img 
                src={caseDestaque.thumbnail} 
                alt={`Case ${caseDestaque.name}`} 
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
              
              {/* Botão Play */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#8CFF00] text-[#050705] shadow-lg transition-transform duration-300 group-hover:scale-110">
                  <Play className="h-5 w-5 fill-[#050705] translate-x-0.5" />
                </div>
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-center">
                <span className="inline-flex h-8 items-center justify-center gap-1 rounded-lg bg-black/70 px-3 text-[10px] font-bold uppercase tracking-wider text-[#FFFFFF] backdrop-blur-sm">
                  Assistir Depoimento
                </span>
              </div>
            </div>
          </div>

          {/* Dados à direita */}
          <div className="flex-1 flex flex-col text-left">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-black uppercase tracking-widest text-[#8CFF00]">{caseDestaque.specialty}</span>
              <span className="h-1 w-1 rounded-full bg-[#667066]" />
              <span className="text-xs font-bold text-[#667066]">{caseDestaque.city}</span>
            </div>

            <h3 className="mt-2 text-xl sm:text-2xl font-black text-[#FFFFFF]">
              Case {caseDestaque.name}
            </h3>

            {/* Resultado Principal Único */}
            <div className="mt-4 p-4 rounded-xl bg-[#050705] border border-[#8CFF00]/30 inline-block max-w-sm">
              <span className="block text-[10px] font-extrabold uppercase tracking-wider text-[#8CFF00]">Resultado de Destaque</span>
              <span className="block mt-1 text-2xl sm:text-3xl font-black text-[#FFFFFF]">Mais de R$ 500 mil em faturamento mensal</span>
            </div>

            {/* 3 Ações Implantadas */}
            <div className="mt-6 space-y-3">
              <p className="text-xs font-extrabold uppercase tracking-wider text-[#667066]">Ações Implantadas:</p>
              {caseDestaque.actions.map((action, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="h-4 w-4 text-[#8CFF00] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#F4F6F1] font-medium leading-relaxed">{action}</span>
                </div>
              ))}
            </div>

            {/* CTA do Case */}
            <div className="mt-8 pt-6 border-t border-[#252A25]">
              <button
                onClick={scrollToForm}
                className="inline-flex h-[54px] w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-[#8CFF00] px-8 text-xs sm:text-sm font-black uppercase tracking-wider text-[#050705] transition-all hover:bg-[#5FAE00] hover:text-white cursor-pointer shadow-md"
              >
                QUERO ESSA ANÁLISE NA MINHA CLÍNICA
                <ArrowRight className="h-4.5 w-4.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

// 6. Seção "O Que Você Recebe" (Fundo Off-White)
function OQueVoceRecebeSection() {
  const scrollToForm = () => {
    trackCustomEvent("WhatYouGetCTAClick");
    const element = document.getElementById("hero-form-wrapper");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="bg-[#F4F6F1] border-b border-[#DDE2D9] py-16 lg:py-24 text-[#050705]">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        
        {/* Cabeçalho */}
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <span className="inline-flex items-center rounded-md bg-[#FFFFFF] border border-[#DDE2D9] px-3.5 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#050705]">
            O QUE VOCÊ VAI DESCOBRIR
          </span>
          <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-[#050705]">
            Você não receberá uma apresentação genérica sobre marketing.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#667066] font-medium leading-relaxed">
            O diagnóstico foi criado para mostrar onde sua operação perde força e o que deve ser priorizado.
          </p>
        </div>

        {/* 3 Cards Grandes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto text-left">
          
          {/* Card 1 */}
          <div className="rounded-xl border border-[#DDE2D9] bg-[#FFFFFF] p-7 shadow-sm flex flex-col justify-between">
            <div>
              <div className="h-10 w-10 rounded-lg bg-[#050705] flex items-center justify-center text-[#8CFF00] font-black mb-5">
                <FileSearch className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-black text-[#050705]">Mapa dos gargalos</h3>
              <p className="mt-3 text-xs sm:text-sm text-[#667066] leading-relaxed font-medium">
                Identificação dos pontos que podem estar limitando sua autoridade, geração de demanda, agendamentos ou conversão.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="rounded-xl border border-[#DDE2D9] bg-[#FFFFFF] p-7 shadow-sm flex flex-col justify-between">
            <div>
              <div className="h-10 w-10 rounded-lg bg-[#050705] flex items-center justify-center text-[#8CFF00] font-black mb-5">
                <Target className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-black text-[#050705]">Ordem de prioridades</h3>
              <p className="mt-3 text-xs sm:text-sm text-[#667066] leading-relaxed font-medium">
                Uma visão mais clara sobre o que deve ser corrigido primeiro para evitar desperdício de tempo e investimento.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="rounded-xl border border-[#DDE2D9] bg-[#FFFFFF] p-7 shadow-sm flex flex-col justify-between">
            <div>
              <div className="h-10 w-10 rounded-lg bg-[#050705] flex items-center justify-center text-[#8CFF00] font-black mb-5">
                <TrendingUp className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-black text-[#050705]">Próximo passo recomendado</h3>
              <p className="mt-3 text-xs sm:text-sm text-[#667066] leading-relaxed font-medium">
                Indicação da estrutura mais adequada para o estágio atual da clínica, sem necessidade de escolher um plano antecipadamente.
              </p>
            </div>
          </div>

        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={scrollToForm}
            className="inline-flex h-[54px] w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-[#050705] px-8 text-xs sm:text-sm font-black uppercase tracking-wider text-[#FFFFFF] hover:bg-[#8CFF00] hover:text-[#050705] transition-all cursor-pointer"
          >
            QUERO RECEBER MEU DIAGNÓSTICO
            <ArrowRight className="h-4.5 w-4.5" />
          </button>
        </div>

      </div>
    </section>
  );
}

// 7. Seção de Identificação do Problema (Escura)
function ProblemasSection() {
  const scrollToForm = () => {
    trackCustomEvent("ProblemCTAClick");
    const element = document.getElementById("hero-form-wrapper");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative border-b border-[#252A25] bg-[#050705] py-16 lg:py-24 text-[#F4F6F1]">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        
        {/* Cabeçalho */}
        <div className="mx-auto max-w-3xl text-center mb-12">
          <span className="inline-flex items-center rounded-md bg-[#0B0E0B] border border-[#252A25] px-3.5 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#8CFF00]">
            ONDE O FATURAMENTO PODE ESTAR ESCAPANDO
          </span>
          <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-[#FFFFFF]">
            Nem sempre o problema está na falta de leads.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#667066] font-medium max-w-2xl mx-auto leading-relaxed">
            A clínica pode estar investindo em conteúdo e tráfego, mas perdendo oportunidades no posicionamento, no atendimento ou na conversão.
          </p>
        </div>

        {/* 4 Itens Curtos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto text-left">
          
          <div className="rounded-xl border border-[#252A25] bg-[#0B0E0B] p-6 hover:border-[#8CFF00]/30 transition-colors">
            <span className="block text-xl font-black text-[#8CFF00] mb-3">01</span>
            <p className="text-sm font-extrabold text-[#F4F6F1] leading-snug">
              O paciente não entende o diferencial da clínica.
            </p>
          </div>

          <div className="rounded-xl border border-[#252A25] bg-[#0B0E0B] p-6 hover:border-[#8CFF00]/30 transition-colors">
            <span className="block text-xl font-black text-[#8CFF00] mb-3">02</span>
            <p className="text-sm font-extrabold text-[#F4F6F1] leading-snug">
              A campanha atrai contatos fora do perfil.
            </p>
          </div>

          <div className="rounded-xl border border-[#252A25] bg-[#0B0E0B] p-6 hover:border-[#8CFF00]/30 transition-colors">
            <span className="block text-xl font-black text-[#8CFF00] mb-3">03</span>
            <p className="text-sm font-extrabold text-[#F4F6F1] leading-snug">
              O atendimento demora ou não acompanha o lead.
            </p>
          </div>

          <div className="rounded-xl border border-[#252A25] bg-[#0B0E0B] p-6 hover:border-[#8CFF00]/30 transition-colors">
            <span className="block text-xl font-black text-[#8CFF00] mb-3">04</span>
            <p className="text-sm font-extrabold text-[#F4F6F1] leading-snug">
              O dono não sabe onde as oportunidades são perdidas.
            </p>
          </div>

        </div>

        {/* Frase Forte */}
        <div className="mt-10 p-5 rounded-xl bg-[#0B0E0B] border border-[#252A25] max-w-2xl mx-auto text-center">
          <p className="text-xs sm:text-sm font-black text-[#8CFF00] leading-relaxed">
            Aumentar a verba antes de corrigir esses gargalos pode apenas aumentar o desperdício.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <button
            onClick={scrollToForm}
            className="inline-flex h-[54px] w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-[#8CFF00] px-8 text-xs sm:text-sm font-black uppercase tracking-wider text-[#050705] transition-all hover:bg-[#5FAE00] hover:text-white cursor-pointer shadow-md"
          >
            DESCOBRIR ONDE MINHA CLÍNICA ESTÁ PERDENDO OPORTUNIDADES
            <ArrowRight className="h-4.5 w-4.5" />
          </button>
        </div>

      </div>
    </section>
  );
}

// 8. Para Quem É
function ParaQuemSection() {
  const items = [
    "possui faturamento a partir de R$ 35 mil por mês;",
    "já possui procedimentos ou serviços validados;",
    "quer aumentar a geração ou a conversão de oportunidades;",
    "possui capacidade para atender novos pacientes;",
    "busca crescer com mais controle sobre marketing e vendas."
  ];

  return (
    <section className="bg-[#F4F6F1] border-b border-[#DDE2D9] py-16 lg:py-20 text-[#050705]">
      <div className="mx-auto max-w-4xl px-5 sm:px-6 text-left">
        
        <div className="rounded-2xl border border-[#DDE2D9] bg-[#FFFFFF] p-7 sm:p-10 shadow-sm">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-[#050705] tracking-tight">
            Este diagnóstico faz sentido para sua clínica se:
          </h2>

          <div className="mt-8 space-y-4">
            {items.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#8CFF00] mt-0.5">
                  <Check className="h-3.5 w-3.5 text-[#050705]" />
                </div>
                <span className="text-sm sm:text-base text-[#050705] font-semibold leading-snug">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-[#DDE2D9]">
            <p className="text-xs text-[#667066] font-medium leading-relaxed">
              * Observação: A análise não é indicada para operações que ainda não possuem serviço validado ou capacidade de investimento.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

// 9. Cases Secundários (Máximo 3)
interface CasesSecundariosSectionProps {
  onOpenVideo: (url: string) => void;
}

function CasesSecundariosSection({ onOpenVideo }: CasesSecundariosSectionProps) {
  const scrollToForm = () => {
    trackCustomEvent("SecondaryCasesCTAClick");
    const element = document.getElementById("hero-form-wrapper");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const secundarios = CASE_STUDIES.slice(1, 4);

  return (
    <section className="bg-[#050705] border-b border-[#252A25] py-16 lg:py-24 text-[#F4F6F1]">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        
        {/* Cabeçalho */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <span className="inline-flex items-center rounded-md bg-[#0B0E0B] border border-[#252A25] px-3.5 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#8CFF00]">
            OUTRAS OPERAÇÕES
          </span>
          <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-[#FFFFFF]">
            Resultados comprovados em diferentes especialidades
          </h2>
        </div>

        {/* Grade de 3 Cases Secundários */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto text-left">
          {secundarios.map((c) => (
            <div key={c.id} className="rounded-xl border border-[#252A25] bg-[#0B0E0B] p-5 flex flex-col justify-between shadow-md">
              <div>
                {/* Thumbnail Interativa */}
                <div 
                  onClick={() => onOpenVideo(c.videoUrl)}
                  className="group relative aspect-[9/16] w-full max-w-[180px] mx-auto rounded-xl border border-[#252A25] bg-[#050705] overflow-hidden cursor-pointer shadow-md mb-4"
                >
                  <img 
                    src={c.thumbnail} 
                    alt={`Case ${c.name}`} 
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#8CFF00] text-[#050705] shadow-md">
                      <Play className="h-4 w-4 fill-[#050705] translate-x-0.5" />
                    </div>
                  </div>
                </div>

                <div className="text-xs font-black uppercase tracking-widest text-[#8CFF00]">{c.specialty}</div>
                <h3 className="mt-1 text-base font-extrabold text-[#FFFFFF]">{c.name} — {c.city}</h3>
                
                {/* Resultado Principal */}
                <div className="mt-3 p-3 rounded-lg bg-[#050705] border border-[#252A25]">
                  <span className="block text-[9px] font-extrabold uppercase tracking-wider text-[#667066]">Resultado</span>
                  <span className="block text-base font-black text-[#8CFF00]">{c.stats.revenue}</span>
                </div>

                {/* Contexto de 1 Frase */}
                <p className="mt-3 text-xs text-[#F4F6F1]/80 leading-relaxed font-medium">
                  {c.previousScenario}
                </p>
              </div>

              {/* Três dados no máximo */}
              <div className="mt-4 pt-3 border-t border-[#252A25] grid grid-cols-2 gap-2 text-center text-[10px]">
                <div className="bg-[#050705] p-1.5 rounded border border-[#252A25]">
                  <span className="block text-[#667066] font-bold">Investido</span>
                  <span className="block font-black text-[#FFFFFF]">{c.stats.investment}</span>
                </div>
                <div className="bg-[#050705] p-1.5 rounded border border-[#252A25]">
                  <span className="block text-[#667066] font-bold">Retorno</span>
                  <span className="block font-black text-[#8CFF00]">{c.stats.roas}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <button
            onClick={scrollToForm}
            className="inline-flex h-[54px] w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-[#8CFF00] px-8 text-xs sm:text-sm font-black uppercase tracking-wider text-[#050705] transition-all hover:bg-[#5FAE00] hover:text-white cursor-pointer shadow-md"
          >
            QUERO ENTENDER O POTENCIAL DA MINHA CLÍNICA
            <ArrowRight className="h-4.5 w-4.5" />
          </button>
        </div>

      </div>
    </section>
  );
}

// 10. Como Funciona (3 Etapas)
function ComoFuncionaSection() {
  const etapas = [
    { 
      num: "01", 
      title: "1. Você preenche o formulário", 
      desc: "Leva menos de um minuto e ajuda nossa equipe a entender o cenário inicial." 
    },
    { 
      num: "02", 
      title: "2. A FA analisa sua operação", 
      desc: "Avaliamos as informações e identificamos os pontos que devem ser aprofundados." 
    },
    { 
      num: "03", 
      title: "3. Você recebe o diagnóstico", 
      desc: "Em uma conversa estratégica, mostramos os gargalos e o próximo passo recomendado." 
    }
  ];

  return (
    <section className="bg-[#F4F6F1] border-b border-[#DDE2D9] py-16 lg:py-20 text-[#050705]">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        
        {/* Cabeçalho */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <span className="inline-flex items-center rounded-md bg-[#FFFFFF] border border-[#DDE2D9] px-3.5 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#050705]">
            COMO FUNCIONA
          </span>
          <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-[#050705]">
            Passo a passo simples para receber seu diagnóstico
          </h2>
        </div>

        {/* 3 Etapas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {etapas.map((et, idx) => (
            <div key={idx} className="rounded-xl border border-[#DDE2D9] bg-[#FFFFFF] p-7 shadow-sm">
              <span className="block text-2xl font-black text-[#5FAE00] mb-3">{et.num}</span>
              <h3 className="text-base font-extrabold text-[#050705]">{et.title}</h3>
              <p className="mt-2 text-xs sm:text-sm text-[#667066] leading-relaxed font-medium">{et.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-xs text-[#667066] font-semibold">
            * Nossa equipe entra em contato em até 1 dia útil.
          </p>
        </div>

      </div>
    </section>
  );
}

// 11. Duas Formas de Atuação
function FormasAtuacaoSection() {
  const scrollToForm = () => {
    trackCustomEvent("PathsCTAClick");
    const element = document.getElementById("hero-form-wrapper");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="bg-[#050705] border-b border-[#252A25] py-16 lg:py-20 text-[#F4F6F1]">
      <div className="mx-auto max-w-5xl px-5 sm:px-6">
        
        {/* Cabeçalho */}
        <div className="text-center mb-10 max-w-3xl mx-auto">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-black tracking-tight text-[#FFFFFF]">
            Depois do diagnóstico, sua clínica pode precisar de um destes caminhos:
          </h2>
        </div>

        {/* 2 Caminhos Compactos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          
          {/* Caminho 1 */}
          <div className="rounded-xl border border-[#252A25] bg-[#0B0E0B] p-6">
            <span className="inline-block rounded-md bg-[#252A25] px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-[#8CFF00]">
              Caminho 1
            </span>
            <h3 className="mt-3 text-lg font-extrabold text-[#FFFFFF]">Performance</h3>
            <p className="mt-2 text-xs sm:text-sm text-[#F4F6F1]/80 leading-relaxed font-medium">
              Conteúdo, posicionamento, criativos e tráfego para aumentar autoridade e gerar novas oportunidades.
            </p>
          </div>

          {/* Caminho 2 */}
          <div className="rounded-xl border border-[#8CFF00]/40 bg-[#0B0E0B] p-6">
            <span className="inline-block rounded-md bg-[#8CFF00] px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-[#050705]">
              Caminho 2
            </span>
            <h3 className="mt-3 text-lg font-extrabold text-[#FFFFFF]">Crescimento integrado</h3>
            <p className="mt-2 text-xs sm:text-sm text-[#F4F6F1]/80 leading-relaxed font-medium">
              Demanda, atendimento, comercial e dados para operações que precisam melhorar conversão e acompanhamento.
            </p>
          </div>

        </div>

        <div className="mt-6 text-center">
          <p className="text-xs text-[#667066] font-medium">
            Você não precisa escolher agora. O diagnóstico mostrará qual caminho faz sentido.
          </p>
        </div>

        {/* CTA Único */}
        <div className="mt-8 text-center">
          <button
            onClick={scrollToForm}
            className="inline-flex h-[54px] w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-[#8CFF00] px-8 text-xs sm:text-sm font-black uppercase tracking-wider text-[#050705] transition-all hover:bg-[#5FAE00] hover:text-white cursor-pointer shadow-md"
          >
            DESCOBRIR QUAL CAMINHO MINHA CLÍNICA PRECISA
            <ArrowRight className="h-4.5 w-4.5" />
          </button>
        </div>

      </div>
    </section>
  );
}

// 12. FAQ (No máximo 6 perguntas)
function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleIndex = (idx: number) => {
    setActiveIndex(prev => prev === idx ? null : idx);
  };

  const faqs = [
    {
      q: "O diagnóstico é realmente gratuito?",
      a: "Sim. O diagnóstico é uma análise inicial sem custos e sem compromisso para avaliar gargalos e indicar a melhor estrutura."
    },
    {
      q: "A FA atende clínicas que faturam a partir de R$ 35 mil?",
      a: "Sim. Atendemos operações validadas com faturamento a partir de R$ 35 mil mensais."
    },
    {
      q: "Preciso contratar algum serviço depois da análise?",
      a: "Não. O diagnóstico serve para apresentar a leitura da sua clínica. Cabe a você decidir se quer implementar por conta própria ou com a FA."
    },
    {
      q: "A FA atende médicos e dentistas?",
      a: "Sim. Atendemos médicos, cirurgiões-dentistas e empresários de clínicas estéticas de alta performance."
    },
    {
      q: "Preciso já investir em tráfego?",
      a: "Não é obrigatório, mas a clínica precisa ter capacidade e intenção de investimento."
    },
    {
      q: "O que acontece depois que eu preencho?",
      a: "Nossa equipe analisa as respostas fornecidas e entra em contato em até 1 dia útil para realizar a análise."
    }
  ];

  return (
    <section className="bg-[#050705] border-b border-[#252A25] py-16 lg:py-24 text-[#F4F6F1]">
      <div className="mx-auto max-w-4xl px-5 sm:px-6">
        
        {/* Cabeçalho */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <span className="inline-flex items-center rounded-md bg-[#0B0E0B] border border-[#252A25] px-3.5 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#8CFF00]">
            PERGUNTAS FREQUENTES
          </span>
          <h2 className="mt-4 text-2xl sm:text-3xl font-black tracking-tight text-[#FFFFFF]">
            Tire suas dúvidas rápidas
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-3 text-left">
          {faqs.map((f, idx) => {
            const isOpen = activeIndex === idx;
            return (
              <div key={idx} className="rounded-xl border border-[#252A25] bg-[#0B0E0B] overflow-hidden">
                <button
                  onClick={() => toggleIndex(idx)}
                  className="w-full flex items-center justify-between p-4.5 text-left font-bold text-sm text-[#F4F6F1] hover:bg-[#050705] transition-colors cursor-pointer"
                >
                  <span>{f.q}</span>
                  {isOpen ? (
                    <ChevronUp className="h-4 w-4 text-[#8CFF00] shrink-0 ml-3" />
                  ) : (
                    <ChevronDown className="h-4 w-4 text-[#8CFF00] shrink-0 ml-3" />
                  )}
                </button>
                {isOpen && (
                  <div className="p-4.5 border-t border-[#252A25] bg-[#050705] text-xs sm:text-sm text-[#F4F6F1]/80 leading-relaxed font-medium animate-fade-in">
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

// 13. Formulário Final (Card Off-White idêntico)
interface FormularioFinalSectionProps {
  setLeadName: (val: string) => void;
  utms: any;
}

function FormularioFinalSection({ setLeadName, utms }: FormularioFinalSectionProps) {
  return (
    <section id="final-form-wrapper" className="bg-[#050705] py-16 lg:py-24 text-[#F4F6F1] scroll-mt-20">
      <div className="mx-auto max-w-xl px-5 sm:px-6 text-center">
        
        <div className="mb-8">
          <span className="inline-flex items-center rounded-md bg-[#0B0E0B] border border-[#252A25] px-3.5 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#8CFF00]">
            ÚLTIMO PASSO
          </span>
          <h2 className="mt-4 text-2xl sm:text-3xl font-black tracking-tight text-[#FFFFFF]">
            Descubra o que está impedindo sua clínica de crescer mais.
          </h2>
          <p className="mt-2 text-sm text-[#667066] font-medium leading-relaxed">
            Preencha o formulário e receba uma análise estratégica do momento atual da sua operação.
          </p>
        </div>

        {/* Card do Formulário Final */}
        <MultistepFormCard setLeadName={setLeadName} utms={utms} formId="final" />

        <p className="mt-4 text-[11px] font-bold text-[#667066] uppercase tracking-wider">
          Para clínicas com faturamento a partir de R$ 35 mil por mês.
        </p>

      </div>
    </section>
  );
}

// 14. Footer
function Footer() {
  return (
    <footer className="border-t border-[#252A25] bg-[#050705] text-[#667066]">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6 border-b border-[#252A25]/40 text-xs font-semibold">
        
        <div className="flex items-center gap-2">
          <span className="text-xl font-black text-[#F4F6F1]">FA</span>
          <span className="h-1.5 w-1.5 rounded-full bg-[#8CFF00]" />
          <span className="font-bold text-[#F4F6F1]">Fazendo Acontecer</span>
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

      <div className="mx-auto max-w-7xl px-5 sm:px-6 py-6 text-center text-[10px] text-[#667066] space-y-3 font-medium">
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

// 15. CTA Fixo no Mobile (< 72px de altura)
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

      // Exibir quando fora dos formulários e após rolar um pouco
      const pastHero = window.scrollY > 300;
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
    <div className={`fixed bottom-0 left-0 w-full z-40 p-3 bg-[#050705]/95 border-t border-[#252A25] md:hidden backdrop-blur-md transition-all duration-300 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none"}`}>
      <button
        onClick={scrollToForm}
        className="w-full h-12 inline-flex items-center justify-center gap-2 rounded-lg bg-[#8CFF00] text-xs font-black uppercase tracking-wider text-[#050705] shadow-lg cursor-pointer"
      >
        RECEBER DIAGNÓSTICO GRATUITO
        <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
}

// Modal de Vídeos de Depoimentos
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
