import Nav from "./Nav";
import Hero from "./Hero";
import Section from "./Section";
import Accordion from "./Accordion";
import SongList from "./SongList";
import RandomSongWidget from "./RandomSongWidget";
import { anime, games } from "./data";

export default function App() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800;900&family=DM+Sans:wght@400;500;700&display=swap');

        :root {
          --bg: #0a0a0a;
          --card: #141414;
          --border: #222;
          --text: #f0ece4;
          --muted: #6b6b6b;
          --accent: #42b3ff;
          --font-display: 'Syne', sans-serif;
          --font-body: 'DM Sans', sans-serif;
        }
      
      `}</style>

      <Nav />
      <Hero />

      <Section id="songs" title="Top Songs">
        <p style={{ color: 'var(--muted)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1rem' }}>
          A running list of songs I keep coming back to. Mostly reggaeton, but there's a little of everything.
        </p>
        <RandomSongWidget />
        <SongList />
      </Section>

      <Section id="anime"  title="Top Anime">
        <p style={{ color: 'var(--muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>
          Series and films that hit different. These are the ones that stuck with me.
        </p>
        <Accordion items={anime} />
      </Section>

      <Section id="games" title="Top Games">
        <p style={{ color: 'var(--muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>
          From childhood classics to recent obsessions — these are the games I'd replay in a heartbeat.
        </p>
        <Accordion items={games} />
      </Section>

      <footer style={{
        borderTop: '1px solid var(--border)',
        padding: '3rem 2rem',
        textAlign: 'center',
        color: 'var(--muted)',
        fontSize: '0.8rem',
        letterSpacing: '0.08em',
        fontFamily: 'var(--font-body)',
      }}>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 900, color: 'var(--text)', marginRight: '0.5rem' }}>
          Cesar Vargas ✦ UMID: cavargas
        </span>
        
      </footer>
    </>
  );
}
