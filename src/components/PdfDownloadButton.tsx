"use client";

export default function PdfDownloadButton() {
  return (
    <button
      onClick={() => window.print()}
      className="print-hidden text-sm text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
    >
      PDF
    </button>
  );
}
