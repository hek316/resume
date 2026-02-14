import { resume } from "@/data/resume";

function highlightNumbers(text: string) {
  const parts = text.split(/(\d+[\d,.]*\s*[%배건만억원분초개월일명라인GB]?)/g);
  return parts.map((part, i) =>
    /\d/.test(part) ? (
      <span key={i} className="font-semibold text-gray-900">{part}</span>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

export default function CareerSummary() {
  const { careerSummary } = resume;

  return (
    <section className="mb-10 pt-8 border-t border-gray-200">
      <h2 className="text-[13px] font-semibold text-gray-400 mb-3 tracking-wide">
        About
      </h2>
      <p className="text-[15px] font-semibold text-gray-900 mb-2">
        {careerSummary.tagline}
      </p>
      <p className="text-sm text-gray-600 leading-relaxed">
        {careerSummary.description}
      </p>
      <ul className="mt-3 space-y-1.5">
        {careerSummary.highlights.map((highlight, i) => (
          <li
            key={i}
            className="text-sm text-gray-600 pl-4 relative before:content-['·'] before:absolute before:left-0.5 before:text-blue-400 before:font-bold"
          >
            {highlightNumbers(highlight)}
          </li>
        ))}
      </ul>
      <p className="text-sm text-gray-600 mt-3 leading-relaxed">
        {careerSummary.closing}
      </p>
    </section>
  );
}
