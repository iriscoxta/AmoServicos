import { Heart, Star, Eye, MessageCircle, User, Settings } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { professionals } from '@/data/mockData';
import ProfessionalCard from '@/components/ProfessionalCard';

const ClientDashboard = () => {
  const favorites = professionals.slice(0, 3);

  return (
    <div className="container py-8">
      <h1 className="text-2xl font-bold text-foreground mb-6">Minha conta</h1>

      <Tabs defaultValue="favorites" className="bg-card rounded-lg border">
        <TabsList className="w-full justify-start border-b rounded-none px-4 pt-2 bg-transparent overflow-x-auto">
          <TabsTrigger value="favorites" className="gap-1"><Heart className="w-3.5 h-3.5" /> Favoritos</TabsTrigger>
          <TabsTrigger value="history" className="gap-1"><Eye className="w-3.5 h-3.5" /> Histórico</TabsTrigger>
          <TabsTrigger value="reviews" className="gap-1"><Star className="w-3.5 h-3.5" /> Avaliações</TabsTrigger>
          <TabsTrigger value="account" className="gap-1"><User className="w-3.5 h-3.5" /> Dados</TabsTrigger>
        </TabsList>

        <TabsContent value="favorites" className="p-6">
          <div className="space-y-4">
            {favorites.map(p => <ProfessionalCard key={p.id} professional={p} />)}
          </div>
        </TabsContent>

        <TabsContent value="history" className="p-6">
          <div className="space-y-4">
            {professionals.slice(0, 4).map(p => (
              <div key={p.id} className="flex items-center gap-3 border rounded-lg p-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm">
                  {p.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground truncate">{p.name}</p>
                  <p className="text-xs text-muted-foreground">{p.category} • Visto recentemente</p>
                </div>
                <Button variant="outline" size="sm">Ver perfil</Button>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="reviews" className="p-6">
          <p className="text-sm text-muted-foreground text-center py-8">Você ainda não fez nenhuma avaliação.</p>
        </TabsContent>

        <TabsContent value="account" className="p-6">
          <div className="max-w-md space-y-3">
            {[
              ['Nome', 'João da Silva'],
              ['E-mail', 'joao@email.com'],
              ['Telefone', '(11) 99999-0000'],
            ].map(([label, value]) => (
              <div key={label} className="flex justify-between py-2 border-b text-sm">
                <span className="text-muted-foreground">{label}</span>
                <span className="text-foreground font-medium">{value}</span>
              </div>
            ))}
            <Button variant="outline" className="gap-2 mt-4"><Settings className="w-4 h-4" /> Editar dados</Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ClientDashboard;
