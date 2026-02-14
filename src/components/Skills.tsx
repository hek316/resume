import { resume } from "@/data/resume";

export default function Skills() {
  return (
    <section className="mb-12">
      <h2 className="text-[13px] font-semibold text-gray-900 uppercase tracking-widest mb-5 pb-2 border-b border-gray-200">
        Skills
      </h2>
      <div className="space-y-2">
        {resume.skills.map((skill) => (
          <div key={skill.category} className="flex text-sm sm:flex-row flex-col gap-1 sm:gap-0">
            <span className="w-[90px] shrink-0 text-[13px] text-gray-500">
              {skill.category}
            </span>
            <span className="text-gray-700">{skill.items.join(", ")}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
