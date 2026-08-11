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
import { Mail, MapPin, Send, CheckCircle, Clock } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { sectionNumber, badge, description, info, form } = contactData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });

      setTimeout(() => setSubmitted(false), 5000);
    }, 800);
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
              {submitted ? (
                <div className="flex flex-col items-center justify-center text-center py-12 space-y-4">
                  <CheckCircle className="size-16 text-emerald-500 animate-bounce" />
                  <Title level={3} className="text-2xl font-bold">
                    {form.successMessage.title}
                  </Title>
                  <Text variant="muted" className="max-w-md">
                    {form.successMessage.text}
                  </Text>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
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

                  <Button
                    type="submit"
                    size="xl"
                    disabled={isSubmitting}
                    className="w-full gap-2 shadow-lg"
                  >
                    <Send className="size-4.5" />
                    {isSubmitting ? form.labels.submittingButton : form.labels.submitButton}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
