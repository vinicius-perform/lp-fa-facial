import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useRef, type FormEvent, type ReactNode } from "react";
import { 
  ArrowRight, 
  ArrowLeft, 
  Play, 
  DollarSign, 
  TrendingUp, 
  Target, 
  Check, 
  Instagram, 
  ChevronDown, 
  ChevronUp, 
  Loader2, 
  X, 
  MapPin, 
  Calendar, 
  Clock, 
  ShieldCheck, 
  AlertCircle, 
  Sparkles,
  Users,
  Layers,
  Activity,
  FileText
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
  bullets: string[];
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
        Multiplicou seus resultados de consultório, saindo de <span className="font-extrabold">R$ 30 mil</span> para mais de <span className="font-extrabold text-[#8CFF00]">R$ 500 mil/mês</span>.
      </>
    ),
    previousScenario: "Faturamento estagnado em R$ 30 mil/mês, com total dependência de indicações de boca em boca e sem nenhuma previsibilidade ou controle comercial das oportunidades de novos pacientes.",
    strategy: "Estruturação completa da captação activa através de campanhas segmentadas por procedimentos de alta rentabilidade, aliada à internalização comercial rápida e treinamento prático de fechamentos.",
    stats: {
      investment: "R$ 12 mil",
      revenue: "R$ 500 mil+",
      roas: "41x Retorno sobre mídia",
    },
    bullets: [
      "Processo de pré-atendimento comercial estruturado para resposta em poucos minutos.",
      "Captação constante de leads qualificados buscando procedimentos estéticos específicos.",
      "Clínica com agenda previsível e metas financeiras alcançadas com consistência.",
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
        Largou os plantões exaustivos em hospitais e hoje fatura mais de <span className="font-extrabold text-[#8CFF00]">R$ 220 mil/mês</span> em seu próprio consultório.
      </>
    ),
    previousScenario: "Dependência de plantões em hospitais públicos e privados para complementar a renda familiar, restando pouca energia e tempo para expandir a agenda do consultório particular.",
    strategy: "Posicionamento digital de autoridade focado em tratamentos estéticos faciais de alto ticket, juntamente com roteiros de atração ativa e qualificação comercial robusta da recepção.",
    stats: {
      investment: "R$ 10 mil",
      revenue: "R$ 220 mil+",
      roas: "22x Retorno sobre mídia",
    },
    bullets: [
      "Transição de carreira segura e planejada, abandonando definitivamente a rotina de plantões.",
      "Atração de pacientes altamente propensos a fechar pacotes de tratamentos estéticos premium.",
      "Scripts de atendimento que elevam a percepção de valor antes mesmo da consulta inicial.",
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
        Faturamento de <span className="font-extrabold text-[#8CFF00]">R$ 318 mil</span> em Janeiro (mês historicamente lento) com investimento planejado de anúncios.
      </>
    ),
    previousScenario: "Instabilidade e queda de faturamento sazonal em períodos considerados frios (como pós-festas), além de um gargalo comercial de leads sem contato imediato.",
    strategy: "Implementação de cadências de contato e campanhas focadas na quebra da sazonalidade, aliadas à automação comercial no CRM para garantir que nenhum lead esfriasse.",
    stats: {
      investment: "R$ 21 mil",
      revenue: "R$ 318 mil",
      roas: "15x Retorno sobre mídia",
    },
    bullets: [
      "Quebra definitiva da barreira de sazonalidade comercial com estratégias ativas de atração.",
      "Acompanhamento analítico diário das métricas do CRM pelo painel integrado da FA.",
      "Processo de vendas estruturado para reengajamento de contatos antigos no funil.",
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
        Alcançou faturamento superior a <span className="font-extrabold text-[#8CFF00]">R$ 550 mil</span> nos seus 3 primeiros meses de parceria comercial.
      </>
    ),
    previousScenario: "Clínica com estrutura comercial desorganizada, dependente do esforço do próprio médico no pós-venda e alto desperdício de investimento em criativos repetitivos.",
    strategy: "Desenho da internalização comercial completa com triagem especializada de leads e automação de agendamentos para otimizar o tempo de atendimento médico.",
    stats: {
      investment: "R$ 20 mil",
      revenue: "R$ 550 mil",
      roas: "27x Retorno sobre mídia",
    },
    bullets: [
      "Equipe médica com foco exclusivo em cirurgias e consultas especializadas.",
      "Redução total de ruídos entre o marketing digital e o agendamento real de procedimentos.",
      "Escalabilidade rápida nos primeiros 90 dias de implantação da metodologia.",
    ],
  },
];

