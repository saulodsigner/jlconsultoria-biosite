import React from "react";
import { Instagram, Phone } from "lucide-react";

interface FooterProps {
  onOpenBooking: () => void;
  customLogo?: string | null;
}

export function JLFinanceLogo({ 
  className = "text-2xl sm:text-3xl font-sans text-white font-medium select-none"
}: { 
  className?: string;
  customLogo?: string | null;
}) {
  return (
    <div className={`${className} flex items-center gap-1`}>
      <span className="font-serif">JL</span>
      <span className="font-serif italic text-[#D8AC28]">Consultoria</span>
    </div>
  );
}

export default function Footer({ onOpenBooking, customLogo }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="main-footer" className="relative mt-24 border-t border-white/5 bg-[#0F2A44] overflow-hidden">
      {/* Background soft blur spots */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#D8AC28]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[800px] mx-auto px-6 sm:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Logo & Tagline */}
          <div className="md:col-span-8 text-left space-y-4">
            <JLFinanceLogo customLogo={customLogo} />
            <p className="text-sm text-white/50 leading-relaxed max-w-md">
              Desenvolvemos estratégias de alto impacto, governança corporativa e escala para líderes de negócios.
            </p>
          </div>

          {/* Social Links & Contacts */}
          <div className="md:col-span-4 flex flex-col items-start md:items-end space-y-4">
            <span className="text-xs uppercase tracking-widest text-white/40 font-semibold">
              Canais Oficiais
            </span>
            
            <div className="flex items-center gap-3">
              {/* WhatsApp Icon Circle */}
              <a
                id="footer-social-whatsapp"
                href="https://wa.me/5579998667450"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:border-[#D8AC28]/30 flex items-center justify-center text-white/70 hover:text-[#D8AC28] hover:bg-[#1F4D79]/40 transition-all duration-300 hover:-translate-y-1"
                title="WhatsApp"
              >
                <Phone className="w-4 h-4" />
              </a>

              {/* Instagram Icon Circle */}
              <a
                id="footer-social-instagram"
                href="https://www.instagram.com/jlconsultoriaempresarial1/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:border-[#D8AC28]/30 flex items-center justify-center text-white/70 hover:text-[#D8AC28] hover:bg-[#1F4D79]/40 transition-all duration-300 hover:-translate-y-1"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Lower Border & Copyright */}
        <div className="mt-12 pt-8 border-t border-white/5 flex justify-center text-center text-xs text-white/30">
          <p>© {currentYear} JL Consultoria. Todos os direitos reservados.</p>
        </div>

      </div>
    </footer>
  );
}
