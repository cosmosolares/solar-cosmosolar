'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import styles from './Navigation.module.css';

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const navLinks = [
    { href: '/organismo', label: 'Organismo' },
    { href: '/entorno', label: 'Entorno' },
    { href: '/acerca', label: 'Acerca' },
    { href: '/comunidad', label: 'Comunidad' },
  ];

  return (
    <>
      <nav className={styles.nav} id="main-nav">
        <div className={styles.navContainer}>
          <Link href="/" className={styles.logo}>
            <img src="/logo/logo.svg" alt="Cosmo Solar logo" className={styles.logoImg} />
          </Link>

          <div className={styles.desktopLinks}>
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.link} ${
                  pathname.startsWith(link.href) ? styles.activeLink : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className={styles.mobileActions}>
            <button
              className={styles.mobileMenuBtn}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${mobileOpen ? styles.mobileMenuOpen : ''}`} id="mobile-menu">
        {navLinks.map(link => (
          <Link key={link.href} href={link.href} className={styles.mobileLink}>
            {link.label}
          </Link>
        ))}
      </div>

      <div style={{ height: 'var(--nav-height)' }} />
    </>
  );
}
