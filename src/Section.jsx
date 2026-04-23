export default function Section({ id, tag, title, children }) {
  return (
    <section id={id} style={{ padding: '5rem 0', borderTop: '1px solid var(--border)' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem', marginBottom: '1.5rem' }}>
          <span style={{
            fontSize: '0.72rem', letterSpacing: '0.18em', textTransform: 'uppercase',
            color: 'var(--accent)', fontWeight: 700,
          }}>
            {tag}
          </span>
          <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
        </div>
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2rem,5vw,3.5rem)',
          fontWeight: 900, lineHeight: 1,
          letterSpacing: '-0.02em',
          color: 'var(--text)',
          margin: '0 0 0.25rem',
        }}>
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}
