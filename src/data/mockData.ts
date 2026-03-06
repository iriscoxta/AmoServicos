import { Category, Professional, Review, DashboardMetrics, ServiceRequest, Message, FAQ } from '@/types';

export const categories: Category[] = [
  { id: '1', name: 'Diarista', slug: 'diarista', icon: 'Sparkles', description: 'Limpeza e organização residencial e comercial', professionalCount: 127 },
  { id: '2', name: 'Encanador', slug: 'encanador', icon: 'Wrench', description: 'Reparos hidráulicos, vazamentos e instalações', professionalCount: 84 },
  { id: '3', name: 'Eletricista', slug: 'eletricista', icon: 'Zap', description: 'Instalações elétricas, reparos e manutenção', professionalCount: 96 },
  { id: '4', name: 'Montador de Móveis', slug: 'montador', icon: 'Hammer', description: 'Montagem e desmontagem de móveis em geral', professionalCount: 63 },
  { id: '5', name: 'Pintor', slug: 'pintor', icon: 'Paintbrush', description: 'Pintura residencial, comercial e acabamentos', professionalCount: 71 },
  { id: '6', name: 'Jardineiro', slug: 'jardineiro', icon: 'Flower2', description: 'Manutenção de jardins, poda e paisagismo', professionalCount: 45 },
  { id: '7', name: 'Chaveiro', slug: 'chaveiro', icon: 'KeyRound', description: 'Cópias de chaves, abertura de fechaduras e troca', professionalCount: 38 },
  { id: '8', name: 'Técnico de Ar-condicionado', slug: 'ar-condicionado', icon: 'Wind', description: 'Instalação, manutenção e limpeza de ar-condicionado', professionalCount: 52 },
  { id: '9', name: 'Babá', slug: 'baba', icon: 'Baby', description: 'Cuidado de crianças com experiência e carinho', professionalCount: 89 },
  { id: '10', name: 'Cuidador(a)', slug: 'cuidador', icon: 'Heart', description: 'Acompanhamento e cuidado de idosos e pessoas especiais', professionalCount: 67 },
];

