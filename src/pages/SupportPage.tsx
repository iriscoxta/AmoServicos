import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { faqs } from '@/data/mockData';
import { toast } from 'sonner';
import { Send, Mail, Phone, MessageCircle, CheckCircle } from 'lucide-react';

const SupportPage = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    toast.success('Mensagem enviada com sucesso!');
  };

  return (
    <div className="container py-8 max-w-3xl mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-foreground">Central de Suporte</h1>
        <p className="text-muted-foreground mt-2">Estamos aqui para ajudar. Fale com a gente!</p>
      </div>

      {/* FAQ */}
      <div className="mb-12">
        <h2 className="text-xl font-bold text-foreground mb-4">Perguntas frequentes</h2>
        <Accordion type="single" collapsible className="bg-card rounded-lg border">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`}>
              <AccordionTrigger className="px-5 text-sm font-medium text-foreground hover:no-underline">{faq.question}</AccordionTrigger>
              <AccordionContent className="px-5 text-sm text-muted-foreground">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* Contact form */}
      <div className="mb-12">
        <h2 className="text-xl font-bold text-foreground mb-4">Fale conosco</h2>
        {sent ? (
          <div className="bg-card rounded-lg border p-8 text-center">
            <CheckCircle className="w-12 h-12 text-success mx-auto mb-3" />
            <h3 className="font-semibold text-foreground">Mensagem enviada!</h3>
            <p className="text-sm text-muted-foreground mt-1">Responderemos em até 24 horas úteis.</p>
            <Button variant="outline" className="mt-4" onClick={() => setSent(false)}>Enviar nova mensagem</Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-card rounded-lg border p-6 space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div><Label>Nome</Label><Input className="mt-1.5" required /></div>
              <div><Label>E-mail</Label><Input type="email" className="mt-1.5" required /></div>
            </div>
            <div><Label>Assunto</Label><Input className="mt-1.5" required /></div>
            <div><Label>Mensagem</Label><Textarea className="mt-1.5" rows={5} required /></div>
            <Button type="submit" className="gap-2"><Send className="w-4 h-4" /> Enviar mensagem</Button>
          </form>
        )}
      </div>

      {/* Contact channels */}
      <div>
        <h2 className="text-xl font-bold text-foreground mb-4">Outros canais</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { icon: Mail, title: 'E-mail', desc: 'contato@amoservicos.com.br' },
            { icon: Phone, title: 'Telefone', desc: '(11) 99999-0000' },
            { icon: MessageCircle, title: 'WhatsApp', desc: 'Atendimento rápido' },
          ].map((c, i) => (
            <div key={i} className="bg-card rounded-lg border p-4 text-center">
              <c.icon className="w-6 h-6 text-primary mx-auto mb-2" />
              <h3 className="font-semibold text-foreground text-sm">{c.title}</h3>
              <p className="text-xs text-muted-foreground mt-1">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SupportPage;
