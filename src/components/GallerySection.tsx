import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GALLERY_DATA } from '../data/barbershopData';
import { GalleryItem } from '../types';
import { Camera, X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const filterTabs = [
    { id: 'todos', label: 'Todos' },
    { id: 'cortes', label: 'Cortes & Visagismo' },
    { id: 'barba', label: 'Barba & Toalha Quente' },
    { id: 'ambiente', label: 'Ambiente & Tradição' },
    { id: 'tratamentos', label: 'Tratamentos' },
  ];

  const filteredItems = selectedCategory === 'todos'
    ? GALLERY_DATA
    : GALLERY_DATA.filter((item) => item.category === selectedCategory);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!activeItem) return;
    const currentIndex = filteredItems.findIndex((i) => i.id === activeItem.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setActiveItem(filteredItems[nextIndex]);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!activeItem) return;
    const currentIndex = filteredItems.findIndex((i) => i.id === activeItem.id);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setActiveItem(filteredItems[prevIndex]);
  };

  return (
    <section id="galeria" className="relative py-24 sm:py-32 bg-[#090D16] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0F172A] border border-[#EA580C]/30 text-[#EA580C] text-xs font-semibold uppercase tracking-[0.2em] mb-4"
          >
            <Camera className="w-3.5 h-3.5" />
            <span>Galeria & Portfólio</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight"
          >
            A Excelência Registrada em Cada Detalhe
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed"
          >
            Nenhum artifício digital. Apenas o encontro entre o aço polido, as melhores pomadas do mundo e o respeito pela sua imagem.
          </motion.p>

          {/* Filter Categories */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {filterTabs.map((tab) => {
              const isActive = selectedCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`px-4 py-2 rounded-sm text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-[#EA580C] text-white shadow-md shadow-[#EA580C]/20 border border-[#F97316]'
                      : 'bg-[#0F172A] text-slate-400 hover:text-slate-200 border border-white/5 hover:border-white/20'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              onClick={() => setActiveItem(item)}
              className="group relative h-80 rounded-sm overflow-hidden bg-[#0F172A] border border-white/10 hover:border-[#EA580C]/50 cursor-pointer shadow-lg shadow-black/50"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out brightness-90 group-hover:brightness-100"
              />

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

              {/* Zoom icon pill */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-100 scale-75">
                <ZoomIn className="w-4 h-4 text-[#EA580C]" />
              </div>

              {/* Item info */}
              <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#EA580C] block mb-1">
                  {item.category === 'cortes' && 'Corte & Visagismo'}
                  {item.category === 'barba' && 'Barbearia Clássica'}
                  {item.category === 'ambiente' && 'Espaço & Confraria'}
                  {item.category === 'tratamentos' && 'Terapia do Couro'}
                </span>
                <h3 className="font-serif-luxury text-lg font-bold text-white group-hover:text-[#FDBA74] transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 mt-1 line-clamp-2">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {activeItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/95 backdrop-blur-lg">
            {/* Close button */}
            <button
              onClick={() => setActiveItem(null)}
              className="absolute top-6 right-6 p-3 text-slate-300 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors z-50 cursor-pointer"
              aria-label="Fechar visualizador"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev / Next controls */}
            <button
              onClick={handlePrev}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 text-white bg-black/60 hover:bg-[#EA580C] rounded-full border border-white/10 transition-colors z-50 cursor-pointer"
              aria-label="Foto anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 text-white bg-black/60 hover:bg-[#EA580C] rounded-full border border-white/10 transition-colors z-50 cursor-pointer"
              aria-label="Próxima foto"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl w-full bg-[#0F172A] rounded-sm overflow-hidden border border-white/15 shadow-2xl"
            >
              <div className="max-h-[68vh] overflow-hidden bg-black flex items-center justify-center">
                <img
                  src={activeItem.image}
                  alt={activeItem.title}
                  className="max-h-[68vh] w-auto max-w-full object-contain"
                />
              </div>

              <div className="p-6 bg-[#0F172A] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/10">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#EA580C]">
                    Pai e Filho Barbearia · Acervo Oficial
                  </span>
                  <h3 className="font-serif-luxury text-xl font-bold text-white mt-0.5">
                    {activeItem.title}
                  </h3>
                  <p className="text-xs text-slate-300 mt-1 max-w-xl">
                    {activeItem.description}
                  </p>
                </div>

                <button
                  onClick={() => setActiveItem(null)}
                  className="shrink-0 px-4 py-2 rounded-sm bg-white/10 hover:bg-white/20 text-xs font-semibold uppercase tracking-wider text-white transition-colors"
                >
                  Fechar
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