export const professionals: Professional[] = [
  {
    id: '1', name: 'Maria Aparecida Silva', avatar: '', category: 'Diarista', categorySlug: 'diarista',
    neighborhood: 'Centro', city: 'São Paulo', rating: 4.9, reviewCount: 187, priceRange: 'R$ 150–250/dia',
    description: 'Profissional dedicada com mais de 12 anos de experiência em limpeza residencial e comercial. Trabalho com atenção aos detalhes, utilizando produtos de qualidade e técnicas que garantem um ambiente impecável. Atendo casas, apartamentos e escritórios com pontualidade e comprometimento.',
    shortDescription: 'Diarista experiente com foco em limpeza detalhada e organização.',
    experience: '12 anos', specialties: ['Limpeza profunda', 'Organização de ambientes', 'Pós-obra'],
    areasServed: ['Centro', 'Jardins', 'Pinheiros', 'Vila Mariana'], services: ['Faxina completa', 'Limpeza pós-obra', 'Organização de closet', 'Passadoria'],
    workingHours: 'Seg–Sáb, 7h–18h', paymentMethods: ['Pix', 'Dinheiro', 'Cartão'],
    emergencyService: false, homeService: true, verified: true, availableToday: true, fastResponse: true, mostHired: true,
    avgResponseTime: '15 min', gallery: [], phone: '(11) 99876-5432', whatsapp: '5511998765432', createdAt: '2023-03-15',
  },
  {
    id: '2', name: 'Carlos Eduardo Santos', avatar: '', category: 'Encanador', categorySlug: 'encanador',
    neighborhood: 'Vila Madalena', city: 'São Paulo', rating: 4.8, reviewCount: 134, priceRange: 'R$ 100–300',
    description: 'Encanador profissional com experiência em reparos residenciais e comerciais. Trabalho com detecção de vazamentos, desentupimentos, instalação de torneiras, chuveiros e sistemas hidráulicos completos. Atendimento rápido e orçamento sem compromisso.',
    shortDescription: 'Encanador com atendimento rápido e preço justo.',
    experience: '8 anos', specialties: ['Detecção de vazamentos', 'Desentupimento', 'Instalação hidráulica'],
    areasServed: ['Vila Madalena', 'Pinheiros', 'Perdizes', 'Pompeia'], services: ['Conserto de vazamentos', 'Desentupimento', 'Troca de torneira', 'Instalação de chuveiro', 'Reparo de descarga'],
    workingHours: 'Seg–Sáb, 8h–19h', paymentMethods: ['Pix', 'Dinheiro', 'Transferência'],
    emergencyService: true, homeService: true, verified: true, availableToday: true, fastResponse: true, mostHired: false,
    avgResponseTime: '10 min', gallery: [], phone: '(11) 98765-4321', whatsapp: '5511987654321', createdAt: '2023-06-20',
  },
  {
    id: '3', name: 'Roberto Almeida Júnior', avatar: '', category: 'Eletricista', categorySlug: 'eletricista',
    neighborhood: 'Moema', city: 'São Paulo', rating: 4.7, reviewCount: 98, priceRange: 'R$ 120–400',
    description: 'Eletricista certificado com NR-10. Realizo instalações elétricas, reparos, troca de fiação, instalação de luminárias, quadros elétricos e projetos de iluminação residencial. Trabalho com segurança e garantia de serviço.',
    shortDescription: 'Eletricista certificado com NR-10 e garantia de serviço.',
    experience: '15 anos', specialties: ['Instalação de quadros elétricos', 'Iluminação', 'Projetos elétricos'],
    areasServed: ['Moema', 'Itaim Bibi', 'Vila Olímpia', 'Campo Belo'], services: ['Instalação elétrica', 'Troca de fiação', 'Instalação de luminárias', 'Quadro de disjuntores', 'Chuveiro elétrico'],
    workingHours: 'Seg–Sex, 8h–18h', paymentMethods: ['Pix', 'Dinheiro', 'Cartão', 'Transferência'],
    emergencyService: true, homeService: true, verified: true, availableToday: false, fastResponse: false, mostHired: true,
    avgResponseTime: '30 min', gallery: [], phone: '(11) 97654-3210', whatsapp: '5511976543210', createdAt: '2022-11-10',
  },
  {
    id: '4', name: 'Ana Paula Ferreira', avatar: '', category: 'Babá', categorySlug: 'baba',
    neighborhood: 'Jardins', city: 'São Paulo', rating: 5.0, reviewCount: 76, priceRange: 'R$ 1.800–3.000/mês',
    description: 'Babá dedicada com formação em pedagogia e curso de primeiros socorros. Tenho experiência com crianças de 0 a 8 anos, incluindo recém-nascidos. Ofereço atividades educativas, acompanho rotina alimentar e sono. Referências disponíveis.',
    shortDescription: 'Babá com formação em pedagogia e experiência com recém-nascidos.',
    experience: '10 anos', specialties: ['Recém-nascidos', 'Atividades educativas', 'Primeiros socorros'],
    areasServed: ['Jardins', 'Cerqueira César', 'Consolação', 'Higienópolis'], services: ['Babá período integral', 'Babá meio período', 'Babá para eventos', 'Acompanhamento escolar'],
    workingHours: 'Seg–Sex, 7h–19h', paymentMethods: ['Pix', 'Transferência'],
    emergencyService: false, homeService: true, verified: true, availableToday: false, fastResponse: true, mostHired: false,
    avgResponseTime: '20 min', gallery: [], phone: '(11) 96543-2109', whatsapp: '5511965432109', createdAt: '2023-01-05',
  },
  {
    id: '5', name: 'José Ricardo Oliveira', avatar: '', category: 'Pintor', categorySlug: 'pintor',
    neighborhood: 'Tatuapé', city: 'São Paulo', rating: 4.6, reviewCount: 112, priceRange: 'R$ 25–45/m²',
    description: 'Pintor profissional com experiência em pintura residencial, comercial e texturizada. Trabalho com tintas de primeira linha, faço preparação completa de superfície e entrego o ambiente limpo. Orçamento gratuito e sem compromisso.',
    shortDescription: 'Pintor profissional com acabamento impecável.',
    experience: '18 anos', specialties: ['Textura', 'Grafiato', 'Pintura epóxi', 'Massa corrida'],
    areasServed: ['Tatuapé', 'Anália Franco', 'Vila Carrão', 'Penha'], services: ['Pintura interna', 'Pintura externa', 'Textura', 'Grafiato', 'Massa corrida', 'Pintura de portões'],
    workingHours: 'Seg–Sáb, 7h–17h', paymentMethods: ['Pix', 'Dinheiro'],
    emergencyService: false, homeService: true, verified: false, availableToday: true, fastResponse: false, mostHired: false,
    avgResponseTime: '1 hora', gallery: [], phone: '(11) 95432-1098', whatsapp: '5511954321098', createdAt: '2023-08-22',
  },
  {
    id: '6', name: 'Fernando Costa Neto', avatar: '', category: 'Montador de Móveis', categorySlug: 'montador',
    neighborhood: 'Santana', city: 'São Paulo', rating: 4.8, reviewCount: 203, priceRange: 'R$ 80–250',
    description: 'Montador de móveis com vasta experiência em todas as marcas. Monto guarda-roupas, cozinhas, escritórios e qualquer tipo de móvel. Trabalho limpo, organizado e com ferramentas profissionais. Pontualidade garantida.',
    shortDescription: 'Montador experiente, pontual e com ferramentas profissionais.',
    experience: '11 anos', specialties: ['Cozinhas planejadas', 'Guarda-roupas', 'Móveis de escritório'],
    areasServed: ['Santana', 'Tucuruvi', 'Mandaqui', 'Casa Verde'], services: ['Montagem de guarda-roupa', 'Montagem de cozinha', 'Montagem de escritório', 'Desmontagem', 'Reparos em móveis'],
    workingHours: 'Seg–Sáb, 8h–18h', paymentMethods: ['Pix', 'Dinheiro', 'Cartão'],
    emergencyService: false, homeService: true, verified: true, availableToday: true, fastResponse: true, mostHired: true,
    avgResponseTime: '12 min', gallery: [], phone: '(11) 94321-0987', whatsapp: '5511943210987', createdAt: '2022-09-01',
  },
  {
    id: '7', name: 'Luciana Ribeiro', avatar: '', category: 'Cuidador(a)', categorySlug: 'cuidador',
    neighborhood: 'Perdizes', city: 'São Paulo', rating: 4.9, reviewCount: 58, priceRange: 'R$ 2.000–3.500/mês',
    description: 'Cuidadora de idosos com formação técnica em enfermagem. Experiência com pacientes acamados, acompanhamento hospitalar e cuidados diários. Trabalho com dedicação, respeito e carinho. Referências e certificados disponíveis.',
    shortDescription: 'Cuidadora com formação em enfermagem e muito carinho.',
    experience: '7 anos', specialties: ['Pacientes acamados', 'Alzheimer', 'Acompanhamento hospitalar'],
    areasServed: ['Perdizes', 'Pompeia', 'Lapa', 'Alto de Pinheiros'], services: ['Cuidador diurno', 'Cuidador noturno', 'Acompanhamento hospitalar', 'Cuidados com medicação'],
    workingHours: 'Seg–Dom, escalas', paymentMethods: ['Pix', 'Transferência'],
    emergencyService: true, homeService: true, verified: true, availableToday: false, fastResponse: true, mostHired: false,
    avgResponseTime: '25 min', gallery: [], phone: '(11) 93210-9876', whatsapp: '5511932109876', createdAt: '2023-04-18',
  },
  {
    id: '8', name: 'Marcos Vinícius Pereira', avatar: '', category: 'Técnico de Ar-condicionado', categorySlug: 'ar-condicionado',
    neighborhood: 'Vila Olímpia', city: 'São Paulo', rating: 4.7, reviewCount: 145, priceRange: 'R$ 150–500',
    description: 'Técnico especializado em ar-condicionado split, multi-split e central. Realizo instalação, manutenção preventiva, limpeza e carga de gás. Atendo residências e empresas com rapidez e profissionalismo.',
    shortDescription: 'Técnico de ar-condicionado rápido e especializado.',
    experience: '9 anos', specialties: ['Split', 'Multi-split', 'Ar central', 'Carga de gás'],
    areasServed: ['Vila Olímpia', 'Itaim Bibi', 'Brooklin', 'Moema'], services: ['Instalação de split', 'Manutenção preventiva', 'Limpeza de filtros', 'Carga de gás', 'Desinstalação'],
    workingHours: 'Seg–Sáb, 8h–18h', paymentMethods: ['Pix', 'Dinheiro', 'Cartão', 'Transferência'],
    emergencyService: true, homeService: true, verified: true, availableToday: true, fastResponse: false, mostHired: false,
    avgResponseTime: '45 min', gallery: [], phone: '(11) 92109-8765', whatsapp: '5511921098765', createdAt: '2023-02-28',
  },
  {
    id: '9', name: 'Pedro Henrique Lima', avatar: '', category: 'Chaveiro', categorySlug: 'chaveiro',
    neighborhood: 'Liberdade', city: 'São Paulo', rating: 4.5, reviewCount: 89, priceRange: 'R$ 60–200',
    description: 'Chaveiro 24 horas com atendimento rápido. Faço cópias de chaves, abertura de portas, troca de segredo, fechaduras digitais e instalação de fechaduras. Atendimento emergencial com chegada em até 30 minutos.',
    shortDescription: 'Chaveiro 24h com atendimento emergencial rápido.',
    experience: '6 anos', specialties: ['Fechaduras digitais', 'Automotivo', 'Emergencial 24h'],
    areasServed: ['Liberdade', 'Bela Vista', 'Aclimação', 'Cambuci'], services: ['Cópia de chave', 'Abertura de porta', 'Troca de segredo', 'Fechadura digital', 'Chaveiro automotivo'],
    workingHours: '24 horas', paymentMethods: ['Pix', 'Dinheiro', 'Cartão'],
    emergencyService: true, homeService: true, verified: false, availableToday: true, fastResponse: true, mostHired: false,
    avgResponseTime: '8 min', gallery: [], phone: '(11) 91098-7654', whatsapp: '5511910987654', createdAt: '2023-07-14',
  },
  {
    id: '10', name: 'Dona Tereza Souza', avatar: '', category: 'Jardineiro', categorySlug: 'jardineiro',
    neighborhood: 'Butantã', city: 'São Paulo', rating: 4.8, reviewCount: 67, priceRange: 'R$ 100–300',
    description: 'Jardineira e paisagista com amor pela natureza. Cuido de jardins residenciais e comerciais, faço poda, plantio, adubação e projetos de paisagismo. Transformo espaços com verde e vida.',
    shortDescription: 'Jardineira paisagista que transforma espaços.',
    experience: '14 anos', specialties: ['Paisagismo', 'Poda artística', 'Hortas urbanas'],
    areasServed: ['Butantã', 'Morumbi', 'Jardim Bonfiglioli', 'Rio Pequeno'], services: ['Manutenção de jardim', 'Poda', 'Plantio', 'Adubação', 'Projeto paisagístico', 'Horta urbana'],
    workingHours: 'Seg–Sáb, 7h–16h', paymentMethods: ['Pix', 'Dinheiro'],
    emergencyService: false, homeService: true, verified: true, availableToday: false, fastResponse: false, mostHired: false,
    avgResponseTime: '2 horas', gallery: [], phone: '(11) 90987-6543', whatsapp: '5511909876543', createdAt: '2023-05-10',
  },
];

