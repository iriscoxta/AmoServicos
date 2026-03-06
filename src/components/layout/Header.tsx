import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from '@/components/Logo';

const navLinks = [
  { label: 'Início', path: '/' },
  { label: 'Categorias', path: '/categorias' },
  { label: 'Profissionais', path: '/busca' },
  { label: 'Como funciona', path: '/#como-funciona' },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 glass border-b">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" aria-label="Ir para a página inicial">
          <Logo />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Menu principal">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors hover:text-primary hover:bg-accent ${
                location.pathname === link.path ? 'text-primary bg-accent' : 'text-muted-foreground'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <Link to="/busca">
            <Button variant="ghost" size="icon" aria-label="Buscar serviços">
              <Search className="w-4 h-4" />
            </Button>
          </Link>
          <Link to="/cadastrar-servico">
            <Button variant="outline" size="sm">Cadastrar serviço</Button>
          </Link>
          <Link to="/login">
            <Button size="sm">Entrar</Button>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-accent"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="md:hidden border-t bg-card animate-fade-in" aria-label="Menu mobile">
          <div className="container py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={`px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === link.path ? 'text-primary bg-accent' : 'text-muted-foreground hover:bg-accent'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-3 border-t mt-2">
              <Link to="/cadastrar-servico" onClick={() => setMobileOpen(false)}>
                <Button variant="outline" className="w-full">Cadastrar serviço</Button>
              </Link>
              <Link to="/login" onClick={() => setMobileOpen(false)}>
                <Button className="w-full">Entrar</Button>
              </Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
