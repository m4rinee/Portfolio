import { useInView } from '../useInView';

const CATEGORIES = [
  {
    label: 'Frontend',
    icon: '⌨',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Vue.js', 'Tailwind CSS', 'TypeScript'],
  },
  {
    label: 'Mobile',
    icon: '📱',
    skills: ['React Native', 'Expo', 'TypeScript'],
  },
  {
    label: 'Design',
    icon: '✦',
    skills: ['Figma', 'Adobe XD', 'UI/UX Design', 'Wireframing', 'Prototyping', 'Graphic Design'],
  },
  {
    label: 'Tools & Dev',
    icon: '⚙',
    skills: ['Git & GitHub', 'Supabase', 'Responsive Web Design', 'Version Control'],
  },
];

export default function Skills() {
  const [ref, visible] = useInView();

  return (
    <section id="skills" className="py-28 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="section-label">03 — Skills</span>
          <div className="mt-10 flex flex-col md:flex-row md:items-end gap-8 mb-14">
            <h2 className="section-title flex-1">
              Tools &<br /><em className="not-italic text-mint">expertise.</em>
            </h2>
            <div className="max-w-xs">
              <p className="font-sans font-medium text-muted text-sm leading-relaxed">
                A versatile toolkit spanning design and development — from pixels to production.
              </p>
              <a href="/resume.pdf" download="Mariane-Panaligan-Resume.pdf"
                className="btn-primary mt-5 inline-flex text-sm">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M7 1v8M3 9l4 4 4-4M1 12h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Download Resume
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CATEGORIES.map((cat, ci) => (
              <div key={cat.label}
                className={`card transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${ci * 100 + 200}ms` }}>
                <div className="flex items-center gap-2 mb-5">
                  <span className="text-lg">{cat.icon}</span>
                  <h3 className="font-sans font-semibold text-offwhite text-sm tracking-wide">{cat.label}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map(s => (
                    <span key={s} className="pill text-xs">{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
