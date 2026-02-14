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

export default function Experience() {
  return (
    <section className="mb-10">
      <h2 className="text-[13px] font-semibold text-gray-400 mb-5 tracking-wide">
        Experience
      </h2>
      <div className="space-y-10">
        {resume.experience.map((exp) => (
          <div key={`${exp.company}-${exp.period}`} className="break-inside-avoid flex flex-col sm:flex-row gap-1 sm:gap-5">
            <div className="w-[130px] shrink-0 pt-0.5">
              <p className="text-[13px] text-gray-400 tabular-nums">{exp.period}</p>
            </div>
            <div className="flex-1">
              <p className="text-[16px] font-bold text-gray-900">
                {exp.company}
              </p>
              <p className="text-sm text-gray-500 mt-0.5">
                {exp.team} · {exp.role} · {exp.description}
              </p>

              <div className="mt-5 space-y-5">
                {exp.achievements.map((ach) => (
                  <div key={ach.title} className="break-inside-avoid">
                    <p className="text-[14px] font-semibold text-gray-800">
                      {ach.title}
                    </p>
                    {(ach.background || ach.analysis) && (
                      <p className="text-[13px] text-gray-500 mt-1 leading-relaxed">
                        {ach.background && <><span className="text-gray-400">배경</span> {ach.background}</>}
                        {ach.background && ach.analysis && <br />}
                        {ach.analysis && <><span className="text-gray-400">분석</span> {ach.analysis}</>}
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
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