export const reviews: Review[] = [
  { id: '1', professionalId: '1', authorName: 'Fernanda Carvalho', authorAvatar: '', rating: 5, comment: 'Maria é incrível! Minha casa ficou impecável. Super pontual e atenciosa. Recomendo demais!', date: '2024-02-15', service: 'Faxina completa' },
  { id: '2', professionalId: '1', authorName: 'Lucas Mendonça', authorAvatar: '', rating: 5, comment: 'Profissional excepcional. Fez a limpeza pós-obra do meu apartamento e ficou perfeito.', date: '2024-01-28', service: 'Limpeza pós-obra' },
  { id: '3', professionalId: '1', authorName: 'Camila Rodrigues', authorAvatar: '', rating: 4, comment: 'Muito boa profissional, chegou no horário e fez tudo direitinho. Voltarei a contratar.', date: '2024-01-10', service: 'Faxina completa' },
  { id: '4', professionalId: '2', authorName: 'Ricardo Dias', authorAvatar: '', rating: 5, comment: 'Carlos resolveu um vazamento que outros não conseguiram achar. Muito competente!', date: '2024-02-20', service: 'Detecção de vazamentos' },
  { id: '5', professionalId: '2', authorName: 'Juliana Martins', authorAvatar: '', rating: 5, comment: 'Atendimento super rápido. Chegou em 20 minutos e resolveu na hora. Preço justo.', date: '2024-02-05', service: 'Conserto de vazamentos' },
  { id: '6', professionalId: '3', authorName: 'André Nascimento', authorAvatar: '', rating: 5, comment: 'Trabalho impecável! Trocou toda a fiação do apartamento com rapidez e limpeza.', date: '2024-02-10', service: 'Troca de fiação' },
  { id: '7', professionalId: '6', authorName: 'Patrícia Gomes', authorAvatar: '', rating: 5, comment: 'Fernando montou minha cozinha toda em um dia. Perfeito, sem nenhum defeito. Super recomendo!', date: '2024-02-18', service: 'Montagem de cozinha' },
  { id: '8', professionalId: '6', authorName: 'Thiago Brandão', authorAvatar: '', rating: 5, comment: 'Pontualíssimo e muito organizado. Montou o guarda-roupa rápido e sem bagunça.', date: '2024-01-30', service: 'Montagem de guarda-roupa' },
];

