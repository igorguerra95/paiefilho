import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES_DATA, BARBERS_DATA } from '../data/barbershopData';
import { ServiceItem } from '../types';
import { X, Calendar, Clock, User, Scissors, Check, MessageSquare, Sparkles, AlertCircle } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: ServiceItem | null;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, initialService }) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(initialService?.id || 'corte-masculino');
  const [selectedBarberId, setSelectedBarberId] = useState<string>('qualquer');
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('14:00');
  const [clientName, setClientName] = useState<string>('');
  const [clientPhone, setClientPhone] = useState<string>('');
  const [clientNotes, setClientNotes] = useState<string>('');
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [formError, setFormError] = useState<string>('');

  useEffect(() => {
    if (initialService) {
      setSelectedServiceId(initialService.id);
    }
  }, [initialService]);

  useEffect(() => {
    // Generate default date: tomorrow formatted YYYY-MM-DD
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const yyyy = tomorrow.getFullYear();
    const mm = String(tomorrow.getMonth() + 1).padStart(2, '0');
    const dd = String(tomorrow.getDate()).padStart(2, '0');
    setSelectedDate(`${yyyy}-${mm}-${dd}`);
  }, []);

  if (!isOpen) return null;

  const currentService = SERVICES_DATA.find((s) => s.id === selectedServiceId) || SERVICES_DATA[0];
  const currentBarber = BARBERS_DATA.find((b) => b.id === selectedBarberId);

  const availableTimeSlots = [
    '09:00', '09:45', '10:30', '11:15', '13:00', '13:45', '14:30', '15:15', '16:00', '16:45', '17:30', '18:15', '19:00'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName.trim()) {
      setFormError('Por favor, informe seu nome completo.');
      return;
    }
    if (!clientPhone.trim() || clientPhone.replace(/\D/g, '').length < 10) {
      setFormError('Por favor, insira um WhatsApp válido com DDD.');
      return;
    }

    setFormError('');
    setIsSuccess(true);

    // Format WhatsApp pre-filled message
    const barberNameStr = currentBarber ? currentBarber.name : 'Primeiro barbeiro disponível';
    const message = encodeURIComponent(
      `💈 *SOLICITAÇÃO DE AGENDAMENTO — PAI E FILHO BARBEARIA*\n\n` +
      `👤 *Cliente:* ${clientName}\n` +
      `📱 *WhatsApp:* ${clientPhone}\n` +
      `✂️ *Serviço:* ${currentService.name} (R$ ${currentService.price})\n` +
      `🧔 *Barbeiro:* ${barberNameStr}\n` +
      `📅 *Data desejada:* ${selectedDate}\n` +
      `⏰ *Horário:* ${selectedTime}\n` +
      (clientNotes ? `📝 *Observação:* ${clientNotes}\n` : '') +
      `\n_Olá! Gostaria de confirmar meu agendamento na barbearia._`
    );

    // Open WhatsApp in new tab / app
    setTimeout(() => {
      window.open(`https://api.whatsapp.com/send?phone=5511999999999&text=${message}`, '_blank');
    }, 1200);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/\D/g, '');
    let formatted = raw;
    if (raw.length > 2) {
      formatted = `(${raw.slice(0, 2)}) ${raw.slice(2, 7)}${raw.length > 7 ? '-' + raw.slice(7, 11) : ''}`;
    }
    setClientPhone(formatted);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ duration: 0.3 }}
        className="relative max-w-2xl w-full bg-[#0F172A] rounded-sm border border-[#EA580C]/40 shadow-2xl shadow-black p-6 sm:p-8 my-8 max-h-[90vh] overflow-y-auto text-left"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white rounded-sm hover:bg-white/10 transition-colors cursor-pointer"
          aria-label="Fechar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="py-10 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-[#EA580C]/20 border-2 border-[#EA580C] text-[#EA580C] flex items-center justify-center mb-5 animate-bounce">
              <Check className="w-8 h-8 stroke-[3]" />
            </div>
            <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-white">
              Agendamento Encaminhado!
            </h3>
            <p className="mt-3 text-sm text-slate-300 max-w-md leading-relaxed">
              Obrigado, <strong className="text-white">{clientName}</strong>. Você está sendo direcionado ao nosso WhatsApp oficial para a confirmação instantânea da sua vaga com <strong className="text-[#EA580C]">{currentBarber ? currentBarber.name : 'nossa equipe'}</strong>.
            </p>
            <div className="mt-6 p-4 rounded-sm bg-[#090D16] border border-white/10 text-left text-xs text-slate-300 space-y-1.5 w-full max-w-sm font-mono">
              <div><strong>Serviço:</strong> {currentService.name} (R$ {currentService.price})</div>
              <div><strong>Data & Hora:</strong> {selectedDate} às {selectedTime}</div>
              <div><strong>Cliente:</strong> {clientName} ({clientPhone})</div>
            </div>
            <button
              onClick={() => {
                setIsSuccess(false);
                onClose();
              }}
              className="mt-8 px-6 py-3 rounded-sm bg-[#EA580C] hover:bg-[#F97316] text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
            >
              Concluir & Fechar
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <div className="flex items-center gap-2 text-[#EA580C] text-xs font-semibold uppercase tracking-widest mb-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Agendamento Online de Alta Precisão</span>
              </div>
              <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-white">
                Reserve Sua Cadeira
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Sem filas de espera. Escolha o serviço, o especialista e o horário perfeito.
              </p>
            </div>

            {formError && (
              <div className="p-3 rounded-sm bg-red-950/60 border border-red-800 text-red-200 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                <span>{formError}</span>
              </div>
            )}

            {/* Step 1: Select Service */}
            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-slate-300 mb-2">
                1. Selecione o Serviço Desejado
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {SERVICES_DATA.map((srv) => {
                  const isSelected = srv.id === selectedServiceId;
                  return (
                    <div
                      key={srv.id}
                      onClick={() => setSelectedServiceId(srv.id)}
                      className={`p-3 rounded-sm border cursor-pointer transition-all duration-200 flex items-center justify-between ${
                        isSelected
                          ? 'bg-[#EA580C]/15 border-[#EA580C] text-white shadow-md'
                          : 'bg-[#090D16] border-white/10 text-slate-300 hover:border-white/30'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <Scissors className={`w-4 h-4 -rotate-45 ${isSelected ? 'text-[#EA580C]' : 'text-slate-500'}`} />
                        <div>
                          <div className="text-xs font-bold leading-tight">{srv.name}</div>
                          <div className="text-[10px] text-slate-400">{srv.duration}</div>
                        </div>
                      </div>
                      <div className="text-xs font-bold text-white font-mono">
                        R$ {srv.price}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Select Barber */}
            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-slate-300 mb-2">
                2. Escolha o Barbeiro Mestre
              </label>
              <select
                value={selectedBarberId}
                onChange={(e) => setSelectedBarberId(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-sm bg-[#090D16] border border-white/10 text-white text-xs focus:outline-none focus:border-[#EA580C] transition-colors"
              >
                <option value="qualquer">Qualquer Barbeiro Especialista Disponível</option>
                {BARBERS_DATA.map((barber) => (
                  <option key={barber.id} value={barber.id}>
                    {barber.name} — {barber.role} ({barber.experience})
                  </option>
                ))}
              </select>
            </div>

            {/* Step 3: Date & Time */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-slate-300 mb-2">
                  3. Data Preferencial
                </label>
                <div className="relative">
                  <input
                    type="date"
                    required
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-sm bg-[#090D16] border border-white/10 text-white text-xs focus:outline-none focus:border-[#EA580C] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-slate-300 mb-2">
                  4. Horário de Atendimento
                </label>
                <select
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-sm bg-[#090D16] border border-white/10 text-white text-xs focus:outline-none focus:border-[#EA580C] transition-colors"
                >
                  {availableTimeSlots.map((slot) => (
                    <option key={slot} value={slot}>
                      {slot} (Turno Selecionado)
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Step 4: Client Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-slate-300 mb-1.5">
                  Seu Nome Completo *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Carlos Eduardo Silveira"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-sm bg-[#090D16] border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-[#EA580C] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-slate-300 mb-1.5">
                  Seu WhatsApp com DDD *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="(11) 98765-4321"
                  value={clientPhone}
                  onChange={handlePhoneChange}
                  className="w-full px-3.5 py-2.5 rounded-sm bg-[#090D16] border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-[#EA580C] transition-colors"
                />
              </div>
            </div>

            {/* Notes */}
            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-slate-300 mb-1.5">
                Observações ou Preferências (Opcional)
              </label>
              <textarea
                rows={2}
                placeholder="Ex: Primeira vez na casa; prefiro degradê médio na navalha; gostaria de tomar café expresso."
                value={clientNotes}
                onChange={(e) => setClientNotes(e.target.value)}
                className="w-full px-3.5 py-2 rounded-sm bg-[#090D16] border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-[#EA580C] transition-colors resize-none"
              />
            </div>

            {/* Order Summary Pill */}
            <div className="p-3.5 rounded-sm bg-[#090D16] border border-white/10 flex items-center justify-between text-xs">
              <div>
                <span className="text-slate-400 block">Total Estimado do Procedimento:</span>
                <span className="font-serif-luxury text-lg font-bold text-white">
                  R$ {currentService.price},00
                </span>
                <span className="text-[11px] text-[#EA580C] ml-2">({currentService.duration})</span>
              </div>
              <div className="text-right text-[11px] text-slate-400">
                Pagamento realizado diretamente no local.
              </div>
            </div>

            {/* Submit CTA */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-sm bg-[#EA580C] hover:bg-[#F97316] text-white font-semibold text-xs uppercase tracking-widest transition-all duration-300 shadow-xl shadow-[#EA580C]/25 cursor-pointer border border-[#F97316]"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Confirmar Agendamento no WhatsApp</span>
            </button>
          </form>
        )}
      </motion.div>
    </div>
  );
};
