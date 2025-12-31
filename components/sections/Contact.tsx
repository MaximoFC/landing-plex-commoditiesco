"use client";

export default function Contact() {
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
          <form className="space-y-4 max-w-md">
            <div>
              <label className="block text-sm text-neutral-700 mb-2">
                Name
              </label>
              <input
                type="text"
                className="w-full border border-neutral-300 px-4 py-3 focus:outline-none focus:ring-1 focus:ring-neutral-900"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm text-neutral-700 mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full border border-neutral-300 px-4 py-3 focus:outline-none focus:ring-1 focus:ring-neutral-900"
                placeholder="you@email.com"
              />
            </div>

            <div>
              <label className="block text-sm text-neutral-700 mb-2">
                Message
              </label>
              <textarea
                rows={5}
                className="w-full border border-neutral-300 px-4 py-3 focus:outline-none focus:ring-1 focus:ring-neutral-900"
                placeholder="Tell us how we can help you"
              />
            </div>

            <button
              type="submit"
              className="inline-block bg-neutral-900 text-white px-8 py-4 text-sm tracking-wide hover:bg-neutral-800 transition"
            >
              SEND MESSAGE
            </button>
          </form>

          <div className="hidden lg:block w-px bg-stone-300 h-full" />

          <div className="space-y-12">
            <div>
              <h3 className="font-serif text-xl text-neutral-900 mb-3">
                Email
              </h3>
              <p className="text-neutral-600">contact@yourcompany.com</p>
            </div>

            <div>
              <h3 className="font-serif text-xl text-neutral-900 mb-3">
                Phone
              </h3>
              <p className="text-neutral-600">+1 (234) 567-890</p>
            </div>

            <div>
              <h3 className="font-serif text-xl text-neutral-900 mb-3">
                LinkedIn
              </h3>
              <a
                href="#"
                target="_blank"
                className="text-neutral-600 hover:text-neutral-900 transition"
              >
                linkedin.com/company/yourcompany
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
