import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import styles from './acerca.module.css';

export const metadata = {
  title: 'Manifiesto — Cosmo Solar',
  description: 'La tesis central de Cosmo Solar: evolucionamos en determinadas condiciones y en 100 años cambiamos todo. Por qué eso importa y qué podemos hacer.',
};

export default function AcercaPage() {
  return (
    <div className={styles.pageWrapper}>

      {/* ═══ HERO ═══ */}
      <header className={styles.hero} id="acerca-hero">
        <div className={styles.heroBg}>
          <img
            src="/images/sunset.png"
            alt="Atardecer majestuoso"
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

          {/* — TESIS CENTRAL — */}
          <ScrollReveal delay={1}>
            <p className={styles.lead}>
              El cuerpo humano es el resultado de trescientos mil años de evolución al aire libre. Bajo el sol, sobre la tierra, siguiendo el ritmo exacto del día y la noche. Cada célula, cada hormona, cada proceso biológico fue calibrado durante milenios para operar en esas condiciones.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={2}>
            <p>
              En los últimos cien años —un parpadeo en términos evolutivos— transformamos radicalmente ese entorno. Construimos espacios completamente cerrados. Inventamos luz artificial que borra la noche. Creamos alimentos procesados que no se parecen a nada que haya existido antes. Pusimos suelas de goma entre nuestros pies y la tierra. Llenamos cada hora de estimulación constante y cada noche de pantallas encendidas.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={3}>
            <p>
              El problema no es que seamos débiles. El problema es que seguimos siendo el mismo organismo, en un entorno completamente diferente.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={4}>
            <blockquote>
              "La crisis de salud moderna no es solo de hábitos — es una crisis de desalineación ecológica."
            </blockquote>
          </ScrollReveal>

          <ScrollReveal delay={5}>
            <p>
              Esta desconexión tiene nombre en biología evolutiva: <em>mismatch</em>. Y sus consecuencias son visibles: insomnio generalizado, inflamación crónica, epidemias de ansiedad y depresión, enfermedades metabólicas que hace un siglo eran excepcionales y hoy son la norma. No son accidentes ni fallas individuales. Son respuestas predecibles de un organismo que no reconoce el entorno en que vive.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={6}>
            <p>
              No se trata de romantizar el pasado ni de volver a vivir en cuevas. Se trata de entender qué condiciones necesita el cuerpo para funcionar bien —y encontrar formas prácticas, reales y accesibles de dárselas en el mundo en que vivimos.
            </p>
          </ScrollReveal>

          {/* — QUÉ EXPLORAMOS — */}
          <ScrollReveal delay={1}>
            <h2 className={styles.sectionTitle}>Qué exploramos</h2>
            <p>
              Cosmo Solar es un espacio de investigación práctica. Estudiamos dos dimensiones que siempre van juntas:
            </p>

            <div className={styles.pillars}>
              <Link href="/organismo" className={styles.pillar}>
                <span className={styles.pillarLabel}>Organismo →</span>
                <p>
                  Cómo funciona el cuerpo humano cuando recibe las condiciones adecuadas. El sueño, la alimentación, el movimiento y la calma mental no son lujos: son los pilares sobre los que se sostiene todo lo demás.
                </p>
              </Link>

              <Link href="/entorno" className={styles.pillar}>
                <span className={styles.pillarLabel}>Entorno →</span>
                <p>
                  El espacio donde vivimos nos afecta más de lo que creemos. La luz natural, el contacto con la tierra, la calidad del aire y los vínculos reales tienen efectos medibles sobre la biología.
                </p>
              </Link>
            </div>
          </ScrollReveal>

          {/* — COMUNIDAD ABIERTA — */}
          <ScrollReveal delay={1}>
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
