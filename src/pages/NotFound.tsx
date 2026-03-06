import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home, Search } from 'lucide-react';

const NotFound = () => (
  <div className="min-h-screen flex items-center justify-center bg-background px-4">
    <div className="text-center max-w-md">
      <div className="text-8xl font-extrabold text-primary/20 mb-4">404</div>
      <h1 className="text-2xl font-bold text-foreground">Página não encontrada</h1>
      <p className="text-muted-foreground mt-2">
        A página que você procura não existe ou foi movida. Mas não se preocupe, temos muitos profissionais esperando por você!
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
        <Link to="/">
          <Button className="gap-2 w-full sm:w-auto"><Home className="w-4 h-4" /> Ir ao início</Button>
        </Link>
        <Link to="/busca">
          <Button variant="outline" className="gap-2 w-full sm:w-auto"><Search className="w-4 h-4" /> Buscar serviços</Button>
        </Link>
      </div>
    </div>
  </div>
);

export default NotFound;
