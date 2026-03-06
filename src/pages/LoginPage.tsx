import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import Logo from '@/components/Logo';
import { toast } from 'sonner';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Login realizado com sucesso!');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30 px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <Link to="/"><Logo className="justify-center" /></Link>
          <h1 className="text-xl font-bold text-foreground mt-6">Entrar na sua conta</h1>
          <p className="text-sm text-muted-foreground mt-1">Bem-vindo(a) de volta!</p>
        </div>
        <form onSubmit={handleSubmit} className="bg-card rounded-lg border p-6 space-y-4">
          <div>
            <Label htmlFor="email">E-mail ou telefone</Label>
            <Input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="seu@email.com" className="mt-1.5" required />
          </div>
          <div>
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Senha</Label>
              <Link to="/recuperar-senha" className="text-xs text-primary hover:underline">Esqueci minha senha</Link>
            </div>
            <Input id="password" type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="••••••••" className="mt-1.5" required />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember" className="text-sm cursor-pointer">Lembrar-me</Label>
          </div>
          <Button type="submit" className="w-full">Entrar</Button>
        </form>
        <p className="text-center text-sm text-muted-foreground mt-4">
          Não tem conta? <Link to="/cadastro" className="text-primary hover:underline">Crie uma agora</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
