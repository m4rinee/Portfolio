import { useInView } from '../useInView';

const PROJECTS = [
  {
    num: '01',
    title: 'CoachMe',
    subtitle: 'Fitness Coaching Mobile App',
    desc: 'A full-featured mobile application connecting coaches and athletes. Supports workout planning, progress tracking, and real-time communication — built end-to-end as a capstone project.',
    tags: ['React Native', 'TypeScript', 'Expo', 'Supabase'],
    type: 'Mobile Development',
    link: 'https://www.trainwithcoachme.com/',
    linkLabel: 'Visit Live Site',
    accent: {
      dark: '#FF5D7A',
      light: '#BE123C',
    },
  },
  {
    num: '02',
    title: 'Zhiyuan DMS',
    subtitle: 'Distribution Management System — Wireframes',
    desc: 'Comprehensive UX wireframe proposal for a distribution management platform. Covers inventory flows, user dashboards, role-based access screens, and a complete design system proposal.',
    tags: ['Figma', 'UX Research', 'Wireframing', 'Prototyping'],
    type: 'UI/UX Design',
    link: 'https://www.figma.com/design/8DKKXpJfsYLMTBmoLNewFF/Zhiyuan-DMS-Wire-Frame-Proposal?node-id=0-1&p=f&t=uWRguJkRhE4SRY8X-0',
    linkLabel: 'View Figma File',
    accent: {
      dark: '#FB7185',
      light: '#E11D48',
    },
  },
  {
    num: '03',
    title: 'BrewQueue',
    subtitle: 'Cafe Waiting List — UX/UI Design',
    desc: 'The goal of the application is to help customers join a waiting list online and allow cafe staff to manage queues efficiently.',
    tags: ['Figma Make', 'UI/UX Design', 'Wireframing', 'Prototyping'],
    type: 'UI/UX Design',
    link: 'https://www.figma.com/community/file/1644666445326917008/cafe-waiting-list',
    linkLabel: 'View Figma File',
    accent: {
      dark: '#FB7185',
      light: '#E11D48',
    },
  },

];

function ProjectCard({ project, index, theme }) {
  const [ref, visible] = useInView();
  const accent = project.accent[theme] || project.accent.dark;

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="group card hover:bg-navy-700 h-full flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <span className="font-mono text-3xl font-medium" style={{ color: accent + '55' }}>
            {project.num}
          </span>
          <span className="pill">{project.type}</span>
        </div>

        {/* Preview area — abstract graphic */}
        <div className="w-full h-40 rounded-xl mb-6 overflow-hidden relative"
          style={{ background: `linear-gradient(135deg, ${accent}10 0%, transparent 60%)`, border: `1px solid ${accent}25` }}>
          <div className="absolute inset-0 flex items-center justify-center opacity-30" style={{ color: accent }}>
            {project.type === 'Mobile Development' ? (
              <svg viewBox="0 0 120 80" className="w-32 h-24" fill="none">
                <rect x="40" y="5" width="40" height="70" rx="6" stroke="currentColor" strokeWidth="1.5"/>
                <rect x="44" y="12" width="32" height="50" rx="2" fill="currentColor" opacity="0.3"/>
                <circle cx="60" cy="68" r="3" stroke="currentColor" strokeWidth="1.5"/>
                <line x1="15" y1="25" x2="35" y2="25" stroke="currentColor" strokeWidth="1"/>
                <line x1="15" y1="30" x2="35" y2="30" stroke="currentColor" strokeWidth="1"/>
                <line x1="85" y1="25" x2="105" y2="25" stroke="currentColor" strokeWidth="1"/>
                <line x1="85" y1="30" x2="105" y2="30" stroke="currentColor" strokeWidth="1"/>
              </svg>
            ) : (
              <svg viewBox="0 0 120 80" className="w-32 h-24" fill="none">
                <rect x="5" y="10" width="110" height="60" rx="4" stroke="currentColor" strokeWidth="1.5"/>
                <rect x="5" y="10" width="110" height="14" rx="4" fill="currentColor" opacity="0.3"/>
                <rect x="15" y="32" width="40" height="6" rx="2" fill="currentColor" opacity="0.4"/>
                <rect x="15" y="42" width="60" height="4" rx="2" fill="currentColor" opacity="0.2"/>
                <rect x="15" y="50" width="50" height="4" rx="2" fill="currentColor" opacity="0.2"/>
                <rect x="70" y="32" width="30" height="25" rx="2" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
              </svg>
            )}
          </div>
          <div className="absolute bottom-3 right-3">
            <span className="font-mono text-[10px] tracking-widest" style={{ color: accent }}>
              {project.tags[0]}
            </span>
          </div>
        </div>

        <div className="flex-1">
          <h3 className="font-display text-3xl font-medium text-offwhite mb-1">{project.title}</h3>
          <p className="font-sans text-sm font-semibold mb-4" style={{ color: accent }}>{project.subtitle}</p>
          <p className="font-sans font-medium text-sm text-muted leading-relaxed mb-6">{project.desc}</p>
        </div>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map(t => (
            <span key={t} className="font-mono text-[11px] px-2.5 py-1 rounded-md"
              style={{ background: accent + '12', color: accent, border: `1px solid ${accent}30` }}>
              {t}
            </span>
          ))}
        </div>

        {/* CTA */}
        <a href={project.link} target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-sans font-semibold text-sm transition-all duration-200 hover-underline"
          style={{ color: accent }}>
          {project.linkLabel}
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M1 11L11 1M11 1H4M11 1v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </div>
  );
}

export default function Projects({ theme = 'dark' }) {
  const [ref, visible] = useInView();

  return (
    <section id="projects" className="py-28 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <div>
              <span className="section-label">02 — Projects</span>
              <h2 className="section-title mt-4">Selected<br/><em className="not-italic text-mint">work.</em></h2>
            </div>
            <p className="font-sans font-medium text-muted text-sm max-w-xs">
              A curated set of projects that demonstrate design thinking and technical execution.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((p, i) => <ProjectCard key={p.num} project={p} index={i} theme={theme} />)}
        </div>
      </div>
    </section>
  );
}
