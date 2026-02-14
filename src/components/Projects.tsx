import { resume } from "@/data/resume";

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
              <p className="text-[13px] text-gray-400 tabular-nums">{project.period}</p>
            </div>
            <div className="flex-1">
              <p className="text-[16px] font-bold text-gray-900">
                {project.title}
              </p>
              <p className="text-sm text-gray-500 mt-0.5">
                {project.description}
              </p>
              <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                {project.detail}
              </p>
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
