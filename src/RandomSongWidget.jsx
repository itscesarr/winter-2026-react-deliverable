import { useState } from "react";
import { songs } from "./data";

export default function RandomSongWidget() {
  const [loading, setLoading] = useState(false);
  const [songData, setSongData] = useState(null);

  const pick = async () => {
    setLoading(true);
    setSongData(null);
    const song = songs[Math.floor(Math.random() * songs.length)];
    const query = encodeURIComponent(`${song.name} ${song.artist.split(';')[0]}`);
    try {
      const res = await fetch(`https://itunes.apple.com/search?term=${query}&media=music&limit=1`);
      const json = await res.json();
      const artwork = json.results?.[0]?.artworkUrl100?.replace('100x100', '600x600') ?? null;
      setSongData({ ...song, artwork });
    } catch {
      setSongData({ ...song, artwork: null });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ marginTop: '2rem' }}>
      <button
        onClick={pick}
        disabled={loading}
        style={{
          background: loading ? '#333' : 'var(--accent)',
          color: loading ? '#888' : 'var(--bg)',
          border: 'none',
          padding: '0.6rem 1.4rem',
          fontFamily: 'var(--font-body)',
          fontWeight: 700,
          fontSize: '0.85rem',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          cursor: loading ? 'not-allowed' : 'pointer',
          borderRadius: '2px',
          transition: 'all 0.2s',
        }}
      >
        {loading ? 'Finding…' : '⟳ Random Pick'}
      </button>

      {songData && (
        <div style={{
          display: 'flex', gap: '1rem', marginTop: '1.2rem',
          background: 'var(--card)', borderRadius: '4px',
          overflow: 'hidden', maxWidth: '400px',
          border: '1px solid var(--border)',
          animation: 'fadeUp 0.4s ease forwards',
        }}>
          {songData.artwork && (
            <img
              src={songData.artwork}
              alt=""
              style={{ width: '90px', height: '90px', objectFit: 'cover', flexShrink: 0 }}
            />
          )}
          <div style={{
            padding: '0.8rem 0.8rem 0.8rem 0',
            display: 'flex', flexDirection: 'column', justifyContent: 'center',
          }}>
            <div style={{
              fontFamily: 'var(--font-display)', fontSize: '1rem',
              fontWeight: 700, color: 'var(--text)', lineHeight: 1.2,
            }}>
              {songData.name}
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--muted)', marginTop: '0.2rem' }}>
              {songData.artist.split(';').join(', ')}
            </div>
            <a
              href={`https://open.spotify.com/track/${songData.code}`}
              target="_blank"
              rel="noreferrer"
              style={{
                marginTop: '0.5rem', fontSize: '0.75rem', color: '#1DB954',
                fontWeight: 700, textDecoration: 'none', letterSpacing: '0.05em',
              }}
            >
              SPOTIFY ↗
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
