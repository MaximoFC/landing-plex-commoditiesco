"use client";
import React, { useState } from "react";

type ContactFormData = {
  name: string;
  email: string;
  message: string;
  company: string; // honeypot (hidden)
};

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
    company: "",
  });

  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSent(false);
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok) {
        setSent(true);
        setFormData({ name: "", email: "", message: "", company: "" });
      } else {
        setError(data.error || "Failed to send message. Please try again.");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-32 bg-stone-50" id="contact">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-24">
          <h2 className="font-serif text-3xl md:text-4xl text-neutral-900 mb-6">
            CONTACT US
          </h2>
          <p className="text-neutral-600 text-lg leading-relaxed">
            Get in touch with us for inquiries, partnerships, or product
            information. We’ll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-20 items-start">
          <form className="space-y-4 max-w-md" onSubmit={handleSubmit}>
            {/* Honeypot (hidden). Bots often fill this field. Humans won't see it. */}
            <div className="hidden">
              <label className="block text-sm text-neutral-700 mb-2">
                Company
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                autoComplete="off"
                tabIndex={-1}
              />
            </div>

            <div>
              <label className="block text-sm text-neutral-700 mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                className="w-full border border-neutral-300 px-4 py-3 focus:outline-none focus:ring-1 focus:ring-neutral-900"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
                minLength={2}
                maxLength={100}
              />
            </div>

            <div>
              <label className="block text-sm text-neutral-700 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="w-full border border-neutral-300 px-4 py-3 focus:outline-none focus:ring-1 focus:ring-neutral-900"
                placeholder="you@email.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block text-sm text-neutral-700 mb-2">
                Message
              </label>
              <textarea
                rows={5}
                name="message"
                className="w-full border border-neutral-300 px-4 py-3 focus:outline-none focus:ring-1 focus:ring-neutral-900"
                placeholder="Tell us how we can help you"
                value={formData.message}
                onChange={handleChange}
                required
                minLength={10}
                maxLength={2000}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="inline-block bg-neutral-900 text-white px-8 py-4 text-sm tracking-wide hover:bg-neutral-800 transition disabled:opacity-50"
            >
              {loading ? "SENDING..." : "SEND MESSAGE"}
            </button>

            {sent && (
              <p className="text-sm text-green-700">
                Message sent successfully. We’ll get back to you soon.
              </p>
            )}
            {error && <p className="text-sm text-red-600">{error}</p>}
          </form>

          <div className="hidden lg:block w-px bg-stone-300 h-full" />

          <div className="space-y-12">
            <div>
              <h3 className="font-serif text-xl text-neutral-900 mb-3">
                Email
              </h3>
              <p className="text-neutral-600">contact@plexcommodities.com</p>
            </div>

            <div>
              <h3 className="font-serif text-xl text-neutral-900 mb-3">
                Phone
              </h3>
              <p className="text-neutral-600">+1 (431) 866-1737</p>
            </div>

            <div>
              <h3 className="font-serif text-xl text-neutral-900 mb-3">
                LinkedIn
              </h3>
              <a
                href="https://www.linkedin.com/company/plex-commodities"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 hover:text-neutral-900 transition"
              >
                linkedin.com/company/plex-commodities
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
