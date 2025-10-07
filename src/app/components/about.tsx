export function About() {
  return (
    <section
      id="about"
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-secondary-background"
    >
      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          <div className="space-y-4">
            <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
              About
            </h2>
            <h3 className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-balance">
              Crafting Digital Experiences
            </h3>
          </div>

          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p>
              I am a software developer with over 4 years of professional
              experience, specialize in building and maintaining robust software
              solutions. I am passionate about leveraging the power of
              programming to create and implement innovative applications that
              enhance business productivity.
            </p>
            <p>
              Driven by a passion for continuous learning and improvement, I
              actively seek opportunities to expand my knowledge and skills, and
              apply emerging technologies to create high-quality solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
