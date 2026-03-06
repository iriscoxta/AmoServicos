import { Eye, Phone, Star, Briefcase, TrendingUp, MessageCircle, Calendar, Settings, User, Image, Clock } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { dashboardMetrics, serviceRequests, messages, reviews } from '@/data/mockData';

const statusMap = {
  pending: { label: 'Pendente', variant: 'outline' as const },
  accepted: { label: 'Aceita', variant: 'default' as const },
  completed: { label: 'Concluída', variant: 'secondary' as const },
  cancelled: { label: 'Cancelada', variant: 'destructive' as const },
};

const ProfessionalDashboard = () => {
  return (
    <div className="container py-8">
      <h1 className="text-2xl font-bold text-foreground mb-6">Painel do Profissional</h1>

      {/* Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { icon: Eye, label: 'Visualizações', value: dashboardMetrics.profileViews, trend: dashboardMetrics.viewsTrend },
          { icon: Phone, label: 'Contatos', value: dashboardMetrics.contactsReceived, trend: dashboardMetrics.contactsTrend },
          { icon: Star, label: 'Nota média', value: dashboardMetrics.averageRating.toFixed(1), trend: 0 },
          { icon: Briefcase, label: 'Serviços', value: dashboardMetrics.servicesCount, trend: 0 },
        ].map((m, i) => (
          <div key={i} className="bg-card rounded-lg border p-4">
            <div className="flex items-center gap-2 text-muted-foreground mb-2">
              <m.icon className="w-4 h-4" />
              <span className="text-xs">{m.label}</span>
            </div>
            <div className="text-2xl font-bold text-foreground">{m.value}</div>
            {m.trend > 0 && (
              <span className="flex items-center gap-1 text-xs text-success mt-1">
                <TrendingUp className="w-3 h-3" /> +{m.trend}%
              </span>
            )}
          </div>
        ))}
      </div>

      <Tabs defaultValue="requests" className="bg-card rounded-lg border">
        <TabsList className="w-full justify-start border-b rounded-none px-4 pt-2 bg-transparent overflow-x-auto">
          <TabsTrigger value="requests" className="gap-1"><Calendar className="w-3.5 h-3.5" /> Solicitações</TabsTrigger>
          <TabsTrigger value="messages" className="gap-1"><MessageCircle className="w-3.5 h-3.5" /> Mensagens</TabsTrigger>
          <TabsTrigger value="reviews" className="gap-1"><Star className="w-3.5 h-3.5" /> Avaliações</TabsTrigger>
          <TabsTrigger value="profile" className="gap-1"><User className="w-3.5 h-3.5" /> Perfil</TabsTrigger>
        </TabsList>

        <TabsContent value="requests" className="p-6">
          <div className="space-y-4">
            {serviceRequests.map(req => (
              <div key={req.id} className="border rounded-lg p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-foreground">{req.clientName}</span>
                    <Badge variant={statusMap[req.status].variant}>{statusMap[req.status].label}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{req.service} • {new Date(req.date).toLocaleDateString('pt-BR')}</p>
                  <p className="text-sm text-muted-foreground mt-1">{req.message}</p>
                </div>
                {req.status === 'pending' && (
                  <div className="flex gap-2 shrink-0">
                    <Button size="sm">Aceitar</Button>
                    <Button size="sm" variant="outline">Recusar</Button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="messages" className="p-6">
          <div className="space-y-3">
            {messages.map(msg => (
              <div key={msg.id} className={`border rounded-lg p-4 ${!msg.read ? 'border-primary/30 bg-primary/5' : ''}`}>
                <div className="flex items-center justify-between">
                  <span className="font-medium text-foreground text-sm">{msg.senderName}</span>
                  <span className="text-xs text-muted-foreground">{new Date(msg.date).toLocaleDateString('pt-BR')}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">{msg.content}</p>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="reviews" className="p-6">
          <div className="space-y-4">
            {reviews.slice(0, 4).map(r => (
              <div key={r.id} className="border-b pb-4 last:border-b-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium text-sm text-foreground">{r.authorName}</span>
                  <span className="text-xs text-muted-foreground">• {r.service}</span>
                </div>
                <div className="flex items-center gap-1 mb-1">
                  {Array.from({ length: r.rating }, (_, i) => (
                    <Star key={i} className="w-3 h-3 text-warning fill-warning" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">{r.comment}</p>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="profile" className="p-6">
          <div className="space-y-4 max-w-md">
            <p className="text-sm text-muted-foreground">Edite suas informações profissionais aqui. As alterações são salvas automaticamente.</p>
            <div className="border-2 border-dashed rounded-lg p-8 text-center text-sm text-muted-foreground">
              Alterar foto de perfil
            </div>
            <Button variant="outline" className="gap-2"><Settings className="w-4 h-4" /> Configurações da conta</Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProfessionalDashboard;
