export interface Professional {
  id: string;
  name: string;
  avatar: string;
  category: string;
  categorySlug: string;
  neighborhood: string;
  city: string;
  rating: number;
  reviewCount: number;
  priceRange: string;
  description: string;
  shortDescription: string;
  experience: string;
  specialties: string[];
  areasServed: string[];
  services: string[];
  workingHours: string;
  paymentMethods: string[];
  emergencyService: boolean;
  homeService: boolean;
  verified: boolean;
  availableToday: boolean;
  fastResponse: boolean;
  mostHired: boolean;
  avgResponseTime: string;
  gallery: string[];
  phone: string;
  whatsapp: string;
  createdAt: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  icon: string;
  description: string;
  professionalCount: number;
}

export interface Review {
  id: string;
  professionalId: string;
  authorName: string;
  authorAvatar: string;
  rating: number;
  comment: string;
  date: string;
  service: string;
}

export interface DashboardMetrics {
  profileViews: number;
  contactsReceived: number;
  averageRating: number;
  servicesCount: number;
  viewsTrend: number;
  contactsTrend: number;
}

export interface ServiceRequest {
  id: string;
  clientName: string;
  service: string;
  date: string;
  status: 'pending' | 'accepted' | 'completed' | 'cancelled';
  message: string;
}

export interface Message {
  id: string;
  senderName: string;
  senderAvatar: string;
  content: string;
  date: string;
  read: boolean;
}

export interface FAQ {
  question: string;
  answer: string;
}
