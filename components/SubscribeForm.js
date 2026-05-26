'use client';

import { useState } from 'react';
import styles from './SubscribeForm.module.css';

export default function SubscribeForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle', 'loading', 'success', 'error'
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');

    try {
      // Use the placeholder endpoint from env, or a mock endpoint
      const endpoint = process.env.NEXT_PUBLIC_NEWSLETTER_ENDPOINT || '/api/subscribe';
      
      // Simulate API call for now since we don't have a real backend
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      setStatus('success');
      setMessage('¡Gracias por suscribirte!');
      setEmail('');
    } catch (err) {
      setStatus('error');
      setMessage('Ocurrió un error. Intenta nuevamente.');
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Tu correo electrónico"
          className={styles.input}
          required
          disabled={status === 'loading' || status === 'success'}
        />
        <button 
          type="submit" 
          className={styles.button}
          disabled={status === 'loading' || status === 'success'}
        >
          {status === 'loading' ? 'Enviando...' : status === 'success' ? 'Suscrito' : 'Suscribirme'}
        </button>
      </form>
      
      {message && (
        <p className={`${styles.message} ${status === 'success' ? styles.success : styles.error}`}>
          {message}
        </p>
      )}
    </div>
  );
}
