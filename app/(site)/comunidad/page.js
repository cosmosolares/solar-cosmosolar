import ScrollReveal from '@/components/ScrollReveal';
import NewsletterForm from '@/components/NewsletterForm';
import styles from './comunidad.module.css';

export const metadata = {
  title: 'Comunidad Abierta — Participá del Laboratorio',
  description: 'Unite a Cosmo Solar. Proponemos observaciones colectivas, experimentos domésticos y rediseños del espacio cotidiano para recuperar la homeostasis.',
};

export default function ComunidadPage() {
  return (
    <div className={styles.pageWrapper}>
      {/* ═══ HERO ═══ */}
      <header className={styles.hero} id="comunidad-hero">
        <div className={styles.heroBg}>
          <img
            src="/images/forest.jpg"
            alt="Bosque de pinos"
            className={styles.heroImage}
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.heroGridOverlay} />
        <div className={`${styles.chWhite} ${styles.chTopLeft}`} />
        <div className={`${styles.chWhite} ${styles.chTopRight}`} />
        <div className={`${styles.chWhite} ${styles.chBottomLeft}`} />
        <div className={`${styles.chWhite} ${styles.chBottomRight}`} />

        <div className="container">
          <div className={styles.heroContent}>
            <ScrollReveal delay={1}>
              <span className={`${styles.heroLabel} label`}>Acción Colectiva</span>
            </ScrollReveal>
            <ScrollReveal delay={2}>
              <h1 className={`${styles.heroTitle} display-lg`}>
                Laboratorio Abierto
              </h1>
            </ScrollReveal>
          </div>
        </div>
      </header>

      {/* ─── CONTENT ─── */}
      <div className={styles.contentContainer}>

        <ScrollReveal delay={1}>
          <p className={styles.intro}>
            Creemos que la ciencia y las prácticas de salud no deben quedar encerradas en laboratorios formales ni privatizadas por marcas de suplementos. La salud biológica se experimenta e implementa en el día a día.
          </p>
        </ScrollReveal>

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

        <section className={styles.newsletterSection}>
          <ScrollReveal delay={1}>
            <NewsletterForm />
          </ScrollReveal>
        </section>
      </div>
    </div>
  );
}
