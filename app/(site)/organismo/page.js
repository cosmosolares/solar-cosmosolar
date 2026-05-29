import ScrollReveal from '@/components/ScrollReveal';
import ArticleCard from '@/components/ArticleCard';
import { getArticlesByCategory } from '@/lib/articles';
import styles from './category.module.css';

export const metadata = {
  title: 'Organismo — Los Ritmos Internos',
  description: 'Explorá cómo calibrar los osciladores de tu cuerpo: sueño profundo, ritmos circadianos, nutrición y movimiento coherente.',
};

export default function OrganismoPage() {
  const articles = getArticlesByCategory('Organismo');

  return (
    <div className={styles.pageWrapper}>

      {/* ═══ HERO ═══ */}
      <header className={styles.hero} id="organismo-hero">
        <div className={styles.heroBg}>
          <img
            src="/images/organismo.png"
            alt="Pies descalzos en el pasto al amanecer"
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
              <span className={`${styles.heroLabel} label`}>Dimensión I</span>
            </ScrollReveal>
            <ScrollReveal delay={2}>
              <h1 className={`${styles.heroTitle} display-lg`}>
                Organismo
              </h1>
            </ScrollReveal>
          </div>
        </div>
      </header>

      {/* ═══ INTRO + ARTÍCULOS ═══ */}
      <div className={styles.contentContainer}>
        <ScrollReveal delay={1}>
          <p className={styles.intro}>
            El cuerpo responde a ciclos. Investigamos los ritmos circadianos, la biología del sueño, el movimiento natural, la nutrición evolutiva y la autorregulación del sistema nervioso.
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
