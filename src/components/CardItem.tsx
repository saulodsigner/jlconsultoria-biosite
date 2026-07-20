import React from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

interface CardItemProps {
  id: string;
  badge?: string;
  title: string;
  buttonText: string;
  onButtonClick: () => void;
  isPrimaryButton?: boolean;
  graphicSvg: React.ReactNode;
}

export default function CardItem({
  id,
  badge,
  title,
  buttonText,
  onButtonClick,
  isPrimaryButton = false,
  graphicSvg,
}: CardItemProps) {
  return (
    <div
      id={`card-${id}`}
      className="group relative w-full rounded-[24px] bg-gradient-to-br from-[#1F4D79]/60 to-[#1F4D79]/30 border border-white/10 hover:border-white/20 shadow-xl shadow-black/10 backdrop-blur-md overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/20"
    >
      {/* Background soft lighting details - radial gradients for 100% performance without filter: blur */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-[radial-gradient(circle,_rgba(255,255,255,0.02)_0%,_transparent_70%)] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-[radial-gradient(circle,_rgba(216,172,40,0.04)_0%,_transparent_70%)] rounded-full pointer-events-none" />

      {/* Main Container - Horizontal Layout on Desktop, Stacking on Tablet/Mobile */}
      <div className="p-6 sm:p-8 lg:p-10 flex flex-col lg:flex-row items-center lg:items-center gap-6 lg:gap-8">
        
        {/* Left Side: Content Column */}
        <div className="flex-1 flex flex-col justify-between space-y-4 text-left w-full">
          <div className="space-y-1.5">
            {/* Optional Small Elegant Badge */}
            {badge && (
              <span className="inline-block text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-[#D8AC28]">
                {badge}
              </span>
            )}
            
            {/* Title with Serif Editorial Touch */}
            <h3 className="font-serif text-3xl sm:text-4xl text-[#F4F6F9] font-medium leading-tight group-hover:text-white transition-colors duration-300">
              {title}
            </h3>
          </div>

          {/* Action Button */}
          <div className="pt-1">
            <button
              id={`btn-${id}`}
              onClick={onButtonClick}
              className={`group/btn px-6 sm:px-8 py-3.5 rounded-[14px] text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer w-full sm:w-auto ${
                isPrimaryButton
                  ? "bg-gradient-to-r from-[#D8AC28] to-[#B8911F] hover:from-[#B8911F] hover:to-[#D8AC28] text-[#0F2A44] shadow-md shadow-[#D8AC28]/10"
                  : "bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20"
              }`}
            >
              <span>{buttonText}</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </button>
          </div>
        </div>

        {/* Right Side: High-end Custom SVG Placeholder */}
        <div className="w-full lg:w-[220px] xl:w-[260px] shrink-0 relative flex items-center justify-center h-[160px] lg:h-[200px] bg-[#0F2A44]/50 rounded-[18px] border border-white/5 overflow-hidden p-4">
          {/* Accent borders inside placeholder */}
          <div className="absolute inset-2 border border-dashed border-white/5 rounded-[12px] pointer-events-none" />
          
          {/* Subtle animated particles behind graphics */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1F4D79]/20 pointer-events-none" />

          {/* Graphical custom SVG node passed as prop */}
          <div className="relative z-10 w-full flex justify-center items-center">
            {graphicSvg}
          </div>
        </div>

      </div>
    </div>
  );
}
