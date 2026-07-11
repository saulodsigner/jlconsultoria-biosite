import React from "react";
import { motion } from "motion/react";
import { ArrowUpRight, Award, ChevronRight, TrendingUp, Sparkles, Building, Briefcase } from "lucide-react";

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  return (
    <section id="hero-section" className="relative pt-12 pb-12 overflow-hidden">
      {/* Decorative Sophisticated Glows in Background */}
      <div className="absolute top-[-10%] right-[-10%] w-[400px] h-[400px] bg-gradient-to-br from-[#D8AC28]/10 to-transparent rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[300px] h-[300px] bg-[#1F4D79]/20 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-[800px] mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column - Content */}
          <div className="lg:col-span-7 space-y-6 text-left w-full">
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
              className="text-[#F4F6F9]/80 text-base sm:text-lg font-light leading-relaxed max-w-xl font-sans"
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

          {/* Right Column - Premium Photographic Frame Placeholder */}
          <div className="lg:col-span-5 relative flex justify-center w-full">
            
            {/* Elegant Ambient Background Details */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              
              {/* Spinning Golden Abstract Star / Shape */}
              <div className="absolute w-[280px] h-[280px] border border-[#D8AC28]/10 rounded-full animate-spin-slow" />
              
              {/* Elegant organic rotating ellipses */}
              <div className="absolute w-[360px] h-[220px] border border-white/5 rounded-[100%] rotate-45 animate-float-slow" />
              <div className="absolute w-[220px] h-[320px] border border-[#D8AC28]/5 rounded-[100%] -rotate-45 animate-float-medium" />
              
              {/* Pure Soft Background Blur glow */}
              <div className="absolute w-56 h-56 bg-[#D8AC28]/10 rounded-full blur-[50px] animate-pulse-slow" />
            </div>

            {/* High-End Portrait Frame (24px rounded corners, glassmorphic outer shell) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative w-full max-w-[280px] aspect-[3/4] p-3 rounded-[24px] bg-[#1F4D79]/30 border border-white/10 shadow-2xl backdrop-blur-md group hover:border-[#D8AC28]/30 transition-all duration-500 hover:translate-y-[-4px]"
            >
              {/* Golden Corner Accents */}
              <div className="absolute top-4 left-4 w-5 h-5 border-t-2 border-l-2 border-[#D8AC28]/40 rounded-tl-sm" />
              <div className="absolute top-4 right-4 w-5 h-5 border-t-2 border-r-2 border-[#D8AC28]/40 rounded-tr-sm" />
              <div className="absolute bottom-4 left-4 w-5 h-5 border-b-2 border-l-2 border-[#D8AC28]/40 rounded-bl-sm" />
              <div className="absolute bottom-4 right-4 w-5 h-5 border-b-2 border-r-2 border-[#D8AC28]/40 rounded-br-sm" />

              {/* Inner Frame Area (Empty Placeholder) */}
              <div className="w-full h-full rounded-[18px] bg-gradient-to-b from-[#1F4D79]/60 to-[#0F2A44]/90 border border-white/5 flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
                
                {/* Interactive particle lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path d="M0,50 Q25,20 50,50 T100,50" fill="none" stroke="#D8AC28" strokeWidth="0.5" className="animate-float-medium" />
                  <path d="M0,30 Q25,60 50,30 T100,30" fill="none" stroke="white" strokeWidth="0.25" className="animate-float-slow" />
                </svg>

                {/* Aesthetic Placeholder Text */}
                <div className="space-y-4 relative z-10">
                  <div className="w-12 h-12 rounded-full border border-[#D8AC28]/25 flex items-center justify-center mx-auto bg-[#0F2A44]/80 text-[#D8AC28] shadow-md group-hover:scale-110 transition-transform duration-500">
                    <Award className="w-5 h-5" />
                  </div>
                  <div className="space-y-1.5">
                    <p className="font-serif text-xs italic text-[#D8AC28] tracking-wide">Espaço Reservado</p>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/40">Retrato Editorial</p>
                  </div>
                  <p className="text-[10px] text-white/30 max-w-[160px] mx-auto leading-relaxed">
                    A moldura ideal para carregar a imagem de autoridade da JL Consultoria.
                  </p>
                </div>

                {/* Minimalist Floating Accent Dots */}
                <div className="absolute bottom-6 left-6 w-1.5 h-1.5 rounded-full bg-[#D8AC28]/40 animate-ping" />
                <div className="absolute top-6 right-6 w-1 h-1 rounded-full bg-white/20" />
              </div>
            </motion.div>

          </div>
          
        </div>
      </div>
    </section>
  );
}
