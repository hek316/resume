import { resume } from "@/data/resume";

export default function Education() {
  return (
    <section className="mb-12">
      <h2 className="text-[13px] font-semibold text-gray-900 uppercase tracking-widest mb-5 pb-2 border-b border-gray-200">
        Education
      </h2>
      <div className="space-y-2">
        {resume.education.map((edu) => (
          <div key={edu.institution} className="flex justify-between items-baseline">
            <span className="text-sm text-gray-700">
              {edu.institution}
              {edu.degree && ` ${edu.degree}`}
            </span>
            <span className="text-[13px] text-gray-500">{edu.period}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