export const dashboardMetrics: DashboardMetrics = {
  profileViews: 1247, contactsReceived: 89, averageRating: 4.9, servicesCount: 4,
  viewsTrend: 12.5, contactsTrend: 8.3,
};

export const serviceRequests: ServiceRequest[] = [
  { id: '1', clientName: 'Mariana Costa', service: 'Faxina completa', date: '2024-03-01', status: 'pending', message: 'Olá, preciso de uma faxina completa em apartamento de 80m². Disponível essa semana?' },
  { id: '2', clientName: 'Rafael Oliveira', service: 'Limpeza pós-obra', date: '2024-02-28', status: 'accepted', message: 'Boa tarde, acabei de reformar meu apartamento e preciso de limpeza pós-obra urgente.' },
  { id: '3', clientName: 'Beatriz Santos', service: 'Organização de closet', date: '2024-02-25', status: 'completed', message: 'Gostaria de ajuda para organizar meu closet e gavetas. Quando você pode vir?' },
  { id: '4', clientName: 'Diego Ferreira', service: 'Passadoria', date: '2024-02-20', status: 'cancelled', message: 'Preciso de alguém para passar roupas semanalmente. Tenho bastante roupa social.' },
];

export const messages: Message[] = [
  { id: '1', senderName: 'Mariana Costa', senderAvatar: '', content: 'Olá, vi seu perfil e gostaria de agendar uma faxina.', date: '2024-03-01T10:30:00', read: false },
  { id: '2', senderName: 'Rafael Oliveira', senderAvatar: '', content: 'Obrigado pela resposta rápida! Vamos combinar o horário.', date: '2024-02-28T14:15:00', read: true },
  { id: '3', senderName: 'Beatriz Santos', senderAvatar: '', content: 'Ficou maravilhoso! Muito obrigada pelo trabalho.', date: '2024-02-26T09:00:00', read: true },
];

