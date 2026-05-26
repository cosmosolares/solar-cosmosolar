import ScrollReveal from '@/components/ScrollReveal';
import styles from './acerca.module.css';

export const metadata = {
  title: 'Acerca de la Tesis',
  description: 'Nuestra visión y marco de exploración en Cosmo Solar. Por qué el entorno actual degrada la biología y cómo podemos actuar de forma práctica y colectiva.',
};

export default function AcercaPage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <ScrollReveal delay={1}>
          <span className="label">Manifiesto & Tesis</span>
        </ScrollReveal>
        <ScrollReveal delay={2}>
          <h1 className="display-lg" style={{ marginTop: 'var(--space-sm)' }}>
            Reconectando con las señales de la Tierra
          </h1>
        </ScrollReveal>
      </header>

      <section className={styles.editorialContent}>
        <ScrollReveal delay={1}>
          <p className={styles.lead}>
            Durante millones de años, la especie humana evolucionó bajo un conjunto de coordenadas inmutables: el ciclo diario de luz y oscuridad, el contacto directo con la superficie conductora de la Tierra, las fluctuaciones de temperatura y el alimento directo del suelo. Nuestra biología se construyó sobre estas señales ambientales estables.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={2}>
          <p>
            El hábitat moderno ha disuelto estas coordenadas. Hoy pasamos un promedio del 90% de nuestras vidas en interiores aislados, bajo espectros lumínicos artificiales y constantes, calzados con suelas de plástico que bloquean el flujo de electrones libres de la corteza terrestre, y desconectados de las redes de comunidad y ritmos estacionales que anclan nuestra homeostasis celular.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={3}>
          <blockquote>
            "La crisis de la salud moderna no es solo genética ni puramente de hábitos — es una crisis de desalineación ecológica."
          </blockquote>
        </ScrollReveal>

        <ScrollReveal delay={4}>
          <h2 className="heading-2" style={{ margin: 'var(--space-xl) 0 var(--space-sm)' }}>
            Nuestros Ejes de Exploración
          </h2>
          <p>
            Cosmo Solar opera como un laboratorio de investigación práctica y abierto a todos. Estudiamos dos dimensiones integradas:
          </p>
          
          <ul className={styles.list}>
            <li>
              <strong>Organismo:</strong> Los osciladores biológicos internos. Cómo el núcleo supraquiasmático calibra los relojes metabólicos, hepáticos y hormonales, y de qué forma regular el sueño, la nutrición regenerativa, el movimiento natural y el estado de calma mental.
            </li>
            <li>
              <strong>Entorno:</strong> Las señales que recibimos del entorno físico. El espectro de la luz solar natural, los campos de electrones terrestres (grounding), la purificación de los espacios interiores, el diseño del ambiente de descanso y el poder de las redes de apoyo comunitario.
            </li>
          </ul>
        </ScrollReveal>

        <ScrollReveal delay={5}>
          <h2 className="heading-2" style={{ margin: 'var(--space-xl) 0 var(--space-sm)' }}>
            Comunidad Abierta
          </h2>
          <p>
            No somos intermediarios de suplementos mágicos ni de rutinas performáticas de optimización. Somos estudiantes prácticos del entorno. Compartimos investigaciones, observaciones empíricas y diseños cotidianos accesibles para que cada persona pueda construir un hábitat coherente y duradero.
          </p>
        </ScrollReveal>
      </section>
    </div>
  );
}
