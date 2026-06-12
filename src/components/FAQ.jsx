import { useBreakpoint } from '../hooks/useBreakpoint'

export default function FAQ({ c }) {
  const f = c.faq
  const { isMobile } = useBreakpoint()

  return (
    <section id="faq" style={{
      background: '#ffffff',
      borderBottom: '1px solid #e4e4e7',
      padding: isMobile ? '4rem 0' : '6rem 0',
    }}>
      <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '0 1.25rem' }}>

        <p style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: '0.65rem',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: '#716bb6',
          marginBottom: '2rem',
        }}>
          {f.label}
        </p>

        <div style={{
          border: '1px solid #e4e4e7',
          borderRadius: '6px',
          overflow: 'hidden',
        }}>
          {f.items.map((item, i) => (
            <details
              key={i}
              style={{
                borderBottom: i < f.items.length - 1 ? '1px solid #e4e4e7' : 'none',
              }}
            >
              <summary style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: isMobile ? '0.9375rem' : '1rem',
                fontWeight: 600,
                color: '#18181b',
                lineHeight: 1.5,
                padding: isMobile ? '1.125rem 1.25rem' : '1.25rem 1.75rem',
                cursor: 'pointer',
                listStyle: 'none',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '1rem',
                userSelect: 'none',
              }}>
                <span>{item.q}</span>
                <span style={{
                  flexShrink: 0,
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  border: '1px solid #e4e4e7',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.75rem',
                  color: '#716bb6',
                  fontWeight: 400,
                }}>
                  +
                </span>
              </summary>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: isMobile ? '0.875rem' : '0.9375rem',
                color: '#52525b',
                lineHeight: 1.75,
                margin: 0,
                padding: isMobile ? '0 1.25rem 1.25rem' : '0 1.75rem 1.5rem',
              }}>
                {item.a}
              </p>
            </details>
          ))}
        </div>

      </div>
    </section>
  )
}
