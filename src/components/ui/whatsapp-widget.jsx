import React, { useState } from "react";
import { Button, Card, CardContent, Badge } from "@/components/ui";
import contactData from "@/data/contact.json";
import { X, Send, Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";

const WhatsAppIcon = ({ className = "size-6" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={className}
    fill="currentColor"
  >
    <path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28" />
  </svg>
);

export default function WhatsAppWidget() {
  const { t } = useTranslation(["widget", "contact"]);
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const { info } = contactData;
  const whatsappNumber = info?.whatsappNumber || "6281246329192";
  
  const translatedTemplates = t("contact:templates", { returnObjects: true });
  const whatsappTemplates = Array.isArray(translatedTemplates) && translatedTemplates.length > 0
    ? translatedTemplates
    : contactData.whatsappTemplates || [];

  const handleSend = (templateObj) => {
    let finalMsg = "";
    if (typeof templateObj === "object" && templateObj?.message) {
      finalMsg = `*${templateObj.subject || "Pesan dari Portofolio"}*\n\n${templateObj.message}`;
    } else if (typeof templateObj === "string" && templateObj.trim()) {
      finalMsg = templateObj;
    } else if (message.trim()) {
      finalMsg = message;
    } else {
      finalMsg = "Halo Willy, saya bermaksud berdiskusi tentang projek.";
    }

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(finalMsg)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start gap-3 select-none">
      {/* WhatsApp Liquid Glass Popup Drawer */}
      {isOpen && (
        <Card className="w-[320px] sm:w-[360px] h-[430px] flex flex-col glass-panel glass-specular-corner shadow-2xl rounded-3xl overflow-hidden border animate-in fade-in slide-in-from-bottom-5 duration-300 backdrop-blur-3xl hover:translate-y-0">
          {/* Header - Liquid Glass Emerald Bar */}
          <div className="p-4 bg-emerald-600/90 dark:bg-emerald-600/70 backdrop-blur-2xl text-white flex items-center justify-between border-b border-white/20 shadow-md shrink-0">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="size-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md border border-white/30">
                  <WhatsAppIcon className="size-6 text-white" />
                </div>
                <span className="absolute bottom-0 right-0 size-3 bg-emerald-400 border-2 border-emerald-600 rounded-full"></span>
              </div>
              <div>
                <h4 className="font-extrabold text-sm leading-tight text-white">Willy Permana</h4>
                <div className="pt-0.5">
                  <Badge variant="ghost" className="bg-white/20 text-white border-white/30 text-[10px] px-2 py-0.5 font-medium flex items-center gap-1.5 inline-flex">
                    <span className="size-1.5 rounded-full bg-emerald-300 animate-pulse"></span>
                    {t("widget:status")}
                  </Badge>
                </div>
              </div>
            </div>

            <Button
              variant="ghost"
              size="icon-sm"
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20 hover:text-white"
              aria-label="Close WhatsApp Drawer"
            >
              <X className="size-4.5" />
            </Button>
          </div>

          {/* Scrollable Body / Chat preview */}
          <CardContent className="p-4 space-y-4 flex-1 overflow-y-auto pt-4 min-h-0">
            {/* Greeting bubble using UI Card */}
            <div className="glass-card p-3.5 rounded-2xl rounded-tl-xs text-xs space-y-1.5 border border-white/40 dark:border-white/10 shadow-xs">
              <p className="font-bold text-foreground">{t("widget:greetingTitle")}</p>
              <p className="text-muted-foreground leading-relaxed">
                {t("widget:greetingBody")}
              </p>
              <span className="text-[10px] text-muted-foreground/70 block text-right">{t("widget:justNow")}</span>
            </div>

            {/* Quick Templates using UI Buttons */}
            {whatsappTemplates.length > 0 && (
              <div className="space-y-1.5">
                <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider flex items-center gap-1">
                  <Sparkles className="size-3 text-amber-500" /> {t("widget:templatesHeader")}
                </p>
                <div className="flex flex-col gap-1.5">
                  {whatsappTemplates.map((template) => (
                    <Button
                      key={template.id}
                      variant="outline"
                      size="sm"
                      onClick={() => handleSend(template)}
                      className="w-full justify-between h-auto py-2.5 px-3.5 text-xs font-semibold rounded-xl bg-white/40 dark:bg-white/5 hover:bg-emerald-500/15 dark:hover:bg-emerald-500/20 hover:border-emerald-500/40 text-foreground border-white/30 dark:border-white/10 shadow-xs text-left"
                    >
                      <span className="truncate">{template.label}</span>
                      <Send className="size-3.5 opacity-60 group-hover:opacity-100 text-emerald-600 dark:text-emerald-400 transition-opacity" />
                    </Button>
                  ))}
                </div>
              </div>
            )}
          </CardContent>

          {/* Floating Liquid Glass Input Pill at Bottom (No Solid Footer) */}
          <div className="p-3 pt-1 shrink-0">
            <div className="flex items-center gap-2 p-1.5 pl-4 rounded-full glass-panel glass-specular-corner shadow-lg border border-white/50 dark:border-white/20 backdrop-blur-2xl bg-white/60 dark:bg-zinc-900/60">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSend();
                }}
                placeholder={t("widget:inputPlaceholder")}
                className="flex-1 bg-transparent text-xs text-foreground placeholder:text-muted-foreground/70 outline-none border-none focus:outline-none focus:ring-0 h-8"
              />
              <Button
                size="icon-sm"
                onClick={() => handleSend()}
                className="bg-emerald-600! hover:bg-emerald-500 text-white shadow-md hover:shadow-emerald-500/30 rounded-full shrink-0 border-none cursor-pointer"
                aria-label="Send via WhatsApp"
              >
                <Send className="size-3.5" />
              </Button>
            </div>
          </div>
        </Card>
      )}

      {/* Trigger Button - Floating Round Circle using UI Button */}
      <Button
        size="icon-lg"
        onClick={() => setIsOpen(!isOpen)}
        className="relative group p-0 size-13 sm:size-14 rounded-full bg-emerald-500/80! hover:bg-emerald-500 text-white shadow-xl hover:shadow-emerald-500/40"
        aria-label="Open WhatsApp Chat"
      >
        {!isOpen && (
          <span className="absolute -inset-1 rounded-full bg-emerald-400 opacity-40 animate-ping pointer-events-none"></span>
        )}

        {isOpen ? (
          <X className="size-6 relative z-10 text-white" />
        ) : (
          <WhatsAppIcon className="size-6.5 relative z-10 text-white fill-current" />
        )}
      </Button>
    </div>
  );
}
