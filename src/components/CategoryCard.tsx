import { Link } from 'react-router-dom';
import { Category } from '@/types';
import * as Icons from 'lucide-react';
import { LucideIcon } from 'lucide-react';

const CategoryCard = ({ category }: { category: Category }) => {
  const IconComponent = (Icons as unknown as Record<string, LucideIcon>)[category.icon] || Icons.Briefcase;

  return (
    <Link
      to={`/busca?categoria=${category.slug}`}
      className="group flex flex-col items-center gap-3 p-5 rounded-lg border bg-card hover:border-primary/30 hover:shadow-md transition-all text-center"
    >
      <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center group-hover:bg-primary/10 transition-colors">
        <IconComponent className="w-6 h-6 text-primary" />
      </div>
      <div>
        <h3 className="font-semibold text-sm text-foreground">{category.name}</h3>
        <p className="text-xs text-muted-foreground mt-0.5">{category.professionalCount} profissionais</p>
      </div>
    </Link>
  );
};

export default CategoryCard;
