import { Heart } from 'lucide-react';

const Logo = ({ className = '' }: { className?: string }) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary">
      <Heart className="w-5 h-5 text-primary-foreground fill-primary-foreground" />
    </div>
    <span className="text-xl font-bold tracking-tight text-foreground">
      Amo<span className="text-primary">Serviços</span>
    </span>
  </div>
);

export default Logo;
