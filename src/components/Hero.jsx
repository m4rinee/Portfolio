import { useEffect, useState } from 'react';

const ROLES = ['UI/UX Designer', 'Frontend Developer', 'BSIT Graduate',];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setTimeout(() => setMounted(true), 100); }, []);

  // Typewriter effect
  useEffect(() => {
    const target = ROLES[roleIdx];
    let timeout;

    if (!deleting && displayed.length < target.length) {
      timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === target.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIdx((i) => (i + 1) % ROLES.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIdx]);

  const cls = (delay) =>
    `transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'} ${delay}`;

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background orbs */}
      <div className="glow-orb w-[500px] h-[500px] bg-mint/5 top-[-100px] right-[-150px]" />
      <div className="glow-orb w-[300px] h-[300px] bg-mint/8 bottom-[100px] left-[-100px]" />

      {/* Grid lines */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: 'linear-gradient(rgb(var(--color-accent)) 1px, transparent 1px), linear-gradient(90deg, rgb(var(--color-accent)) 1px, transparent 1px)', backgroundSize: '80px 80px' }} />

      <div className="max-w-6xl mx-auto px-6 w-full py-20">
        <div className="grid md:grid-cols-5 gap-12 items-center">

          {/* Left — main text */}
          <div className="md:col-span-3">
            <div className={`${cls('delay-100')} mb-6`}>
              <span className="section-label">Available for work</span>
              <span className="ml-3 inline-block w-2 h-2 rounded-full bg-mint animate-pulse" />
            </div>

            <h1 className={`font-display text-6xl md:text-7xl lg:text-8xl font-normal text-offwhite leading-[1.05] mb-6 ${cls('delay-200')}`}>
              Mariane<br />
              <em className="text-mint not-italic">Panaligan</em>
            </h1>

            <div className={`flex items-center gap-3 mb-8 h-8 ${cls('delay-300')}`}>
              <span className="font-mono text-lg text-muted">//</span>
              <span className="font-mono text-base font-medium text-offwhite/80">{displayed}</span>
              <span className="font-mono text-mint text-xl animate-cursor-blink">|</span>
            </div>

            <p className={`font-sans font-medium text-muted text-lg leading-relaxed max-w-lg mb-10 ${cls('delay-400')}`}>
              I craft clean, user-centered digital experiences — bridging the gap between thoughtful design and functional code.
            </p>

            <div className={`flex flex-wrap gap-3 ${cls('delay-500')}`}>
              <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary">
                View my work
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
              <a href="mailto:mariane.pnlgn@gmail.com" className="btn-outline">Get in touch</a>
            </div>
          </div>

          {/* Right — avatar + stats */}
          <div className={`md:col-span-2 flex flex-col items-center gap-6 ${cls('delay-300')}`}>
            {/* Avatar frame */}
            <div className="relative">
              <div className="w-56 h-56 md:w-64 md:h-64 rounded-3xl overflow-hidden border border-mint/20 shadow-[0_0_60px_rgba(255,93,122,0.12)]">
                <img
                  src="/profile.jpg"
                  alt="Mariane"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-3 -right-3 bg-navy-800 border border-border rounded-xl px-3 py-2">
                <p className="font-mono text-[10px] text-muted">Based in</p>
                <p className="font-sans text-xs font-semibold text-offwhite">Philippines 🇵🇭</p>
              </div>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-2 gap-3 w-full">
              {[
                { val: 'React', label: 'Primary stack' },
                { val: 'Figma', label: 'Design tool' },
              ].map(s => (
                <div key={s.label} className="card text-center py-4">
                  <p className="font-display text-2xl font-medium text-mint">{s.val}</p>
                  <p className="font-mono text-[10px] text-muted mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="mt-16 flex items-center gap-4 opacity-40">
          <div className="h-px flex-1 max-w-[60px] bg-border" />
          <span className="font-mono text-[10px] text-muted tracking-[0.2em] uppercase">Scroll to explore</span>
        </div>
      </div>
    </section>
  );
}
