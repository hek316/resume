import { resume } from "@/data/resume";

function highlightNumbers(text: string) {
  const parts = text.split(/(\d+[\d,.]*\s*[%배건만억원분초개월일명라인GB대]?)/g);
  return parts.map((part, i) =>
    /\d/.test(part) ? (
      <span key={i} className="font-semibold text-gray-900">{part}</span>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

export default function Projects() {
  return (
    <section className="mb-10">
      <h2 className="text-[13px] font-semibold text-gray-400 mb-5 tracking-wide">
        Projects
      </h2>
      <div className="space-y-0">
        {resume.projects.map((project, idx) => (
          <div
            key={project.title}
            className={`break-inside-avoid flex flex-col sm:flex-row gap-1 sm:gap-5 py-6 ${
              idx !== resume.projects.length - 1 ? "border-b border-gray-100" : ""
            } ${idx === 0 ? "pt-0" : ""}`}
          >
            <div className="w-[130px] shrink-0 pt-0.5">
              {project.client && (
                <p className="text-[13px] text-gray-400">{project.client}</p>
              )}
            </div>
            <div className="flex-1">
              <p className="text-[16px] font-bold text-gray-900">
                {project.title}
              </p>

              <div className="mt-3 space-y-3">
                {project.achievements.map((ach) => (
                  <div key={ach.title}>
                    <p className="text-[14px] font-semibold text-gray-800">
                      {ach.title}
                    </p>
                    {ach.analysis && (
                      <p className="text-[13px] text-gray-500 mt-1">
                        <span className="text-gray-400">분석</span> {ach.analysis}
                      </p>
                    )}
                    <p className="text-[13px] text-gray-600 mt-1">
                      <span className="text-gray-400">해결</span> {ach.solution}
                    </p>
                    <ul className="mt-1.5 space-y-0.5">
                      {ach.results.map((result, i) => (
                        <li key={i} className="text-[13px] text-gray-600 pl-4 relative before:content-['→'] before:absolute before:left-0 before:text-blue-400">
                          {highlightNumbers(result)}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-1.5 mt-3">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="inline-block px-2 py-0.5 rounded bg-gray-100 text-[12px] text-gray-500"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
