import * as React from "react";
import { FileDown, FileText, Image as ImageIcon } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/src/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/src/components/ui/dropdownMenu";

const content = {
  en: {
    downloadCV: "Download CV",
    pdfVersion: "PDF Version",
    imageVersion: "Image Version (PNG)",
  },
  fa: {
    downloadCV: "دریافت رزومه",
    pdfVersion: "نسخه PDF",
    imageVersion: "نسخه تصویر (PNG)",
  },
};

interface DownloadCVProps {
  lang?: "en" | "fa";
}

export function DownloadCV({ lang }: DownloadCVProps) {
  const { i18n } = useTranslation();
  const activeLang = lang || (i18n.language === "fa" ? "fa" : "en");
  const t = content[activeLang];

  const handleDownload = (format: "pdf" | "png") => {
    const fileUrl = format === "pdf" ? "/Mohammad_Mehdi_CV.pdf" : "/Mohammad_Mehdi_CV.png";
    const link = document.createElement("a");
    link.href = fileUrl;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <DropdownMenu dir={activeLang === "fa" ? "rtl" : "ltr"}>
      <DropdownMenuTrigger asChild>
        <Button
          className="group relative transition-all duration-300 hover:scale-105 w-full sm:w-auto "
          aria-label={t.downloadCV}
        >
          {activeLang === "fa" ? (
            <>
              <span>{t.downloadCV}</span>
              <FileDown className="mr-2 h-4 w-4 transition-transform group-hover:-translate-y-1" />
            </>
          ) : (
            <>
              <FileDown className="mr-2 h-4 w-4 transition-transform group-hover:-translate-y-1" />
              <span>{t.downloadCV}</span>
            </>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[200px]">
        <DropdownMenuItem
          onClick={() => handleDownload("pdf")}
          className="cursor-pointer"
        >
          <FileText className="mr-2 h-4 w-4 rtl:ml-2 rtl:mr-0" />
          <span>{t.pdfVersion}</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => handleDownload("png")}
          className="cursor-pointer"
        >
          <ImageIcon className="mr-2 h-4 w-4 rtl:ml-2 rtl:mr-0" />
          <span>{t.imageVersion}</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
