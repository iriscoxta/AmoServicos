import { useParams, Link } from 'react-router-dom';
import { MapPin, BadgeCheck, Clock, Share2, Heart, Phone, MessageCircle, Zap, Trophy, Calendar, CreditCard, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import StarRating from '@/components/StarRating';
import { professionals, reviews } from '@/data/mockData';
import { toast } from 'sonner';

const ProfessionalProfile = () => {
  const { id } = useParams();
  const pro = professionals.find(p => p.id === id);
  const proReviews = reviews.filter(r => r.professionalId === id);

  if (!pro) {
    return (
      <div className="container py-16 text-center">
        <h1 className="text-2xl font-bold">Profissional não encontrado</h1>
        <Link to="/busca"><Button className="mt-4">Voltar à busca</Button></Link>
      </div>
    );
  }

  const initials = pro.name.split(' ').map(n => n[0]).slice(0, 2).join('');

  const ratingDist = [5, 4, 3, 2, 1].map(star => ({
    star,
    count: proReviews.filter(r => r.rating === star).length,
    pct: proReviews.length ? (proReviews.filter(r => r.rating === star).length / proReviews.length) * 100 : 0,
  }));

  return (
    <div>
      <div className="container py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-muted-foreground mb-6" aria-label="Navegação">
          <Link to="/" className="hover:text-primary">Início</Link>
          <span className="mx-2">/</span>
          <Link to="/busca" className="hover:text-primary">Profissionais</Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{pro.name}</span>
        </nav>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Header */}
            <div className="bg-card rounded-lg border p-6">
              <div className="flex flex-col sm:flex-row gap-5">
                <Avatar className="w-20 h-20 shrink-0">
                  <AvatarFallback className="bg-primary/10 text-primary font-bold text-2xl">{initials}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h1 className="text-xl font-bold text-foreground">{pro.name}</h1>
                      <p className="text-muted-foreground">{pro.category}</p>
                    </div>
                    <div className="flex gap-1">
                      <Button variant="ghost" size="icon" onClick={() => toast.success('Perfil salvo nos favoritos!')} aria-label="Favoritar">
                        <Heart className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon" onClick={() => { navigator.clipboard.writeText(window.location.href); toast.success('Link copiado!'); }} aria-label="Compartilhar">
                        <Share2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 mt-1 text-sm text-muted-foreground">
                    <MapPin className="w-3.5 h-3.5" /> {pro.neighborhood}, {pro.city}
                  </div>
                  <div className="mt-2"><StarRating rating={pro.rating} reviewCount={pro.reviewCount} /></div>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {pro.verified && <Badge variant="secondary" className="gap-1 text-xs"><BadgeCheck className="w-3 h-3" /> Verificado</Badge>}
                    {pro.availableToday && <Badge variant="secondary" className="gap-1 text-xs"><Clock className="w-3 h-3" /> Atende hoje</Badge>}
                    {pro.fastResponse && <Badge variant="secondary" className="gap-1 text-xs"><Zap className="w-3 h-3" /> Resposta rápida</Badge>}
                    {pro.mostHired && <Badge variant="secondary" className="gap-1 text-xs"><Trophy className="w-3 h-3" /> Mais contratado</Badge>}
                    {pro.emergencyService && <Badge variant="secondary" className="gap-1 text-xs"><AlertCircle className="w-3 h-3" /> Emergencial</Badge>}
                  </div>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <Tabs defaultValue="about" className="bg-card rounded-lg border">
              <TabsList className="w-full justify-start border-b rounded-none px-4 pt-2 bg-transparent">
                <TabsTrigger value="about">Sobre</TabsTrigger>
                <TabsTrigger value="services">Serviços</TabsTrigger>
                <TabsTrigger value="reviews">Avaliações</TabsTrigger>
              </TabsList>

              <TabsContent value="about" className="p-6 space-y-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Sobre o profissional</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{pro.description}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Especialidades</h3>
                  <div className="flex flex-wrap gap-2">
                    {pro.specialties.map(s => <Badge key={s} variant="outline">{s}</Badge>)}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Regiões atendidas</h3>
                  <div className="flex flex-wrap gap-2">
                    {pro.areasServed.map(a => <Badge key={a} variant="outline">{a}</Badge>)}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Experiência</h3>
                  <p className="text-sm text-muted-foreground">{pro.experience} de atuação</p>
                </div>
              </TabsContent>

              <TabsContent value="services" className="p-6">
                <h3 className="font-semibold text-foreground mb-3">Serviços oferecidos</h3>
                <ul className="space-y-2">
                  {pro.services.map(s => (
                    <li key={s} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" /> {s}
                    </li>
                  ))}
                </ul>
              </TabsContent>

              <TabsContent value="reviews" className="p-6 space-y-6">
                {/* Rating summary */}
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-foreground">{pro.rating.toFixed(1)}</div>
                    <StarRating rating={pro.rating} showValue={false} />
                    <p className="text-xs text-muted-foreground mt-1">{pro.reviewCount} avaliações</p>
                  </div>
                  <div className="flex-1 space-y-1.5">
                    {ratingDist.map(d => (
                      <div key={d.star} className="flex items-center gap-2 text-sm">
                        <span className="w-8 text-muted-foreground">{d.star}★</span>
                        <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                          <div className="h-full bg-warning rounded-full" style={{ width: `${d.pct}%` }} />
                        </div>
                        <span className="w-6 text-muted-foreground text-right">{d.count}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Reviews */}
                {proReviews.length === 0 ? (
                  <p className="text-sm text-muted-foreground text-center py-8">Nenhuma avaliação ainda.</p>
                ) : (
                  <div className="space-y-4">
                    {proReviews.map(r => (
                      <div key={r.id} className="border-b pb-4 last:border-b-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-medium text-sm text-foreground">{r.authorName}</span>
                          <span className="text-xs text-muted-foreground">• {r.service}</span>
                        </div>
                        <StarRating rating={r.rating} showValue={false} size={12} />
                        <p className="text-sm text-muted-foreground mt-1">{r.comment}</p>
                        <p className="text-xs text-muted-foreground mt-1">{new Date(r.date).toLocaleDateString('pt-BR')}</p>
                      </div>
                    ))}
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            {/* Contact card */}
            <div className="bg-card rounded-lg border p-5 sticky top-24 space-y-4">
              <div className="text-center">
                <p className="text-sm text-muted-foreground">Faixa de preço</p>
                <p className="text-lg font-bold text-primary">{pro.priceRange}</p>
              </div>
              <Button className="w-full gap-2" size="lg" onClick={() => toast.success('Abrindo WhatsApp...')}>
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </Button>
              <Button variant="outline" className="w-full gap-2" onClick={() => toast.success('Ligando...')}>
                <Phone className="w-4 h-4" /> Ligar
              </Button>
              <Button variant="secondary" className="w-full">
                Solicitar orçamento
              </Button>
              <div className="border-t pt-4 space-y-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {pro.workingHours}</div>
                <div className="flex items-center gap-2"><CreditCard className="w-4 h-4" /> {pro.paymentMethods.join(', ')}</div>
                <div className="flex items-center gap-2"><Clock className="w-4 h-4" /> Responde em ~{pro.avgResponseTime}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalProfile;
