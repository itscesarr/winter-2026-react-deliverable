import { useState } from "react";

export default function Accordion({ items }) {
  const [open, setOpen] = useState(null);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginTop: '1rem' }}>
      {items.map((item, i) => (
        <div key={item.key} style={{ border: '1px solid var(--border)', borderRadius: '3px', overflow: 'hidden' }}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            style={{
              width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: '0.85rem 1.1rem',
              background: open === i ? 'var(--accent)' : 'var(--card)',
              color: open === i ? 'var(--bg)' : 'var(--text)',
              border: 'none', cursor: 'pointer', textAlign: 'left',
              fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '0.9rem',
              letterSpacing: '0.04em', transition: 'all 0.2s',
            }}
          >
            <span>{item.label}</span>
            <span style={{
              fontSize: '1rem', fontWeight: 300,
              transition: 'transform 0.2s',
              transform: open === i ? 'rotate(45deg)' : 'rotate(0)',
            }}>
              +
            </span>
          </button>
          {open === i && (
            <div style={{
              padding: '1rem 1.1rem', background: 'var(--bg)',
              color: 'var(--muted)', fontSize: '0.88rem', lineHeight: 1.7,
              animation: 'fadeUp 0.25s ease forwards',
            }}>
              {item.children}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