function Index() {
  const [submitted, setSubmitted] = useState(false);
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
  }, []);

  const handleOpenVideo = (videoUrl: string) => {
    setActiveVideoUrl(videoUrl);
  };

  const handleCloseVideo = () => {
    setActiveVideoUrl(null);
  };

  return (
    <div className="min-h-screen bg-[#050705] text-[#F7F8F5] overflow-hidden font-sans selection:bg-[#8CFF00] selection:text-[#111511]">
      
      {/* 9. Barra de Qualificação Superior Vermelha Destacada */}
      <div className="bg-[#c21807] border-b border-red-800 py-3.5 px-4 flex items-center justify-center gap-2.5 text-xs sm:text-sm tracking-widest font-black text-[#F7F8F5] uppercase shrink-0 text-center shadow-lg">
        <span className="h-2.5 w-2.5 rounded-full bg-[#F7F8F5] animate-pulse shadow-[0_0_8px_#ffffff]" />
        <span>Estratégia para clínicas e consultórios com faturamento a partir de R$ 35 mil/mês.</span>
      </div>

      {/* 10. Hero Section */}
      <Hero setSubmitted={setSubmitted} setLeadName={setLeadName} utms={utms} />

      {/* 12. Faixa de Prova Social Imediatamente Após o Hero */}
      <ProvaFaixaSection />

      {/* 13. Case Principal */}
      <CasePrincipalSection onOpenVideo={handleOpenVideo} />

      {/* 14. Seção de Identificação do Problema */}
      <ProblemasSection />

      {/* 15. Diferentes Estágios de Crescimento */}
      <EstagiosSection />

      {/* 16. Método FA */}
      <MetodoSection />

      {/* 17. Demais Cases */}
      <DemaisCasesSection onOpenVideo={handleOpenVideo} />

      {/* 18. Seção Institucional da FA */}
      <InstitucionalSection />

      {/* 19. O Que Pode Ser Entregue */}
      <EntregasSection />

      {/* 20. Para Quem É */}
      <ParaQuemSection />

      {/* 21. Como Funciona */}
      <ComoFuncionaSection />

      {/* 22. FAQ Accordion */}
      <FaqSection />

      {/* 23. CTA Final */}
      <CtaFinalSection />

      {/* 32. Footer */}
      <Footer />

      {/* 24. CTA Fixo no Mobile */}
      <CtaFixoMobile />

      {/* Modal de Depoimento em Vídeo */}
      {activeVideoUrl && (
        <VideoModal videoUrl={activeVideoUrl} onClose={handleCloseVideo} />
      )}

      {/* Redirecionamento direto ativo */}

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
    const element = document.getElementById("hero-form-wrapper");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-30 transition-all duration-300 ${isScrolled ? "bg-[#050705]/80 border-b border-[#252B25] py-3.5 backdrop-blur-md" : "bg-transparent py-5"}`}>
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
        
        {/* Logo FA */}
        <div className="flex items-center gap-2">
          <span className="text-xl sm:text-2xl font-black tracking-tight text-[#F7F8F5]">
            FA
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-[#8CFF00]" />
        </div>

        {/* Texto discreto no centro */}
        <p className="hidden md:block text-xs font-bold uppercase tracking-widest text-[#B7BFB6]/80">
          Crescimento para clínicas
        </p>

        {/* Botão à direita */}
        <button 
          onClick={scrollToForm}
          className="inline-flex h-9 items-center justify-center rounded-lg border border-[#8CFF00]/40 hover:border-[#8CFF00] px-4.5 text-xs font-bold uppercase tracking-wider text-[#8CFF00] hover:bg-[#8CFF00]/5 transition-all duration-200"
        >
          Solicitar diagnóstico
        </button>

      </div>
    </header>
  );
}

interface HeroProps {
  setSubmitted: (val: boolean) => void;
  setLeadName: (val: string) => void;
  utms: {
    utm_source: string;
    utm_medium: string;
    utm_campaign: string;
    utm_content: string;
    utm_term: string;
    fbclid: string;
    gclid: string;
  };
}

function Hero({ setSubmitted, setLeadName, utms }: HeroProps) {
  const scrollToForm = () => {
    const element = document.getElementById("hero-form-wrapper");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const chips = [
    "Harmonização facial",
    "Full Face",
    "Harmonização corporal",
    "Odontologia estética",
    "Cirurgia plástica",
    "Estética avançada",
    "Emagrecimento",
    "Procedimentos premium"
  ];

  return (
    <section id="topo" className="relative overflow-hidden min-h-screen flex flex-col justify-center bg-[#050705] pt-12 pb-16 lg:py-20">
      
      {/* Brilhos radial sutil verde no fundo */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {/* Glow principal no topo direito */}
        <div 
          className="absolute top-[-10%] right-[-10%] h-[550px] w-[550px] rounded-full opacity-[0.05] blur-[130px]" 
          style={{ background: "radial-gradient(circle, #8CFF00 0%, transparent 70%)" }} 
        />
        {/* Glow secundário no canto inferior esquerdo */}
        <div 
          className="absolute bottom-[-10%] left-[-15%] h-[450px] w-[450px] rounded-full opacity-[0.02] blur-[110px]" 
          style={{ background: "radial-gradient(circle, #8CFF00 0%, transparent 70%)" }} 
        />
      </div>

      {/* Grid verde neon sutil */}
      <div
        className="pointer-events-none absolute inset-0 z-10 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #8CFF00 1px, transparent 1px), linear-gradient(to bottom, #8CFF00 1px, transparent 1px)",
          backgroundSize: "90px 90px",
        }}
      />

      <div className="relative z-20 w-full mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Coluna Esquerda: Conteúdo principal (55%) */}
          <div className="lg:col-span-7 flex flex-col text-center lg:text-left">
            
            {/* Selo */}
            <div className="inline-flex items-center justify-center lg:justify-start gap-2 mx-auto lg:mx-0">
              <span className="inline-flex items-center rounded-full border border-[#252B25] bg-[#090B09] px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#8CFF00]">
                Crescimento para clínicas de estética
              </span>
            </div>

            {/* Headline principal */}
            <h1 className="mt-6 text-[34px] sm:text-[40px] lg:text-[44px] xl:text-[50px] font-extrabold leading-[1.08] lg:leading-[1.1] tracking-tight text-[#F7F8F5]">
              Sua clínica não precisa apenas de mais posts ou leads. Precisa de uma estrutura que transforme <span className="text-[#8CFF00]">autoridade em consultas e crescimento</span>.
            </h1>

            {/* Subheadline */}
            <p className="mt-6 text-[16px] sm:text-[18px] leading-relaxed text-[#B7BFB6] font-medium max-w-2xl mx-auto lg:mx-0">
              A FA combina conteúdo, tráfego e, quando necessário, atendimento comercial e dados para médicos, dentistas e empresários da estética crescerem com mais controle.
            </p>
            
            {/* Chips de Especialidades */}
            <div className="mt-8 flex flex-wrap gap-2 justify-center lg:justify-start max-w-xl mx-auto lg:mx-0">
              {chips.map((chip, idx) => (
                <span 
                  key={idx} 
                  className="rounded-full border border-[#252B25] bg-[#090B09] px-3.5 py-1.5 text-xs font-semibold text-[#B7BFB6]"
                >
                  {chip}
                </span>
              ))}
            </div>
            
            {/* Benefícios */}
            <div className="mt-8 space-y-3.5 max-w-xl mx-auto lg:mx-0 text-left">
              <div className="flex items-start gap-3">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#8CFF00]/10 mt-0.5">
                  <Check className="h-3 w-3 text-[#8CFF00]" />
                </div>
                <span className="text-sm font-semibold text-[#B7BFB6]">
                  Posicionamento e conteúdo alinhados aos procedimentos estratégicos.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#8CFF00]/10 mt-0.5">
                  <Check className="h-3 w-3 text-[#8CFF00]" />
                </div>
                <span className="text-sm font-semibold text-[#B7BFB6]">
                  Campanhas construídas para atrair oportunidades qualificadas.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#8CFF00]/10 mt-0.5">
                  <Check className="h-3 w-3 text-[#8CFF00]" />
                </div>
                <span className="text-sm font-semibold text-[#B7BFB6]">
                  Estrutura adequada ao momento e à capacidade da clínica.
                </span>
              </div>
            </div>

            {/* Prova Rápida */}
            <div className="mt-8 pt-6 border-t border-[#252B25]/50 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start text-left">
              <div className="text-center sm:text-left">
                <p className="text-xs font-bold text-[#F7F8F5]">Cases reais com faturamento mensal acima de R$ 220 mil, R$ 318 mil, R$ 500 mil e R$ 550 mil.</p>
                <p className="text-[11px] text-[#B7BFB6]/60 mt-1">* Os valores acima refletem resultados históricos e específicos dos cases estudados, sem garantia de retornos futuros.</p>
              </div>
            </div>

            {/* Botão de Scroll no Mobile */}
            <div className="mt-8 flex justify-center lg:hidden">
              <button
                onClick={scrollToForm}
                className="inline-flex w-full max-w-sm h-12 items-center justify-center gap-2 rounded-lg bg-[#8CFF00] px-6 text-xs font-bold uppercase tracking-wider text-black transition-all hover:bg-[#68BF00] glow-neon"
              >
                Quero um diagnóstico da minha clínica
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

          </div>

          {/* Coluna Direita: Formulário (45%) */}
          <div id="hero-form-wrapper" className="lg:col-span-5 w-full max-w-lg mx-auto lg:mx-0 scroll-mt-24">
            <MultistepForm setSubmitted={setSubmitted} setLeadName={setLeadName} utms={utms} />
          </div>

        </div>
      </div>
    </section>
  );
}

// Componente do Formulário de Leads de Duas Etapas
interface MultistepFormProps {
  setSubmitted: (val: boolean) => void;
  setLeadName: (val: string) => void;
  utms: any;
}

function MultistepForm({ setSubmitted, setLeadName, utms }: MultistepFormProps) {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form Fields State
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [instagram, setInstagram] = useState("");
  const [especialidade, setEspecialidade] = useState("");
  
  const [faturamento, setFaturamento] = useState("");
  const [investimento, setInvestimento] = useState("");
  const [gargalo, setGargalo] = useState("");
  const [prazo, setPrazo] = useState("");

  // Phone input formatting
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let input = e.target.value.replace(/\D/g, "");
    if (input.length > 11) input = input.substring(0, 11);
    
    // Format: (XX) XXXXX-XXXX
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
      alert("Por favor, informe um WhatsApp válido.");
      return;
    }
    if (!instagram || instagram.trim().length < 2) {
      alert("Por favor, informe o Instagram da clínica.");
      return;
    }
    if (!especialidade) {
      alert("Por favor, selecione a principal especialidade.");
      return;
    }
    setStep(2);
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!faturamento || !investimento || !gargalo || !prazo) {
      alert("Por favor, preencha todos os campos da etapa de qualificação.");
      return;
    }

    setIsSubmitting(true);
    setLeadName(name);

    // Calcular lead score simplificado
    let score = 0;
    if (faturamento === "Entre R$ 35 mil e R$ 60 mil") score += 20;
    else if (faturamento === "Entre R$ 60 mil e R$ 100 mil") score += 40;
    else if (faturamento === "Entre R$ 100 mil e R$ 200 mil") score += 60;
    else if (faturamento === "Entre R$ 200 mil e R$ 500 mil") score += 80;
    else if (faturamento === "Acima de R$ 500 mil") score += 100;

    if (investimento === "De R$ 3 mil a R$ 7 mil" || investimento === "Entre R$ 3 mil e R$ 7 mil") score += 15;
    else if (investimento === "De R$ 7 mil a R$ 15 mil" || investimento === "Entre R$ 7 mil e R$ 15 mil") score += 25;
    else if (investimento === "Acima de R$ 15 mil") score += 35;
    else score += 5;

    let leadType: "A" | "B" | "C" = "C";
    if (score >= 80) leadType = "A";
    else if (score >= 45) leadType = "B";
    else leadType = "C";

    // Criar o payload no formato esperado pelo CRM e planilhas
    const payload = {
      timestamp: new Date().toLocaleString("pt-BR"),
      name: name,
      phone: phone,
      email: `${name.toLowerCase().replace(/\s+/g, "")}@exemplo.com`, // Email dummy
      clinicInstagram: instagram,
      clinicName: instagram,
      objective: gargalo,
      revenue: faturamento,
      traffic: investimento,
      score: score,
      leadType: leadType,

      // Mapeamento dos novos campos solicitados
      nome: name,
      whatsapp: phone,
      instagram_clinica: instagram,
      especialidade: especialidade,
      faturamento_mensal: faturamento,
      investimento_marketing: investimento,
      objetivo_principal: gargalo,
      prazo_inicio: prazo,

      // Parâmetros ocultos de tráfego
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

      // Disparar pixel de forma defensiva somente pós-confirmação do envio
      if (typeof window !== "undefined") {
        const win = window as any;
        if (typeof win.fbq === "function") {
          win.fbq("track", "Lead", {
            content_name: "Diagnostico FA Hibrido",
            currency: "BRL",
            predicted_lead_type: leadType
          });
          win.fbq("trackCustom", "LeadForm", {
            content_name: "Diagnostico FA Hibrido",
            predicted_lead_type: leadType
          });
        }
        if (win.dataLayer && Array.isArray(win.dataLayer)) {
          win.dataLayer.push({
            event: "lead_form_submitted",
            lead_type: leadType
          });
        }

        // Redirecionamento direto para o WhatsApp
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
    "w-full rounded-lg border border-[#252B25] bg-[#050705] px-4 py-3.5 text-sm text-[#F7F8F5] placeholder:text-[#B7BFB6]/60 outline-none transition-colors focus:border-[#8CFF00] focus:ring-1 focus:ring-[#8CFF00]/20";

  return (
    <div className="rounded-2xl border border-[#252B25] bg-[#101310] p-6 sm:p-8 shadow-2xl relative text-left">
      
      {/* Título e subtítulo do formulário */}
      <div className="mb-6">
        <h2 className="text-xl sm:text-2xl font-extrabold text-[#F7F8F5] tracking-tight leading-tight">
          Receba um diagnóstico do crescimento da sua clínica
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-[#B7BFB6]/90 leading-relaxed">
          Responda algumas perguntas para nossa equipe entender o momento da sua operação.
        </p>
      </div>

      {/* Indicador de Etapa */}
      <div className="mb-6">
        <div className="flex items-center justify-between text-[11px] font-bold tracking-widest text-[#8CFF00] uppercase mb-2">
          <span>Etapa {step} de 2</span>
          <span>{step === 1 ? "Identificação" : "Qualificação"}</span>
        </div>
        <div className="h-1.5 w-full bg-[#050705] rounded-full overflow-hidden border border-[#252B25]/30">
          <div 
            className="h-full bg-[#8CFF00] transition-all duration-300 rounded-full"
            style={{ width: `${(step / 2) * 100}%` }}
          />
        </div>
      </div>

      <form onSubmit={onSubmit} className="space-y-4">
        
        {/* ETAPA 1 */}
        {step === 1 && (
          <div className="space-y-4 animate-fade-in">
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-[#B7BFB6] mb-1.5">Nome Completo *</label>
              <input 
                required 
                type="text" 
                placeholder="Ex: Dra. Juliana Souza" 
                value={name}
                onChange={e => setName(e.target.value)}
                className={inputCls} 
              />
            </div>
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-[#B7BFB6] mb-1.5">WhatsApp *</label>
              <input 
                required 
                type="tel" 
                placeholder="Ex: (11) 99999-9999" 
                value={phone}
                onChange={handlePhoneChange}
                className={inputCls} 
              />
            </div>
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-[#B7BFB6] mb-1.5">Instagram da Clínica *</label>
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
              <label className="block text-[11px] font-bold uppercase tracking-wider text-[#B7BFB6] mb-1.5">Principal Especialidade *</label>
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
            
            <button
              type="button"
              onClick={handleNextStep}
              className="mt-2 w-full inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-[#8CFF00] px-6 text-xs font-bold uppercase tracking-wider text-black transition-all hover:bg-[#68BF00] glow-neon"
            >
              Continuar
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        )}

        {/* ETAPA 2 */}
        {step === 2 && (
          <div className="space-y-4 animate-fade-in">
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-[#B7BFB6] mb-1.5">Faturamento Médio Mensal *</label>
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
              <label className="block text-[11px] font-bold uppercase tracking-wider text-[#B7BFB6] mb-1.5">Investimento Atual em Marketing *</label>
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
              <label className="block text-[11px] font-bold uppercase tracking-wider text-[#B7BFB6] mb-1.5">Principal Gargalo *</label>
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
              <label className="block text-[11px] font-bold uppercase tracking-wider text-[#B7BFB6] mb-1.5">Prazo para Iniciar *</label>
              <select required value={prazo} onChange={e => setPrazo(e.target.value)} className={inputCls}>
                <option value="" disabled>Selecione um prazo estimado</option>
                <option>Quero iniciar agora</option>
                <option>Nos próximos 30 dias</option>
                <option>Nos próximos 60 a 90 dias</option>
                <option>Estou pesquisando possibilidades</option>
              </select>
            </div>

            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="inline-flex h-12 w-16 items-center justify-center rounded-lg border border-[#252B25] bg-[#050705] text-[#B7BFB6] hover:text-[#F7F8F5] transition-all"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex h-12 flex-grow items-center justify-center gap-2 rounded-lg bg-[#8CFF00] px-6 text-xs font-bold uppercase tracking-wider text-black transition-all hover:bg-[#68BF00] glow-neon disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Processando...
                  </>
                ) : (
                  <>
                    Receber meu diagnóstico
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>
            </div>
          </div>
        )}

        <div className="mt-6 pt-4 border-t border-[#252B25]/50 text-center">
          <p className="text-[11px] font-semibold text-[#8CFF00] uppercase tracking-widest">
            Quero um diagnóstico da minha clínica
          </p>
          <p className="mt-1 text-[10px] text-[#B7BFB6]/60 leading-relaxed">
            Análise estratégica inicial, sem custo e sem compromisso.
          </p>
        </div>

      </form>
    </div>
  );
}

// 12. Faixa de Prova Social Imediatamente Após o Hero (Clara)
function ProvaFaixaSection() {
  return (
    <section className="bg-[#EBEEE8] border-y border-[#D8DDD5] py-10 text-[#111511]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center text-center items-center font-bold">
          
          <div className="flex flex-col">
            <span className="text-3xl lg:text-4xl font-extrabold text-[#111511] tracking-tight">
              R$ 550 mil+
            </span>
            <span className="mt-1.5 text-[11px] font-black uppercase tracking-wider text-[#343A34]">
              Faturamento em case de cirurgia
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-3xl lg:text-4xl font-extrabold text-[#111511] tracking-tight">
              R$ 500 mil+
            </span>
            <span className="mt-1.5 text-[11px] font-black uppercase tracking-wider text-[#343A34]">
              Faturamento em harmonização
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-3xl lg:text-4xl font-extrabold text-[#111511] tracking-tight">
              Nacional
            </span>
            <span className="mt-1.5 text-[11px] font-black uppercase tracking-wider text-[#343A34]">
              Clínicas atendidas em todo o Brasil
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-3xl lg:text-4xl font-extrabold text-[#111511] tracking-tight">
              Completo
            </span>
            <span className="mt-1.5 text-[11px] font-black uppercase tracking-wider text-[#343A34]">
              Gestão de demanda, comercial e dados
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}

// 13. Case Principal (Claro)
interface CasePrincipalSectionProps {
  onOpenVideo: (url: string) => void;
}

function CasePrincipalSection({ onOpenVideo }: CasePrincipalSectionProps) {
  const caseDestaque = CASE_STUDIES[0]; // Drª Lannay
  
  return (
    <section className="bg-[#F5F6F2] border-b border-[#D8DDD5] py-20 lg:py-24 text-[#111511]">
      <div className="mx-auto max-w-6xl px-6">
        
        {/* Cabeçalho */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-flex items-center rounded-full border border-[#D8DDD5] bg-[#EBEEE8] px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#343A34]">
            Resultado em Destaque
          </span>
          <h2 className="mt-5 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#111511]">
            Antes de falar sobre metodologia, veja o que acontece quando marketing e operação trabalham juntos.
          </h2>
        </div>

        {/* Layout do Case Destaque */}
        <div className="rounded-2xl border border-[#D8DDD5] bg-[#FFFFFF] p-6 sm:p-10 flex flex-col lg:flex-row items-center gap-10 md:gap-14 shadow-sm">
          
          {/* Vídeo à esquerda */}
          <div className="w-full lg:w-[260px] shrink-0">
            <div 
              onClick={() => onOpenVideo(caseDestaque.videoUrl)}
              className="group relative aspect-[9/16] w-full max-w-[220px] mx-auto rounded-2xl border border-[#D8DDD5] bg-[#050705] overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300"
            >
              <img 
                src={caseDestaque.thumbnail} 
                alt={`Depoimento ${caseDestaque.name}`} 
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              
              {/* Botão de Play */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#8CFF00] text-black shadow-lg transition-transform duration-300 group-hover:scale-110">
                  <Play className="h-4.5 w-4.5 fill-black translate-x-0.5" />
                </div>
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-center">
                <span className="inline-flex h-8 items-center justify-center gap-1.5 rounded-lg bg-black/60 px-3.5 text-[9px] font-bold uppercase tracking-wider text-[#F7F8F5] backdrop-blur-sm">
                  Assistir Depoimento
                </span>
              </div>
            </div>
          </div>

          {/* Copy e dados à direita */}
          <div className="flex-1 flex flex-col text-left">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#68BF00]">{caseDestaque.specialty}</span>
              <span className="h-1 w-1 rounded-full bg-[#343A34]" />
              <span className="text-xs font-semibold text-[#343A34]">{caseDestaque.city}</span>
            </div>

            <h3 className="mt-3 text-xl sm:text-2xl font-black text-[#111511] leading-tight">
              Parceria com a {caseDestaque.name}
            </h3>

            {/* Número Destacado */}
            <div className="mt-6 p-4 rounded-xl bg-[#EBEEE8] border border-[#D8DDD5] inline-block max-w-sm">
              <span className="block text-[10px] font-bold uppercase tracking-wider text-[#343A34]">Faturamento Mensal Alcançado</span>
              <span className="block mt-1 text-2xl lg:text-3xl font-extrabold text-[#111511]">{caseDestaque.stats.revenue}</span>
            </div>

            <div className="mt-6 space-y-4">
              <p className="text-sm leading-relaxed text-[#343A34]">
                <strong className="text-[#111511] block font-bold mb-0.5">Situação Anterior:</strong>
                {caseDestaque.previousScenario}
              </p>
              <p className="text-sm leading-relaxed text-[#343A34]">
                <strong className="text-[#111511] block font-bold mb-0.5">Estrutura Implantada:</strong>
                {caseDestaque.strategy}
              </p>
            </div>

            {/* Métricas */}
            <div className="grid grid-cols-3 gap-3.5 mt-8 max-w-md">
              <div className="rounded-xl border border-[#D8DDD5] bg-[#F5F6F2] p-3 text-center">
                <span className="block text-[9px] font-bold uppercase tracking-wider text-[#343A34]">Investimento</span>
                <span className="block mt-1 text-xs sm:text-sm font-extrabold text-[#111511]">{caseDestaque.stats.investment}</span>
              </div>
              <div className="rounded-xl border border-[#D8DDD5] bg-[#F5F6F2] p-3 text-center">
                <span className="block text-[9px] font-bold uppercase tracking-wider text-[#343A34]">Faturamento</span>
                <span className="block mt-1 text-xs sm:text-sm font-extrabold text-[#111511]">{caseDestaque.stats.revenue}</span>
              </div>
              <div className="rounded-xl border border-[#D8DDD5] bg-[#F5F6F2] p-3 text-center">
                <span className="block text-[9px] font-bold uppercase tracking-wider text-[#343A34]">Mídia (ROAS)</span>
                <span className="block mt-1 text-xs sm:text-sm font-extrabold text-[#68BF00]">{caseDestaque.stats.roas.split(" ")[0]}</span>
              </div>
            </div>

            <p className="mt-5 text-[10px] text-[#343A34]/70">
              * Resultado específico desta operação. O desempenho pode variar conforme mercado, investimento, oferta, equipe e execução.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

// 14. Seção de Identificação do Problema (Escura)
function ProblemasSection() {
  return (
    <section className="relative border-t border-[#252B25] bg-[#090B09] py-20 lg:py-28 text-[#F7F8F5]">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Cabeçalho */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <span className="inline-flex items-center rounded-full border border-[#252B25] bg-[#101310] px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#8CFF00]">
            O problema raramente está em uma única área
          </span>
          <h2 className="mt-5 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#F7F8F5]">
            Sua clínica pode estar investindo no digital e ainda perdendo oportunidades todos os dias.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#B7BFB6] max-w-2xl mx-auto leading-relaxed">
            Quando conteúdo, tráfego, atendimento e acompanhamento trabalham separados, os contatos chegam, mas a operação não consegue aproveitar todo o potencial da demanda.
          </p>
        </div>

        {/* 4 Cards de Dores */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          
          <div className="rounded-xl border border-[#252B25] bg-[#111411] p-6 hover:border-[#8CFF00]/10 transition-colors text-left">
            <span className="block text-2xl font-black text-[#8CFF00]/25 mb-4">01</span>
            <h3 className="text-base font-extrabold text-[#F7F8F5]">Conteúdo sem posicionamento</h3>
            <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-[#B7BFB6]">
              A clínica publica com frequência, mas não deixa claro por que o paciente deveria escolher seus procedimentos.
            </p>
          </div>

          <div className="rounded-xl border border-[#252B25] bg-[#111411] p-6 hover:border-[#8CFF00]/10 transition-colors text-left">
            <span className="block text-2xl font-black text-[#8CFF00]/25 mb-4">02</span>
            <h3 className="text-base font-extrabold text-[#F7F8F5]">Campanhas sem direção</h3>
            <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-[#B7BFB6]">
              O tráfego gera cliques ou leads, mas não prioriza os procedimentos mais estratégicos para a operação.
            </p>
          </div>

          <div className="rounded-xl border border-[#252B25] bg-[#111411] p-6 hover:border-[#8CFF00]/10 transition-colors text-left">
            <span className="block text-2xl font-black text-[#8CFF00]/25 mb-4">03</span>
            <h3 className="text-base font-extrabold text-[#F7F8F5]">Atendimento sem processo</h3>
            <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-[#B7BFB6]">
              O contato chega, demora para ser atendido e não recebe acompanhamento suficiente para avançar.
            </p>
          </div>

          <div className="rounded-xl border border-[#252B25] bg-[#111411] p-6 hover:border-[#8CFF00]/10 transition-colors text-left">
            <span className="block text-2xl font-black text-[#8CFF00]/25 mb-4">04</span>
            <h3 className="text-base font-extrabold text-[#F7F8F5]">Decisões sem dados</h3>
            <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-[#B7BFB6]">
              O dono não consegue identificar quais campanhas e processos realmente contribuem para consultas e faturamento.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

// 15. Diferentes Estágios de Crescimento (Claro)
function EstagiosSection() {
  const scrollToForm = () => {
    const element = document.getElementById("hero-form-wrapper");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="bg-[#EBEEE8] border-y border-[#D8DDD5] py-20 lg:py-24 text-[#111511]">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Cabeçalho */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-flex items-center rounded-full border border-[#D8DDD5] bg-[#F5F6F2] px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#343A34]">
            Estrutura Comercial
          </span>
          <h2 className="mt-5 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#111511] leading-tight">
            Sua clínica precisa da estrutura certa para o momento atual, não do maior pacote disponível.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#343A34] max-w-xl mx-auto leading-relaxed">
            O diagnóstico identifica onde está o principal gargalo e quais áreas precisam ser priorizadas.
          </p>
        </div>

        {/* Grid dos Dois Planos */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Bloco 1: Performance */}
          <div className="rounded-xl border border-[#D8DDD5] bg-[#FFFFFF] p-6 sm:p-8 flex flex-col justify-between shadow-sm text-left">
            <div>
              <span className="inline-block rounded-full bg-[#EBEEE8] px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#343A34]">
                Aceleração & Posicionamento
              </span>
              <h3 className="mt-4 text-xl sm:text-2xl font-extrabold text-[#111511]">Conteúdo, posicionamento e tráfego</h3>
              <p className="mt-3 text-xs sm:text-sm text-[#343A34] leading-relaxed">
                Para clínicas que precisam fortalecer a autoridade, comunicar melhor seus diferenciais e gerar novas oportunidades.
              </p>

              <div className="mt-6 pt-6 border-t border-[#D8DDD5]/60 space-y-3">
                {[
                  "Planejamento estratégico de autoridade",
                  "Produção de conteúdo direcionado",
                  "Direção criativa de vídeos e fotos",
                  "Desenvolvimento de criativos de campanha",
                  "Gestão completa de tráfego pago",
                  "Landing pages de alta conversão",
                  "Campanhas de geração de leads",
                  "Análise contínua de performance"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5">
                    <Check className="h-4 w-4 text-[#68BF00] shrink-0" />
                    <span className="text-xs sm:text-sm text-[#343A34]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#D8DDD5]">
              <p className="text-[11px] text-[#343A34] mb-4">
                <strong>Indicação:</strong> Para clínicas com faturamento a partir de R$ 35 mil/mês.
              </p>
            </div>
          </div>

          {/* Bloco 2: Crescimento Integrado */}
          <div className="rounded-xl border-2 border-[#8CFF00] bg-[#FFFFFF] p-6 sm:p-8 flex flex-col justify-between shadow-md text-left">
            <div>
              <span className="inline-block rounded-full bg-[#8CFF00]/10 px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#68BF00]">
                Previsibilidade de Escala
              </span>
              <h3 className="mt-4 text-xl sm:text-2xl font-extrabold text-[#111511]">Demanda, vendas e dados</h3>
              <p className="mt-3 text-xs sm:text-sm text-[#343A34] leading-relaxed">
                Para clínicas com maior volume que precisam melhorar atendimento, conversão, acompanhamento e previsibilidade.
              </p>

              <div className="mt-6 pt-6 border-t border-[#D8DDD5]/60 space-y-3">
                {[
                  "Alinhamento de posicionamento premium",
                  "Produção de conteúdo estruturada",
                  "Campanhas integradas de tráfego",
                  "Implantação e organização do CRM",
                  "Treinamento comercial da recepção",
                  "Scripts comerciais e cadências de follow-up",
                  "Acompanhamento comercial ativo e auditoria",
                  "Auditoria de conversões",
                  "Dashboards integrados de faturamento"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5">
                    <Check className="h-4 w-4 text-[#8CFF00] shrink-0" />
                    <span className="text-xs sm:text-sm text-[#111511] font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#D8DDD5]">
              <p className="text-[11px] text-[#343A34] mb-4">
                <strong>Indicação:</strong> Para clínicas com equipe dedicada e maior maturidade operacional.
              </p>
            </div>
          </div>

        </div>

        {/* CTA Único e Nota */}
        <div className="mt-12 text-center max-w-md mx-auto">
          <button
            onClick={scrollToForm}
            className="w-full inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-[#111511] hover:bg-[#343A34] px-6 text-xs font-bold uppercase tracking-wider text-[#F7F8F5] transition-all"
          >
            Descobrir qual estrutura minha clínica precisa
          </button>
          <p className="mt-3.5 text-xs text-[#343A34] font-medium">
            Você não precisa escolher agora. Nossa equipe fará essa análise durante o diagnóstico.
          </p>
        </div>

      </div>
    </section>
  );
}

// 16. Método FA (Escuro)
function MetodoSection() {
  return (
    <section className="relative border-t border-[#252B25] bg-[#101310] py-20 lg:py-28 text-[#F7F8F5]">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Cabeçalho */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <span className="inline-flex items-center rounded-full border border-[#252B25] bg-[#050705] px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#8CFF00]">
            Método FA
          </span>
          <h2 className="mt-5 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#F7F8F5]">
            Crescimento acontece quando estratégia, execução e acompanhamento trabalham na mesma direção.
          </h2>
        </div>

        {/* Representação visual simples e elegante */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 max-w-5xl mx-auto relative">
          
          {/* Pilar 1 */}
          <div className="rounded-xl border border-[#252B25] bg-[#111411]/50 p-6 text-center flex flex-col items-center">
            <div className="h-10 w-10 rounded-full bg-[#8CFF00]/10 flex items-center justify-center text-[#8CFF00] font-bold text-xs">
              01
            </div>
            <h3 className="mt-5 text-base font-extrabold text-[#F7F8F5]">Pilar 1 — Posicionamento e demanda</h3>
            <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[#B7BFB6]">
              Comunicação, conteúdo, criativos e campanhas construídos de forma técnica para atrair o público com o perfil ideal da clínica.
            </p>
          </div>

          {/* Pilar 2 */}
          <div className="rounded-xl border border-[#252B25] bg-[#111411]/50 p-6 text-center flex flex-col items-center">
            <div className="h-10 w-10 rounded-full bg-[#8CFF00]/10 flex items-center justify-center text-[#8CFF00] font-bold text-xs">
              02
            </div>
            <h3 className="mt-5 text-base font-extrabold text-[#F7F8F5]">Pilar 2 — Conversão</h3>
            <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[#B7BFB6]">
              Atendimento ágil da recepção, triagem de leads, scripts e cadências comerciais para converter contatos frios em agendamentos reais.
            </p>
          </div>

          {/* Pilar 3 */}
          <div className="rounded-xl border border-[#252B25] bg-[#111411]/50 p-6 text-center flex flex-col items-center">
            <div className="h-10 w-10 rounded-full bg-[#8CFF00]/10 flex items-center justify-center text-[#8CFF00] font-bold text-xs">
              03
            </div>
            <h3 className="mt-5 text-base font-extrabold text-[#F7F8F5]">Pilar 3 — Dados</h3>
            <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[#B7BFB6]">
              Relatórios e dashboards que apontam com precisão onde a clínica está lucrando, onde há gargalos e onde deve investir.
            </p>
          </div>

        </div>

        {/* Nota explicativa */}
        <div className="mt-14 text-center max-w-xl mx-auto">
          <p className="text-xs text-[#B7BFB6] opacity-80">
            * O nível de atuação da FA varia conforme o plano e o estágio de crescimento da clínica.
          </p>
        </div>

      </div>
    </section>
  );
}

// 17. Demais Cases (Escuro)
interface DemaisCasesSectionProps {
  onOpenVideo: (url: string) => void;
}

function DemaisCasesSection({ onOpenVideo }: DemaisCasesSectionProps) {
  const scrollToForm = () => {
    const element = document.getElementById("hero-form-wrapper");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Excluímos o primeiro case (Lannay) para não repetir
  const outrosCases = CASE_STUDIES.slice(1);

  return (
    <section className="relative border-t border-[#252B25] bg-[#050705] py-20 lg:py-28 text-[#F7F8F5]">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Cabeçalho */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-flex items-center rounded-full border border-[#252B25] bg-[#101310] px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#8CFF00]">
            Outros Resultados
          </span>
          <h2 className="mt-5 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#F7F8F5]">
            Estratégias sob medida para diferentes especialidades
          </h2>
        </div>

        {/* Grade de Cases */}
        <div className="space-y-12 max-w-5xl mx-auto">
          {outrosCases.map((c, i) => {
            const isReversed = i % 2 === 1;
            return (
              <div 
                key={c.id} 
                className={`rounded-2xl border border-[#252B25] bg-[#111411]/50 p-6 sm:p-8 flex flex-col md:flex-row gap-8 items-center ${isReversed ? "md:flex-row-reverse" : ""}`}
              >
                
                {/* Vídeo */}
                <div className="w-full md:w-[200px] shrink-0">
                  <div 
                    onClick={() => onOpenVideo(c.videoUrl)}
                    className="group relative aspect-[9/16] w-full max-w-[180px] mx-auto rounded-xl border border-[#252B25] bg-[#050705] overflow-hidden cursor-pointer shadow-md"
                  >
                    <img 
                      src={c.thumbnail} 
                      alt={`Depoimento ${c.name}`} 
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/25" />
                    
                    {/* Botão Play */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#8CFF00] text-black shadow-lg transition-transform duration-300 group-hover:scale-110">
                        <Play className="h-4 w-4 fill-black translate-x-0.5" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Conteúdo */}
                <div className="flex-grow text-left space-y-4">
                  
                  {/* Tag */}
                  <div className="flex flex-wrap items-center gap-2 text-xs font-extrabold tracking-widest text-[#8CFF00] uppercase">
                    <span>{c.specialty}</span>
                    <span className="h-1 w-1 rounded-full bg-[#B7BFB6]" />
                    <span className="text-[#B7BFB6]">{c.city}</span>
                  </div>

                  {/* Nome e Headline */}
                  <h3 className="text-lg sm:text-xl font-bold text-[#F7F8F5] leading-tight">
                    {c.name} — {c.headline}
                  </h3>

                  {/* Resultados */}
                  <div className="grid grid-cols-3 gap-3 max-w-sm pt-2">
                    <div className="rounded-lg bg-[#050705] p-2 text-center border border-[#252B25]">
                      <span className="block text-[8px] font-bold text-[#B7BFB6] uppercase">Investido</span>
                      <span className="block mt-0.5 text-xs font-black text-[#F7F8F5]">{c.stats.investment}</span>
                    </div>
                    <div className="rounded-lg bg-[#050705] p-2 text-center border border-[#252B25]">
                      <span className="block text-[8px] font-bold text-[#B7BFB6] uppercase">Retorno</span>
                      <span className="block mt-0.5 text-xs font-black text-[#F7F8F5]">{c.stats.revenue}</span>
                    </div>
                    <div className="rounded-lg bg-[#050705] p-2 text-center border border-[#252B25]">
                      <span className="block text-[8px] font-bold text-[#B7BFB6] uppercase">ROAS</span>
                      <span className="block mt-0.5 text-xs font-black text-[#8CFF00]">{c.stats.roas.split(" ")[0]}</span>
                    </div>
                  </div>

                  <div className="text-xs sm:text-sm text-[#B7BFB6] space-y-2 leading-relaxed">
                    <p><strong>Cenário:</strong> {c.previousScenario}</p>
                    <p><strong>Estratégia:</strong> {c.strategy}</p>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

        {/* CTA final dos cases */}
        <div className="mt-16 flex justify-center">
          <button
            onClick={scrollToForm}
            className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-[#8CFF00] px-8 text-xs font-bold uppercase tracking-wider text-black transition-all hover:bg-[#68BF00] glow-neon"
          >
            Quero ter resultados semelhantes na minha clínica
          </button>
        </div>

      </div>
    </section>
  );
}

// 18. Seção Institucional da FA (Clara)
function InstitucionalSection() {
  return (
    <section className="bg-[#F5F6F2] border-t border-[#D8DDD5] py-20 lg:py-24 text-[#111511]">
      <div className="mx-auto max-w-7xl px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
          
          {/* Copy e Conceito */}
          <div className="lg:col-span-6 flex flex-col text-center lg:text-left">
            <span className="inline-flex items-center justify-center lg:justify-start gap-2 mx-auto lg:mx-0">
              <span className="inline-flex items-center rounded-full border border-[#D8DDD5] bg-[#EBEEE8] px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#343A34]">
                Quem somos
              </span>
            </span>
            <h2 className="mt-5 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#111511] leading-tight">
              Você não contrata apenas campanhas. Contrata uma equipe acompanhando o crescimento da sua operação.
            </h2>
            <p className="mt-5 text-sm sm:text-base leading-relaxed text-[#343A34]">
              A FA conecta estratégia, conteúdo, tráfego, vendas e dados de acordo com o momento de cada clínica. O trabalho envolve acompanhamento operacional, análise diária de pipeline e decisões conjuntas ao lado da direção da clínica.
            </p>
          </div>

          {/* Gráfico / Telas / Dashboard mockups realísticos */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="rounded-xl border border-[#D8DDD5] bg-[#FFFFFF] p-6 w-full max-w-md shadow-sm space-y-4">
              
              {/* Agenda Mockup */}
              <div className="text-left">
                <span className="text-[10px] font-bold text-[#343A34] uppercase tracking-wider block mb-2">Painel Comercial Dot.Sales (Real)</span>
                <div className="rounded-lg border border-[#D8DDD5] bg-[#F5F6F2] p-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-[#8CFF00]" />
                    <span className="text-xs font-bold text-[#111511]">Novo Lead Qualificado</span>
                  </div>
                  <span className="text-[10px] font-bold text-[#343A34] bg-[#EBEEE8] px-2 py-0.5 rounded">Faturamento &gt; R$ 100K</span>
                </div>
              </div>

              {/* Métricas Dash */}
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-lg border border-[#D8DDD5] bg-[#F5F6F2] p-3 text-center">
                  <span className="block text-[8px] font-bold text-[#343A34] uppercase">Comparecimento</span>
                  <span className="block text-sm font-black text-[#111511]">82.4%</span>
                </div>
                <div className="rounded-lg border border-[#D8DDD5] bg-[#F5F6F2] p-3 text-center">
                  <span className="block text-[8px] font-bold text-[#343A34] uppercase">Conversão Consulta</span>
                  <span className="block text-sm font-black text-[#111511]">41.8%</span>
                </div>
              </div>

              {/* Selo de Confiança */}
              <div className="flex items-center gap-2 bg-[#EBEEE8] p-3 rounded-lg text-left">
                <ShieldCheck className="h-4.5 w-4.5 text-[#68BF00] shrink-0" />
                <span className="text-[11px] font-semibold text-[#111511]">Acompanhamento e reuniões semanais de faturamento e ROAS.</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

// 19. O Que Pode Ser Entregue (Escuro)
function EntregasSection() {
  const entregáveis = [
    "diagnóstico estratégico",
    "posicionamento",
    "planejamento de conteúdo",
    "produção de conteúdo",
    "direção criativa",
    "tráfego pago",
    "landing pages",
    "criativos",
    "geração de leads",
    "CRM",
    "estrutura de atendimento",
    "scripts",
    "follow-up",
    "indicadores",
    "dashboards",
    "reuniões estratégicas",
    "análise de conversão"
  ];

  return (
    <section className="relative border-t border-[#252B25] bg-[#090B09] py-20 lg:py-28 text-[#F7F8F5]">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Cabeçalho */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-flex items-center rounded-full border border-[#252B25] bg-[#101310] px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#8CFF00]">
            Entregáveis
          </span>
          <h2 className="mt-5 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#F7F8F5]">
            Uma estrutura construída ao redor da realidade da sua clínica.
          </h2>
        </div>

        {/* Grid de 17 Entregáveis */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto text-left">
          {entregáveis.map((ent, idx) => (
            <div key={idx} className="rounded-xl border border-[#252B25] bg-[#111411] p-4 flex items-center gap-3">
              <div className="h-1.5 w-1.5 rounded-full bg-[#8CFF00] shrink-0" />
              <span className="text-xs sm:text-sm font-semibold text-[#F7F8F5] capitalize">{ent}</span>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center max-w-xl mx-auto">
          <p className="text-xs text-[#B7BFB6] opacity-75">
            * Os entregáveis são definidos conforme o plano e o momento da clínica.
          </p>
        </div>

      </div>
    </section>
  );
}

// 20. Para Quem É / Não É (Escuro)
function ParaQuemSection() {
  const sim = [
    "faturam a partir de R$ 35 mil mensais;",
    "possuem serviço ou procedimento validado;",
    "querem aumentar autoridade e demanda;",
    "desejam depender menos de indicações;",
    "possuem capacidade de atender novos pacientes;",
    "entendem que crescimento exige investimento e execução;",
    "querem acompanhamento profissional;",
    "desejam tomar decisões com mais clareza."
  ];

  const nao = [
    "ainda não possui uma operação validada;",
    "procura apenas artes baratas;",
    "busca resultado sem investimento;",
    "não possui capacidade de atendimento;",
    "não pretende acompanhar a operação;",
    "espera garantia de faturamento;",
    "busca uma solução instantânea sem participação da equipe."
  ];

  return (
    <section className="relative border-t border-[#252B25] bg-[#101310] py-20 lg:py-28 text-[#F7F8F5]">
      <div className="mx-auto max-w-7xl px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          
          {/* Indicado */}
          <div className="rounded-xl border border-[#252B25] bg-[#111411]/50 p-6 sm:p-8">
            <h3 className="text-lg font-extrabold text-[#8CFF00] flex items-center gap-2.5">
              <span className="h-2 w-2 rounded-full bg-[#8CFF00]" />
              A FA é indicada para clínicas que:
            </h3>
            <div className="mt-8 space-y-4 text-left">
              {sim.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <Check className="h-4.5 w-4.5 text-[#8CFF00] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#B7BFB6] leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Não Indicado */}
          <div className="rounded-xl border border-[#252B25] bg-[#111411]/15 p-6 sm:p-8">
            <h3 className="text-lg font-extrabold text-[#B7BFB6] flex items-center gap-2.5">
              <span className="h-2 w-2 rounded-full bg-[#B7BFB6]" />
              A FA pode não ser indicada para quem:
            </h3>
            <div className="mt-8 space-y-4 text-left">
              {nao.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 opacity-75">
                  <X className="h-4 w-4 text-[#B7BFB6]/60 shrink-0 mt-1" />
                  <span className="text-xs sm:text-sm text-[#B7BFB6]/60 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

// 21. Como Funciona (Claro)
function ComoFuncionaSection() {
  const scrollToForm = () => {
    const element = document.getElementById("hero-form-wrapper");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const etapas = [
    { num: "01", title: "1. Você preenche o formulário", desc: "Compartilha informações sobre o momento, os objetivos e a estrutura da clínica." },
    { num: "02", title: "2. A FA analisa a operação", desc: "Nossa equipe identifica possíveis gargalos e oportunidades operacionais de conversão." },
    { num: "03", title: "3. Realizamos o diagnóstico", desc: "Apresentamos uma leitura estratégica detalhada do momento atual de captação comercial." },
    { num: "04", title: "4. Recomendamos o próximo passo", desc: "Caso exista aderência técnica da clínica, mostramos a estrutura comercial ideal." }
  ];

  return (
    <section className="bg-[#EBEEE8] border-t border-[#D8DDD5] py-20 lg:py-24 text-[#111511]">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Cabeçalho */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-flex items-center rounded-full border border-[#D8DDD5] bg-[#F5F6F2] px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#343A34]">
            Contratação
          </span>
          <h2 className="mt-5 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#111511] leading-tight">
            O primeiro passo é entender o momento da sua clínica.
          </h2>
        </div>

        {/* Fluxo */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto text-left">
          {etapas.map((et, index) => (
            <div key={index} className="rounded-xl border border-[#D8DDD5] bg-[#FFFFFF] p-6 flex flex-col justify-between shadow-sm">
              <div>
                <span className="block text-2xl font-black text-[#68BF00]/30 mb-4">{et.num}</span>
                <h3 className="text-base font-extrabold text-[#111511]">{et.title}</h3>
                <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-[#343A34]">{et.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <button
            onClick={scrollToForm}
            className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-[#111511] hover:bg-[#343A34] px-8 text-xs font-bold uppercase tracking-wider text-[#F7F8F5] transition-all"
          >
            SOLICITAR MEU DIAGNÓSTICO
          </button>
        </div>

      </div>
    </section>
  );
}

// 22. FAQ Accordion (Escuro)
function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleIndex = (idx: number) => {
    setActiveIndex(prev => prev === idx ? null : idx);
  };

  const faqs = [
    {
      q: "A FA atende clínicas que faturam R$ 35 mil por mês?",
      a: "Sim. A FA possui planos focados em posicionamento, conteúdo e tráfego para clínicas com operação validada e faturamento a partir de R$ 35 mil mensais."
    },
    {
      q: "Preciso contratar a estrutura comercial?",
      a: "Não. Algumas clínicas precisam inicialmente de conteúdo e tráfego. Outras precisam integrar marketing, atendimento, comercial e dados. O diagnóstico identifica o nível de entrega adequado."
    },
    {
      q: "A FA atende médicos e dentistas?",
      a: "Sim. A FA atende médicos, cirurgiões-dentistas e empresários de clínicas que atuam com estética facial, corporal, odontologia estética, procedimentos premium e áreas relacionadas."
    },
    {
      q: "A FA produz os conteúdos?",
      a: "Dependendo do plano, a FA pode atuar no planejamento, direção, produção e distribuição dos conteúdos de posicionamento."
    },
    {
      q: "Quanto preciso investir em anúncios?",
      a: "O investimento depende da cidade, especialidade, ticket dos procedimentos, concorrência, capacidade de atendimento comercial e objetivos da clínica."
    },
    {
      q: "Em quanto tempo aparecem resultados?",
      a: "O prazo varia conforme mercado local, posicionamento da marca, oferta, investimento de mídia, recepção e execução. O diagnóstico permite construir expectativas adequadas para cada operação."
    },
    {
      q: "A FA garante faturamento?",
      a: "Não. Os resultados dependem de diferentes fatores além do marketing, como conversão de consultas e equipe interna. A FA trabalha para melhorar o posicionamento, a demanda e a tomada de decisões comerciais com processos e dados."
    },
    {
      q: "Como funciona o diagnóstico?",
      a: "Após o preenchimento, a equipe analisa as informações coletadas e entra em contato para avaliar a aderência técnica e agendar a conversa estratégica sem custos."
    }
  ];

  return (
    <section className="relative border-t border-[#252B25] bg-[#050705] py-20 lg:py-28 text-[#F7F8F5]">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Cabeçalho */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-flex items-center rounded-full border border-[#252B25] bg-[#101310] px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#8CFF00]">
            FAQs
          </span>
          <h2 className="mt-5 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#F7F8F5]">
            Perguntas Frequentes
          </h2>
        </div>

        {/* Accordions */}
        <div className="max-w-3xl mx-auto space-y-4 text-left">
          {faqs.map((f, idx) => {
            const isOpen = activeIndex === idx;
            return (
              <div key={idx} className="rounded-xl border border-[#252B25] bg-[#111411] overflow-hidden">
                <button
                  onClick={() => toggleIndex(idx)}
                  className="w-full flex items-center justify-between p-5 text-left font-bold text-sm sm:text-base text-[#F7F8F5] hover:bg-[#050705]/40 transition-colors"
                >
                  <span>{f.q}</span>
                  {isOpen ? (
                    <ChevronUp className="h-4 w-4 text-[#8CFF00] shrink-0 ml-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4 text-[#8CFF00] shrink-0 ml-4" />
                  )}
                </button>
                {isOpen && (
                  <div className="p-5 border-t border-[#252B25]/50 bg-[#050705]/30 text-xs sm:text-sm text-[#B7BFB6] leading-relaxed animate-fade-in">
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

// 23. CTA Final (Escuro)
function CtaFinalSection() {
  const scrollToForm = () => {
    const element = document.getElementById("hero-form-wrapper");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative border-t border-[#252B25] bg-[#090B09] py-24 text-[#F7F8F5] overflow-hidden">
      
      <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
        <div className="h-[380px] w-[380px] rounded-full bg-[#8CFF00]/5 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <span className="inline-flex items-center rounded-full border border-[#252B25] bg-[#101310] px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#8CFF00]">
          Diagnóstico
        </span>
        <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#F7F8F5] leading-tight">
          Descubra qual estrutura pode levar sua clínica ao próximo estágio.
        </h2>
        <p className="mt-5 text-sm sm:text-base text-[#B7BFB6] max-w-xl mx-auto leading-relaxed">
          Entenda se sua operação precisa de mais posicionamento, mais demanda ou de uma estrutura integrada de vendas e dados.
        </p>

        <div className="mt-10">
          <button
            onClick={scrollToForm}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-[#8CFF00] px-8 text-xs font-bold uppercase tracking-wider text-black transition-all hover:bg-[#68BF00] glow-neon"
          >
            QUERO UM DIAGNÓSTICO DA MINHA CLÍNICA
          </button>
        </div>

        <p className="mt-4 text-[10px] font-bold text-[#B7BFB6]/60 uppercase tracking-widest">
          Para clínicas e consultórios com faturamento a partir de R$ 35 mil mensais.
        </p>

      </div>
    </section>
  );
}

// 32. Footer (Escuro)
function Footer() {
  return (
    <footer className="border-t border-[#252B25] bg-[#050705] text-[#B7BFB6]">
      <div className="mx-auto max-w-7xl px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6 border-b border-[#252B25]/20 text-xs">
        
        <div className="flex items-center gap-2">
          <span className="text-xl font-black text-[#F7F8F5]">FA</span>
          <span className="h-1.5 w-1.5 rounded-full bg-[#8CFF00]" />
          <span className="font-semibold text-[#F7F8F5]">Fazendo Acontecer</span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6">
          <a href="#" className="hover:text-[#F7F8F5] transition-colors">Termos de uso</a>
          <a href="#" className="hover:text-[#F7F8F5] transition-colors">Política de privacidade</a>
          <a 
            href={import.meta.env.VITE_INSTAGRAM_URL || "https://www.instagram.com/fazendoacontecer.ofc/"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 hover:text-[#8CFF00] transition-colors"
          >
            <Instagram className="h-3.5 w-3.5" />
            Instagram
          </a>
        </div>

      </div>

      <div className="mx-auto max-w-7xl px-6 py-8 text-center text-[10px] text-[#B7BFB6]/50 space-y-4">
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

// 24. CTA Fixo no Mobile
function CtaFixoMobile() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("hero-form-wrapper");
      if (element) {
        const rect = element.getBoundingClientRect();
        setIsVisible(rect.bottom < 0);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToForm = () => {
    const element = document.getElementById("hero-form-wrapper");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={`fixed bottom-0 left-0 w-full z-30 p-4 bg-[#050705]/95 border-t border-[#252B25] md:hidden backdrop-blur-md transition-all duration-300 transform ${isVisible ? "translate-y-0" : "translate-y-full"}`}>
      <button
        onClick={scrollToForm}
        className="w-full inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-[#8CFF00] text-xs font-bold uppercase tracking-wider text-black glow-neon"
      >
        SOLICITAR DIAGNÓSTICO
        <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
}

// Modal de Vídeos
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 animate-fade-in">
      <div className="relative w-full max-w-[320px] aspect-[9/16] rounded-2xl border border-[#252B25] bg-[#050705] overflow-hidden shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-[#F7F8F5] border border-[#252B25] hover:bg-[#8CFF00] hover:text-black transition-colors"
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

// 25. Modal de Confirmação (SuccessModal)
interface SuccessModalProps {
  leadName: string;
  onClose: () => void;
}

function SuccessModal({ leadName, onClose }: SuccessModalProps) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-fade-in">
      <div className="relative w-full max-w-4xl h-[90vh] md:h-[85vh] rounded-2xl border border-[#252B25] bg-[#101310] p-5 md:p-8 flex flex-col shadow-[0_0_80px_-10px_rgba(140,255,0,0.25)] backdrop-blur-xl">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-[#B7BFB6] hover:text-[#F7F8F5] border border-[#252B25] backdrop-blur-sm transition-colors"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="mb-6 pr-8 text-left">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#8CFF00]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#8CFF00]">
            <ShieldCheck className="h-3.5 w-3.5" />
            Recebido com sucesso
          </span>
          <h3 className="mt-3 text-xl sm:text-2xl font-black text-[#F7F8F5] tracking-tight uppercase leading-tight">
            Recebemos as informações da sua clínica, {leadName}!
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-[#B7BFB6] leading-relaxed">
            Nossa equipe fará uma análise inicial e poderá entrar em contato pelo WhatsApp informado para entender melhor o momento da sua operação.
          </p>

          {/* Passos */}
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
            <div className="rounded-lg border border-[#252B25] bg-[#050705] p-3">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#8CFF00] block mb-1">Passo 1</span>
              <span className="text-[11px] sm:text-xs text-[#B7BFB6] leading-snug">Análise das informações.</span>
            </div>
            <div className="rounded-lg border border-[#252B25] bg-[#050705] p-3">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#8CFF00] block mb-1">Passo 2</span>
              <span className="text-[11px] sm:text-xs text-[#B7BFB6] leading-snug">Contato da equipe.</span>
            </div>
            <div className="rounded-lg border border-[#252B25] bg-[#050705] p-3">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#8CFF00] block mb-1">Passo 3</span>
              <span className="text-[11px] sm:text-xs text-[#B7BFB6] leading-snug">Agendamento do diagnóstico, caso exista aderência.</span>
            </div>
          </div>

          <p className="mt-4 text-[11px] sm:text-xs text-[#B7BFB6] font-semibold">
            Você pode garantir o seu horário agora mesmo. Selecione o melhor dia e horário na agenda do nosso comercial abaixo:
          </p>
        </div>

        {/* Cal.com */}
        <div className="flex-1 rounded-xl border border-[#252B25] overflow-hidden bg-[#050705] relative min-h-0">
          <iframe
            src="https://cal.com/fazendoacontecer/30min"
            style={{ width: "100%", height: "100%", border: "none" }}
            title="Agendamento Comercial FA"
          />
        </div>

        {/* Rodapé do modal */}
        <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-[#252B25]/30 pt-4 text-xs text-[#B7BFB6] shrink-0">
          <span>* O time comercial tentará entrar em contato com você em alguns minutos.</span>
          <a
            href={import.meta.env.VITE_INSTAGRAM_URL || "https://www.instagram.com/fazendoacontecer.ofc/"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-bold text-[#8CFF00] hover:underline"
          >
            <Instagram className="h-3.5 w-3.5" />
            Seguir no Instagram
          </a>
        </div>

      </div>
    </div>
  );
}
