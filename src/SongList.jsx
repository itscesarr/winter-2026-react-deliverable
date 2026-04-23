import { songs } from "./data";

export default function SongList() {
  return (
    <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '2px' }}>
      {songs.map((s, i) => (
        <a
          key={s.code}
          href={`https://open.spotify.com/track/${s.code}`}
          target="_blank"
          rel="noreferrer"
          style={{
            display: 'flex', alignItems: 'center', gap: '1rem',
            padding: '0.6rem 0.8rem', borderRadius: '3px',
            textDecoration: 'none', color: 'var(--text)',
            background: 'transparent', transition: 'background 0.15s',
            borderBottom: '1px solid var(--border)',
          }}
          onMouseEnter={e => e.currentTarget.style.background = 'var(--card)'}
          onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
        >
          <span style={{
            color: 'var(--muted)', fontSize: '0.75rem',
            width: '20px', textAlign: 'right',
            fontVariantNumeric: 'tabular-nums',
          }}>
            {i + 1}
          </span>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{
              fontWeight: 700, fontSize: '0.9rem', fontFamily: 'var(--font-body)',
              whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
            }}>
              {s.name}
            </div>
            <div style={{
              fontSize: '0.76rem', color: 'var(--muted)',
              whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
            }}>
              {s.artist.split(';').join(', ')}
            </div>
          </div>
          <span style={{ fontSize: '0.7rem', color: '#1DB954', fontWeight: 700, flexShrink: 0 }}>↗</span>
        </a>
      ))}
    </div>
  );
}
