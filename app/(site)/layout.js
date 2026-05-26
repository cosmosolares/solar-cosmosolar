import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function SiteLayout({ children }) {
  return (
    <>
      <Navigation />
      <main id="main">
        {children}
      </main>
      <Footer />
    </>
  );
}
