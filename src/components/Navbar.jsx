import { useState, useEffect } from 'react';

const NAV = ['About', 'Projects', 'Skills', 'Contact'];

export default function Navbar({ theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const go = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
      scrolled ? 'py-3 bg-navy/80 backdrop-blur-xl border-b border-border' : 'py-5'
    }`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-display text-xl font-medium text-offwhite tracking-widest hover:text-mint transition-colors"> Portfolio
          <span className="text-mint"></span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV.map(n => (
            <button key={n} onClick={() => go(n)} className="nav-link hover-underline">{n}</button>
          ))}
          <button
            type="button"
            onClick={onToggleTheme}
            className="w-10 h-10 rounded-full border border-border text-muted hover:text-mint hover:border-mint/40 flex items-center justify-center transition-all duration-200"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? (
              <svg width="17" height="17" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <circle cx="9" cy="9" r="3.2" stroke="currentColor" strokeWidth="1.4" />
                <path d="M9 1.5v2M9 14.5v2M1.5 9h2M14.5 9h2M3.7 3.7l1.4 1.4M12.9 12.9l1.4 1.4M14.3 3.7l-1.4 1.4M5.1 12.9l-1.4 1.4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="17" height="17" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M14.5 11.4A6.2 6.2 0 016.6 3.5a6.2 6.2 0 107.9 7.9z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </button>
          <a href="mailto:mariane.pnlgn@gmail.com" className="btn-primary py-2 px-5 text-xs">
            Hire Me
          </a>
        </nav>

        {/* Mobile burger */}
        <div className="md:hidden flex items-center gap-3">
          <button
            type="button"
            onClick={onToggleTheme}
            className="w-9 h-9 rounded-full border border-border text-muted hover:text-mint hover:border-mint/40 flex items-center justify-center transition-all duration-200"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? (
              <svg width="16" height="16" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <circle cx="9" cy="9" r="3.2" stroke="currentColor" strokeWidth="1.4" />
                <path d="M9 1.5v2M9 14.5v2M1.5 9h2M14.5 9h2M3.7 3.7l1.4 1.4M12.9 12.9l1.4 1.4M14.3 3.7l-1.4 1.4M5.1 12.9l-1.4 1.4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M14.5 11.4A6.2 6.2 0 016.6 3.5a6.2 6.2 0 107.9 7.9z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </button>
          <button onClick={() => setOpen(!open)} className="flex flex-col gap-1.5 p-1" aria-label="Menu">
            <span className={`block w-5 h-px bg-offwhite transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-5 h-px bg-offwhite transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-px bg-offwhite transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-navy-700/95 backdrop-blur-xl border-t border-border px-6 py-6 flex flex-col gap-4">
          {NAV.map(n => (
            <button key={n} onClick={() => go(n)} className="nav-link text-left text-base">{n}</button>
          ))}
          <a href="mailto:mariane.pnlgn@gmail.com" className="btn-primary w-fit mt-2">Hire Me</a>
        </div>
      )}
    </header>
  );
}
