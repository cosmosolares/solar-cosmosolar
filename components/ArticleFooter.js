import SubscribeForm from './SubscribeForm';

export default function ArticleFooter() {
  return (
    <div style={{
      marginTop: 'var(--space-4xl)',
      paddingTop: 'var(--space-2xl)',
      borderTop: '1px solid var(--border-subtle)',
      textAlign: 'center'
    }}>
      <h3 style={{ 
        fontFamily: 'var(--font-serif)', 
        fontSize: '1.5rem', 
        marginBottom: 'var(--space-xs)' 
      }}>
        Únete al laboratorio abierto
      </h3>
      <p style={{ 
        fontFamily: 'var(--font-sans)', 
        color: 'var(--text-secondary)',
        marginBottom: 'var(--space-lg)'
      }}>
        Recibe nuestras últimas investigaciones y protocolos semanales.
      </p>
      <SubscribeForm />
    </div>
  );
}
