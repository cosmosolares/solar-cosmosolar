import ScrollReveal from '@/components/ScrollReveal';
import NewsletterForm from '@/components/NewsletterForm';
import styles from './comunidad.module.css';

export const metadata = {
  title: 'Comunidad Abierta — Participá del Laboratorio',
  description: 'Unite a Cosmo Solar. Proponemos observaciones colectivas, experimentos domésticos y rediseños del espacio cotidiano para recuperar la homeostasis.',
};

export default function ComunidadPage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <ScrollReveal delay={1}>
          <span className="label">Acción Colectiva</span>
        </ScrollReveal>
        <ScrollReveal delay={2}>
          <h1 className="display-lg" style={{ marginTop: 'var(--space-sm)' }}>
            Unirte al Laboratorio Abierto
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={3}>
          <p className={styles.desc}>
            Creemos que la ciencia y las prácticas de salud no deben quedar encerradas en laboratorios formales ni privatizadas por marcas de suplementos. La salud biológica se experimenta e implementa en el día a día.
          </p>
        </ScrollReveal>
      </header>

      {/* ─── HOW TO PARTICIPATE ─── */}
      <section className={styles.waysSection}>
        <div className="grid-2">
          
          <ScrollReveal delay={1}>
            <div className={styles.wayCard}>
              <h3 className={styles.wayTitle}>1. Observación Empírica</h3>
              <p className={styles.wayDesc}>
                Realizamos mediciones colectivas del espectro lumínico natural, mapeo de temperatura del cuerpo a lo largo del día y análisis del impacto del aislamiento del suelo (grounding) en la calidad de sueño de los participantes. Compartimos metodologías y planillas abiertas.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={2}>
            <div className={styles.wayCard}>
              <h3 className={styles.wayTitle}>2. Rediseño de Hábitat</h3>
              <p className={styles.wayDesc}>
                Creamos guías de diseño de ambientes de descanso y trabajo. Aprendemos a eliminar fuentes de parpadeo electromagnético perjudicial, atenuar la luz azul durante el crepúsculo y optimizar la ventilación y temperatura nocturnas con materiales accesibles y naturales.
              </p>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* ─── NEWSLETTER SIGNUP EMBED ─── */}
      <section className={styles.newsletterSection}>
        <ScrollReveal delay={1}>
          <NewsletterForm />
        </ScrollReveal>
      </section>
    </div>
  );
}
