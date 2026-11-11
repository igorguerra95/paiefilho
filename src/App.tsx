import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { GallerySection } from './components/GallerySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { BookingModal } from './components/BookingModal';
import { ServiceItem } from './types';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedServiceForModal, setSelectedServiceForModal] = useState<ServiceItem | null>(null);

  const handleOpenBooking = () => {
    setSelectedServiceForModal(null);
    setBookingModalOpen(true);
  };

  const handleSelectServiceToBook = (service: ServiceItem) => {
    setSelectedServiceForModal(service);
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#090D16] text-[#E2E8F0] flex flex-col font-sans selection:bg-[#EA580C] selection:text-white">
      {/* Top Fixed Luxury Navigation */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Seção 1: Início (Hero Fullscreen) */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* Seção 2: Nossos Serviços (Corte Masculino R$60, Barba R$45, Tratamento Capilar R$80 e combos) */}
        <ServicesSection onSelectServiceToBook={handleSelectServiceToBook} />

        {/* Seção 3: Sobre Nós (História de Tradição de Pai e Filho, 4 Stats Animadas e Barbeiros Especialistas) */}
        <AboutSection />

        {/* Seção 4: Galeria & Portfólio (Fotos em Alta Definição com Filtro e Lightbox) */}
        <GallerySection />

        {/* Seção 5: Avaliações & Depoimentos de Clientes Frequentes */}
        <TestimonialsSection />

        {/* Seção 6: Contato & Agendamento (Horários, Atendimento com Hora Marcada, Formulário e FAQ) */}
        <ContactSection onOpenBooking={handleOpenBooking} />
      </main>

      {/* Rodapé Oficial */}
      <Footer />

      {/* Botão Flutuante de WhatsApp com Pulso Suave */}
      <FloatingWhatsApp />

      {/* Modal Interativo de Agendamento Online */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialService={selectedServiceForModal}
      />
    </div>
  );
}
