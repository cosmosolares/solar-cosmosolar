import ScrollReveal from '@/components/ScrollReveal';
import ArticleCard from '@/components/ArticleCard';
import { getArticlesByCategory } from '@/lib/articles';
import styles from './category.module.css';

export const metadata = {
  title: 'Entorno — El Hábitat de Salud',
  description: 'Investigación práctica sobre cómo rediseñar el hábitat cotidiano: luz natural, puesta a tierra, naturaleza integrada y espacios limpios.',
};

export default function EntornoPage() {
  const articles = getArticlesByCategory('Entorno');

  return (
    <div className={styles.pageWrapper}>

      {/* ═══ HERO ═══ */}
      <header className={styles.hero} id="entorno-hero">
        <div className={styles.heroBg}>
          <img
            src="/images/entorno.png"
            alt="Luz del sol atravesando el bosque"
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
              <span className={`${styles.heroLabel} label`}>Dimensión II</span>
            </ScrollReveal>
            <ScrollReveal delay={2}>
              <h1 className={`${styles.heroTitle} display-lg`}>
                Entorno
              </h1>
            </ScrollReveal>
          </div>
        </div>
      </header>

      {/* ═══ INTRO + ARTÍCULOS ═══ */}
      <div className={styles.contentContainer}>
        <ScrollReveal delay={1}>
          <p className={styles.intro}>
            El hábitat determina la salud. Estudiamos el impacto de la luz solar y artificial, el grounding, la arquitectura del espacio cotidiano, el contacto con la naturaleza y las redes de vínculos.
          </p>
        </ScrollReveal>

        <section className={styles.listSection}>
          {articles.length > 0 ? (
            <div className="grid-3">
              {articles.map((article, i) => (
                <ScrollReveal key={article.slug} delay={i + 1}>
                  <ArticleCard article={article} />
                </ScrollReveal>
              ))}
            </div>
          ) : (
            <div className={styles.noArticles}>
              <p>Aún no hay publicaciones en este eje de investigación.</p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
