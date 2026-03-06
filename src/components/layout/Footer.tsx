import { Link } from 'react-router-dom';
import Logo from '@/components/Logo';

const Footer = () => (
  <footer className="border-t bg-card">
    <div className="container py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-1">
          <Logo />
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            Conectando você aos melhores profissionais da sua cidade. Encontre, compare e contrate com facilidade.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3 text-foreground">Plataforma</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/busca" className="hover:text-primary transition-colors">Buscar serviços</Link></li>
            <li><Link to="/categorias" className="hover:text-primary transition-colors">Categorias</Link></li>
            <li><Link to="/cadastrar-servico" className="hover:text-primary transition-colors">Cadastrar serviço</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3 text-foreground">Institucional</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/suporte" className="hover:text-primary transition-colors">Suporte</Link></li>
            <li><a href="#" className="hover:text-primary transition-colors">Termos de uso</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Política de privacidade</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3 text-foreground">Contato</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>contato@amoservicos.com.br</li>
            <li>(11) 99999-0000</li>
          </ul>
        </div>
      </div>
      <div className="border-t mt-8 pt-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} AmoServiços. Todos os direitos reservados.
      </div>
    </div>
  </footer>
);

export default Footer;
