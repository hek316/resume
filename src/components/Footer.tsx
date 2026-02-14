import { resume } from "@/data/resume";

export default function Footer() {
  return (
    <footer className="print-hidden pt-8 border-t border-gray-200 flex items-center justify-between">
      <p className="text-[13px] text-gray-400">
        {resume.links.map((link, i) => (
          <span key={link.url}>
            {i > 0 && <span className="mx-1.5">&middot;</span>}
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-gray-600 transition-colors"
            >
              {link.label}
            </a>
          </span>
        ))}
      </p>
      <p className="text-[12px] text-gray-300">
        Updated Feb 2026
      </p>
    </footer>
  );
}
