import { useState } from 'react';
import { useInView } from '../useInView';

const SOCIALS = [
  {
    label: 'Email',
    handle: 'mariane.pnlgn@gmail.com',
    href: 'mailto:mariane.pnlgn@gmail.com',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M2 4h14v10H2V4zm0 0l7 6 7-6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    handle: 'Mariane Panaligan',
    href: 'https://www.linkedin.com/in/mariane-panaligan-02b8a1385/',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <rect x="1.5" y="1.5" width="15" height="15" rx="3" stroke="currentColor" strokeWidth="1.3"/>
        <path d="M5 7.5V13M5 5v.5M8 13V10a2 2 0 014 0v3M8 7.5V13" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: 'GitHub',
    handle: 'm4rinee',
    href: 'https://github.com/m4rinee',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M9 2a7 7 0 00-2.213 13.639c.35.064.478-.152.478-.337 0-.166-.006-.605-.01-1.188-1.947.423-2.358-.939-2.358-.939-.318-.808-.777-1.023-.777-1.023-.635-.434.048-.425.048-.425.702.049 1.071.72 1.071.72.624 1.069 1.636.76 2.035.581.063-.452.244-.76.444-.935-1.554-.177-3.188-.777-3.188-3.455 0-.763.273-1.387.72-1.876-.072-.177-.312-.888.069-1.85 0 0 .587-.188 1.923.716A6.707 6.707 0 019 5.872c.595.003 1.194.08 1.754.236 1.335-.904 1.92-.717 1.92-.717.383.963.143 1.674.07 1.85.449.49.72 1.114.72 1.877 0 2.685-1.636 3.276-3.194 3.449.251.216.475.643.475 1.297 0 .937-.009 1.69-.009 1.921 0 .187.126.405.48.337A7.002 7.002 0 009 2z" fill="currentColor"/>
      </svg>
    ),
  },
];

export default function Contact() {
  const [ref, visible] = useInView();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sent

  const send = () => {
    if (!form.name || !form.message) return;
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(`From: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.open(`mailto:mariane.pnlgn@gmail.com?subject=${subject}&body=${body}`, '_blank');
    setStatus('sent');
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setStatus('idle'), 4000);
  };

  return (
    <section id="contact" className="py-28 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="section-label">04 — Contact</span>

          <div className="mt-10 grid md:grid-cols-2 gap-12 items-start">
            {/* Left */}
            <div>
              <h2 className="section-title mb-6">
                Let's work<br /><em className="not-italic text-mint">together.</em>
              </h2>
              <p className="font-sans font-medium text-muted text-base leading-relaxed mb-10 max-w-sm">
                Whether it's a new project, a collaboration, or just a conversation — I'd love to hear from you.
              </p>

              <div className="space-y-4">
                {SOCIALS.map(s => (
                  <a key={s.label} href={s.href}
                    target={s.label !== 'Email' ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-xl border border-border flex items-center justify-center text-muted group-hover:border-mint/30 group-hover:text-mint transition-all duration-200">
                      {s.icon}
                    </div>
                    <div>
                      <p className="font-mono text-[10px] text-muted/60 tracking-widest uppercase">{s.label}</p>
                      <p className="font-sans font-medium text-sm text-offwhite/80 group-hover:text-mint transition-colors hover-underline">{s.handle}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Right — form */}
            <div className="card">
              <h3 className="font-sans font-semibold text-offwhite mb-6">Send a message</h3>

              {status === 'sent' && (
                <div className="mb-4 px-4 py-3 rounded-lg bg-mint/10 border border-mint/20 font-mono text-xs text-mint">
                  ✓ Email client opened — message prepared!
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <label className="font-mono text-[11px] text-muted uppercase tracking-wider block mb-2">Name</label>
                  <input
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    className="w-full bg-navy border border-border rounded-xl px-4 py-3 font-sans text-sm text-offwhite placeholder:text-muted/40 outline-none focus:border-mint/30 transition-colors"
                  />
                </div>
                <div>
                  <label className="font-mono text-[11px] text-muted uppercase tracking-wider block mb-2">Email</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    placeholder="your@email.com"
                    className="w-full bg-navy border border-border rounded-xl px-4 py-3 font-sans text-sm text-offwhite placeholder:text-muted/40 outline-none focus:border-mint/30 transition-colors"
                  />
                </div>
                <div>
                  <label className="font-mono text-[11px] text-muted uppercase tracking-wider block mb-2">Message</label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell me about your project..."
                    className="w-full bg-navy border border-border rounded-xl px-4 py-3 font-sans text-sm text-offwhite placeholder:text-muted/40 outline-none focus:border-mint/30 transition-colors resize-none"
                  />
                </div>
                <button onClick={send} className="btn-primary w-full justify-center">
                  Send Message
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-24 border-t border-border pt-8 max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-display text-lg font-medium text-muted">Mariane M. Panaligan</span>
        <p className="font-mono text-xs text-muted/50">
          © 2026 · Built with React, Vite & Tailwind CSS
        </p>
        <div className="flex gap-4">
          {SOCIALS.map(s => (
            <a key={s.label} href={s.href}
              target={s.label !== 'Email' ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="text-muted hover:text-mint transition-colors">
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
