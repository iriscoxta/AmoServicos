import { useState } from 'react';
import { Search, MapPin, SlidersHorizontal, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import ProfessionalCard from '@/components/ProfessionalCard';
import EmptyState from '@/components/EmptyState';
import { professionals, categories, neighborhoods } from '@/data/mockData';

const SearchPage = () => {
  const [query, setQuery] = useState('');
  const [location, setLocation] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('rating');
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  const [availableToday, setAvailableToday] = useState(false);
  const [emergencyOnly, setEmergencyOnly] = useState(false);
  const [homeServiceOnly, setHomeServiceOnly] = useState(false);

  const filtered = professionals.filter(p => {
    if (query && !p.name.toLowerCase().includes(query.toLowerCase()) && !p.category.toLowerCase().includes(query.toLowerCase())) return false;
    if (location && !p.neighborhood.toLowerCase().includes(location.toLowerCase())) return false;
    if (selectedCategory !== 'all' && p.categorySlug !== selectedCategory) return false;
    if (verifiedOnly && !p.verified) return false;
    if (availableToday && !p.availableToday) return false;
    if (emergencyOnly && !p.emergencyService) return false;
    if (homeServiceOnly && !p.homeService) return false;
    return true;
  }).sort((a, b) => {
    if (sortBy === 'rating') return b.rating - a.rating;
    if (sortBy === 'reviews') return b.reviewCount - a.reviewCount;
    return 0;
  });

  const FilterPanel = () => (
    <div className="space-y-6">
      <div>
        <Label className="text-sm font-medium">Categoria</Label>
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="mt-1.5"><SelectValue placeholder="Todas" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todas as categorias</SelectItem>
            {categories.map(c => <SelectItem key={c.slug} value={c.slug}>{c.name}</SelectItem>)}
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label className="text-sm font-medium">Ordenar por</Label>
        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger className="mt-1.5"><SelectValue /></SelectTrigger>
          <SelectContent>
            <SelectItem value="rating">Melhor avaliação</SelectItem>
            <SelectItem value="reviews">Mais avaliações</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-3">
        <Label className="text-sm font-medium">Filtros</Label>
        {[
          { id: 'verified', label: 'Apenas verificados', checked: verifiedOnly, onChange: setVerifiedOnly },
          { id: 'today', label: 'Atende hoje', checked: availableToday, onChange: setAvailableToday },
          { id: 'emergency', label: 'Atendimento urgente', checked: emergencyOnly, onChange: setEmergencyOnly },
          { id: 'home', label: 'Atende em domicílio', checked: homeServiceOnly, onChange: setHomeServiceOnly },
        ].map(f => (
          <div key={f.id} className="flex items-center gap-2">
            <Checkbox id={f.id} checked={f.checked} onCheckedChange={(v) => f.onChange(v as boolean)} />
            <Label htmlFor={f.id} className="text-sm cursor-pointer">{f.label}</Label>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="container py-8">
      {/* Search bar */}
      <div className="flex flex-col sm:flex-row gap-2 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input value={query} onChange={e => setQuery(e.target.value)} placeholder="Buscar por serviço ou profissional" className="pl-10" />
        </div>
        <div className="relative flex-1">
          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input value={location} onChange={e => setLocation(e.target.value)} placeholder="Bairro ou região" className="pl-10" />
        </div>
        {/* Mobile filter button */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="md:hidden gap-2">
              <SlidersHorizontal className="w-4 h-4" /> Filtros
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader><SheetTitle>Filtros</SheetTitle></SheetHeader>
            <div className="mt-6"><FilterPanel /></div>
          </SheetContent>
        </Sheet>
      </div>

      <div className="flex gap-8">
        {/* Desktop sidebar filters */}
        <aside className="hidden md:block w-64 shrink-0">
          <div className="sticky top-24 bg-card rounded-lg border p-5">
            <h3 className="font-semibold text-foreground mb-4">Filtros</h3>
            <FilterPanel />
          </div>
        </aside>

        {/* Results */}
        <div className="flex-1">
          <p className="text-sm text-muted-foreground mb-4">
            {filtered.length} profissional{filtered.length !== 1 ? 'is' : ''} encontrado{filtered.length !== 1 ? 's' : ''}
          </p>
          {filtered.length === 0 ? (
            <EmptyState
              title="Nenhum profissional encontrado"
              description="Tente ajustar os filtros ou buscar por outro termo."
              action={<Button variant="outline" onClick={() => { setQuery(''); setSelectedCategory('all'); setVerifiedOnly(false); setAvailableToday(false); setEmergencyOnly(false); setHomeServiceOnly(false); }}>Limpar filtros</Button>}
            />
          ) : (
            <div className="space-y-4">
              {filtered.map(p => <ProfessionalCard key={p.id} professional={p} />)}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
