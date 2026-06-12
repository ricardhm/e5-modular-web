import { useState, useEffect } from 'react'
import { useBreakpoint } from '../hooks/useBreakpoint'

export default function Nav({ lang, setLang, c }) {
  const { isMobile, isTablet } = useBreakpoint()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const linkStyle = {
    fontFamily: "'Inter', sans-serif",
    fontSize: '0.8rem',
    fontWeight: 500,
    color: '#71717a',
    textDecoration: 'none',
    letterSpacing: '-0.01em',
    padding: '0.25rem 0',
    position: 'relative',
    transition: 'color 0.15s',
    whiteSpace: 'nowrap',
  }

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 50,
        background: '#ffffff',
        borderBottom: scrolled ? '1px solid #e4e4e7' : '1px solid #f0f0f0',
        transition: 'border-color 0.2s, box-shadow 0.2s',
        boxShadow: scrolled ? '0 1px 12px rgba(0,0,0,0.06)' : 'none',
      }}>
        <div style={{
          maxWidth: '72rem',
          margin: '0 auto',
          padding: '0 1.25rem',
          height: '60px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1.5rem',
        }}>

          {/* Logo */}
          <a href="#top" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexShrink: 0, textDecoration: 'none' }}>
            <img
              src="/logo_white.png"
              alt=""
              aria-hidden="true"
              style={{ height: isMobile ? '20px' : '22px', width: 'auto' }}
            />
            <span style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: isMobile ? '0.875rem' : '0.9375rem',
              fontWeight: 700,
              color: '#18181b',
              letterSpacing: '-0.02em',
              whiteSpace: 'nowrap',
            }}>
              E5 Modular
            </span>
          </a>

          {/* Center links — desktop only */}
          {!isTablet && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', flex: 1, justifyContent: 'center' }}>
              {c.nav.links.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  style={linkStyle}
                  onMouseEnter={e => (e.currentTarget.style.color = '#18181b')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#71717a')}
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}

          {/* Right: lang toggle + CTA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0 }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              border: '1px solid #e4e4e7',
              borderRadius: '5px',
              overflow: 'hidden',
            }}>
              {['es', 'en'].map(l => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: '0.62rem',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    padding: '0.3rem 0.65rem',
                    cursor: 'pointer',
                    border: 'none',
                    background: lang === l ? '#716bb6' : 'transparent',
                    color: lang === l ? '#fff' : '#71717a',
                    transition: 'background 0.15s, color 0.15s',
                  }}
                >
                  {l}
                </button>
              ))}
            </div>

            {!isMobile && (
              <a
                href="#contacto"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  color: '#fff',
                  background: '#716bb6',
                  padding: '0.5rem 1rem',
                  borderRadius: '5px',
                  textDecoration: 'none',
                  transition: 'background 0.15s, box-shadow 0.15s',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = '#5a55a0'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(113,107,182,0.35)' }}
                onMouseLeave={e => { e.currentTarget.style.background = '#716bb6'; e.currentTarget.style.boxShadow = 'none' }}
              >
                {c.nav.cta}
              </a>
            )}

            {/* Hamburger — tablet + mobile */}
            {isTablet && (
              <button
                onClick={() => setMenuOpen(o => !o)}
                style={{
                  background: 'none',
                  border: '1px solid #e4e4e7',
                  borderRadius: '5px',
                  padding: '0.35rem 0.6rem',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '36px',
                  height: '36px',
                }}
              >
                {menuOpen ? (
                  <span style={{ fontFamily: 'sans-serif', fontSize: '1rem', color: '#52525b', lineHeight: 1 }}>✕</span>
                ) : (
                  <>
                    <span style={{ display: 'block', width: '16px', height: '1.5px', background: '#52525b' }} />
                    <span style={{ display: 'block', width: '16px', height: '1.5px', background: '#52525b' }} />
                    <span style={{ display: 'block', width: '12px', height: '1.5px', background: '#52525b', alignSelf: 'flex-start' }} />
                  </>
                )}
              </button>
            )}
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {isTablet && menuOpen && (
          <div style={{
            borderTop: '1px solid #e4e4e7',
            background: '#ffffff',
            padding: '1rem 1.25rem 1.25rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0',
          }}>
            {c.nav.links.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.9375rem',
                  fontWeight: 500,
                  color: '#18181b',
                  textDecoration: 'none',
                  padding: '0.75rem 0',
                  borderBottom: '1px solid #f4f4f5',
                  transition: 'color 0.15s',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = '#716bb6')}
                onMouseLeave={e => (e.currentTarget.style.color = '#18181b')}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.875rem',
                fontWeight: 600,
                color: '#fff',
                background: '#716bb6',
                padding: '0.75rem 1.25rem',
                borderRadius: '5px',
                textDecoration: 'none',
                textAlign: 'center',
                marginTop: '0.75rem',
                transition: 'background 0.15s',
              }}
            >
              {c.nav.cta}
            </a>
          </div>
        )}
      </nav>
    </>
  )
}
