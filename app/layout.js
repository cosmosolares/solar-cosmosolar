import { Lora, Inter } from 'next/font/google';
import './globals.css';

const lora = Lora({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-serif',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
  weight: ['400', '500', '600', '700'],
});

export const metadata = {
  title: {
    default: 'Cosmo Solar — El entorno moldea nuestra salud',
    template: '%s | Cosmo Solar',
  },
  description: 'Comunidad y laboratorio abierto sobre cómo el entorno moldea la salud humana. Prácticas, ritmos biológicos, luz, sueño y diseño de nuestro hábitat.',
  keywords: [
    'cosmo solar',
    'salud humana',
    'ritmos circadianos',
    'luz solar',
    'grounding',
    'alimentacion',
    'sueño',
    'biologia aplicada',
    'diseño cotidiano'
  ],
  authors: [{ name: 'Cosmo Solar' }],
  openGraph: {
    title: 'Cosmo Solar — El entorno moldea nuestra salud',
    description: 'Comunidad y laboratorio abierto sobre cómo el entorno moldea la salud humana.',
    type: 'website',
    locale: 'es_AR',
    siteName: 'Cosmo Solar',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${lora.variable} ${inter.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
