import React from 'react';
import { Scissors, ArrowUp, ShieldCheck, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#060910] border-t border-white/10 pt-16 pb-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/5">
          {/* Col 1: Brand & Legacy */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-sm bg-[#0F172A] border border-[#EA580C]/40 flex items-center justify-center text-[#EA580C]">
                <Scissors className="w-4 h-4 -rotate-45" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif-luxury text-lg font-bold text-white tracking-wide leading-none">
                  PAI & FILHO
                </span>
                <span className="font-display-badge text-[9px] tracking-[0.25em] text-[#EA580C] uppercase font-semibold mt-1">
                  BARBEARIA CLÁSSICA
                </span>
              </div>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              Tradição familiar fundamentada no respeito à navalha clássica, visagismo moderno e na verdadeira elegância do cavalheiro contemporâneo.
            </p>
            <div className="flex items-center gap-2 text-[11px] text-slate-400">
              <ShieldCheck className="w-4 h-4 text-[#EA580C]" />
              <span>Lâminas descartáveis e esterilização rigorosa.</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="font-serif-luxury text-sm font-bold text-white uppercase tracking-wider">
              Navegação
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="hover:text-[#EA580C] transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-[#EA580C] transition-colors">
                  Nossos Serviços
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-[#EA580C] transition-colors">
                  Sobre Nós & História
                </a>
              </li>
              <li>
                <a href="#galeria" className="hover:text-[#EA580C] transition-colors">
                  Galeria & Acervo
                </a>
              </li>
              <li>
                <a href="#avaliacoes" className="hover:text-[#EA580C] transition-colors">
                  Depoimentos de Clientes
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-[#EA580C] transition-colors">
                  Contato & Agendamento
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Services Summary */}
          <div className="space-y-3">
            <h4 className="font-serif-luxury text-sm font-bold text-white uppercase tracking-wider">
              Serviços Principais
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li className="flex justify-between">
                <span>Corte Masculino Visagista</span>
                <span className="text-white font-mono">R$ 60</span>
              </li>
              <li className="flex justify-between">
                <span>Barba Clássica com Toalha Quente</span>
                <span className="text-white font-mono">R$ 45</span>
              </li>
              <li className="flex justify-between">
                <span>Tratamento & Terapia Capilar</span>
                <span className="text-white font-mono">R$ 80</span>
              </li>
              <li className="flex justify-between">
                <span>Combo Mestre da Casa</span>
                <span className="text-white font-mono">R$ 95</span>
              </li>
              <li className="flex justify-between">
                <span>Barboterapia Facial com Ozônio</span>
                <span className="text-white font-mono">R$ 70</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Horário & Contato */}
          <div className="space-y-3">
            <h4 className="font-serif-luxury text-sm font-bold text-white uppercase tracking-wider">
              Atendimento Exclusivo
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Atendimento personalizado com reserva de horário prévia para evitar espera.
            </p>
            <div className="p-3 bg-[#090D16] rounded-sm border border-white/5 space-y-1 font-mono text-[11px]">
              <div className="text-white font-semibold">Terça a Sexta: 09h às 20h</div>
              <div className="text-white font-semibold">Sábado: 08h30 às 19h30</div>
              <div className="text-[#EA580C]">Domingo e Segunda: Fechado</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Pai e Filho Barbearia. Todos os direitos reservados. Brasil.
          </div>

          <div className="flex items-center gap-6">
            <span className="text-[11px] text-slate-400">
              Feito para cavalheiros que prezam pela máxima presença.
            </span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-[#0F172A] hover:bg-[#EA580C] text-slate-300 hover:text-white transition-all border border-white/10 cursor-pointer"
              aria-label="Voltar ao topo da página"
            >
              <span>Topo</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
