import { Link } from 'react-router-dom';
import { Heart, MapPin, Star, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import StarRating from '@/components/StarRating';
import { professionals } from '@/data/mockData';
import { toast } from 'sonner';

const FavoritesPage = () => {
  const favorites = professionals.slice(0, 5);

  return (
    <div className="container py-8">
      <h1 className="text-2xl font-bold text-foreground mb-6">Meus favoritos</h1>
      {favorites.length === 0 ? (
        <div className="text-center py-16">
          <Heart className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" />
          <h2 className="text-lg font-semibold text-foreground">Nenhum favorito ainda</h2>
          <p className="text-sm text-muted-foreground mt-1">Salve profissionais para encontrá-los facilmente depois.</p>
          <Link to="/busca"><Button className="mt-4">Explorar profissionais</Button></Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-4">
          {favorites.map(p => {
            const initials = p.name.split(' ').map(n => n[0]).slice(0, 2).join('');
            return (
              <div key={p.id} className="bg-card rounded-lg border p-4 flex items-center gap-4">
                <Avatar className="w-12 h-12">
                  <AvatarFallback className="bg-primary/10 text-primary font-semibold">{initials}</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <Link to={`/profissional/${p.id}`} className="font-semibold text-foreground hover:text-primary text-sm">{p.name}</Link>
                  <p className="text-xs text-muted-foreground">{p.category}</p>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground mt-0.5">
                    <MapPin className="w-3 h-3" /> {p.neighborhood}
                  </div>
                  <StarRating rating={p.rating} size={12} reviewCount={p.reviewCount} />
                </div>
                <div className="flex flex-col gap-1.5 shrink-0">
                  <Link to={`/profissional/${p.id}`}><Button variant="outline" size="sm">Ver perfil</Button></Link>
                  <Button variant="ghost" size="sm" className="text-destructive" onClick={() => toast.success('Removido dos favoritos')}>
                    <Trash2 className="w-3.5 h-3.5" />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;
