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
                  I'm an IT student and aspiring frontend developer passionate about building interfaces that are both beautiful and intuitive. I believe great digital products live at the intersection of design thinking and technical execution.
                </p>
                <p>
                  With a background in UI/UX and graphic design, I bring a designer's eye to every line of code — crafting experiences that users genuinely enjoy.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {['UI/UX Designer', 'Frontend Developer', 'Graphic Designer', 'IT Student'].map(t => (
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
                  desc: 'Built a full fitness coaching mobile app with React Native, TypeScript, Expo & Supabase.',
                },
                {
                  year: '2026',
                  title: 'UX Work — Zhiyuan DMS',
                  desc: 'Designed end-to-end wireframes for a distribution management system in Figma.',
                },
                {
                  year: 'Present',
                  title: 'Studying IT & Frontend',
                  desc: 'Deepening expertise in React, TypeScript, and user-centered design principles.',
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
