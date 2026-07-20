/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Sparkles, 
  ArrowDown, 
  Phone, 
  Clock, 
  Award, 
  Building, 
  ChevronRight, 
  Lock, 
  Briefcase,
  Users,
  Target
} from "lucide-react";

import Hero from "./components/Hero";
import CardItem from "./components/CardItem";
import Footer from "./components/Footer";
import BookingWizard from "./components/BookingWizard";
import { 
  DiagnosticGraphic, 
  WhatsAppGraphic, 
  InstagramGraphic, 
  CalendarGraphic 
} from "./components/AbstractGraphics";

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingMode, setBookingMode] = useState<"diagnostic" | "scheduling">("diagnostic");
  const [currentTime, setCurrentTime] = useState("");
  const [customLogo, setCustomLogo] = useState<string | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("jl_custom_logo");
    if (saved && saved.startsWith("data:image/")) {
      setCustomLogo(saved);
    } else {
      setCustomLogo(null);
    }
  }, []);

  const handleLogoUpload = (base64: string) => {
    localStorage.setItem("jl_custom_logo", base64);
    setCustomLogo(base64);
  };

  const handleLogoReset = () => {
    localStorage.removeItem("jl_custom_logo");
    setCustomLogo(null);
  };

  // Live dynamic clock showing Sao Paulo/London corporate business hours
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "America/Sao_Paulo",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      setCurrentTime(now.toLocaleTimeString("pt-BR", options));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const openDiagnostic = () => {
    setBookingMode("diagnostic");
    setIsBookingOpen(true);
  };

  const openScheduling = () => {
    setBookingMode("scheduling");
    setIsBookingOpen(true);
  };

  const openDirectWhatsApp = () => {
    const text = "Olá, gostaria de agendar uma conversa preliminar sobre as soluções de consultoria estratégica para minha empresa.";
    window.open(`https://wa.me/5579998667450?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-[#0F2A44] text-[#F4F6F9] selection:bg-[#D8AC28]/30 selection:text-white font-sans relative py-8 sm:py-12 md:py-16 overflow-x-hidden">
      
      {/* 1. Hero Section */}
      <Hero onOpenBooking={openDirectWhatsApp} />

      {/* 2. Infinite Corporate Editorial Marquee Ticker - Full Screen Width */}
      <section id="ticker-section" className="relative w-full py-4 bg-[#1F4D79]/40 backdrop-blur-md border-y border-white/5 overflow-hidden flex items-center mt-0 mb-6 z-10">
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#0F2A44] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#0F2A44] to-transparent z-10 pointer-events-none" />
        
        {/* Scrolling text chain */}
        <div className="flex whitespace-nowrap animate-[marquee_25s_linear_infinite] text-[11px] uppercase tracking-[0.25em] font-medium text-white/50">
          <span className="mx-8 flex items-center gap-3">
            <Sparkles className="w-3.5 h-3.5 text-[#D8AC28]" />
            ESTRATÉGIA DE ESCALA
          </span>
          <span className="mx-8 flex items-center gap-3">
            <Briefcase className="w-3.5 h-3.5 text-[#D8AC28]" />
            GOVERNANÇA CORPORATIVA
          </span>
          <span className="mx-8 flex items-center gap-3">
            <Award className="w-3.5 h-3.5 text-[#D8AC28]" />
            PREVISIBILIDADE FINANCEIRA
          </span>
          <span className="mx-8 flex items-center gap-3">
            <Building className="w-3.5 h-3.5 text-[#D8AC28]" />
            EFICIÊNCIA OPERACIONAL
          </span>
          <span className="mx-8 flex items-center gap-3">
            <Users className="w-3.5 h-3.5 text-[#D8AC28]" />
            MENTORIA EXCLUSIVA
          </span>
          <span className="mx-8 flex items-center gap-3">
            <Target className="w-3.5 h-3.5 text-[#D8AC28]" />
            GESTÃO INTELIGENTE
          </span>
          
          {/* Repeat for seamless loop */}
          <span className="mx-8 flex items-center gap-3">
            <Sparkles className="w-3.5 h-3.5 text-[#D8AC28]" />
            ESTRATÉGIA DE ESCALA
          </span>
          <span className="mx-8 flex items-center gap-3">
            <Briefcase className="w-3.5 h-3.5 text-[#D8AC28]" />
            GOVERNANÇA CORPORATIVA
          </span>
          <span className="mx-8 flex items-center gap-3">
            <Award className="w-3.5 h-3.5 text-[#D8AC28]" />
            PREVISIBILIDADE FINANCEIRA
          </span>
          <span className="mx-8 flex items-center gap-3">
            <Building className="w-3.5 h-3.5 text-[#D8AC28]" />
            EFICIÊNCIA OPERACIONAL
          </span>
        </div>
      </section>

      {/* 3. Elegant Section Divider & Introducer */}
      <div id="cards-navigation" className="max-w-[800px] mx-auto px-6 sm:px-8 pt-12 pb-6 text-center space-y-4">
        <div className="inline-flex items-center justify-center gap-3">
          <div className="w-12 h-[1px] bg-white/10" />
          <span className="text-xs uppercase tracking-[0.3em] text-[#D8AC28] font-bold">SOLUÇÕES E CANAIS</span>
          <div className="w-12 h-[1px] bg-white/10" />
        </div>
        <h2 className="font-serif text-3xl sm:text-[48px] text-white font-medium leading-tight">
          Direcionamento <span className="font-serif italic text-[#D8AC28]">Estratégico</span>
        </h2>
        <p className="text-sm text-white/50 max-w-lg mx-auto">
          Selecione a solução ideal para o momento atual de sua empresa. Desfrute de caminhos simplificados de alta conversão.
        </p>
        <div className="flex justify-center pt-2">
          <ArrowDown className="w-4 h-4 text-[#D8AC28] animate-bounce" />
        </div>
      </div>

      {/* 4. Main Link Cards List inside Bounded 800px Container */}
      <main id="solutions-cards-grid" className="max-w-[800px] mx-auto px-6 sm:px-8 space-y-8 md:space-y-10">
        
        {/* CARD 01 - Diagnóstico Empresarial */}
        <CardItem
          id="1"
          badge="Diagnóstico Inicial"
          title="Diagnóstico Empresarial"
          buttonText="Agendar Diagnóstico"
          onButtonClick={openDiagnostic}
          isPrimaryButton={true}
          graphicSvg={<DiagnosticGraphic />}
        />

        {/* CARD 02 - WhatsApp */}
        <CardItem
          id="2"
          badge="Atendimento Imediato"
          title="Fale conosco no WhatsApp"
          buttonText="Conversar Agora"
          onButtonClick={openDirectWhatsApp}
          isPrimaryButton={true}
          graphicSvg={<WhatsAppGraphic />}
        />

        {/* CARD 04 - Grande CTA Final (Agende uma Reunião) */}
        <div
          id="card-cta-final"
          className="relative w-full rounded-[24px] bg-gradient-to-br from-[#1F4D79]/90 to-[#0F2A44] border border-[#D8AC28]/25 hover:border-[#D8AC28]/45 shadow-2xl overflow-hidden p-6 sm:p-8 lg:p-10 text-left group transition-all duration-300 hover:shadow-3xl hover:shadow-black/30"
        >
          {/* Subtle Golden Glow behind final CTA - radial gradient for 100% performance without filter: blur */}
          <div className="absolute -bottom-10 -right-10 w-96 h-96 bg-[radial-gradient(circle,_rgba(216,172,40,0.12)_0%,_transparent_70%)] rounded-full pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center relative z-10">
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-4">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#D8AC28]">
                <Award className="w-3.5 h-3.5" />
                Sessão Estratégica Exclusiva
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-white font-medium leading-[1.1]">
                Pronto para o <span className="font-serif italic text-[#D8AC28]">Próximo Nível</span>?
              </h3>
              
              <div className="pt-1">
                <button
                  id="final-cta-booking-btn"
                  onClick={openScheduling}
                  className="group/btn w-full sm:w-auto px-8 py-3.5 bg-[#D8AC28] hover:bg-[#B8911F] text-[#0F2A44] font-bold text-xs sm:text-sm uppercase tracking-wider rounded-[14px] shadow-lg shadow-[#D8AC28]/25 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Agendar Reunião de Alinhamento</span>
                  <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>

            {/* Right Photo Placeholder */}
            <div className="lg:col-span-4 flex justify-center lg:justify-end w-full">
              <div className="relative w-full lg:max-w-[220px] xl:max-w-[260px] h-[160px] lg:h-[200px] rounded-[18px] bg-[#0F2A44]/80 border border-white/10 p-2 flex flex-col justify-center items-center text-center overflow-hidden">
                {/* Abstract graphic lines in placeholder */}
                <div className="absolute inset-1 border border-dashed border-[#D8AC28]/20 rounded-[14px] pointer-events-none" />
                <CalendarGraphic />
                <span className="absolute bottom-3 inset-x-3 text-[10px] uppercase tracking-widest text-[#D8AC28]/50 font-mono font-semibold">
                  AGENDA // JL
                </span>
              </div>
            </div>
          </div>
        </div>

      </main>

      {/* 6. Footer Component */}
      <Footer 
        onOpenBooking={openDiagnostic} 
        customLogo={customLogo}
      />

      {/* 7. Interactive Custom Scheduling Drawer / Modal */}
      <BookingWizard
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        mode={bookingMode}
      />

      {/* Tailwind Marquee Keyframes Injected as Custom Style Block */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

    </div>
  );
}
