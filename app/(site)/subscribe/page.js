import SubscribeForm from '@/components/SubscribeForm';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata = {
  title: 'Suscribirse | Cosmo Solar',
  description: 'Únete al laboratorio abierto y recibe nuestros protocolos y avances.',
};

export default function SubscribePage() {
  return (
    <div style={{ padding: 'var(--space-4xl) 0', minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <ScrollReveal delay={1}>
          <h1 className="display-lg" style={{ marginBottom: 'var(--space-md)' }}>Únete al Laboratorio</h1>
          <p style={{ 
            fontFamily: 'var(--font-sans)', 
            fontSize: '1.125rem', 
            color: 'var(--text-secondary)',
            maxWidth: '600px',
            margin: '0 auto var(--space-2xl)'
          }}>
            Recibe en tu correo nuestras investigaciones, protocolos circadianos y avances antes de que se publiquen.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={2}>
          <SubscribeForm />
        </ScrollReveal>
      </div>
    </div>
  );
}
