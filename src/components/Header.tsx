import { resume } from "@/data/resume";
import PdfDownloadButton from "./PdfDownloadButton";

export default function Header() {
  const { profile, links } = resume;

  return (
    <header className="mb-8">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
            {profile.name}
          </h1>
          <p className="mt-1 text-[15px] text-gray-500">{profile.title}</p>
        </div>
        <PdfDownloadButton />
      </div>
      <p className="mt-3 text-[13px] text-gray-500">
        {profile.email} / {profile.phone} / {profile.location}
      </p>
      {links.length > 0 && (
        <p className="mt-1 text-[13px] text-gray-500">
          {links.map((link, i) => (
            <span key={link.url}>
              {i > 0 && " / "}
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
        </p>
      )}
    </header>
  );
}
