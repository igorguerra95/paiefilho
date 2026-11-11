import React from 'react';
import { motion } from 'motion/react';
import { TESTIMONIALS_DATA } from '../data/barbershopData';
import { Star, Quote, CheckCircle2, ThumbsUp } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="avaliacoes" className="relative py-24 sm:py-32 bg-[#090D16] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0F172A] border border-[#EA580C]/30 text-[#EA580C] text-xs font-semibold uppercase tracking-[0.2em] mb-4"
          >
            <ThumbsUp className="w-3.5 h-3.5" />
            <span>Depoimentos & Reputação</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight"
          >
            A Voz de Cavalheiros Que Não Abrem Mão do Topo
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed"
          >
            Nossa maior medalha é a fidelidade daqueles que confiam sua imagem às nossas lâminas há mais de uma década.
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((testimonial, idx) => (
            <motion.article
              key={testimonial.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative p-7 rounded-sm bg-[#0F172A] border border-white/10 hover:border-[#EA580C]/40 transition-all duration-300 flex flex-col justify-between shadow-xl shadow-black/40 group"
            >
              {/* Quote icon background */}
              <Quote className="absolute top-6 right-6 w-10 h-10 text-white/5 group-hover:text-[#EA580C]/10 transition-colors pointer-events-none" />

              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 mb-4 text-[#F59E0B]">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                  <span className="ml-2 text-xs font-mono font-bold text-slate-400">
                    5.0
                  </span>
                </div>

                {/* Comment text */}
                <p className="text-slate-300 text-sm leading-relaxed italic">
                  "{testimonial.comment}"
                </p>
              </div>

              {/* Author footer */}
              <div className="mt-6 pt-5 border-t border-white/10 flex items-center gap-3.5">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-11 h-11 rounded-full object-cover border border-white/10"
                />
                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5">
                    <span className="font-serif-luxury text-sm font-bold text-white">
                      {testimonial.name}
                    </span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#EA580C]" />
                  </div>
                  <span className="text-[11px] text-slate-400">
                    {testimonial.role} · <span className="text-[#FDBA74]">{testimonial.service}</span>
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Global Rating Badge */}
        <div className="mt-14 max-w-xl mx-auto p-4 rounded-sm bg-[#0F172A] border border-[#EA580C]/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="font-serif-luxury text-3xl font-extrabold text-white">
              4.9<span className="text-sm text-[#EA580C] font-mono">/5.0</span>
            </div>
            <div>
              <div className="flex items-center gap-1 text-[#F59E0B]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <span className="text-xs text-slate-300 font-medium">Classificação Máxima de Clientes</span>
            </div>
          </div>
          <span className="text-xs text-slate-400 font-mono">
            Mais de 10.000 atendimentos realizados
          </span>
        </div>
      </div>
    </section>
  );
};
