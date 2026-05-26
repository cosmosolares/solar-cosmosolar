import Link from 'next/link';
import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';
import ArticleCard from '@/components/ArticleCard';
import SubscribeForm from '@/components/SubscribeForm';
import { getAllArticles } from '@/lib/articles';
import styles from './page.module.css';

// Componente decorativo Sunburst (Ref 3 y 4 de los esquemas)
const SunburstIcon = ({ size = 20, className }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className} 
    style={{ display: 'inline-block', verticalAlign: 'middle' }}
  >
    <path d="M12 0L13.5 8.5L21.5 3.5L15.5 10L24 12L15.5 14L21.5 20.5L13.5 15.5L12 24L10.5 15.5L2.5 20.5L8.5 14L0 12L8.5 10L2.5 3.5L10.5 8.5Z"/>
  </svg>
);

// Gráfico biométrico tipo diagrama de laboratorio (Ref 1)
const BiometricChart1 = () => (
  <svg viewBox="0 0 160 50" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto', marginTop: '8px' }}>
    {/* Guías horizontales de medición */}
    <line x1="0" y1="10" x2="160" y2="10" stroke="rgba(28,27,25,0.06)" strokeDasharray="2 2" />
    <line x1="0" y1="25" x2="160" y2="25" stroke="rgba(28,27,25,0.06)" strokeDasharray="2 2" />
    <line x1="0" y1="40" x2="160" y2="40" stroke="rgba(28,27,25,0.06)" strokeDasharray="2 2" />
    {/* Curva del gráfico */}
    <path d="M 0,42 C 30,42 50,15 80,15 C 110,15 130,30 160,30" stroke="var(--accent-clay)" strokeWidth="1.2" />
    {/* Puntos de datos */}
    <circle cx="80" cy="15" r="2.5" fill="var(--bg-base)" stroke="var(--accent-clay)" strokeWidth="1.2" />
    <circle cx="160" cy="30" r="2.5" fill="var(--bg-base)" stroke="var(--accent-clay)" strokeWidth="1.2" />
  </svg>
);

const BiometricChart2 = () => (
  <svg viewBox="0 0 160 50" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto', marginTop: '8px' }}>
    {/* Guías de cuadrícula */}
    <line x1="0" y1="8" x2="160" y2="8" stroke="rgba(28,27,25,0.06)" strokeDasharray="2 2" />
    <line x1="0" y1="25" x2="160" y2="25" stroke="rgba(28,27,25,0.06)" strokeDasharray="2 2" />
    <line x1="0" y1="42" x2="160" y2="42" stroke="rgba(28,27,25,0.06)" strokeDasharray="2 2" />
    {/* Curva biológica (infrarrojo/espectro solar) */}
    <path d="M 0,38 Q 40,8 80,22 T 160,12" stroke="var(--accent-forest)" strokeWidth="1.2" />
    {/* Ticks verticales */}
    <line x1="40" y1="45" x2="40" y2="48" stroke="var(--border-medium)" />
    <line x1="80" y1="45" x2="80" y2="48" stroke="var(--border-medium)" />
    <line x1="120" y1="45" x2="120" y2="48" stroke="var(--border-medium)" />
  </svg>
);

// Adorno de mira o cruz de precisión
const Crosshairs = () => (
  <>
    <div className={`diagram-crosshair ${styles.chTopLeft}`} />
    <div className={`diagram-crosshair ${styles.chTopRight}`} />
    <div className={`diagram-crosshair ${styles.chBottomLeft}`} />
    <div className={`diagram-crosshair ${styles.chBottomRight}`} />
  </>
);

