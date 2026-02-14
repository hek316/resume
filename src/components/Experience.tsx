import { resume } from "@/data/resume";

function highlightNumbers(text: string) {
  const parts = text.split(/(\d+[\d,.]*\s*[%건만억원분초개월일명개사]?)/g);
  return parts.map((part, i) =>
    /\d/.test(part) ? (
      <span key={i} className="font-semibold text-gray-900">{part}</span>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

export default function Experience() {
  return (
    <section className="mb-10">
      <h2 className="text-[13px] font-semibold text-gray-400 mb-5 tracking-wide">
        Experience
      </h2>
      <div className="space-y-8">
        {resume.experience.map((exp) => (
          <div key={`${exp.company}-${exp.period}`} className="break-inside-avoid flex flex-col sm:flex-row gap-1 sm:gap-5">
            <div className="w-[130px] shrink-0 pt-0.5">
              <p className="text-[13px] text-gray-400 tabular-nums">{exp.period}</p>
            </div>
            <div className="flex-1">
              <p className="text-[16px] font-bold text-gray-900">
                {exp.company}
              </p>
              <p className="text-sm text-gray-500 mt-0.5">{exp.role} · {exp.description}</p>
              <ul className="mt-3 space-y-1.5">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="text-sm text-gray-600 pl-4 relative before:content-['·'] before:absolute before:left-0.5 before:text-blue-400 before:font-bold">
                    {highlightNumbers(achievement)}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
