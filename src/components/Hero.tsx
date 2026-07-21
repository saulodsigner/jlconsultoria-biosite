import React from "react";
import { motion } from "motion/react";
import { ArrowUpRight, Award, ChevronRight, TrendingUp, Sparkles, Building, Briefcase } from "lucide-react";
// @ts-ignore
import teamPortrait from "../assets/images/img1.webp";

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  return (
    <section id="hero-section" className="relative pt-12 pb-0 overflow-visible">
      {/* Decorative Sophisticated Glows in Background - Using radial-gradient for 100% performance without expensive blur filters */}
      <div className="absolute top-[-10%] right-[-10%] w-[400px] h-[400px] bg-[radial-gradient(circle,_rgba(216,172,40,0.08)_0%,_transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[300px] h-[300px] bg-[radial-gradient(circle,_rgba(31,77,121,0.18)_0%,_transparent_70%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center lg:items-end">
          
          {/* Left Column - Content (Single parent animation to prevent layout thrashing on mount) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6 text-left w-full pb-8 lg:pb-16"
          >
            {/* Elegant Company Name tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1F4D79]/60 border border-white/10 backdrop-blur-md">
              <Building className="w-3.5 h-3.5 text-[#D8AC28]" />
              <span className="text-xs uppercase tracking-widest text-[#F4F6F9] font-medium">
                JL Consultoria
              </span>
            </div>

            {/* Editorial Title - Proprietor Name */}
            <div className="space-y-2">
              <h1 className="font-serif text-5xl sm:text-6xl tracking-tight leading-[1.08] text-[#F4F6F9]">
                JL <span className="font-serif italic text-[#D8AC28]">Consultoria</span>
              </h1>
              
              <p className="text-xs uppercase tracking-[0.25em] text-[#D8AC28] font-semibold flex items-center gap-1.5">
                <Briefcase className="w-3.5 h-3.5 text-[#D8AC28]/70" />
                CONSULTORIA EMPRESARIAL
              </p>
            </div>

            {/* Complementary description below proprietor name */}
            <p className="text-[#F4F6F9]/80 text-base sm:text-lg font-light leading-relaxed max-w-[390px] font-sans">
              Consultoria Empresarial para empresas que desejam crescer com estratégia, gestão e previsibilidade.
            </p>

            {/* Elegant Primary Button */}
            <div className="pt-2">
              <button
                id="hero-primary-cta"
                onClick={onOpenBooking}
                className="group relative px-8 py-4 bg-gradient-to-r from-[#D8AC28] to-[#B8911F] hover:from-[#B8911F] hover:to-[#D8AC28] text-[#0F2A44] font-bold text-xs sm:text-sm uppercase tracking-wider rounded-[14px] transition-all duration-300 shadow-xl shadow-[#D8AC28]/10 flex items-center justify-center gap-2 overflow-hidden cursor-pointer w-full sm:w-auto"
              >
                {/* Micro-shimmer glow */}
                <span className="absolute inset-0 w-full h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                <span>Agendar Diagnóstico</span>
                <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </motion.div>

          {/* Right Column - Loose Premium Portrait */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-7 relative flex justify-center lg:justify-end items-end w-full"
          >
            
            {/* Elegant Ambient Background Details */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              
              {/* Spinning Golden Abstract Star / Shape */}
              <div className="hidden sm:block absolute w-[360px] h-[360px] border border-[#D8AC28]/10 rounded-full animate-spin-slow" />
              
              {/* Elegant organic rotating ellipses */}
              <div className="hidden sm:block absolute w-[460px] h-[300px] border border-white/5 rounded-[100%] rotate-45 animate-float-slow" />
              <div className="hidden sm:block absolute w-[300px] h-[440px] border border-[#D8AC28]/5 rounded-[100%] -rotate-45 animate-float-medium" />
              
              {/* Pure Soft Background Blur glow - Radial-gradient base, 100% bug-free and smooth on mobile */}
              <div className="absolute w-80 h-80 bg-[radial-gradient(circle,_rgba(216,172,40,0.12)_0%,_transparent_70%)] pointer-events-none rounded-full" />
            </div>

            {/* Loose Portrait Image without limiting box - Large scale and elegant bottom fade */}
            <div className="relative w-full max-w-[800px] sm:max-w-[560px] md:max-w-[620px] lg:max-w-[680px] xl:max-w-[780px] flex items-end justify-center pointer-events-none z-0 mt-10 lg:mt-0 origin-bottom">
              <img
                src={teamPortrait}
                alt="JL Consultoria Sócias"
                width={1856}
                height={1611}
                fetchPriority="high"
                decoding="async"
                className="w-full h-auto object-contain block drop-shadow-[0_20px_50px_rgba(15,42,68,0.7)]"
                referrerPolicy="no-referrer"
              />
              
              {/* Floating Badge for Joicilene - Finanças */}
              <motion.div
                animate={{ 
                  y: [0, -6, 0]
                }}
                transition={{ 
                  y: {
                    repeat: Infinity,
                    duration: 5,
                    ease: "easeInOut"
                  }
                }}
                className="absolute left-5 sm:left-[8%] top-[44%] sm:top-[46%] z-20 pointer-events-auto shadow-2xl"
              >
                <div className="flex items-center gap-1.5 sm:gap-2.5 px-2 sm:px-4 py-1 sm:py-2.5 rounded-lg sm:rounded-2xl bg-[#0F2A44]/75 backdrop-blur-lg border border-white/15 shadow-xl">
                  <div className="w-1 sm:w-2 h-1 sm:h-2 rounded-full bg-[#D8AC28] animate-pulse shrink-0" />
                  <div className="text-left">
                    <p className="text-[10px] sm:text-xs font-semibold text-white tracking-wide leading-tight">Joicilene Lemos</p>
                    <p className="text-[6.5px] sm:text-[8px] text-white/55 uppercase tracking-wider font-medium font-mono leading-none mt-0.5">Especialista em</p>
                    <p className="text-[8px] sm:text-[10px] text-[#D8AC28] uppercase tracking-wider font-semibold font-mono leading-none mt-0.5">Finanças</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Badge for Suanny - Gestão Comercial */}
              <motion.div
                animate={{ 
                  y: [0, -6, 0]
                }}
                transition={{ 
                  y: {
                    repeat: Infinity,
                    duration: 6,
                    ease: "easeInOut",
                    delay: 0.5
                  }
                }}
                className="absolute right-5 sm:right-[8%] top-[54%] sm:top-[58%] z-20 pointer-events-auto shadow-2xl"
              >
                <div className="flex items-center gap-1.5 sm:gap-2.5 px-2 sm:px-4 py-1 sm:py-2.5 rounded-lg sm:rounded-2xl bg-[#0F2A44]/75 backdrop-blur-lg border border-white/15 shadow-xl">
                  <div className="w-1 sm:w-2 h-1 sm:h-2 rounded-full bg-[#D8AC28] animate-pulse shrink-0" />
                  <div className="text-left">
                    <p className="text-[10px] sm:text-xs font-semibold text-white tracking-wide leading-tight">Suanny Castro</p>
                    <p className="text-[6.5px] sm:text-[8px] text-white/55 uppercase tracking-wider font-medium font-mono leading-none mt-0.5">Especialista em</p>
                    <p className="text-[8px] sm:text-[10px] text-[#D8AC28] uppercase tracking-wider font-semibold font-mono leading-none mt-0.5">Gestão Comercial</p>
                  </div>
                </div>
              </motion.div>
              
              {/* Soft Gradient Fade overlay to prevent a harsh cut-off at the bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#0F2A44] via-[#0F2A44]/80 to-transparent z-10 pointer-events-none" />
            </div>

          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
