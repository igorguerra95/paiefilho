import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { STATS_DATA, BARBERS_DATA } from '../data/barbershopData';
import { Award, Shield, Users, Star, Flame, Scissors, Clock } from 'lucide-react';

// Animated Count-Up Component
const Counter: React.FC<{ end: number; duration?: number; decimals?: number; suffix?: string }> = ({
  end,
  duration = 2,
  decimals = 0,
  suffix = '',
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const startValue = 0;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      // EaseOutQuad
      const easedProgress = 1 - (1 - progress) * (1 - progress);
      const current = startValue + (end - startValue) * easedProgress;

      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(step);
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {decimals > 0 ? count.toFixed(decimals) : Math.floor(count).toLocaleString('pt-BR')}
      {suffix}
    </span>
  );
};

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="relative py-24 sm:py-32 bg-[#090D16] overflow-hidden">
      {/* Background architectural details */}
      <div className="absolute right-0 top-1/3 w-96 h-96 bg-[#EA580C]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Story Block: 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Composition with 2 Framed Images */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative rounded-sm overflow-hidden border border-white/10 shadow-2xl shadow-black/80"
            >
              <img
                src="https://images.unsplash.com/photo-1534778101976-62847782c213?q=80&w=1200&auto=format&fit=crop"
                alt="Mestre Sebastião e Rodrigo ensinando a arte tradicional da barbearia"
                className="w-full h-[420px] sm:h-[480px] object-cover object-center filter contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090D16] via-transparent to-transparent opacity-80" />

              {/* Floating Badge on image */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-sm bg-[#0F172A]/90 backdrop-blur-md border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-sm bg-[#EA580C] text-white flex items-center justify-center font-bold">
                    <Flame className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif-luxury text-sm font-bold text-white">Herança & Mestria</h4>
                    <p className="text-[11px] text-slate-300">Duas gerações sob o mesmo rigor</p>
                  </div>
                </div>
                <span className="font-mono text-xs text-[#EA580C] font-semibold tracking-wider">EST. 2011</span>
              </div>
            </motion.div>

            {/* Overlapping small accent card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="hidden sm:block absolute -bottom-8 -right-6 bg-[#0F172A] border border-[#EA580C]/40 p-5 rounded-sm shadow-2xl max-w-xs"
            >
              <div className="flex items-center gap-2 text-[#EA580C] mb-1">
                <Scissors className="w-4 h-4 -rotate-45" />
                <span className="text-[11px] uppercase font-bold tracking-widest">Compromisso Supremo</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                "Não vendemos apenas o alinhamento de cabelo ou barba. Devolvemos a postura, a presença e a autoridade que todo homem carrega."
              </p>
            </motion.div>
          </div>

          {/* Right Column: Story Copy */}
          <div className="lg:col-span-6 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0F172A] border border-[#EA580C]/30 text-[#EA580C] text-xs font-semibold uppercase tracking-[0.2em]"
            >
              <Award className="w-3.5 h-3.5" />
              <span>Sobre a Pai e Filho Barbearia</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight"
            >
              O Legado da Navalha: Tradição Viva Entre Duas Gerações
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed"
            >
              <p>
                A <strong className="text-white font-semibold">Pai e Filho Barbearia</strong> nasceu de uma convicção inegociável: a navalha não é apenas uma ferramenta mecânica, mas uma extensão da honra e do respeito à figura masculina.
              </p>
              <p>
                Fundada pelo Mestre Sebastião e continuada pelo seu filho Rodrigo, nossa casa harmoniza a disciplina da clássica barbearia italiana — onde o couro, o aço polido e a toalha quente ditam o ritmo — com as mais modernas técnicas de visagismo anatômico.
              </p>
              <p className="text-slate-400 text-sm">
                Aqui, não existe corte apressado nem atendimento padronizado. Cada cliente é acolhido como confrade, com café gourmet moído na hora ou uísque selecionado, usufruindo de um ambiente que resgata a verdadeira elegância cavalheira.
              </p>
            </motion.div>

            {/* Core Values Pillars */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4"
            >
              <div className="p-4 rounded-sm bg-[#0F172A] border border-white/5 flex items-start gap-3">
                <Shield className="w-5 h-5 text-[#EA580C] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif-luxury text-sm font-bold text-white">Rigor & Assepsia</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Esterilização hospitalar e descartáveis individuais.</p>
                </div>
              </div>

              <div className="p-4 rounded-sm bg-[#0F172A] border border-white/5 flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#EA580C] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif-luxury text-sm font-bold text-white">Pontualidade Britânica</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Seu tempo é sagrado; atendemos estritamente no horário.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Mandatory Animated Stats Banner (15+ anos, 10.000+ clientes, 5 barbeiros, 4.9 avaliação) */}
        <div className="mt-20 pt-12 border-t border-white/10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {STATS_DATA.map((stat, idx) => {
              const isDecimal = stat.value % 1 !== 0;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-6 rounded-sm bg-[#0F172A] border border-white/10 text-center relative overflow-hidden group hover:border-[#EA580C]/50 transition-colors"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#EA580C] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-2">
                    <Counter
                      end={stat.value}
                      decimals={isDecimal ? 1 : 0}
                      suffix={stat.suffix}
                    />
                  </div>
                  <div className="font-display-badge text-xs uppercase tracking-[0.16em] text-[#EA580C] font-semibold">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1">
                    {stat.description}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Master Barbers Showcase (5 Barbeiros Especialistas) */}
        <div className="mt-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest text-[#EA580C] font-semibold block mb-2">
              Nossa Equipe de Mestres
            </span>
            <h3 className="font-serif-luxury text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              Especialistas Formados na Escola da Precisão
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm mt-3">
              Profissionais experientes, dedicados a transformar seu momento na cadeira em um ritual de renovação e confiança.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {BARBERS_DATA.map((barber, index) => (
              <motion.div
                key={barber.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group rounded-sm bg-[#0F172A] border border-white/10 hover:border-[#EA580C]/40 p-4 flex flex-col items-center text-center transition-all duration-300"
              >
                <div className="relative w-24 h-24 mb-4 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-[#EA580C] transition-colors shadow-md">
                  <img
                    src={barber.avatar}
                    alt={barber.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h4 className="font-serif-luxury text-base font-bold text-white group-hover:text-[#FDBA74] transition-colors">
                  {barber.name}
                </h4>
                <p className="text-[11px] text-[#EA580C] font-semibold tracking-wider uppercase mt-0.5">
                  {barber.role}
                </p>
                <span className="text-[10px] text-slate-400 font-mono mt-1 px-2 py-0.5 rounded bg-black/40 border border-white/5">
                  {barber.experience}
                </span>
                <p className="text-xs text-slate-300 mt-3 text-balance leading-relaxed">
                  {barber.specialty}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
