export interface ServiceItem {
  id: string;
  name: string;
  price: number;
  duration: string;
  description: string;
  category: 'corte' | 'barba' | 'tratamento' | 'combo';
  popular?: boolean;
  image: string;
  features: string[];
}

export interface BarberExpert {
  id: string;
  name: string;
  role: string;
  experience: string;
  specialty: string;
  avatar: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  rating: number;
  comment: string;
  date: string;
  service: string;
  avatar: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'cortes' | 'barba' | 'ambiente' | 'tratamentos';
  image: string;
  description: string;
}

export interface AppointmentData {
  serviceId: string;
  serviceName: string;
  barberId: string;
  barberName: string;
  date: string;
  time: string;
  clientName: string;
  clientPhone: string;
  notes?: string;
}
