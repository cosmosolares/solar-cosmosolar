import Link from 'next/link';
import Image from 'next/image';
import { BookOpen } from 'lucide-react';
import styles from './ArticleCard.module.css';

export default function ArticleCard({ article }) {
  return (
    <Link href={`/articulos/${article.slug}`} className={styles.card} id={`article-card-${article.slug}`}>
      <div className={styles.imageWrap}>
        {article.image ? (
          <Image 
            src={article.image} 
            alt={article.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: 'cover' }}
            className={styles.image}
          />
        ) : (
          <div className={styles.imagePlaceholder}>
            <BookOpen size={28} />
          </div>
        )}
        <span className={styles.categoryTag}>{article.category}</span>
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{article.title}</h3>
        <p className={styles.excerpt}>{article.description}</p>
        <div className={styles.meta}>
          <span>{article.date}</span>
          <span className={styles.metaDot}>•</span>
          <span>{article.readingTime}</span>
        </div>
      </div>
    </Link>
  );
}
