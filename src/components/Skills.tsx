import { resume } from "@/data/resume";

export default function Skills() {
  return (
    <section className="mb-10">
      <h2 className="text-[13px] font-semibold text-gray-400 mb-4 tracking-wide">
        Skills
      </h2>
      <div className="space-y-3">
        {resume.skills.map((skill) => (
          <div key={skill.category} className="flex text-sm sm:flex-row flex-col gap-1 sm:gap-0">
            <span className="w-[120px] shrink-0 text-[13px] font-medium text-gray-900">
              {skill.category}
            </span>
            <div className="flex flex-wrap gap-1.5">
              {skill.items.map((item, i) => (
                <span
                  key={item}
                  className={`inline-block px-2 py-0.5 rounded text-[13px] ${
                    i === 0
                      ? "bg-blue-50 text-blue-700 font-medium"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
