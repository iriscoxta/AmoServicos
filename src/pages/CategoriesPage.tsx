import { categories } from '@/data/mockData';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import * as Icons from 'lucide-react';
import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const CategoriesPage = () => {
  return (
    <div className="container py-8">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-foreground">Todas as categorias</h1>
        <p className="text-muted-foreground mt-2">Explore todos os tipos de serviços disponíveis</p>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {categories.map((cat, i) => {
          const IconComponent = (Icons as unknown as Record<string, LucideIcon>)[cat.icon] || Icons.Briefcase;
          return (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <div className="bg-card rounded-lg border p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center shrink-0">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h2 className="font-semibold text-foreground">{cat.name}</h2>
                    <p className="text-sm text-muted-foreground mt-1">{cat.description}</p>
                    <p className="text-xs text-muted-foreground mt-2">{cat.professionalCount} profissionais</p>
                    <Link to={`/busca?categoria=${cat.slug}`}>
                      <Button variant="outline" size="sm" className="mt-3">Ver profissionais</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoriesPage;
