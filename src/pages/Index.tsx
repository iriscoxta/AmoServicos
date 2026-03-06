import { Link } from 'react-router-dom';
import { Search, MapPin, ArrowRight, Shield, MessageCircle, Star, Users, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import CategoryCard from '@/components/CategoryCard';
import ProfessionalCard from '@/components/ProfessionalCard';
import { categories, professionals } from '@/data/mockData';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const Index = () => {
  const featured = professionals.filter(p => p.verified).slice(0, 4);

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/30">
        <div className="container py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
              Encontre profissionais{' '}
              <span className="text-gradient">confiáveis</span>{' '}
              na sua cidade
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-lg mx-auto">
              Precisa de ajuda com algum serviço? Ache o profissional ideal perto de você em poucos cliques.
            </p>

            {/* Search bar */}
            <div className="mt-8 flex flex-col sm:flex-row gap-2 max-w-xl mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input placeholder="Qual serviço você precisa?" className="pl-10 h-12" />
              </div>
              <div className="relative flex-1">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input placeholder="Cidade ou bairro" className="pl-10 h-12" />
              </div>
              <Link to="/busca">
                <Button size="lg" className="w-full sm:w-auto h-12 px-6">
                  Buscar agora
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="container py-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-foreground">Categorias populares</h2>
          <p className="text-muted-foreground mt-2">Encontre o serviço que você precisa</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {categories.map((cat, i) => (
            <motion.div key={cat.id} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <CategoryCard category={cat} />
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/categorias">
            <Button variant="outline">
              Ver todas as categorias <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </Link>
        </div>
      </section>

      {/* How it works */}
      <section id="como-funciona" className="bg-muted/50 py-16">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-foreground">Como funciona</h2>
            <p className="text-muted-foreground mt-2">Simples, rápido e seguro</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              { icon: Search, title: 'Busque o serviço', desc: 'Pesquise por categoria, nome ou localização e encontre profissionais disponíveis.' },
              { icon: Users, title: 'Compare profissionais', desc: 'Veja perfis, avaliações, preços e escolha a melhor opção para você.' },
              { icon: MessageCircle, title: 'Entre em contato', desc: 'Fale diretamente com o profissional via WhatsApp, telefone ou mensagem.' },
            ].map((step, i) => (
              <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="flex flex-col items-center text-center p-6"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">{step.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured professionals */}
      <section className="container py-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-foreground">Profissionais em destaque</h2>
          <p className="text-muted-foreground mt-2">Os mais bem avaliados da sua região</p>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {featured.map((p) => (
            <ProfessionalCard key={p.id} professional={p} />
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/busca">
            <Button variant="outline">
              Ver todos os profissionais <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-muted/50 py-16">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-foreground">Por que usar a AmoServiços?</h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: 'Profissionais verificados', desc: 'Validação de documentos e identidade para sua segurança.' },
              { icon: Star, title: 'Avaliações reais', desc: 'Comentários de clientes reais para você escolher com confiança.' },
              { icon: MapPin, title: 'Perto de você', desc: 'Profissionais da sua cidade e do seu bairro.' },
              { icon: CheckCircle, title: 'Fácil e rápido', desc: 'Encontre, compare e entre em contato em poucos minutos.' },
            ].map((b, i) => (
              <div key={i} className="flex flex-col items-center text-center p-4">
                <b.icon className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold text-foreground text-sm">{b.title}</h3>
                <p className="text-xs text-muted-foreground mt-1">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA for professionals */}
      <section className="container py-16">
        <div className="bg-primary rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground">
            É profissional? Cadastre-se gratuitamente
          </h2>
          <p className="text-primary-foreground/80 mt-3 max-w-md mx-auto">
            Aumente sua visibilidade, receba contatos de novos clientes e faça parte da maior comunidade de serviços da sua cidade.
          </p>
          <Link to="/cadastrar-servico">
            <Button size="lg" variant="secondary" className="mt-6">
              Cadastrar meu serviço <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
