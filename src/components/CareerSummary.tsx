import { resume } from "@/data/resume";

export default function CareerSummary() {
  return (
    <section className="mb-10 pt-8 border-t border-gray-200">
      <h2 className="text-[13px] font-semibold text-gray-400 mb-3 tracking-wide">
        About
      </h2>
      <p className="text-[15px] text-gray-700 leading-relaxed">
        {resume.careerSummary}
      </p>
    </section>
  );
}
