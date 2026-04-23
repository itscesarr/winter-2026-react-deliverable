export default function Nav() {
  const links = [
    { href: '#songs', label: 'Songs' },
    { href: '#anime', label: 'Anime' },
    { href: '#games', label: 'Games' },
  ];

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '1rem 2rem',
      background: 'rgba(10,10,10,0.85)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--border)',
    }}>
      <a href="#top" style={{
        fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '1.1rem',
        color: 'var(--text)', textDecoration: 'none', letterSpacing: '-0.02em',
      }}>
        César<span style={{ color: 'var(--accent)' }}>.</span>
      </a>
      <div style={{ display: 'flex', gap: '2rem' }}>
        {links.map(l => (
          <a
            key={l.href}
            href={l.href}
            style={{
              color: 'var(--muted)', textDecoration: 'none', fontSize: '0.8rem',
              fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--text)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}
          >
            {l.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
