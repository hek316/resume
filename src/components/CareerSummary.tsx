import { resume } from "@/data/resume";

export default function CareerSummary() {
  return (
    <section className="mb-12 pt-8 border-t border-gray-200">
      <p className="text-sm text-gray-700 leading-relaxed">
        {resume.careerSummary}
      </p>
    </section>
  );
}
