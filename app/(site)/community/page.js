import { getSession } from '@/lib/auth';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata = {
  title: 'Comunidad | Cosmo Solar',
  description: 'Comunidad y laboratorio abierto de experimentación biológica.',
};

export default async function CommunityPage() {
  const session = await getSession();
  const isLoggedIn = !!session?.user;

  return (
    <div style={{ padding: 'var(--space-4xl) 0', minHeight: '60vh' }}>
      <div className="container">
        <ScrollReveal delay={1}>
          <h1 className="display-lg" style={{ marginBottom: 'var(--space-md)' }}>Comunidad</h1>
        </ScrollReveal>

        {isLoggedIn ? (
          <ScrollReveal delay={2}>
            <div className="glass-panel" style={{ padding: 'var(--space-2xl)', textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
              <h2 className="heading-2" style={{ marginBottom: 'var(--space-sm)' }}>Bienvenido al Círculo</h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-lg)' }}>
                Nuestra plataforma comunitaria principal aún se encuentra en desarrollo. Muy pronto te enviaremos la invitación al espacio donde discutimos los protocolos en vivo.
              </p>
              <a href="#" className="btn btn-primary" style={{ display: 'inline-block' }}>Acceder al Espacio (Próximamente)</a>
            </div>
          </ScrollReveal>
        ) : (
          <ScrollReveal delay={2}>
            <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
              <p style={{ 
                fontFamily: 'var(--font-sans)', 
                fontSize: '1.125rem', 
                color: 'var(--text-secondary)',
                marginBottom: 'var(--space-2xl)'
              }}>
                Cosmo Solar es una red cerrada de experimentación. El acceso a la comunidad se habilita exclusivamente para miembros activos.
              </p>
              <div className="glass-panel" style={{ padding: 'var(--space-xl)', background: 'var(--bg-elevated)' }}>
                <h3 className="heading-3" style={{ marginBottom: 'var(--space-md)' }}>¿Quieres ser parte?</h3>
                <p style={{ color: 'var(--text-muted)', marginBottom: 'var(--space-lg)' }}>
                  Las inscripciones a la comunidad se abrirán pronto. Asegúrate de estar suscrito a la lista de correo para recibir la invitación.
                </p>
                <a href="/subscribe" className="btn btn-secondary" style={{ display: 'inline-block' }}>Suscribirse ahora</a>
              </div>
            </div>
          </ScrollReveal>
        )}
      </div>
    </div>
  );
}
