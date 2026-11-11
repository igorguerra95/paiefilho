import React, { useState } from 'react';
import { motion } from 'motion/react';
import { FAQ_DATA } from '../data/barbershopData';
import { Phone, Clock, MessageSquare, Send, CheckCircle, ChevronDown, ChevronUp, MapPin, Scissors, ShieldAlert } from 'lucide-react';

interface ContactSectionProps {
  onOpenBooking: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenBooking }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formSent, setFormSent] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    email: '',
    mensagem: '',
    interesse: 'Corte Masculino',
  });

  const handleToggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);

    const text = encodeURIComponent(
      `💈 *MENSAGEM VIA SITE — PAI E FILHO BARBEARIA*\n\n` +
      `👤 *Nome:* ${formData.nome}\n` +
      `📱 *WhatsApp:* ${formData.telefone}\n` +
      `✉️ *E-mail:* ${formData.email || 'Não informado'}\n` +
      `✂️ *Interesse:* ${formData.interesse}\n` +
      `💬 *Mensagem:* ${formData.mensagem || 'Gostaria de tirar dúvidas sobre o atendimento.'}`
    );

    setTimeout(() => {
      window.open(`https://api.whatsapp.com/send?phone=5511999999999&text=${text}`, '_blank');
    }, 1000);
  };

  return (
    <section id="contato" className="relative py-24 sm:py-32 bg-[#090D16] border-t border-white/5">
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
            <Phone className="w-3.5 h-3.5" />
            <span>Contato & Agendamento</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight"
          >
            Sua Cadeira Está Preparada Para o Seu Horário
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed"
          >
            Sem filas de espera improvisadas. Trabalhamos sob agenda rigorosamente pontual para proporcionar tranquilidade, privacidade e dedicação exclusiva a você.
          </motion.p>
        </div>

        {/* 2 Column Layout: Details on Left, Interactive Form on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Direct Info & Booking Trigger */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Card 1: Horários */}
            <div className="p-6 rounded-sm bg-[#0F172A] border border-white/10 hover:border-[#EA580C]/40 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-sm bg-[#EA580C]/15 border border-[#EA580C]/30 flex items-center justify-center text-[#EA580C]">
                  <Clock className="w-4 h-4" />
                </div>
                <h3 className="font-serif-luxury text-lg font-bold text-white">
                  Horário de Funcionamento
                </h3>
              </div>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex justify-between border-b border-white/5 pb-1.5">
                  <span className="text-slate-400">Terça-feira a Sexta-feira:</span>
                  <span className="font-mono font-medium text-white">09:00 — 20:00</span>
                </li>
                <li className="flex justify-between border-b border-white/5 pb-1.5">
                  <span className="text-slate-400">Sábado:</span>
                  <span className="font-mono font-medium text-white">08:30 — 19:30</span>
                </li>
                <li className="flex justify-between text-slate-400 pt-0.5">
                  <span>Domingo e Segunda-feira:</span>
                  <span className="text-[#EA580C] font-semibold">Descanso dos Mestres</span>
                </li>
              </ul>
            </div>

            {/* Quick Card 2: Atendimento Reservado */}
            <div className="p-6 rounded-sm bg-[#0F172A] border border-white/10 hover:border-[#EA580C]/40 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-sm bg-[#EA580C]/15 border border-[#EA580C]/30 flex items-center justify-center text-[#EA580C]">
                  <MapPin className="w-4 h-4" />
                </div>
                <h3 className="font-serif-luxury text-lg font-bold text-white">
                  Atendimento com Hora Marcada
                </h3>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Para manter a privacidade e a pontualidade que consagraram a Pai e Filho Barbearia, nosso atendimento é realizado exclusivamente com confirmação prévia no WhatsApp.
              </p>
              <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-2 text-[11px] text-slate-400 font-mono">
                <Scissors className="w-3 h-3 text-[#EA580C] -rotate-45" />
                <span>Estacionamento privativo e recepção com bistrô.</span>
              </div>
            </div>

            {/* Fast Action Banner */}
            <div className="p-6 rounded-sm bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-[#EA580C]/40 text-center flex flex-col items-center">
              <span className="text-xs uppercase tracking-widest font-bold text-[#EA580C] mb-1">
                Prefere Agendar Diretamente?
              </span>
              <p className="text-xs text-slate-300 mb-4 max-w-xs">
                Utilize nosso sistema de agendamento online rápido com seleção de barbeiro em tempo real.
              </p>
              <button
                onClick={onOpenBooking}
                className="w-full py-3 px-6 rounded-sm bg-[#EA580C] hover:bg-[#F97316] text-white font-semibold text-xs uppercase tracking-widest transition-all shadow-lg shadow-[#EA580C]/20 border border-[#F97316] cursor-pointer"
              >
                Entrar em contato
              </button>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-sm bg-[#0F172A] border border-white/10 shadow-2xl relative">
              <h3 className="font-serif-luxury text-2xl font-bold text-white mb-2">
                Envie uma Mensagem Direta
              </h3>
              <p className="text-xs text-slate-400 mb-7">
                Preencha os campos abaixo para dúvidas sobre procedimentos, eventos corporativos ou reservas especiais de pai e filho.
              </p>

              {formSent ? (
                <div className="py-12 text-center flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-[#EA580C]/20 border border-[#EA580C] text-[#EA580C] flex items-center justify-center mb-4">
                    <CheckCircle className="w-7 h-7" />
                  </div>
                  <h4 className="font-serif-luxury text-xl font-bold text-white">
                    Mensagem Transmitida!
                  </h4>
                  <p className="text-xs text-slate-300 mt-2 max-w-sm leading-relaxed">
                    Sua mensagem foi formatada com sucesso e você está sendo redirecionado para o atendimento direto no WhatsApp da Pai e Filho Barbearia.
                  </p>
                  <button
                    onClick={() => setFormSent(false)}
                    className="mt-6 text-xs uppercase tracking-wider text-[#EA580C] hover:underline cursor-pointer"
                  >
                    Enviar outra mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-slate-300 mb-1.5">
                        Nome Completo *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ex: Rodrigo Mendes"
                        value={formData.nome}
                        onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-sm bg-[#090D16] border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-[#EA580C] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-slate-300 mb-1.5">
                        WhatsApp com DDD *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="(11) 98765-4321"
                        value={formData.telefone}
                        onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-sm bg-[#090D16] border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-[#EA580C] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-slate-300 mb-1.5">
                        E-mail de Contato
                      </label>
                      <input
                        type="email"
                        placeholder="seuemail@exemplo.com.br"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-sm bg-[#090D16] border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-[#EA580C] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-slate-300 mb-1.5">
                        Serviço de Maior Interesse
                      </label>
                      <select
                        value={formData.interesse}
                        onChange={(e) => setFormData({ ...formData, interesse: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-sm bg-[#090D16] border border-white/10 text-white text-xs focus:outline-none focus:border-[#EA580C] transition-colors"
                      >
                        <option value="Corte Masculino (R$ 60)">Corte Masculino — R$ 60</option>
                        <option value="Barba Tradicional (R$ 45)">Barba Tradicional — R$ 45</option>
                        <option value="Tratamento Capilar (R$ 80)">Tratamento Capilar — R$ 80</option>
                        <option value="Combo Mestre da Casa (R$ 95)">Combo Mestre da Casa — R$ 95</option>
                        <option value="Barboterapia & Spa Facial (R$ 70)">Barboterapia & Spa — R$ 70</option>
                        <option value="Corte Jovem Aprendiz (R$ 55)">Corte Pai & Filho — R$ 55</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-slate-300 mb-1.5">
                      Como Podemos Ajudar Você?
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Descreva suas dúvidas ou detalhes do atendimento desejado..."
                      value={formData.mensagem}
                      onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-sm bg-[#090D16] border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-[#EA580C] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-sm bg-[#EA580C] hover:bg-[#F97316] text-white font-semibold text-xs uppercase tracking-widest transition-all duration-300 shadow-xl shadow-[#EA580C]/25 cursor-pointer border border-[#F97316]"
                  >
                    <Send className="w-4 h-4" />
                    <span>Entrar em contato</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* FAQ Accordion Section */}
        <div className="mt-24 max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs uppercase tracking-widest text-[#EA580C] font-semibold block mb-1">
              Transparência & Procedimento
            </span>
            <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-white">
              Perguntas Frequentes de Nossos Clientes
            </h3>
          </div>

          <div className="space-y-3">
            {FAQ_DATA.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-sm bg-[#0F172A] border border-white/10 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => handleToggleFaq(index)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white/5 transition-colors"
                  >
                    <span className="font-serif-luxury text-base font-semibold text-white">
                      {faq.question}
                    </span>
                    <span className="text-[#EA580C] shrink-0">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
