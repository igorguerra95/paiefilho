import { ServiceItem, BarberExpert, TestimonialItem, GalleryItem } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'corte-masculino',
    name: 'Corte Masculino',
    price: 60,
    duration: '45 min',
    description: 'Diagnóstico visagista personalizado, corte milimétrico na tesoura ou máquina, alinhamento térmico e lavagem com massagem capilar revigorante.',
    category: 'corte',
    popular: true,
    image: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=1000&auto=format&fit=crop',
    features: [
      'Análise visagista da anatomia facial',
      'Tesoura japonesa ou máquina de precisão',
      'Acabamento na lâmina descartável',
      'Lavatório com shampoo energizante',
      'Finalização com pomada matte italiana'
    ]
  },
  {
    id: 'barba-tradicional',
    name: 'Barba Tradicional',
    price: 45,
    duration: '40 min',
    description: 'Ritual clássico da toalha quente com infusão de óleos essenciais, espuma densa hidratante, navalhete afiado e bálsamo refrescante pós-barba.',
    category: 'barba',
    popular: true,
    image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=1000&auto=format&fit=crop',
    features: [
      'Toalha quente com vapor de eucalipto',
      'Óleo pré-barba amaciante de folículos',
      'Navalhete esterilizado de alta precisão',
      'Alinhamento simétrico do contorno facial',
      'Bálsamo tonificante com fechamento de poros'
    ]
  },
  {
    id: 'tratamento-capilar',
    name: 'Tratamento Capilar',
    price: 80,
    duration: '50 min',
    description: 'Desintoxicação profunda do couro cabeludo, nutrição com aminoácidos nobres, controle de oleosidade e fortalecimento da fibra capilar.',
    category: 'tratamento',
    popular: false,
    image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=1000&auto=format&fit=crop',
    features: [
      'Peeling capilar e esfoliação desobstrutiva',
      'Máscara de reconstrução intensiva',
      'Massagem craniana relaxante de 15 minutos',
      'Tônico estimulador de bulbo capilar',
      'Secagem e alinhamento dos fios'
    ]
  },
  {
    id: 'combo-mestre',
    name: 'Combo Mestre da Casa',
    price: 95,
    duration: '1h 20min',
    description: 'A experiência completa: corte visagista com lavagem e o clássico ritual da barba com toalha aromática e finalização nobre.',
    category: 'combo',
    popular: true,
    image: 'https://images.unsplash.com/photo-1512690459411-b9245aed614b?q=80&w=1000&auto=format&fit=crop',
    features: [
      'Corte completo + Barba com toalha quente',
      'Dupla lavagem com massagem no couro',
      'Café gourmet especial ou dose de uísque',
      'Alinhamento total de sobrancelha e costeletas'
    ]
  },
  {
    id: 'barboterapia-spa',
    name: 'Barboterapia & Spa Facial',
    price: 70,
    duration: '55 min',
    description: 'Imersão revigorante com vapor de ozônio, argiloterapia desintoxicante facial, esfoliação suave e hidratação profunda de barba e cútis.',
    category: 'tratamento',
    popular: false,
    image: 'https://images.unsplash.com/photo-1517832606589-7629c339590a?q=80&w=1000&auto=format&fit=crop',
    features: [
      'Vapor de ozônio purificante',
      'Argiloterapia de carvão ativado',
      'Óleos botânicos reconstrutores',
      'Finalização com filtro térmico'
    ]
  },
  {
    id: 'corte-infantil-cavalheiro',
    name: 'Corte Jovem Aprendiz (Pai & Filho)',
    price: 55,
    duration: '40 min',
    description: 'Atendimento especial para o filho viver a autêntica experiência da barbearia clássica ao lado do pai com paciência e técnica exemplar.',
    category: 'corte',
    popular: false,
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?q=80&w=1000&auto=format&fit=crop',
    features: [
      'Ambiente acolhedor e atencioso',
      'Corte moderno adaptado à rotina',
      'Pomada de fixação infantil segura',
      'Brinde temático tradicional'
    ]
  }
];

