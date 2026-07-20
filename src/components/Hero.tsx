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
      {/* Decorative Sophisticated Glows in Background */}
      <div className="absolute top-[-10%] right-[-10%] w-[400px] h-[400px] bg-gradient-to-br from-[#D8AC28]/10 to-transparent rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[300px] h-[300px] bg-[#1F4D79]/20 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center lg:items-end">
          
          {/* Left Column - Content */}
          <div className="lg:col-span-5 space-y-6 text-left w-full pb-8 lg:pb-16">
            {/* Elegant Company Name tag */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1F4D79]/60 border border-white/10 backdrop-blur-md"
            >
              <Building className="w-3.5 h-3.5 text-[#D8AC28]" />
              <span className="text-xs uppercase tracking-widest text-[#F4F6F9] font-medium">
                JL Consultoria
              </span>
            </motion.div>

            {/* Editorial Title - Proprietor Name */}
            <div className="space-y-2">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-serif text-5xl sm:text-6xl tracking-tight leading-[1.08] text-[#F4F6F9]"
              >
                JL <span className="font-serif italic text-[#D8AC28]">Consultoria</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xs uppercase tracking-[0.25em] text-[#D8AC28] font-semibold flex items-center gap-1.5"
              >
                <Briefcase className="w-3.5 h-3.5 text-[#D8AC28]/70" />
                CONSULTORIA EMPRESARIAL
              </motion.p>
            </div>

            {/* Complementary description below proprietor name */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-[#F4F6F9]/80 text-base sm:text-lg font-light leading-relaxed max-w-[390px] font-sans"
            >
              Consultoria Empresarial para empresas que desejam crescer com estratégia, gestão e previsibilidade.
            </motion.p>

            {/* Elegant Primary Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-2"
            >
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
            </motion.div>
          </div>

          {/* Right Column - Loose Premium Portrait */}
          <div className="lg:col-span-7 relative flex justify-center lg:justify-end items-end w-full">
            
            {/* Elegant Ambient Background Details */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              
              {/* Spinning Golden Abstract Star / Shape */}
              <div className="absolute w-[360px] h-[360px] border border-[#D8AC28]/10 rounded-full animate-spin-slow" />
              
              {/* Elegant organic rotating ellipses */}
              <div className="absolute w-[460px] h-[300px] border border-white/5 rounded-[100%] rotate-45 animate-float-slow" />
              <div className="absolute w-[300px] h-[440px] border border-[#D8AC28]/5 rounded-[100%] -rotate-45 animate-float-medium" />
              
              {/* Pure Soft Background Blur glow */}
              <div className="absolute w-80 h-80 bg-[#D8AC28]/10 rounded-full blur-[80px] animate-pulse-slow" />
            </div>

            {/* Loose Portrait Image without limiting box - Large scale and elegant bottom fade */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              className="relative w-full max-w-[680px] sm:max-w-[720px] lg:max-w-[680px] xl:max-w-[780px] flex items-end justify-center pointer-events-none z-0 -mb-12 sm:-mb-16 lg:-mb-16 mt-10 lg:mt-0 scale-[1.25] sm:scale-100 origin-bottom"
            >
              <img
                src={teamPortrait}
                alt="JL Consultoria Sócias"
                className="w-full h-auto object-contain block drop-shadow-[0_20px_50px_rgba(15,42,68,0.7)]"
                referrerPolicy="no-referrer"
              />
              
              {/* Floating Badge for Joicilene - Finanças */}
              <motion.div
                initial={{ opacity: 0, x: -20, y: 0 }}
                animate={{ 
                  opacity: 1, 
                  x: 0,
                  y: [0, -8, 0]
                }}
                transition={{ 
                  opacity: { delay: 0.6, duration: 0.8 },
                  x: { delay: 0.6, duration: 0.8 },
                  y: {
                    repeat: Infinity,
                    duration: 5,
                    ease: "easeInOut"
                  }
                }}
                className="absolute left-5 sm:left-[8%] top-[44%] sm:top-[46%] z-20 pointer-events-auto shadow-2xl"
              >
                <div className="flex items-center gap-1.5 sm:gap-2.5 px-2 sm:px-4 py-1 sm:py-2.5 rounded-lg sm:rounded-2xl bg-[#0F2A44]/90 backdrop-blur-md border border-white/15 shadow-xl">
                  <div className="w-1 sm:w-2 h-1 sm:h-2 rounded-full bg-[#D8AC28] animate-pulse shrink-0" />
                  <div className="text-left">
                    <p className="text-[10px] sm:text-xs font-semibold text-white tracking-wide leading-tight">Joicilene</p>
                    <p className="text-[8px] sm:text-[10px] text-[#D8AC28] uppercase tracking-wider font-semibold font-mono leading-none mt-0.5">Finanças</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Badge for Suany - Gestão Comercial */}
              <motion.div
                initial={{ opacity: 0, x: 20, y: 0 }}
                animate={{ 
                  opacity: 1, 
                  x: 0,
                  y: [0, -8, 0]
                }}
                transition={{ 
                  opacity: { delay: 0.8, duration: 0.8 },
                  x: { delay: 0.8, duration: 0.8 },
                  y: {
                    repeat: Infinity,
                    duration: 6,
                    ease: "easeInOut",
                    delay: 0.5
                  }
                }}
                className="absolute right-5 sm:right-[8%] top-[54%] sm:top-[58%] z-20 pointer-events-auto shadow-2xl"
              >
                <div className="flex items-center gap-1.5 sm:gap-2.5 px-2 sm:px-4 py-1 sm:py-2.5 rounded-lg sm:rounded-2xl bg-[#0F2A44]/90 backdrop-blur-md border border-white/15 shadow-xl">
                  <div className="w-1 sm:w-2 h-1 sm:h-2 rounded-full bg-[#D8AC28] animate-pulse shrink-0" />
                  <div className="text-left">
                    <p className="text-[10px] sm:text-xs font-semibold text-white tracking-wide leading-tight">Suany</p>
                    <p className="text-[8px] sm:text-[10px] text-[#D8AC28] uppercase tracking-wider font-semibold font-mono leading-none mt-0.5">Gestão Comercial</p>
                  </div>
                </div>
              </motion.div>
              
              {/* Soft Gradient Fade overlay to prevent a harsh cut-off at the bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#0F2A44] via-[#0F2A44]/80 to-transparent z-10 pointer-events-none" />
            </motion.div>

          </div>
          
        </div>
      </div>
    </section>
  );
}