export const faqs: FAQ[] = [
  { question: 'Como funciona a AmoServiços?', answer: 'A AmoServiços é uma plataforma que conecta você a profissionais de serviços na sua cidade. Basta buscar o serviço que precisa, comparar perfis e entrar em contato diretamente com o profissional.' },
  { question: 'Preciso pagar para usar a plataforma?', answer: 'A busca e o contato com profissionais são totalmente gratuitos para os clientes. Os profissionais podem optar por planos que aumentam sua visibilidade na plataforma.' },
  { question: 'Como sei se um profissional é confiável?', answer: 'Profissionais verificados passam por um processo de validação de documentos. Além disso, as avaliações de outros clientes ajudam você a escolher com segurança.' },
  { question: 'Posso avaliar um profissional?', answer: 'Sim! Após contratar um serviço, você pode deixar sua avaliação e comentário no perfil do profissional, ajudando outros usuários a fazerem boas escolhas.' },
  { question: 'Como faço para cadastrar meu serviço?', answer: 'Clique em "Cadastrar serviço" no menu, preencha seus dados profissionais e publique seu perfil. É rápido e simples!' },
  { question: 'A plataforma oferece garantia dos serviços?', answer: 'A AmoServiços facilita a conexão entre clientes e profissionais. A garantia dos serviços é acordada diretamente entre as partes. Recomendamos sempre combinar os termos antes de iniciar o trabalho.' },
];

export const neighborhoods = [
  'Centro', 'Jardins', 'Pinheiros', 'Vila Madalena', 'Moema', 'Itaim Bibi',
  'Vila Olímpia', 'Perdizes', 'Santana', 'Tatuapé', 'Liberdade', 'Butantã',
  'Brooklin', 'Campo Belo', 'Lapa', 'Consolação', 'Higienópolis', 'Vila Mariana',
];
