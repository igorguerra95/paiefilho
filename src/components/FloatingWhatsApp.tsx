import React, { useState } from 'react';
import { MessageCircle, Scissors } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleWhatsAppClick = () => {
    const text = encodeURIComponent(
      'Olá! Gostaria de agendar um horário na Pai e Filho Barbearia. Poderiam me informar a disponibilidade de horários?'
    );
    window.open(`https://api.whatsapp.com/send?phone=5511999999999&text=${text}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip on hover / idle */}
      {showTooltip && (
        <div className="hidden sm:block px-3.5 py-2 rounded-sm bg-[#0F172A] border border-[#EA580C]/40 text-white text-xs shadow-2xl animate-fade-in">
          <div className="font-bold flex items-center gap-1.5 text-[#FDBA74]">
            <Scissors className="w-3 h-3 text-[#EA580C] -rotate-45" />
            <span>Pai e Filho Barbearia</span>
          </div>
          <span className="text-[11px] text-slate-300">Atendimento e Agendamento Imediato</span>
        </div>
      )}

      {/* Floating Button with Discrete Pulse */}
      <div className="relative">
        {/* Subtle Pulse Ring */}
        <span className="absolute -inset-1 rounded-full bg-[#EA580C]/35 animate-ping pointer-events-none" />

        <button
          onClick={handleWhatsAppClick}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          aria-label="Falar conosco no WhatsApp para agendar horário"
          className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#EA580C] hover:bg-[#F97316] text-white shadow-2xl shadow-[#EA580C]/40 hover:scale-105 transition-all duration-300 border-2 border-white/20 cursor-pointer group"
        >
          <MessageCircle className="w-7 h-7 fill-white/10 group-hover:scale-110 transition-transform" />

          {/* Active online green/amber indicator dot */}
          <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-emerald-500 border-2 border-[#090D16] rounded-full" />
        </button>
      </div>
    </div>
  );
};
