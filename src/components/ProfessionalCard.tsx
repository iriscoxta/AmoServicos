import { Link } from 'react-router-dom';
import { MapPin, BadgeCheck, Clock, Zap, Trophy } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import StarRating from '@/components/StarRating';
import { Professional } from '@/types';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const ProfessionalCard = ({ professional }: { professional: Professional }) => {
  const initials = professional.name.split(' ').map(n => n[0]).slice(0, 2).join('');

  return (
    <div className="bg-card rounded-lg border p-5 hover:shadow-md transition-shadow">
      <div className="flex gap-4">
        <Avatar className="w-14 h-14 shrink-0">
          <AvatarFallback className="bg-primary/10 text-primary font-semibold text-lg">
            {initials}
          </AvatarFallback>
        </Avatar>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <div>
              <Link to={`/profissional/${professional.id}`} className="font-semibold text-foreground hover:text-primary transition-colors">
                {professional.name}
              </Link>
              <p className="text-sm text-muted-foreground">{professional.category}</p>
            </div>
            <span className="text-sm font-medium text-primary whitespace-nowrap">{professional.priceRange}</span>
          </div>

          <div className="flex items-center gap-1.5 mt-1 text-sm text-muted-foreground">
            <MapPin className="w-3.5 h-3.5" />
            <span>{professional.neighborhood}, {professional.city}</span>
          </div>

          <div className="mt-2">
            <StarRating rating={professional.rating} reviewCount={professional.reviewCount} size={14} />
          </div>

          <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{professional.shortDescription}</p>

          <div className="flex flex-wrap gap-1.5 mt-3">
            {professional.verified && (
              <Badge variant="secondary" className="gap-1 text-xs">
                <BadgeCheck className="w-3 h-3" /> Verificado
              </Badge>
            )}
            {professional.availableToday && (
              <Badge variant="secondary" className="gap-1 text-xs">
                <Clock className="w-3 h-3" /> Atende hoje
              </Badge>
            )}
            {professional.fastResponse && (
              <Badge variant="secondary" className="gap-1 text-xs">
                <Zap className="w-3 h-3" /> Resposta rápida
              </Badge>
            )}
            {professional.mostHired && (
              <Badge variant="secondary" className="gap-1 text-xs">
                <Trophy className="w-3 h-3" /> Mais contratado
              </Badge>
            )}
          </div>

          <div className="flex gap-2 mt-4">
            <Link to={`/profissional/${professional.id}`} className="flex-1">
              <Button variant="outline" size="sm" className="w-full">Ver perfil</Button>
            </Link>
            <Button size="sm" className="flex-1">Entrar em contato</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalCard;
