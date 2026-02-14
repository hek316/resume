import { resume } from "@/data/resume";

export default function Experience() {
  return (
    <section className="mb-12">
      <h2 className="text-[13px] font-semibold text-gray-900 uppercase tracking-widest mb-5 pb-2 border-b border-gray-200">
        Experience
      </h2>
      <div className="space-y-8">
        {resume.experience.map((exp) => (
          <div key={`${exp.company}-${exp.period}`} className="break-inside-avoid">
            <p className="text-[15px] font-semibold text-gray-900">
              {exp.company}
            </p>
            <div className="flex justify-between items-baseline mt-0.5 sm:flex-row flex-col gap-0.5 sm:gap-0">
              <span className="text-sm text-gray-500">{exp.role}</span>
              <span className="text-[13px] text-gray-500">{exp.period}</span>
            </div>
            <p className="text-sm text-gray-500 mt-1">{exp.description}</p>
            <ul className="mt-3 space-y-1">
              {exp.achievements.map((achievement, i) => (
                <li key={i} className="text-sm text-gray-700 pl-4 relative before:content-['-'] before:absolute before:left-0 before:text-gray-400">
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
