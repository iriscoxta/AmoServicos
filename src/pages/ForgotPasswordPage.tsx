import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import Logo from '@/components/Logo';
import { toast } from 'sonner';
import { ArrowLeft } from 'lucide-react';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    toast.success('E-mail de recuperação enviado!');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30 px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <Link to="/"><Logo className="justify-center" /></Link>
          <h1 className="text-xl font-bold text-foreground mt-6">Recuperar senha</h1>
          <p className="text-sm text-muted-foreground mt-1">Enviaremos um link para redefinir sua senha</p>
        </div>
        {sent ? (
          <div className="bg-card rounded-lg border p-6 text-center">
            <div className="w-14 h-14 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">✉️</span>
            </div>
            <h2 className="font-semibold text-foreground">E-mail enviado!</h2>
            <p className="text-sm text-muted-foreground mt-2">Verifique sua caixa de entrada e siga as instruções para redefinir sua senha.</p>
            <Link to="/login">
              <Button variant="outline" className="mt-4 gap-2"><ArrowLeft className="w-4 h-4" /> Voltar ao login</Button>
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-card rounded-lg border p-6 space-y-4">
            <div>
              <Label htmlFor="email">E-mail cadastrado</Label>
              <Input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="seu@email.com" className="mt-1.5" required />
            </div>
            <Button type="submit" className="w-full">Enviar link de recuperação</Button>
            <Link to="/login" className="flex items-center justify-center gap-1 text-sm text-muted-foreground hover:text-primary">
              <ArrowLeft className="w-3.5 h-3.5" /> Voltar ao login
            </Link>
          </form>
        )}
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
