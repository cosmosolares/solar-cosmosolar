import ScrollReveal from '@/components/ScrollReveal';
import styles from './acerca.module.css';

export const metadata = {
  title: 'Manifiesto — Cosmo Solar',
  description: 'Por qué existimos y hacia dónde miramos. Nuestra visión sobre la salud, el entorno y la reconexión con lo esencial.',
};

export default function AcercaPage() {
  return (
    <div className={styles.pageWrapper}>

      {/* ═══ HERO / MANIFIESTO HEADER (Foto del Bosque de Fondo) ═══ */}
      <header className={styles.hero} id="acerca-hero">
        {/* Foto del bosque de fondo */}
        <div className={styles.heroBg}>
          <img
            src="/images/forest.jpg"
            alt="Bosque de pinos al amanecer"
            className={styles.heroImage}
          />
          <div className={styles.heroOverlay} />
        </div>

        {/* Cuadrícula técnica en blanco */}
        <div className={styles.heroGridOverlay} />

        {/* Cruces de precisión en blanco */}
        <div className={`${styles.chWhite} ${styles.chTopLeft}`} />
        <div className={`${styles.chWhite} ${styles.chTopRight}`} />
        <div className={`${styles.chWhite} ${styles.chBottomLeft}`} />
        <div className={`${styles.chWhite} ${styles.chBottomRight}`} />

        <div className="container">
          <div className={styles.heroContent}>
            <ScrollReveal delay={1}>
              <span className={`${styles.heroLabel} label`}>Manifiesto</span>
            </ScrollReveal>
            <ScrollReveal delay={2}>
              <h1 className={`${styles.heroTitle} display-lg`}>
                Reconectando con las señales de la Tierra
              </h1>
            </ScrollReveal>
          </div>
        </div>
      </header>

      {/* ═══ EDITORIAL CONTENT ═══ */}
      <div className={styles.contentContainer}>
        <section className={styles.editorialContent}>

          <ScrollReveal delay={1}>
            <p className={styles.lead}>
              Durante millones de años vivimos afuera. Bajo el sol, sobre la tierra, en contacto directo con los ritmos del día y la noche. Nuestra biología se construyó sobre esas señales. Hoy, casi todo eso desapareció.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={2}>
            <p>
              Pasamos el 90% del tiempo en interiores. Dormimos con pantallas encendidas. Comemos a cualquier hora. Nos movemos poco y nos desconectamos del entorno natural. No es una cuestión de fuerza de voluntad: es que el hábitat moderno dejó de ser coherente con lo que somos biológicamente.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={3}>
            <blockquote>
              "La salud no es solo una cuestión de hábitos — es una cuestión de entorno."
            </blockquote>
          </ScrollReveal>

          <ScrollReveal delay={4}>
            <h2 className={styles.sectionTitle}>Qué exploramos</h2>
            <p>
              Cosmo Solar es un espacio de investigación práctica. Estudiamos dos dimensiones que siempre van juntas:
            </p>

            <div className={styles.pillars}>
              <div className={styles.pillar}>
                <span className={styles.pillarLabel}>Organismo</span>
                <p>
                  Cómo funciona el cuerpo humano cuando recibe las condiciones adecuadas. El sueño, la alimentación, el movimiento y la calma mental no son lujos — son los pilares sobre los que se sostiene todo lo demás. Estudiamos cómo recuperarlos de forma simple y sostenible.
                </p>
              </div>

              <div className={styles.pillar}>
                <span className={styles.pillarLabel}>Entorno</span>
                <p>
                  El espacio donde vivimos nos afecta más de lo que creemos. La luz natural, el contacto con la tierra, la calidad del aire y los vínculos reales tienen efectos medibles sobre la biología. Exploramos cómo diseñar un entorno cotidiano que nos sostenga en lugar de agotarnos.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={5}>
            <h2 className={styles.sectionTitle}>Comunidad abierta</h2>
            <p>
              No vendemos suplementos ni rutinas mágicas. Somos estudiantes del entorno y compartimos lo que encontramos: investigaciones, observaciones prácticas y herramientas accesibles para que cada persona pueda construir una forma de vida más coherente con su biología.
            </p>
            <p>
              Todo lo que publicamos está pensado para ser aplicable hoy, con lo que cada uno tiene.
            </p>
          </ScrollReveal>

        </section>
      </div>
    </div>
  );
}
