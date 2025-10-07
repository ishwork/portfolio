import { experiences } from '@/data/experience';

export function Experience() {
  return (
    <section id="experience" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-5xl">
        <div className="space-y-4 mb-16">
          <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
            Experience
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-balance">
            Where I have Worked
          </h3>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group relative grid md:grid-cols-[200px_1fr] gap-4 md:gap-8 pb-12 border-b border-gray-200 last:border-0"
            >
              <div className="text-sm text-gray-600 font-medium">
                {exp.company} | {exp.period}
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-1">
                    {exp.title}
                  </h4>
                </div>

                <ul className="space-y-2 text-gray-600 leading-relaxed">
                  {Object.values(exp.description).map((desc, descIndex) => (
                    <li key={descIndex} className="flex items-start gap-3">
                      <span className="inline-block w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
