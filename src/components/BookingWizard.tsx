import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Calendar, MessageSquare, ChevronRight, Check, Award, ShieldCheck, Zap, Sparkles } from "lucide-react";

interface BookingWizardProps {
  isOpen: boolean;
  onClose: () => void;
  mode: "diagnostic" | "scheduling";
}

export default function BookingWizard({ isOpen, onClose, mode }: BookingWizardProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    nome: "",
    empresa: "",
    whatsapp: "",
    nicho: "",
    instagram: "",
    faturamento: "",
    desafio: "",
    objetivo: "",
    data: "",
    horario: "",
  });

  // Reset steps and form when modal state or mode changes
  useEffect(() => {
    if (isOpen) {
      setStep(1);
      setFormData({
        nome: "",
        empresa: "",
        whatsapp: "",
        nicho: "",
        instagram: "",
        faturamento: "",
        desafio: "",
        objetivo: "",
        data: "",
        horario: "",
      });
    }
  }, [isOpen, mode]);

  const faturamentoOptions = [
    "Até R$ 50k / mês",
    "R$ 50k a R$ 200k / mês",
    "R$ 200k a R$ 500k / mês",
    "Acima de R$ 500k / mês",
  ];

  const desafiosOptions = [
    "Escala de Vendas e Previsibilidade",
    "Gestão Financeira e Processos",
    "Liderança, Cultura e Contratação",
    "Estruturação de Modelo de Negócio",
    "Outro Desafio Estratégico",
  ];

  const objetivosReuniaoOptions = [
    "Acelerar Vendas e Escala",
    "Organizar Finanças e Processos",
    "Estruturação Societária / Governança",
    "Contratação e Cultura de Alta Performance",
    "Outro Objetivo Estratégico",
  ];

  const datasDisponiveis = [
    { dia: "Segunda", data: "13/07" },
    { dia: "Terça", data: "14/07" },
    { dia: "Quarta", data: "15/07" },
    { dia: "Quinta", data: "16/07" },
    { dia: "Sexta", data: "17/07" },
  ];

  const horariosDisponiveis = ["09:00", "11:00", "14:00", "16:00", "17:30"];

  // Helper to check if next button should be enabled
  const isStepValid = () => {
    if (mode === "diagnostic") {
      if (step === 1) return formData.nome.trim() !== "" && formData.whatsapp.trim() !== "";
      if (step === 2) return formData.empresa.trim() !== "" && formData.nicho.trim() !== "" && formData.instagram.trim() !== "";
      if (step === 3) return formData.faturamento !== "";
      if (step === 4) return formData.desafio !== "";
    } else {
      // scheduling mode
      if (step === 1) return formData.nome.trim() !== "" && formData.empresa.trim() !== "" && formData.whatsapp.trim() !== "";
      if (step === 2) return formData.objetivo !== "";
      if (step === 3) return formData.data !== "";
      if (step === 4) return formData.horario !== "";
    }
    return false;
  };

  const handleNext = () => {
    if (!isStepValid()) return;
    setStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setStep((prev) => Math.max(1, prev - 1));
  };

  const handleSubmit = () => {
    let text = "";

    if (mode === "diagnostic") {
      // Ensure instagram prefix is neat
      const rawInsta = formData.instagram.trim();
      const formattedInsta = rawInsta.startsWith("@") ? rawInsta : `@${rawInsta}`;

      text = `Olá JL Consultoria, acabei de realizar o meu Diagnóstico Empresarial pelo site. Seguem as minhas informações completas:\n\n` +
        `📌 *Dados de Contato:*\n` +
        `• Nome: ${formData.nome}\n` +
        `• WhatsApp: ${formData.whatsapp}\n\n` +
        `💼 *Perfil do Negócio:*\n` +
        `• Empresa: ${formData.empresa}\n` +
        `• Nicho de Atuação: ${formData.nicho}\n` +
        `• Instagram: ${formattedInsta}\n\n` +
        `⚡ *Porte & Desafio:*\n` +
        `• Faturamento: ${formData.faturamento}\n` +
        `• Gargalo Crítico: ${formData.desafio}\n\n` +
        `Gostaria de agendar o meu diagnóstico para entender como a JL Consultoria pode ajudar a escalar minha empresa!`;
    } else {
      // scheduling mode
      text = `Olá JL Consultoria, gostaria de agendar uma Reunião de Alinhamento Estratégico. Seguem os dados para agendamento:\n\n` +
        `📌 *Dados de Contato:*\n` +
        `• Nome: ${formData.nome}\n` +
        `• Empresa: ${formData.empresa}\n` +
        `• WhatsApp: ${formData.whatsapp}\n\n` +
        `🎯 *Objetivo da Reunião:*\n` +
        `• Foco principal: ${formData.objetivo}\n\n` +
        `🗓️ *Sugerido de Agenda:*\n` +
        `• Data: ${formData.data}\n` +
        `• Horário: ${formData.horario}\n\n` +
        `Aguardo a confirmação do horário para iniciarmos!`;
    }

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/5579998667450?text=${encodedText}`;
    window.open(whatsappUrl, "_blank");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div id="booking-modal-overlay" className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-y-auto">
          {/* Backdrop Blur */}
          <motion.div
            id="booking-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#0F2A44]/95 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            id="booking-modal-container"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-xl bg-[#1F4D79] border border-white/10 rounded-[24px] shadow-2xl overflow-hidden z-10 my-auto"
          >
            {/* Background glowing decorations */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-[#D8AC28]/10 to-transparent rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-[#0F2A44]/50 rounded-full blur-2xl pointer-events-none" />

            {/* Header */}
            <div className="relative px-6 pt-6 pb-4 border-b border-white/5 flex justify-between items-center">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#D8AC28] font-bold flex items-center gap-1.5 mb-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  {mode === "diagnostic" ? "DIAGNÓSTICO EMPRESARIAL" : "AGENDAMENTO DE REUNIÃO"}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-[#F4F6F9] font-medium">
                  {mode === "diagnostic" ? "Diagnóstico Estratégico" : "Sessão Estratégica Exclusiva"}
                </h3>
              </div>
              <button
                id="close-wizard-btn"
                onClick={onClose}
                className="p-2 text-white/50 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-all duration-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-white/5 h-1">
              <motion.div
                className="h-full bg-[#D8AC28]"
                animate={{ width: `${(step / 4) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>

            {/* Content Body */}
            <div className="p-6 relative min-h-[360px] flex flex-col justify-between">
              <AnimatePresence mode="wait">
                {/* ----------------- DIAGNOSTIC MODE STEPS ----------------- */}
                {mode === "diagnostic" && (
                  <div className="flex-1 flex flex-col justify-center">
                    {step === 1 && (
                      <motion.div
                        key="diag-step1"
                        initial={{ opacity: 0, x: 15 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -15 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-5"
                      >
                        <div className="space-y-1.5">
                          <h4 className="text-base sm:text-lg font-serif font-medium text-[#F4F6F9]">
                            Vamos iniciar o seu diagnóstico
                          </h4>
                          <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                            Por favor, insira seus dados de contato básicos para podermos interagir com você.
                          </p>
                        </div>

                        <div className="space-y-4">
                          <div className="space-y-1.5">
                            <label className="text-[10px] uppercase tracking-widest text-white/60 font-medium">Seu Nome Completo</label>
                            <input
                              type="text"
                              required
                              value={formData.nome}
                              onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                              placeholder="Ex: Elena Silveira"
                              className="w-full px-4 py-3 bg-[#0F2A44]/80 border border-white/10 focus:border-[#D8AC28] rounded-xl text-white placeholder-white/30 outline-none transition-all duration-300 text-sm"
                            />
                          </div>

                          <div className="space-y-1.5">
                            <label className="text-[10px] uppercase tracking-widest text-white/60 font-medium">WhatsApp para Contato</label>
                            <input
                              type="text"
                              required
                              value={formData.whatsapp}
                              onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                              placeholder="Ex: (82) 99999-9999"
                              className="w-full px-4 py-3 bg-[#0F2A44]/80 border border-white/10 focus:border-[#D8AC28] rounded-xl text-white placeholder-white/30 outline-none transition-all duration-300 text-sm"
                            />
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {step === 2 && (
                      <motion.div
                        key="diag-step2"
                        initial={{ opacity: 0, x: 15 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -15 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-4"
                      >
                        <div className="space-y-1.5">
                          <h4 className="text-base sm:text-lg font-serif font-medium text-[#F4F6F9]">
                            Sobre a sua Empresa e Segmento
                          </h4>
                          <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                            Precisamos entender o nicho de atuação e as redes da marca para realizar uma análise prévia.
                          </p>
                        </div>

                        <div className="space-y-3.5">
                          <div className="space-y-1.5">
                            <label className="text-[10px] uppercase tracking-widest text-white/60 font-medium">Nome da sua Empresa</label>
                            <input
                              type="text"
                              required
                              value={formData.empresa}
                              onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                              placeholder="Ex: Nexa Marketing"
                              className="w-full px-4 py-3 bg-[#0F2A44]/80 border border-white/10 focus:border-[#D8AC28] rounded-xl text-white placeholder-white/30 outline-none transition-all duration-300 text-sm"
                            />
                          </div>

                          <div className="space-y-1.5">
                            <label className="text-[10px] uppercase tracking-widest text-white/60 font-medium">Nicho de Atuação / Segmento</label>
                            <input
                              type="text"
                              required
                              value={formData.nicho}
                              onChange={(e) => setFormData({ ...formData, nicho: e.target.value })}
                              placeholder="Ex: Estética, Tecnologia, Varejo, Serviços..."
                              className="w-full px-4 py-3 bg-[#0F2A44]/80 border border-white/10 focus:border-[#D8AC28] rounded-xl text-white placeholder-white/30 outline-none transition-all duration-300 text-sm"
                            />
                          </div>

                          <div className="space-y-1.5">
                            <label className="text-[10px] uppercase tracking-widest text-white/60 font-medium">Instagram da Empresa</label>
                            <input
                              type="text"
                              required
                              value={formData.instagram}
                              onChange={(e) => setFormData({ ...formData, instagram: e.target.value })}
                              placeholder="Ex: @minhaempresa"
                              className="w-full px-4 py-3 bg-[#0F2A44]/80 border border-white/10 focus:border-[#D8AC28] rounded-xl text-white placeholder-white/30 outline-none transition-all duration-300 text-sm"
                            />
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {step === 3 && (
                      <motion.div
                        key="diag-step3"
                        initial={{ opacity: 0, x: 15 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -15 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-4"
                      >
                        <div className="space-y-1.5">
                          <h4 className="text-base sm:text-lg font-serif font-medium text-[#F4F6F9]">
                            Qual o faturamento médio mensal atual?
                          </h4>
                          <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                            O faturamento ajuda a posicionar as metodologias e soluções de crescimento de acordo com o tamanho do seu negócio.
                          </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {faturamentoOptions.map((opt) => (
                            <button
                              key={opt}
                              onClick={() => setFormData({ ...formData, faturamento: opt })}
                              className={`px-4 py-3 text-left rounded-xl border text-xs sm:text-sm transition-all duration-300 flex items-center justify-between ${
                                formData.faturamento === opt
                                  ? "bg-[#D8AC28]/20 border-[#D8AC28] text-white font-medium"
                                  : "bg-[#0F2A44]/60 border-white/5 text-white/80 hover:bg-[#0F2A44]/90 hover:border-white/10"
                              }`}
                            >
                              <span>{opt}</span>
                              {formData.faturamento === opt && <Check className="w-4 h-4 text-[#D8AC28]" />}
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {step === 4 && (
                      <motion.div
                        key="diag-step4"
                        initial={{ opacity: 0, x: 15 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -15 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-4"
                      >
                        <div className="space-y-1.5">
                          <h4 className="text-base sm:text-lg font-serif font-medium text-[#F4F6F9]">
                            Qual é o maior gargalo atual?
                          </h4>
                          <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                            Selecione o desafio que está mais limitando os lucros ou a expansão da empresa hoje.
                          </p>
                        </div>

                        <div className="space-y-2 max-h-[190px] overflow-y-auto pr-1 custom-scroll">
                          {desafiosOptions.map((desafio) => (
                            <button
                              key={desafio}
                              onClick={() => setFormData({ ...formData, desafio: desafio })}
                              className={`w-full px-4 py-2.5 text-left rounded-xl border text-xs sm:text-sm transition-all duration-200 flex items-center justify-between ${
                                formData.desafio === desafio
                                  ? "bg-[#D8AC28]/20 border-[#D8AC28] text-white font-medium"
                                  : "bg-[#0F2A44]/60 border-white/5 text-white/80 hover:bg-[#0F2A44]/90 hover:border-white/10"
                              }`}
                            >
                              <span>{desafio}</span>
                              {formData.desafio === desafio && <Check className="w-4 h-4 text-[#D8AC28]" />}
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </div>
                )}

                {/* ----------------- SCHEDULING MODE STEPS ----------------- */}
                {mode === "scheduling" && (
                  <div className="flex-1 flex flex-col justify-center">
                    {step === 1 && (
                      <motion.div
                        key="sched-step1"
                        initial={{ opacity: 0, x: 15 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -15 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-5"
                      >
                        <div className="space-y-1.5">
                          <h4 className="text-base sm:text-lg font-serif font-medium text-[#F4F6F9]">
                            Dados de Agendamento
                          </h4>
                          <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                            Insira suas informações de contato e o nome do seu negócio para reservarmos sua agenda.
                          </p>
                        </div>

                        <div className="space-y-4">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-1.5">
                              <label className="text-[10px] uppercase tracking-widest text-white/60 font-medium">Seu Nome Completo</label>
                              <input
                                type="text"
                                required
                                value={formData.nome}
                                onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                                placeholder="Ex: Lucas Carvalho"
                                className="w-full px-4 py-3 bg-[#0F2A44]/80 border border-white/10 focus:border-[#D8AC28] rounded-xl text-white placeholder-white/30 outline-none transition-all duration-300 text-sm"
                              />
                            </div>

                            <div className="space-y-1.5">
                              <label className="text-[10px] uppercase tracking-widest text-white/60 font-medium">Nome da sua Empresa</label>
                              <input
                                type="text"
                                required
                                value={formData.empresa}
                                onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                                placeholder="Ex: LC Holding"
                                className="w-full px-4 py-3 bg-[#0F2A44]/80 border border-white/10 focus:border-[#D8AC28] rounded-xl text-white placeholder-white/30 outline-none transition-all duration-300 text-sm"
                              />
                            </div>
                          </div>

                          <div className="space-y-1.5">
                            <label className="text-[10px] uppercase tracking-widest text-white/60 font-medium">WhatsApp para Contato</label>
                            <input
                              type="text"
                              required
                              value={formData.whatsapp}
                              onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                              placeholder="Ex: (82) 99999-9999"
                              className="w-full px-4 py-3 bg-[#0F2A44]/80 border border-white/10 focus:border-[#D8AC28] rounded-xl text-white placeholder-white/30 outline-none transition-all duration-300 text-sm"
                            />
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {step === 2 && (
                      <motion.div
                        key="sched-step2"
                        initial={{ opacity: 0, x: 15 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -15 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-4"
                      >
                        <div className="space-y-1.5">
                          <h4 className="text-base sm:text-lg font-serif font-medium text-[#F4F6F9]">
                            Qual o objetivo da nossa reunião?
                          </h4>
                          <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                            Defina a meta principal para personalizarmos a apresentação e pauta da nossa conversa estratégica.
                          </p>
                        </div>

                        <div className="space-y-2 max-h-[190px] overflow-y-auto pr-1 custom-scroll">
                          {objetivosReuniaoOptions.map((obj) => (
                            <button
                              key={obj}
                              onClick={() => setFormData({ ...formData, objetivo: obj })}
                              className={`w-full px-4 py-2.5 text-left rounded-xl border text-xs sm:text-sm transition-all duration-200 flex items-center justify-between ${
                                formData.objetivo === obj
                                  ? "bg-[#D8AC28]/20 border-[#D8AC28] text-white font-medium"
                                  : "bg-[#0F2A44]/60 border-white/5 text-white/80 hover:bg-[#0F2A44]/90 hover:border-white/10"
                              }`}
                            >
                              <span>{obj}</span>
                              {formData.objetivo === obj && <Check className="w-4 h-4 text-[#D8AC28]" />}
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {step === 3 && (
                      <motion.div
                        key="sched-step3"
                        initial={{ opacity: 0, x: 15 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -15 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-4"
                      >
                        <div className="space-y-1.5">
                          <h4 className="text-base sm:text-lg font-serif font-medium text-[#F4F6F9]">
                            Selecione a data de preferência
                          </h4>
                          <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                            Selecione um dos dias úteis disponíveis abaixo para a nossa reunião.
                          </p>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                          {datasDisponiveis.map((item) => (
                            <button
                              key={item.data}
                              onClick={() => setFormData({ ...formData, data: `${item.dia} (${item.data})` })}
                              className={`p-3 text-center rounded-xl border transition-all duration-300 flex flex-col items-center justify-center ${
                                formData.data.includes(item.data)
                                  ? "bg-[#D8AC28]/20 border-[#D8AC28] text-white font-medium"
                                  : "bg-[#0F2A44]/60 border-white/5 text-white/70 hover:bg-[#0F2A44]/90 hover:border-white/10"
                              }`}
                            >
                              <span className="text-[10px] text-white/40 block mb-0.5">{item.dia}</span>
                              <span className="text-xs font-semibold">{item.data}</span>
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {step === 4 && (
                      <motion.div
                        key="sched-step4"
                        initial={{ opacity: 0, x: 15 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -15 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-4"
                      >
                        <div className="space-y-1.5">
                          <h4 className="text-base sm:text-lg font-serif font-medium text-[#F4F6F9]">
                            Selecione o horário sugerido
                          </h4>
                          <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                            Estes horários pertencem ao fuso padrão de atendimento executivo.
                          </p>
                        </div>

                        <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                          {horariosDisponiveis.map((hora) => (
                            <button
                              key={hora}
                              onClick={() => setFormData({ ...formData, horario: hora })}
                              className={`py-2 px-1 text-center rounded-lg border text-xs sm:text-sm transition-all duration-200 ${
                                formData.horario === hora
                                  ? "bg-[#D8AC28] border-[#D8AC28] text-[#0F2A44] font-semibold"
                                  : "bg-[#0F2A44]/40 border-white/5 text-white/60 hover:bg-[#0F2A44]/90 hover:text-white"
                              }`}
                            >
                              {hora}
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </div>
                )}
              </AnimatePresence>

              {/* Navigation Actions Footer */}
              <div className="flex gap-3 pt-4 border-t border-white/5 mt-6">
                {step > 1 && (
                  <button
                    id="prev-step-btn"
                    onClick={handleBack}
                    className="px-5 py-3 border border-white/10 hover:border-white/20 text-white hover:bg-white/5 rounded-xl transition-all duration-200 text-xs sm:text-sm font-medium cursor-pointer"
                  >
                    Voltar
                  </button>
                )}

                {step < 4 ? (
                  <button
                    id="next-step-btn"
                    onClick={handleNext}
                    disabled={!isStepValid()}
                    className="flex-1 px-5 py-3 bg-gradient-to-r from-[#D8AC28] to-[#B8911F] hover:from-[#B8911F] hover:to-[#D8AC28] text-[#0F2A44] rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-all duration-300 shadow-lg shadow-[#D8AC28]/10 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    Próximo Passo
                    <ChevronRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    id="submit-diagnostic-btn"
                    onClick={handleSubmit}
                    disabled={!isStepValid()}
                    className="flex-1 px-5 py-3 bg-[#D8AC28] hover:bg-[#B8911F] text-[#0F2A44] rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-all duration-300 shadow-lg shadow-[#D8AC28]/20 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    Finalizar & Chamar no WhatsApp
                    <MessageSquare className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Security badges in footer */}
              <div className="pt-3 flex items-center justify-center gap-5 text-[10px] text-white/30">
                <div className="flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-[#D8AC28]/50" />
                  <span>Ambiente Seguro</span>
                </div>
                <div className="flex items-center gap-1">
                  <Award className="w-3 h-3 text-[#D8AC28]/50" />
                  <span>JL Consultoria</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