export default function HomePage() {
  const allArticles = getAllArticles();
  const recentArticles = allArticles.slice(0, 3);

  return (
    <>
      {/* ═══ HERO / DECLARATION OF INTENT (Estructura de Diagrama Técnico) ═══ */}
      <section className={`${styles.hero} diagram-grid`} id="hero-section">
        <Crosshairs />
        <div className="container">
          <div className={styles.heroGrid}>
            
            {/* Columna de Texto Editorial */}
            <div className={styles.heroText}>
              <ScrollReveal delay={1}>
                <span className="label">
                  <SunburstIcon size={14} /> Comunidad & Laboratorio Abierto
                </span>
              </ScrollReveal>
              
              <ScrollReveal delay={2}>
                <h1 className={`${styles.heroTitle} display-xl`}>
                  El entorno moldea nuestra salud.
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={3}>
                <p className={styles.heroDesc}>
                  No creemos en los hacks rápidos ni en el bienestar performático. Cosmo Solar es un espacio de experimentación colectiva, ciencia abierta y diseño de vida cotidiana. Investigamos cómo los ritmos circadianos, la luz natural, el contacto directo con la tierra y el hábitat moderno determinan nuestra biología profunda.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={4}>
                <div className={styles.heroActions}>
                  <Link href="/acerca" className="btn btn-primary">
                    Leer la Tesis
                  </Link>
                  <Link href="/comunidad" className="btn btn-secondary">
                    Sumarse a la Comunidad
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            {/* Columna Visual: Anatomía + Gráficos Flotantes (Ref 1 y 2) */}
            <div className={styles.heroVisual}>
              
              {/* Ilustración de Anatomía de Fondo (Ref 2) */}
              <div className={styles.anatomyBg}>
                <Image
                  src="/images/anatomy-human-clean.png"
                  alt="Esquema anatómico humano"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  style={{ objectFit: 'contain', padding: '20px' }}
                  priority
                />
              </div>

              {/* Panel de Datos 1: Vitamina D (Ref 1) */}
              <div className={`${styles.biometricOverlay1} glass-panel`}>
                <div className={styles.bioHeader}>
                  <span className={styles.bioLabel}>VITAMINA D / SÍNTESIS</span>
                  <SunburstIcon size={10} style={{ color: 'var(--accent-amber)' }} />
                </div>
                <div className={styles.bioValueWrap}>
                  <span className={styles.bioValue}>24</span>
                  <span className={styles.bioUnit}>ng/dL</span>
                </div>
                <BiometricChart1 />
                <p className={styles.bioCaption}>La luz UV-B del mediodía solar estimula la cascada hormonal.</p>
              </div>

              {/* Panel de Datos 2: Espectro Luz (Ref 1) */}
              <div className={`${styles.biometricOverlay2} glass-panel`}>
                <div className={styles.bioHeader}>
                  <span className={styles.bioLabel}>LUMINOSIDAD / INFRARED</span>
                  <span style={{ fontSize: '7px', color: 'var(--text-muted)' }}>CH.01</span>
                </div>
                <div className={styles.bioValueWrap}>
                  <span className={styles.bioValue}>810</span>
                  <span className={styles.bioUnit}>nm</span>
                </div>
                <BiometricChart2 />
                <p className={styles.bioCaption}>La radiación del amanecer repara y prepara el tejido celular.</p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ═══ NEWSLETTER SUBSCRIBE SECTION ═══ */}
      <section style={{ padding: 'var(--space-2xl) 0', borderBottom: '1px solid var(--border-subtle)', background: 'var(--bg-warm)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-lg)' }}>
            <h2 className="heading-2">Acceso Anticipado</h2>
            <p style={{ color: 'var(--text-secondary)', marginTop: 'var(--space-xs)' }}>Suscríbete para recibir los protocolos y avances de nuestro laboratorio.</p>
          </div>
          <SubscribeForm />
        </div>
      </section>

      {/* ═══ CATEGORIES SECTION (Planos y Ejes de Estudio) ═══ */}
      <section className={styles.categoriesSection}>
        <div className="container">
          <div className="grid-2">
            
            {/* Category: Organismo */}
            <ScrollReveal delay={1}>
              <div className={`${styles.categoryCard} ${styles.organismoCard}`}>
                <div className={styles.cardDecoCircle} />
                <div className={styles.categoryContent}>
                  <span className="label">Eje I — Interno</span>
                  <h2 className="heading-1" style={{ margin: 'var(--space-sm) 0 var(--space-md)' }}>Organismo</h2>
                  <p className={styles.categoryDesc}>
                    El cuerpo responde a ciclos. Investigamos los ritmos circadianos, la biología del sueño, el movimiento coherente, la nutrición evolutiva y la autorregulación biológica como pilares fundamentales.
                  </p>
                  <Link href="/organismo" className="btn btn-secondary" style={{ marginTop: 'var(--space-lg)', zIndex: 2 }}>
                    Explorar Organismo
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            {/* Category: Entorno */}
            <ScrollReveal delay={2}>
              <div className={`${styles.categoryCard} ${styles.entornoCard}`}>
                <div className={styles.cardDecoCircle} />
                <div className={styles.categoryContent}>
                  <span className="label">Eje II — Externo</span>
                  <h2 className="heading-1" style={{ margin: 'var(--space-sm) 0 var(--space-md)' }}>Entorno</h2>
                  <p className={styles.categoryDesc}>
                    El hábitat determina la expresión genética. Estudiamos el impacto de la luz artificial, el grounding, la arquitectura del espacio cotidiano y el contacto directo con los espectros naturales.
                  </p>
                  <Link href="/entorno" className="btn btn-secondary" style={{ marginTop: 'var(--space-lg)', zIndex: 2 }}>
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
              <h2 className="heading-2" style={{ marginTop: 'var(--space-xs)', fontWeight: '400' }}>Ciencia Abierta</h2>
            </div>
            <Link href="/acerca" className={styles.headerLink}>
              Ver todas las publicaciones <span style={{ fontSize: '1.2em' }}>→</span>
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