export const BARBERS_DATA: BarberExpert[] = [
  {
    id: 'sebastiao',
    name: 'Mestre Sebastião',
    role: 'Mestre Barbeiro & Fundador',
    experience: '32 anos de ofício',
    specialty: 'Navalha clássica, barba tradicional e cortes clássicos na tesoura',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: 'rodrigo',
    name: 'Rodrigo Brandão',
    role: 'Barbeiro Visagista (Filho)',
    experience: '14 anos de ofício',
    specialty: 'Visagismo contemporâneo, degradê militar e alinhamento milimétrico',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: 'matheus',
    name: 'Matheus Fontes',
    role: 'Especialista em Texturas',
    experience: '8 anos de ofício',
    specialty: 'Fade americano, freestyle clássico e penteados com pompa',
    avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: 'andre',
    name: 'André Vianna',
    role: 'Terapeuta Capilar & Barboterapeuta',
    experience: '9 anos de ofício',
    specialty: 'Vapor de ozônio, argiloterapia e recuperação de fios danificados',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: 'marcos',
    name: 'Marcos Vinícius',
    role: 'Consultor de Imagem Masculina',
    experience: '7 anos de ofício',
    specialty: 'Harmonização de barba longa e cortes executivos atemporais',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop'
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: 'g-1',
    title: 'Acabamento Milimétrico na Navalha',
    category: 'barba',
    image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=1000&auto=format&fit=crop',
    description: 'Contorno perfeito com navalhete de aço alemão e espuma aromática aquecida.'
  },
  {
    id: 'g-2',
    title: 'Corte Visagista com Tesoura Fio Laser',
    category: 'cortes',
    image: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=1000&auto=format&fit=crop',
    description: 'Movimento natural, textura equilibrada e caimento sob medida.'
  },
  {
    id: 'g-3',
    title: 'Ambiente de Confraria & Tradição',
    category: 'ambiente',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1000&auto=format&fit=crop',
    description: 'Cadeiras em couro legítimo capitonê, luz quente âmbar e aconchego de barbearia clássica.'
  },
  {
    id: 'g-4',
    title: 'Degradê Impecável & Alinhamento',
    category: 'cortes',
    image: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=1000&auto=format&fit=crop',
    description: 'Transição suave sem marcas evidentes, valorizando o desenho do crânio.'
  },
  {
    id: 'g-5',
    title: 'Ritual da Toalha Quente Aromática',
    category: 'tratamentos',
    image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=1000&auto=format&fit=crop',
    description: 'Relaxamento muscular e dilatação ideal de poros para barbear sem irritações.'
  },
  {
    id: 'g-6',
    title: 'Tradição que Atravessa Gerações',
    category: 'ambiente',
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?q=80&w=1000&auto=format&fit=crop',
    description: 'Pai e filho compartilhando o mesmo respeito pela elegância masculina.'
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 't-1',
    name: 'Carlos Eduardo Nogueira',
    role: 'Empresário',
    rating: 5,
    comment: 'Frequento a Pai e Filho há quase 7 anos. É o único lugar onde não preciso explicar nada: eles conhecem a estrutura do meu rosto e a precisão da navalha é simplesmente impecável. Nível de barbearia de Londres ou Nova York.',
    date: 'Há 3 dias',
    service: 'Combo Mestre da Casa',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop'
  },
  {
    id: 't-2',
    name: 'Dr. Henrique Prado',
    role: 'Cirurgião Plástico',
    rating: 5,
    comment: 'Como cirurgião, aprecio precisão milimétrica. O trabalho com tesoura e a esterilização dos instrumentos aqui são fora de série. Além disso, a toalha quente com o café expresso é o meu ritual obrigatório de cada sexta-feira.',
    date: 'Há 1 semana',
    service: 'Barba Tradicional & Spa',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop'
  },
  {
    id: 't-3',
    name: 'Gustavo Mendonça & Filho',
    role: 'Engenheiro Civil',
    rating: 5,
    comment: 'Levei meu filho de 10 anos pela primeira vez e foi uma experiência inesquecível. O respeito e o carinho da equipe com a tradição de pai e filho fez toda a diferença. Somos clientes vitalícios com certeza.',
    date: 'Há 2 semanas',
    service: 'Corte Pai & Filho',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop'
  }
];

export const FAQ_DATA = [
  {
    question: 'Como funciona o agendamento prévio?',
    answer: 'Você pode agendar diretamente pelo nosso formulário online em menos de 1 minuto, escolhendo o serviço, o barbeiro especialista e o melhor horário. Seu horário fica 100% reservado e confirmado no seu WhatsApp sem filas de espera.'
  },
  {
    question: 'Qual o tempo médio de cada atendimento?',
    answer: 'Nossos serviços variam de 40 minutos (Corte ou Barba individual) a 80 minutos para o Combo Mestre Completo. Prezamos por atenção cirúrgica aos detalhes, sem pressa de esteira produtiva.'
  },
  {
    question: 'Vocês utilizam lâminas descartáveis e esterilização hospitalar?',
    answer: 'Rigorosamente sim. Todas as lâminas são descartáveis após um único uso diante do cliente. Tesouras, pentes e navalhetes metálicos passam por processo de desinfecção e estufa de esterilização ultravioleta.'
  },
  {
    question: 'Posso levar meu filho para cortar junto comigo?',
    answer: 'Com toda certeza! É a essência do nosso nome. Dispomos de cadeiras adaptadas e atendimento paciente e técnico para que a experiência seja marcante e confortável para todas as idades.'
  },
  {
    question: 'Quais formas de pagamento são aceitas no local?',
    answer: 'Aceitamos Pix instantâneo, cartões de crédito e débito das principais bandeiras e dinheiro em espécie.'
  }
];

export const STATS_DATA = [
  { value: 15, suffix: '+', label: 'Anos de Tradição', description: 'História construída no ofício clássico' },
  { value: 10000, suffix: '+', label: 'Clientes Atendidos', description: 'Cavalheiros fiéis à nossa precisão' },
  { value: 5, suffix: '', label: 'Barbeiros Especialistas', description: 'Mestres treinados na escola tradicional' },
  { value: 4.9, suffix: ' / 5', label: 'Avaliação Média', description: 'Excelência aprovada pela clientela' }
];
