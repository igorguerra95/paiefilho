import React, { useState, useEffect } from 'react';
import { Menu, X, Scissors, PhoneCall, Calendar, Clock, MapPin } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Sobre Nós', href: '#sobre' },
    { name: 'Galeria', href: '#galeria' },
    { name: 'Avaliações', href: '#avaliacoes' },
    { name: 'Contato', href: '#contato' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#090D16]/95 backdrop-blur-md py-3.5 border-b border-white/10 shadow-2xl shadow-black/80'
            : 'bg-gradient-to-b from-[#090D16]/90 via-[#090D16]/50 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#inicio"
              onClick={(e) => handleNavClick(e, '#inicio')}
              className="flex items-center gap-3 group text-left"
            >
              <div className="w-10 h-10 rounded-sm bg-[#0F172A] border border-[#EA580C]/40 flex items-center justify-center text-[#EA580C] group-hover:border-[#EA580C] group-hover:scale-105 transition-all duration-300 shadow-md shadow-[#EA580C]/10">
                <Scissors className="w-5 h-5 -rotate-45" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif-luxury text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-[#FDBA74] transition-colors leading-none">
                  PAI & FILHO
                </span>
                <span className="font-display-badge text-[10px] tracking-[0.25em] text-[#EA580C] uppercase font-semibold mt-1">
                  BARBEARIA CLÁSSICA
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-xs uppercase tracking-[0.18em] font-medium text-slate-300 hover:text-[#EA580C] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#EA580C] hover:after:w-full after:transition-all after:duration-300"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right CTAs */}
            <div className="hidden sm:flex items-center gap-4">
              <a
                href="#contato"
                onClick={(e) => handleNavClick(e, '#contato')}
                className="hidden xl:inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-300 hover:text-white px-3 py-2 transition-colors"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#EA580C]" />
                Entrar em contato
              </a>
              <button
                onClick={onOpenBooking}
                className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-sm bg-[#EA580C] hover:bg-[#F97316] text-white font-medium text-xs uppercase tracking-widest transition-all duration-300 hover:shadow-lg hover:shadow-[#EA580C]/25 hover:-translate-y-0.5 active:translate-y-0 border border-[#F97316]/50 cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Agende seu Horário</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Abrir menu de navegação"
              className="lg:hidden p-2.5 text-slate-300 hover:text-white bg-[#0F172A] border border-white/10 rounded-sm focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-[#090D16] border-l border-white/10 shadow-2xl p-6 flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-sm bg-[#0F172A] border border-[#EA580C]/40 flex items-center justify-center text-[#EA580C]">
                    <Scissors className="w-4 h-4 -rotate-45" />
                  </div>
                  <span className="font-serif-luxury text-lg font-bold text-white tracking-wide">
                    PAI & FILHO
                  </span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-slate-400 hover:text-white rounded-sm"
                  aria-label="Fechar menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation list */}
              <nav className="flex flex-col gap-3 py-6">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="flex items-center justify-between text-sm uppercase tracking-wider font-medium text-slate-300 hover:text-[#EA580C] py-2.5 border-b border-white/5 transition-colors"
                  >
                    <span>{link.name}</span>
                    <span className="text-[#EA580C] text-xs">→</span>
                  </a>
                ))}
              </nav>

              {/* Quick info */}
              <div className="bg-[#0F172A] p-4 rounded-sm border border-white/5 space-y-2.5 text-xs text-slate-300">
                <div className="flex items-center gap-2 text-slate-200">
                  <Clock className="w-4 h-4 text-[#EA580C] shrink-0" />
                  <span>Terça a Sábado: 09h às 20h</span>
                </div>
                <div className="flex items-center gap-2 text-slate-200">
                  <MapPin className="w-4 h-4 text-[#EA580C] shrink-0" />
                  <span>Atendimento com Hora Marcada</span>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-white/10 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-sm bg-[#EA580C] hover:bg-[#F97316] text-white font-medium text-xs uppercase tracking-widest transition-all cursor-pointer shadow-lg shadow-[#EA580C]/20"
              >
                <Calendar className="w-4 h-4" />
                <span>Agende seu Horário</span>
              </button>
              <a
                href="#contato"
                onClick={(e) => handleNavClick(e, '#contato')}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-sm bg-[#0F172A] hover:bg-[#1E293B] text-slate-200 font-medium text-xs uppercase tracking-wider border border-white/10 transition-colors"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#EA580C]" />
                <span>Entrar em contato</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
