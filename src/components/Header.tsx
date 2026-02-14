import { resume } from "@/data/resume";
import PdfDownloadButton from "./PdfDownloadButton";

export default function Header() {
  const { profile, links } = resume;

  return (
    <header className="mb-10">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-[36px] font-extrabold text-gray-900 tracking-tight leading-tight">
            {profile.name}
          </h1>
          <p className="mt-2 text-[17px] text-gray-600 font-medium">
            {profile.title}
          </p>
        </div>
        <PdfDownloadButton />
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-[13px] text-gray-500">
        <span>{profile.email}</span>
        <span className="text-gray-300">&middot;</span>
        <span>{profile.phone}</span>
        <span className="text-gray-300">&middot;</span>
        <span>{profile.location}</span>
        {links.map((link) => (
          <span key={link.url} className="flex items-center gap-x-2">
            <span className="text-gray-300">&middot;</span>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2"
            >
              {link.label}
            </a>
          </span>
        ))}
      </div>
    </header>
  );
}
