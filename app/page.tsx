export default function HomePage() {
  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, Apple Color Emoji, Segoe UI Emoji',
      padding: '2rem',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>Agentic App</h1>
      <p style={{ color: '#555', maxWidth: 700 }}>
        Deployed on Vercel. Edit <code>app/page.tsx</code> and push to update.
      </p>
      <a href="https://nextjs.org" target="_blank" rel="noreferrer" style={{ marginTop: '1.25rem', color: '#0070f3' }}>
        Learn Next.js
      </a>
    </main>
  );
}
