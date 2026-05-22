import Link from 'next/link';
import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';
import ArticleCard from '@/components/ArticleCard';
import { getAllArticles } from '@/lib/articles';
import styles from './page.module.css';

export default function HomePage() {
  const allArticles = getAllArticles();
  const recentArticles = allArticles.slice(0, 3);

  return (
    <>
      {/* ═══ HERO / DECLARATION OF INTENT ═══ */}
      <section className={styles.hero} id="hero-section">
        <div className={styles.heroContainer}>
          <ScrollReveal delay={1}>
            <span className="label" style={{ marginBottom: 'var(--space-md)' }}>
              Comunidad & Laboratorio Abierto
            </span>
          </ScrollReveal>
          
          <ScrollReveal delay={2}>
            <h1 className={`${styles.heroTitle} display-xl`}>
              El entorno moldea nuestra salud.
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={3}>
            <p className={styles.heroDesc}>
              No creemos en los hacks rápidos ni en el bienestar performático. Cosmo Solar es un espacio de experimentación colectiva, ciencia abierta y diseño de vida cotidiana. Investigamos cómo los ritmos circadianos, la luz, el contacto con la tierra y los vínculos del hábitat moderno determinan nuestra biología profunda.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={4}>
            <div className={styles.heroActions}>
              <Link href="/acerca" className="btn btn-primary">
                Leer la Tesis
              </Link>
              <Link href="/comunidad" className="btn btn-secondary">
                Sumarme a la Comunidad
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ CATEGORIES SECTION (Split Organic Grid) ═══ */}
      <section className={styles.categoriesSection}>
        <div className="container">
          <div className="grid-2">
            
            {/* Category: Organismo */}
            <ScrollReveal delay={1}>
              <div className={`${styles.categoryCard} ${styles.organismoCard}`}>
                <div className={styles.categoryContent}>
                  <span className="label">Eje I</span>
                  <h2 className="heading-1" style={{ margin: 'var(--space-sm) 0' }}>Organismo</h2>
                  <p className={styles.categoryDesc}>
                    El cuerpo responde a ciclos. Investigamos los ritmos circadianos, la biología del sueño, el movimiento coherente, la nutrición evolutiva y la autorregulación emocional como pilares internos.
                  </p>
                  <Link href="/organismo" className="btn btn-secondary" style={{ marginTop: 'var(--space-lg)' }}>
                    Explorar Organismo
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            {/* Category: Entorno */}
            <ScrollReveal delay={2}>
              <div className={`${styles.categoryCard} ${styles.entornoCard}`}>
                <div className={styles.categoryContent}>
                  <span className="label">Eje II</span>
                  <h2 className="heading-1" style={{ margin: 'var(--space-sm) 0' }}>Entorno</h2>
                  <p className={styles.categoryDesc}>
                    El hábitat determina la salud. Estudiamos el impacto de la luz solar y artificial, el grounding, la arquitectura del espacio cotidiano, el contacto con la naturaleza y las redes de vínculos.
                  </p>
                  <Link href="/entorno" className="btn btn-secondary" style={{ marginTop: 'var(--space-lg)' }}>
                    Explorar Entorno
                  </Link>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* ═══ RECENT ARTICLES (Biblioteca / Ciencia Abierta) ═══ */}
      <section className={styles.recentSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div>
              <span className="label">Investigaciones</span>
              <h2 className="heading-2" style={{ marginTop: 'var(--space-xs)' }}>Ciencia Abierta</h2>
            </div>
            <Link href="/acerca" className={styles.headerLink}>
              Ver todas las publicaciones
            </Link>
          </div>

          <div className="grid-3">
            {recentArticles.map((article, i) => (
              <ScrollReveal key={article.slug} delay={i + 1}>
                <ArticleCard article={article} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
