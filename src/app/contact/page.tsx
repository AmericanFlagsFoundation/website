import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with the American Flags Foundation. We'd love to hear from you.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-navy-700 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h1 className="text-4xl font-extrabold sm:text-5xl">Contact Us</h1>
          <p className="mt-4 text-lg text-gray-300">
            Have questions, want to volunteer, or need support? We&apos;re here
            to help.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2">
          {/* Contact Info */}
          <div>
            <h2 className="mb-6 text-2xl font-bold text-navy-700">
              Get In Touch
            </h2>
            <div className="space-y-6">
              <div className="card">
                <h3 className="mb-2 font-bold text-navy-700">📍 Address</h3>
                <address className="text-sm not-italic text-gray-600">
                  <p>American Flags Foundation</p>
                  <p>18000 Prato Drive</p>
                  <p>Pflugerville, TX 78660</p>
                </address>
              </div>
              <div className="card">
                <h3 className="mb-2 font-bold text-navy-700">👤 Contact Person</h3>
                <p className="text-sm text-gray-600">Isiaka Abejide</p>
              </div>
              <div className="card">
                <h3 className="mb-2 font-bold text-navy-700">🏛️ Organization Details</h3>
                <p className="text-sm text-gray-600">
                  501(c)(3) Public Charity
                  <br />
                  EIN: 93-3268747
                  <br />
                  Founded: September 2023
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form (static placeholder) */}
          <div>
            <h2 className="mb-6 text-2xl font-bold text-navy-700">
              Send a Message
            </h2>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-navy-500 focus:outline-none focus:ring-1 focus:ring-navy-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-navy-500 focus:outline-none focus:ring-1 focus:ring-navy-500"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-navy-500 focus:outline-none focus:ring-1 focus:ring-navy-500"
                >
                  <option>General Inquiry</option>
                  <option>Volunteer</option>
                  <option>Partnership</option>
                  <option>Donation Question</option>
                  <option>Media / Press</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-navy-500 focus:outline-none focus:ring-1 focus:ring-navy-500"
                  placeholder="How can we help?"
                />
              </div>
              <button type="button" className="btn-primary w-full cursor-not-allowed opacity-75" disabled>
                Send Message (Coming Soon)
              </button>
              <p className="text-xs text-gray-400 text-center">
                Form submission will be enabled once our email backend is configured.
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
