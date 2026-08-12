import React, { useState } from "react";
import {
  Title,
  Text,
  Badge,
  Button,
  Input,
  Textarea,
  Card,
  CardContent,
  SectionHeader,
} from "@/components/ui";
import contactData from "@/data/contact.json";
import { Mail, MapPin, Clock, Sparkles } from "lucide-react";

const WhatsAppIcon = ({ className = "size-5" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={className}
    fill="currentColor"
  >
    <path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28" />
  </svg>
);

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [selectedTemplateId, setSelectedTemplateId] = useState(null);

  const { sectionNumber, badge, description, info, whatsappTemplates = [], form } = contactData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectTemplate = (template) => {
    setSelectedTemplateId(template.id);
    setFormData((prev) => ({
      ...prev,
      subject: template.subject || prev.subject,
      message: template.message || prev.message,
    }));
  };

  const handleSendWhatsApp = (e) => {
    if (e) e.preventDefault();

    const name = formData.name ? formData.name.trim() : "-";
    const email = formData.email ? formData.email.trim() : "-";
    const subject = formData.subject ? formData.subject.trim() : "-";
    const message = formData.message ? formData.message.trim() : "-";

    const fullMessage = `*Pesan Baru dari Portofolio*\n\n• *Nama:* ${name}\n• *Email:* ${email}\n• *Subjek:* ${subject}\n\n*Pesan:*\n${message}`;

    const waUrl = `https://wa.me/${info.whatsappNumber || "6281246329192"}?text=${encodeURIComponent(fullMessage)}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="py-20 border-t border-border/30 relative overflow-hidden">
      <div className="container space-y-12 relative z-10">
        {/* Section Header */}
        <SectionHeader
          number={sectionNumber}
          title={badge}
          description={description}
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
          {/* Left Column: Info Cards using Apple Liquid Glass */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="glass-panel shadow-xl">
              <CardContent className="p-5 sm:p-8 space-y-5">
                {/* Email Row */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/30 dark:bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shrink-0">
                    <Mail className="size-6 text-primary" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <Title level={4} className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">
                      Email
                    </Title>
                    <a
                      href={`mailto:${info.email}`}
                      className="text-sm sm:text-base font-semibold hover:text-primary transition-colors break-all block"
                    >
                      {info.email}
                    </a>
                  </div>
                </div>

                {/* Location Row */}
                <div className="flex items-start gap-4 pt-5 border-t border-white/15 dark:border-white/10">
                  <div className="p-3 bg-white/30 dark:bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shrink-0">
                    <MapPin className="size-6 text-primary" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <Title level={4} className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">
                      Location
                    </Title>
                    <p className="text-sm sm:text-base font-semibold text-foreground break-words">
                      {info.location}
                    </p>
                  </div>
                </div>

                {/* Availability Row */}
                <div className="flex items-start gap-4 pt-5 border-t border-white/15 dark:border-white/10">
                  <div className="p-3 bg-white/30 dark:bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shrink-0">
                    <Clock className="size-6 text-primary" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <Title level={4} className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">
                      Availability
                    </Title>
                    <div className="pt-0.5">
                      <Badge variant="ghost" className="bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 px-3 py-1.5 text-xs font-semibold leading-relaxed text-wrap max-w-full">
                        {info.availability}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column: Contact Form using Apple Liquid Glass */}
          <Card className="lg:col-span-3 glass-panel shadow-xl">
            <CardContent className="p-5 sm:p-8">
              <form onSubmit={handleSendWhatsApp} className="space-y-5">
                {/* Template Messages Selector */}
                {whatsappTemplates.length > 0 && (
                  <div className="p-3 sm:p-4 rounded-2xl bg-white/20 dark:bg-white/5 border border-white/20 dark:border-white/10 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                        <Sparkles className="size-3.5 text-amber-500" /> Template Pesan Cepat:
                      </span>
                      {selectedTemplateId && (
                        <button
                          type="button"
                          onClick={() => {
                            setSelectedTemplateId(null);
                            setFormData((prev) => ({ ...prev, subject: "", message: "" }));
                          }}
                          className="text-[11px] text-muted-foreground hover:text-foreground underline"
                        >
                          Reset
                        </button>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {whatsappTemplates.map((template) => {
                        const isSelected = selectedTemplateId === template.id;
                        return (
                          <button
                            key={template.id}
                            type="button"
                            onClick={() => handleSelectTemplate(template)}
                            className={`text-xs font-semibold px-3 py-1.5 rounded-full transition-all duration-200 border cursor-pointer ${
                              isSelected
                                ? "bg-primary text-primary-foreground border-primary shadow-sm scale-105"
                                : "bg-white/40 dark:bg-white/10 hover:bg-white/60 dark:hover:bg-white/20 text-foreground border-white/30 dark:border-white/10"
                            }`}
                          >
                            {template.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase text-muted-foreground mb-1.5 ml-1">
                      {form.labels.name}
                    </label>
                    <Input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={form.labels.namePlaceholder}
                      className="rounded-2xl"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase text-muted-foreground mb-1.5 ml-1">
                      {form.labels.email}
                    </label>
                    <Input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={form.labels.emailPlaceholder}
                      className="rounded-2xl"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase text-muted-foreground mb-1.5 ml-1">
                    {form.labels.subject}
                  </label>
                  <Input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder={form.labels.subjectPlaceholder}
                    className="rounded-2xl"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase text-muted-foreground mb-1.5 ml-1">
                    {form.labels.message}
                  </label>
                  <Textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={form.labels.messagePlaceholder}
                    className="rounded-2xl"
                  />
                </div>

                {/* Single Submit Button: Send via WhatsApp */}
                <div className="pt-2">
                  <Button
                    type="submit"
                    size="xl"
                    className="w-full gap-2.5 shadow-lg bg-emerald-600 hover:bg-emerald-500 text-white border-none py-4 text-base font-semibold"
                  >
                    <WhatsAppIcon className="size-5 fill-current" />
                    Kirim via WhatsApp
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
