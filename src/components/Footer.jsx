import { useBreakpoint } from '../hooks/useBreakpoint'

export default function Footer({ c }) {
  const f = c.footer
  const { isMobile } = useBreakpoint()

  return (
    <footer style={{
      background: '#ffffff',
      borderTop: '1px solid #e4e4e7',
      padding: isMobile ? '2.5rem 0' : '3rem 0',
    }}>
      <div style={{
        maxWidth: '72rem',
        margin: '0 auto',
        padding: '0 1.25rem',
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        alignItems: isMobile ? 'flex-start' : 'center',
        justifyContent: 'space-between',
        gap: '1.5rem',
      }}>
        <div>
          <img src="/logo_white.png" alt="E5 Modular" style={{ height: '36px', width: 'auto', display: 'block', marginBottom: '0.875rem' }} />
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.875rem',
            color: '#71717a',
            lineHeight: 1.65,
            maxWidth: '36ch',
            margin: 0,
          }}>
            {f.tagline}
          </p>
        </div>
        <p style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: '0.62rem',
          letterSpacing: '0.1em',
          color: '#a1a1aa',
          margin: 0,
        }}>
          {f.rights}
        </p>
      </div>
    </footer>
  )
}
