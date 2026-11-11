import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SERVICES_DATA } from '../data/barbershopData';
import { ServiceItem } from '../types';
import { Clock, Check, Scissors, Sparkles, ChevronRight, Star } from 'lucide-react';

interface ServicesSectionProps {
  onSelectServiceToBook: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceToBook }) => {
  const [activeCategory, setActiveCategory] = useState<string>('todos');

  const categories = [
    { id: 'todos', label: 'Todos os Serviços' },
    { id: 'corte', label: 'Cortes & Visagismo' },
    { id: 'barba', label: 'Barba & Toalha Quente' },
    { id: 'tratamento', label: 'Tratamentos Capilares' },
    { id: 'combo', label: 'Combos Exclusivos' },
  ];

  const filteredServices = activeCategory === 'todos'
    ? SERVICES_DATA
    : SERVICES_DATA.filter((s) => s.category === activeCategory);

  return (
    <section id="servicos" className="relative py-24 sm:py-32 bg-[#090D16] border-t border-white/5">
      {/* Decorative background light accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#EA580C]/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0F172A] border border-[#EA580C]/30 text-[#EA580C] text-xs font-semibold uppercase tracking-[0.2em] mb-4"
          >
            <Scissors className="w-3.5 h-3.5 -rotate-45" />
            <span>Nossos Serviços</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight"
          >
            Cuidado Cirúrgico Para Quem Não Aceita o Mediano
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed"
          >
            Cada procedimento é executado sem pressa, respeitando o tempo biológico da sua pele e a geometria exata do seu crânio. Conheça nossos serviços de alta precisão.
          </motion.p>

          {/* Category Filter Chips */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3"
          >
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-sm text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-[#EA580C] text-white shadow-md shadow-[#EA580C]/25 border border-[#F97316]'
                      : 'bg-[#0F172A] text-slate-400 hover:text-slate-200 border border-white/5 hover:border-white/20'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </motion.div>
        </div>

        {/* Services Grid (Highlighting the 3 Core Mandated Services + Signature Combos) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => {
            const isHighlight = service.popular || service.id === 'corte-masculino';

            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className={`group relative flex flex-col justify-between rounded-sm bg-[#0F172A] border transition-all duration-300 overflow-hidden shadow-xl ${
                  isHighlight
                    ? 'border-[#EA580C]/50 hover:border-[#EA580C] shadow-black/80'
                    : 'border-white/10 hover:border-white/25 shadow-black/60'
                }`}
              >
                {/* Popular / Signature Tag */}
                {service.popular && (
                  <div className="absolute top-4 right-4 z-20">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-[#EA580C] text-white text-[10px] font-bold uppercase tracking-wider shadow-lg">
                      <Star className="w-3 h-3 fill-current" />
                      Mais Solicitado
                    </span>
                  </div>
                )}

                {/* Service Card Image */}
                <div className="relative h-56 sm:h-60 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out brightness-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/40 to-transparent" />

                  {/* Duration badge overlay */}
                  <div className="absolute bottom-3 left-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm bg-black/70 backdrop-blur-md border border-white/10 text-slate-300 text-xs font-mono">
                    <Clock className="w-3.5 h-3.5 text-[#EA580C]" />
                    <span>{service.duration}</span>
                  </div>
                </div>

                {/* Service Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Header: Name and Price */}
                    <div className="flex items-start justify-between gap-4 pb-4 border-b border-white/10">
                      <div>
                        <h3 className="font-serif-luxury text-2xl font-bold text-white group-hover:text-[#FDBA74] transition-colors">
                          {service.name}
                        </h3>
                        <span className="text-xs uppercase tracking-wider font-semibold text-[#EA580C] mt-1 inline-block">
                          {service.category === 'corte' && 'Visagismo & Precisão'}
                          {service.category === 'barba' && 'Ritual Toalha Quente'}
                          {service.category === 'tratamento' && 'Terapia & Revitalização'}
                          {service.category === 'combo' && 'Experiência Completa'}
                        </span>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="text-xs text-slate-400 block font-sans">Investimento</span>
                        <div className="font-serif-luxury text-2xl sm:text-3xl font-extrabold text-white">
                          <span className="text-sm font-sans font-normal text-slate-400 mr-1">R$</span>
                          {service.price}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="mt-4 text-slate-300 text-sm leading-relaxed min-h-[50px]">
                      {service.description}
                    </p>

                    {/* Features checklist */}
                    <ul className="mt-6 space-y-2.5 border-t border-white/5 pt-5">
                      {service.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                          <div className="w-4 h-4 rounded-full bg-[#EA580C]/20 border border-[#EA580C]/40 flex items-center justify-center shrink-0 mt-0.5 text-[#EA580C]">
                            <Check className="w-2.5 h-2.5 stroke-[3]" />
                          </div>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Booking CTA Button */}
                  <div className="mt-8 pt-5 border-t border-white/10">
                    <button
                      onClick={() => onSelectServiceToBook(service)}
                      className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-sm bg-[#162238] hover:bg-[#EA580C] text-slate-200 hover:text-white font-semibold text-xs uppercase tracking-widest transition-all duration-300 border border-white/10 hover:border-[#EA580C] cursor-pointer group/btn"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-[#EA580C] group-hover/btn:text-white transition-colors" />
                      <span>Agendar Este Serviço</span>
                      <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover/btn:text-white group-hover/btn:translate-x-1 transition-all" />
                    </button>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Guaranteed Standards Banner */}
        <div className="mt-16 p-6 sm:p-8 rounded-sm bg-[#0F172A] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-sm bg-[#EA580C]/15 border border-[#EA580C]/30 flex items-center justify-center text-[#EA580C] shrink-0">
              <Scissors className="w-6 h-6 -rotate-45" />
            </div>
            <div>
              <h4 className="font-serif-luxury text-lg font-bold text-white">
                Dúvida sobre qual procedimento é ideal para seu estilo?
              </h4>
              <p className="text-xs sm:text-sm text-slate-400">
                Nossos barbeiros realizam consultoria visagista prévia sem custo adicional na sua primeira visita.
              </p>
            </div>
          </div>

          <a
            href="#contato"
            className="shrink-0 px-6 py-3 rounded-sm bg-white/5 hover:bg-white/10 text-white font-medium text-xs uppercase tracking-wider border border-white/15 hover:border-white/30 transition-all"
          >
            Falar com um Consultor
          </a>
        </div>
      </div>
    </section>
  );
};
