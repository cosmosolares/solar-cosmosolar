import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer} id="main-footer">
      <div className="container">
        <div className={styles.footerGrid}>
          <div className={styles.brand}>
            <div className={styles.logo}>Cosmo Solar</div>
            <p className={styles.tagline}>
              El entorno moldea la salud humana.<br />
              Prácticas y ciencia abierta para habitar el mundo moderno de forma coherente.
            </p>
          </div>

          <div>
            <div className={styles.title}>Laboratorio</div>
            <div className={styles.links}>
              <Link href="/organismo" className={styles.link}>Organismo</Link>
              <Link href="/entorno" className={styles.link}>Entorno</Link>
              <Link href="/acerca" className={styles.link}>Acerca de la tesis</Link>
              <Link href="/comunidad" className={styles.link}>Comunidad</Link>
            </div>
          </div>

          <div>
            <div className={styles.title}>Legales</div>
            <div className={styles.links}>
              <Link href="/privacidad" className={styles.link}>Privacidad</Link>
              <Link href="/terminos" className={styles.link}>Términos</Link>
              <Link href="/contacto" className={styles.link}>Contacto</Link>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <div>
            © {new Date().getFullYear()} Cosmo Solar. Todos los derechos reservados.
          </div>
          <div className={styles.social}>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Instagram">
              Instagram
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="X / Twitter">
              X (Twitter)
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
