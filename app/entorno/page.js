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
    <div className={styles.container}>
      <header className={styles.header}>
        <ScrollReveal delay={1}>
          <span className="label">Dimensión II</span>
        </ScrollReveal>
        <ScrollReveal delay={2}>
          <h1 className="display-lg" style={{ marginTop: 'var(--space-sm)' }}>
            Entorno
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={3}>
          <p className={styles.desc}>
            El hábitat determina la salud. Estudiamos el impacto de la luz solar y artificial, el grounding, la arquitectura del espacio cotidiano, el contacto con la naturaleza y las redes de vínculos.
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
