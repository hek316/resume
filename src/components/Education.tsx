import { resume } from "@/data/resume";

export default function Education() {
  return (
    <section className="mb-10">
      <h2 className="text-[13px] font-semibold text-gray-400 mb-4 tracking-wide">
        Education
      </h2>
      <div className="space-y-2">
        {resume.education.map((edu) => (
          <div key={edu.institution} className="flex flex-col sm:flex-row gap-1 sm:gap-5">
            <div className="w-[130px] shrink-0">
              <span className="text-[13px] text-gray-400 tabular-nums">{edu.period}</span>
            </div>
            <span className="text-sm text-gray-700">
              {edu.institution}
              {edu.degree && <span className="text-gray-400"> · {edu.degree}</span>}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
