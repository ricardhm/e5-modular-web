import { useBreakpoint } from '../hooks/useBreakpoint'

export default function Phases({ c }) {
  const p = c.phases
  const { isMobile, isTablet } = useBreakpoint()

  const cols = isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(5, 1fr)'

  return (
    <section id="fases" style={{
      position: 'relative',
      overflow: 'hidden',
      background: '#ffffff',
      borderBottom: '1px solid #e4e4e7',
      padding: isMobile ? '4rem 0' : '6rem 0',
    }}>
      <img
        src="/E5_figures.png"
        aria-hidden="true"
        style={{
          position: 'absolute',
          right: isMobile ? '-15%' : '-6%',
          top: '-10%',
          width: isMobile ? '75%' : '40%',
          maxWidth: '560px',
          opacity: 0.15,
          pointerEvents: 'none',
          userSelect: 'none',
        }}
      />
      <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '0 1.25rem' }}>

        {/* Header */}
        <div style={{ marginBottom: '2.5rem', maxWidth: '42rem' }}>
          <p style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: '0.65rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#716bb6',
            marginBottom: '1.25rem',
          }}>
            {p.label}
          </p>
          <h2 style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: isMobile ? '1.5rem' : 'clamp(1.5rem, 2.5vw, 2rem)',
            fontWeight: 800,
            color: '#18181b',
            lineHeight: 1.2,
            letterSpacing: '-0.02em',
            marginBottom: '1.25rem',
          }}>
            {p.title}
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: isMobile ? '0.9375rem' : '1rem', color: '#71717a', lineHeight: 1.7, marginBottom: '0.75rem' }}>
            {p.intro}
          </p>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: isMobile ? '0.9375rem' : '1rem', color: '#71717a', lineHeight: 1.7, marginBottom: p.aiPrinciple ? '0.75rem' : 0 }}>
            {p.intro2}
          </p>
          {p.aiPrinciple && (
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: isMobile ? '0.875rem' : '0.9375rem',
              color: '#716bb6',
              lineHeight: 1.6,
              fontStyle: 'italic',
              margin: 0,
            }}>
              {p.aiPrinciple}
            </p>
          )}
        </div>

        {/* Phases grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: cols,
          border: '1px solid #e4e4e7',
          borderRadius: '6px',
          overflow: 'hidden',
          marginBottom: '2rem',
        }}>
          {p.items.map((item, i) => (
            <div key={item.phase} style={{
              background: '#ffffff',
              padding: isMobile ? '1.5rem' : '1.75rem 1.5rem',
              borderRight: (!isMobile && !isTablet && i < 4) || (isTablet && !isMobile && i % 2 === 0) ? '1px solid #e4e4e7' : 'none',
              borderBottom: isMobile && i < 4 ? '1px solid #e4e4e7' : isTablet && !isMobile && i < 3 ? '1px solid #e4e4e7' : 'none',
              borderTop: i === 0 ? '3px solid #716bb6' : isTablet && i === 1 ? '3px solid #716bb6' : '3px solid transparent',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
            }}>
              <span style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: '0.62rem',
                letterSpacing: '0.15em',
                color: '#a1a1aa',
              }}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '1.0625rem',
                fontWeight: 800,
                color: '#18181b',
                margin: 0,
              }}>
                {item.phase}
              </h3>
              <p style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: '0.62rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#716bb6',
                margin: 0,
              }}>
                {item.tag}
              </p>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.8125rem',
                color: '#71717a',
                lineHeight: 1.65,
                margin: 0,
              }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '0.9375rem',
          color: '#71717a',
          lineHeight: 1.7,
          maxWidth: '52ch',
          margin: 0,
        }}>
          {p.closing}
        </p>
      </div>
    </section>
  )
}
