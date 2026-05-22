'use client';

import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import styles from './NewsletterForm.module.css';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setSubmitted(true);
    }
  };

  return (
    <section className={styles.newsletter} id="newsletter-section">
      <div className={styles.inner}>
        <h2 className={styles.title}>Bitácora Cosmo Solar</h2>
        <p className={styles.subtitle}>
          Recibí reportes del laboratorio abierto, reflexiones sobre salud de sistemas y actualizaciones de nuestra comunidad práctica. Sin clichés de bienestar.
        </p>
        {submitted ? (
          <p className={styles.success}>✓ Te sumaste a la bitácora. Pronto recibirás noticias en tu bandeja.</p>
        ) : (
          <>
            <form className={styles.form} onSubmit={handleSubmit} id="newsletter-form">
              <input
                type="email"
                placeholder="tu@email.com"
                className={styles.input}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                id="newsletter-email"
              />
              <button type="submit" className="btn btn-primary">
                Suscribirme <ArrowRight size={16} />
              </button>
            </form>
            <p className={styles.promise}>
              Sin costo. Cancelá cuando quieras. Solo conocimiento experimental y abierto.
            </p>
          </>
        )}
      </div>
    </section>
  );
}
