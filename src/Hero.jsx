export default function Hero() {
  return (
    <header id="top" style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column',
      justifyContent: 'center', padding: '0 2rem',
      background: 'var(--bg)',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Decorative grid lines */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(var(--border) 1px,transparent 1px),linear-gradient(90deg,var(--border) 1px,transparent 1px)',
        backgroundSize: '60px 60px',
        opacity: 0.4,
        pointerEvents: 'none',
      }} />

      

      <div style={{ maxWidth: '800px', margin: '0 auto', width: '100%', position: 'relative' }}>
      

        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(3.5rem,10vw,8rem)',
          fontWeight: 900, lineHeight: 0.9,
          letterSpacing: '-0.04em',
          color: 'var(--text)',
          margin: '0 0 1.5rem',
        }}>
          Cesar's Tops<br />
         
        </h1>

        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '1.1rem', color: 'var(--muted)',
          lineHeight: 1.7, maxWidth: '420px',
          display: 'inline-block',
          margin: '0 0 3rem',
        }}>
          My favorite music, anime, and games. A snapshot of what I love — curated just for you.
        </p>

        <div style={{ display: 'block', gap: '1rem' }}>
          {['#songs', '#anime', '#games'].map((href, i) => (
            <a
              key={href}
              href={href}
              style={{
                padding: '0.7rem 1.5rem',
                background: i === 0 ? 'var(--accent)' : 'transparent',
                color: i === 0 ? 'var(--bg)' : 'var(--text)',
                border: i === 0 ? 'none' : '1px solid var(--border)',
                textDecoration: 'none',
                fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '0.85rem',
                letterSpacing: '0.08em', textTransform: 'uppercase',
                borderRadius: '2px', transition: 'all 0.2s',
              }}
              onMouseEnter={e => { if (i !== 0) { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; } }}
              onMouseLeave={e => { if (i !== 0) { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text)'; } }}
            >
              {href.replace('#', '')}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
