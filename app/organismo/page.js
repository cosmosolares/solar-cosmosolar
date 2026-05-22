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
    <div className={styles.container}>
      <header className={styles.header}>
        <ScrollReveal delay={1}>
          <span className="label">Dimensión I</span>
        </ScrollReveal>
        <ScrollReveal delay={2}>
          <h1 className="display-lg" style={{ marginTop: 'var(--space-sm)' }}>
            Organismo
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={3}>
          <p className={styles.desc}>
            El cuerpo responde a ciclos. Investigamos los ritmos circadianos, la biología del sueño, el movimiento natural, la nutrición evolutiva y la autorregulación del sistema nervioso.
          </p>
        </ScrollReveal>
      </header>

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
  );
}
