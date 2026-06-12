import { useInView } from '../useInView';

export default function About() {
  const [ref, visible] = useInView();

  return (
    <section id="about" className="py-28 border-t border-border" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">

        <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="section-label">01 — About</span>

          <div className="mt-10 grid md:grid-cols-2 gap-16 items-start">
            {/* Left */}
            <div>
              <h2 className="font-display text-5xl md:text-6xl font-normal text-offwhite leading-tight mb-8">
                Designer who<br/><em className="text-mint not-italic">codes.</em>
              </h2>

              <div className="space-y-4 font-sans font-medium text-muted text-base leading-relaxed">
                <p>
                  I've always been the person who volunteered to handle the creative side of projects. Designing presentations, creating digital materials, and experimenting with layouts were things I genuinely enjoyed doing long before I started coding.
                </p>
                <p>
                  Whether I'm designing in Figma or building interfaces with React, I enjoy transforming ideas into experiences that feel intuitive, purposeful, and enjoyable to use. I'm constantly looking for opportunities to learn, improve, and create work that makes an impact.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {['UI/UX Designer', 'Frontend Developer', 'Graphic Designer', 'Problem Solver', 'Continuous Learner', 'Team Player'].map(t => (
                  <span key={t} className="pill-accent">{t}</span>
                ))}
              </div>
            </div>

            {/* Right — timeline / facts */}
            <div className="space-y-6">
              {[
                {
                  year: '2025',
                  title: 'Capstone — CoachMe',
                  desc: 'Developed a fitness coaching mobile application designed to help trainers manage clients, track progress, and create personalized workout plans.',
                },
                {
                  year: '2026',
                  title: 'Frontend Developer Intern — Zhiyuan DMS',
                  desc: 'Contributed to the design and development of a Distributor Management System, creating wireframes, prototypes, and frontend interfaces while collaborating closely with project leads and team members.',
                },
                {
                  year: 'Present',
                  title: 'Frontend Development Journey',
                  desc: 'Continuously building projects, exploring UI/UX design, and expanding my frontend development skills through hands-on learning and real-world experience.',
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-5 group">
                  <div className="flex flex-col items-center">
                    <div className="w-2 h-2 rounded-full bg-mint mt-1.5 shrink-0 group-hover:shadow-[0_0_8px_rgb(var(--color-accent))] transition-all" />
                    {i < 2 && <div className="w-px flex-1 bg-border mt-2" />}
                  </div>
                  <div className="pb-6">
                    <span className="font-mono text-[11px] text-mint">{item.year}</span>
                    <h3 className="font-sans font-semibold text-offwhite mt-0.5 mb-1">{item.title}</h3>
                    <p className="font-sans text-sm text-muted leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
