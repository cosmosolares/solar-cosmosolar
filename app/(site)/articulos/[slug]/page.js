import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowLeft, BookOpen, Clock, Calendar } from 'lucide-react';
import { getArticleBySlug, getAllArticles } from '@/lib/articles';
import ArticleCard from '@/components/ArticleCard';
import ScrollReveal from '@/components/ScrollReveal';
import ArticleFooter from '@/components/ArticleFooter';
import styles from './article.module.css';

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const article = getArticleBySlug(resolvedParams.slug);
  if (!article) return { title: 'Publicación no encontrada' };

  return {
    title: article.title,
    description: article.description,
  };
}

export default async function ArticlePage({ params }) {
  const resolvedParams = await params;
  const article = getArticleBySlug(resolvedParams.slug);

  if (!article) {
    notFound();
  }

  // Get related articles (same category, excluding this one)
  const allArticles = getAllArticles();
  const relatedArticles = allArticles
    .filter(a => a.category === article.category && a.slug !== article.slug)
    .slice(0, 2);

  const categoryUrl = article.category.toLowerCase() === 'organismo' ? '/organismo' : '/entorno';

  return (
    <article className={styles.article}>
      {/* ─── HEADER ─── */}
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <ScrollReveal delay={1}>
            <Link href={categoryUrl} className={styles.backLink}>
              <ArrowLeft size={16} /> Volver a {article.category}
            </Link>
          </ScrollReveal>

          <ScrollReveal delay={2}>
            <span className={styles.categoryBadge}>{article.category}</span>
          </ScrollReveal>

          <ScrollReveal delay={3}>
            <h1 className={`${styles.title} display-lg`}>{article.title}</h1>
          </ScrollReveal>

          <ScrollReveal delay={4}>
            <div className={styles.meta}>
              <span className={styles.metaItem}>
                <Calendar size={14} /> {article.date}
              </span>
              <span className={styles.metaDot}>•</span>
              <span className={styles.metaItem}>
                <Clock size={14} /> {article.readingTime} de lectura
              </span>
            </div>
          </ScrollReveal>
        </div>
      </header>

      {/* ─── HERO IMAGE ─── */}
      {article.image && (
        <ScrollReveal delay={1}>
          <div className={styles.imageContainer}>
            <div className={styles.imageWrap}>
              <Image
                src={article.image}
                alt={article.title}
                fill
                sizes="(max-width: 1200px) 100vw, 1200px"
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
          </div>
        </ScrollReveal>
      )}

      {/* ─── BODY CONTENT ─── */}
      <section className={styles.contentSection}>
        <ScrollReveal delay={1}>
          <div 
            className="article-reader-container"
            dangerouslySetInnerHTML={{ __html: article.htmlContent }}
          />
        </ScrollReveal>
        
        <ScrollReveal delay={2}>
          <ArticleFooter />
        </ScrollReveal>
      </section>

      {/* ─── RELATED ARTICLES ─── */}
      {relatedArticles.length > 0 && (
        <section className={styles.relatedSection}>
          <div className={styles.relatedContainer}>
            <h2 className={styles.relatedTitle}>Publicaciones Relacionadas</h2>
            <div className={styles.relatedGrid}>
              {relatedArticles.map((relArticle, i) => (
                <ScrollReveal key={relArticle.slug} delay={i + 1}>
                  <ArticleCard article={relArticle} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  );
}
