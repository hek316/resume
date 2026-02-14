import { resume } from "@/data/resume";

export default function Projects() {
  return (
    <section className="mb-12">
      <h2 className="text-[13px] font-semibold text-gray-900 uppercase tracking-widest mb-5 pb-2 border-b border-gray-200">
        Projects
      </h2>
      <div className="space-y-8">
        {resume.projects.map((project) => (
          <div key={project.title} className="break-inside-avoid">
            <div className="flex justify-between items-baseline sm:flex-row flex-col gap-0.5 sm:gap-0">
              <p className="text-[15px] font-semibold text-gray-900">
                {project.title}
              </p>
              <span className="text-[13px] text-gray-500">
                {project.period}
              </span>
            </div>
            <p className="text-sm text-gray-500 mt-0.5">
              {project.description}
            </p>
            <p className="text-sm text-gray-700 mt-2 leading-relaxed">
              {project.detail}
            </p>
            <p className="text-[13px] text-gray-500 mt-2">
              {project.techStack.join(", ")}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
