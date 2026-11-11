import React from 'react';
import { motion } from 'motion/react';
import { Calendar, PhoneCall, ShieldCheck, Sparkles, Award, ArrowDown, ChevronRight } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const handleScrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 lg:py-0"
    >
      {/* Background Image with Dark Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=85&w=2000&auto=format&fit=crop"
          alt="Interior da Barbearia Pai e Filho com cadeiras de couro clássicas e luz âmbar"
          className="w-full h-full object-cover object-center scale-105 transform brightness-[0.38] contrast-110"
        />
        {/* Multilayered radial and linear dark fades */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#090D16] via-[#090D16]/75 to-[#090D16]/90" />
        <div className="absolute inset-0 bg-radial-vignette opacity-80" />
        {/* Subtle decorative grid/grain */}
        <div className="absolute inset-0 bg-[radial-gradient(#EA580C_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.04]" />
      </div>

      {/* Decorative hairline accents */}
      <div className="absolute top-28 left-8 hidden 2xl:block w-px h-64 bg-gradient-to-b from-transparent via-[#EA580C]/30 to-transparent" />
      <div className="absolute top-28 right-8 hidden 2xl:block w-px h-64 bg-gradient-to-b from-transparent via-[#EA580C]/30 to-transparent" />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Badge: Tradição & Autoridade */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0F172A]/90 border border-[#EA580C]/40 text-[#FDBA74] text-xs font-semibold uppercase tracking-[0.22em] shadow-lg shadow-black/60 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-[#EA580C] animate-pulse" />
              <span>Tradição Familiar · Mestres da Navalha Desde 2011</span>
            </span>
          </motion.div>

          {/* Main Headline: Estilo & Tradição (Huge font-size clamp, dramatic serif) */}
          <motion.h1
            variants={itemVariants}
            className="font-serif-luxury font-black tracking-[-0.03em] leading-[0.95] text-white text-[48px] sm:text-[68px] md:text-[84px] lg:text-[98px] uppercase max-w-4xl"
          >
            <span className="block text-slate-100">Estilo &</span>
            <span className="block amber-gradient-text drop-shadow-[0_4px_24px_rgba(234,88,12,0.35)]">
              Tradição
            </span>
          </motion.h1>

          {/* Authoritative Subheadline & Slogan */}
          <motion.p
            variants={itemVariants}
            className="mt-6 sm:mt-8 max-w-2xl text-slate-300 text-base sm:text-lg md:text-xl font-normal leading-relaxed text-balance"
          >
            A arte da navalha forjada pelo tempo, transmitida de pai para filho.
            Mais do que um corte ou alinhamento de barba: um santuário de respeito,
            precisão cirúrgica e maestria atemporal para cavalheiros que exigem o topo.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            variants={itemVariants}
            className="mt-9 sm:mt-11 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
          >
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-sm bg-[#EA580C] hover:bg-[#F97316] text-white font-semibold text-sm uppercase tracking-widest transition-all duration-300 shadow-xl shadow-[#EA580C]/30 hover:shadow-2xl hover:shadow-[#EA580C]/50 hover:-translate-y-0.5 border border-[#F97316] cursor-pointer group"
            >
              <Calendar className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
              <span>Agende seu Horário</span>
              <ChevronRight className="w-4 h-4 text-white/80 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#contato"
              onClick={(e) => {
                e.preventDefault();
                handleScrollToSection('contato');
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-sm bg-[#0F172A]/80 hover:bg-[#1E293B] text-slate-200 hover:text-white font-medium text-sm uppercase tracking-wider transition-all duration-300 border border-white/15 hover:border-[#EA580C]/50 backdrop-blur-sm"
            >
              <PhoneCall className="w-4 h-4 text-[#EA580C]" />
              <span>Entrar em contato</span>
            </a>
          </motion.div>

          {/* Quality Seals / Trust Pillars */}
          <motion.div
            variants={itemVariants}
            className="mt-14 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-10 text-left w-full max-w-3xl"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-sm bg-[#0F172A] border border-white/10 flex items-center justify-center text-[#EA580C] shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-wider font-semibold text-white">100% Descartável</span>
                <span className="text-[11px] text-slate-400">Biossegurança e lâminas estéreis</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-sm bg-[#0F172A] border border-white/10 flex items-center justify-center text-[#EA580C] shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-wider font-semibold text-white">Corte Visagista</span>
                <span className="text-[11px] text-slate-400">Harmonização da anatomia facial</span>
              </div>
            </div>

            <div className="flex items-center gap-3 col-span-2 sm:col-span-1 justify-center sm:justify-start">
              <div className="w-9 h-9 rounded-sm bg-[#0F172A] border border-white/10 flex items-center justify-center text-[#EA580C] shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-wider font-semibold text-white">Toalha Quente</span>
                <span className="text-[11px] text-slate-400">Infusão de óleos aromáticos</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <button
          onClick={() => handleScrollToSection('servicos')}
          aria-label="Rolar para os serviços"
          className="mt-12 text-slate-400 hover:text-[#EA580C] transition-colors flex flex-col items-center gap-1 group text-xs uppercase tracking-widest font-mono cursor-pointer"
        >
          <span className="text-[10px] tracking-[0.2em] opacity-80 group-hover:opacity-100">Explorar Serviços</span>
          <ArrowDown className="w-4 h-4 animate-bounce text-[#EA580C]" />
        </button>
      </div>
    </section>
  );
};
