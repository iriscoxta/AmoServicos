import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Switch } from '@/components/ui/switch';
import Stepper from '@/components/Stepper';
import { categories, neighborhoods } from '@/data/mockData';
import { toast } from 'sonner';
import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const steps = ['Dados pessoais', 'Profissional', 'Valores', 'Imagens', 'Revisão'];

const RegisterServicePage = () => {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    name: '', phone: '', email: '', password: '', city: 'São Paulo', neighborhood: '',
    category: '', services: '', description: '', experience: '', areas: [] as string[],
    homeService: true, emergencyService: false,
    priceRange: '', paymentMethods: [] as string[], workingDays: '', workingHours: '',
    agreeTerms: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const update = (key: string, value: unknown) => setForm(prev => ({ ...prev, [key]: value }));

  const next = () => {
    if (step < steps.length - 1) setStep(step + 1);
  };
  const prev = () => {
    if (step > 0) setStep(step - 1);
  };
  const submit = () => {
    if (!form.agreeTerms) { toast.error('Aceite os termos para continuar.'); return; }
    setSubmitted(true);
    toast.success('Cadastro realizado com sucesso!');
  };

  if (submitted) {
    return (
      <div className="container py-16 text-center max-w-md mx-auto">
        <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-success" />
        </div>
        <h1 className="text-2xl font-bold text-foreground">Cadastro realizado!</h1>
        <p className="text-muted-foreground mt-2">Seu perfil profissional está sendo analisado e ficará disponível em breve.</p>
        <Link to="/"><Button className="mt-6">Voltar ao início</Button></Link>
      </div>
    );
  }

  return (
    <div className="container py-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold text-foreground text-center mb-2">Cadastre seu serviço</h1>
      <p className="text-muted-foreground text-center mb-8">Preencha os dados e comece a receber clientes</p>

      <div className="mb-8"><Stepper steps={steps} currentStep={step} /></div>

      <div className="bg-card rounded-lg border p-6">
        {step === 0 && (
          <div className="space-y-4">
            <div><Label>Nome completo</Label><Input value={form.name} onChange={e => update('name', e.target.value)} className="mt-1.5" required /></div>
            <div><Label>Telefone</Label><Input value={form.phone} onChange={e => update('phone', e.target.value)} placeholder="(11) 99999-0000" className="mt-1.5" required /></div>
            <div><Label>E-mail</Label><Input type="email" value={form.email} onChange={e => update('email', e.target.value)} className="mt-1.5" required /></div>
            <div><Label>Senha</Label><Input type="password" value={form.password} onChange={e => update('password', e.target.value)} className="mt-1.5" required /></div>
            <div><Label>Cidade</Label><Input value={form.city} onChange={e => update('city', e.target.value)} className="mt-1.5" /></div>
            <div>
              <Label>Bairro/Região</Label>
              <Select value={form.neighborhood} onValueChange={v => update('neighborhood', v)}>
                <SelectTrigger className="mt-1.5"><SelectValue placeholder="Selecione" /></SelectTrigger>
                <SelectContent>{neighborhoods.map(n => <SelectItem key={n} value={n}>{n}</SelectItem>)}</SelectContent>
              </Select>
            </div>
          </div>
        )}

        {step === 1 && (
          <div className="space-y-4">
            <div>
              <Label>Categoria principal</Label>
              <Select value={form.category} onValueChange={v => update('category', v)}>
                <SelectTrigger className="mt-1.5"><SelectValue placeholder="Selecione" /></SelectTrigger>
                <SelectContent>{categories.map(c => <SelectItem key={c.slug} value={c.slug}>{c.name}</SelectItem>)}</SelectContent>
              </Select>
            </div>
            <div><Label>Serviços oferecidos</Label><Textarea value={form.services} onChange={e => update('services', e.target.value)} placeholder="Ex: Faxina completa, limpeza pós-obra..." className="mt-1.5" /></div>
            <div><Label>Descrição profissional</Label><Textarea value={form.description} onChange={e => update('description', e.target.value)} placeholder="Conte um pouco sobre você e seu trabalho..." className="mt-1.5" rows={4} /></div>
            <div><Label>Tempo de experiência</Label><Input value={form.experience} onChange={e => update('experience', e.target.value)} placeholder="Ex: 5 anos" className="mt-1.5" /></div>
            <div className="flex items-center justify-between">
              <Label>Atende em domicílio</Label>
              <Switch checked={form.homeService} onCheckedChange={v => update('homeService', v)} />
            </div>
            <div className="flex items-center justify-between">
              <Label>Atendimento emergencial</Label>
              <Switch checked={form.emergencyService} onCheckedChange={v => update('emergencyService', v)} />
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <div><Label>Faixa de preço</Label><Input value={form.priceRange} onChange={e => update('priceRange', e.target.value)} placeholder="Ex: R$ 150–250/dia" className="mt-1.5" /></div>
            <div>
              <Label>Formas de pagamento</Label>
              <div className="flex flex-wrap gap-3 mt-2">
                {['Pix', 'Dinheiro', 'Cartão', 'Transferência'].map(m => (
                  <div key={m} className="flex items-center gap-2">
                    <Checkbox id={m} checked={form.paymentMethods.includes(m)} onCheckedChange={(checked) => {
                      update('paymentMethods', checked ? [...form.paymentMethods, m] : form.paymentMethods.filter(x => x !== m));
                    }} />
                    <Label htmlFor={m} className="text-sm cursor-pointer">{m}</Label>
                  </div>
                ))}
              </div>
            </div>
            <div><Label>Dias disponíveis</Label><Input value={form.workingDays} onChange={e => update('workingDays', e.target.value)} placeholder="Ex: Seg–Sáb" className="mt-1.5" /></div>
            <div><Label>Horário</Label><Input value={form.workingHours} onChange={e => update('workingHours', e.target.value)} placeholder="Ex: 8h–18h" className="mt-1.5" /></div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <div>
              <Label>Foto de perfil</Label>
              <div className="mt-2 border-2 border-dashed rounded-lg p-8 text-center text-sm text-muted-foreground">
                Clique ou arraste para enviar sua foto
              </div>
            </div>
            <div>
              <Label>Fotos de trabalhos</Label>
              <div className="mt-2 border-2 border-dashed rounded-lg p-8 text-center text-sm text-muted-foreground">
                Adicione fotos dos seus trabalhos anteriores
              </div>
            </div>
            <div className="flex items-center gap-2 mt-4">
              <Checkbox id="terms" checked={form.agreeTerms} onCheckedChange={v => update('agreeTerms', v)} />
              <Label htmlFor="terms" className="text-sm cursor-pointer">Li e aceito os <a href="#" className="text-primary hover:underline">termos de uso</a> e a <a href="#" className="text-primary hover:underline">política de privacidade</a></Label>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Revisão dos dados</h3>
            <div className="space-y-2 text-sm">
              {[
                ['Nome', form.name],
                ['Telefone', form.phone],
                ['E-mail', form.email],
                ['Cidade', form.city],
                ['Bairro', form.neighborhood],
                ['Categoria', form.category],
                ['Experiência', form.experience],
                ['Faixa de preço', form.priceRange],
                ['Pagamentos', form.paymentMethods.join(', ')],
                ['Horário', `${form.workingDays}, ${form.workingHours}`],
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between py-1.5 border-b">
                  <span className="text-muted-foreground">{label}</span>
                  <span className="text-foreground font-medium">{value || '—'}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">{form.description || 'Nenhuma descrição adicionada.'}</p>
          </div>
        )}

        <div className="flex justify-between mt-6 pt-4 border-t">
          <Button variant="outline" onClick={prev} disabled={step === 0}>Voltar</Button>
          {step < steps.length - 1 ? (
            <Button onClick={next}>Próximo</Button>
          ) : (
            <Button onClick={submit}>Finalizar cadastro</Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default RegisterServicePage;
