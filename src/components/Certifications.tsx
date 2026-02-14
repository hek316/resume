import { resume } from "@/data/resume";

export default function Certifications() {
  return (
    <section className="mb-10">
      <h2 className="text-[13px] font-semibold text-gray-400 mb-4 tracking-wide">
        Certifications
      </h2>
      <div className="space-y-2">
        {resume.certifications.map((cert) => (
          <div key={cert.name} className="flex flex-col sm:flex-row gap-1 sm:gap-5">
            <div className="w-[130px] shrink-0">
              <span className="text-[13px] text-gray-400 tabular-nums">{cert.year}</span>
            </div>
            <span className="text-sm text-gray-700">{cert.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
