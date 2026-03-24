"use client";

import { useState } from "react";

const FORM_URL = "https://formsubmit.co/ajax/info@aff1.org";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORM_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(Object.fromEntries(data)),
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

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
                  <p>3801 N Capital of Texas Hwy</p>
                  <p>Ste E240-3901</p>
                  <p>Austin, TX 78746</p>
                </address>
              </div>
              <div className="card">
                <h3 className="mb-2 font-bold text-navy-700">📧 Email</h3>
                <a href="mailto:info@aff1.org" className="text-sm text-navy-600 hover:underline">
                  info@aff1.org
                </a>
              </div>
              <div className="card">
                <h3 className="mb-2 font-bold text-navy-700">👤 Contact Person</h3>
                <p className="text-sm text-gray-600">Jamie Lewis, Executive Director</p>
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

          {/* Contact Form */}
          <div>
            <h2 className="mb-6 text-2xl font-bold text-navy-700">
              Send a Message
            </h2>

            {status === "sent" ? (
              <div className="rounded-xl bg-green-50 border border-green-200 p-8 text-center">
                <p className="text-2xl mb-2">✅</p>
                <h3 className="text-lg font-bold text-green-800">Message Sent!</h3>
                <p className="mt-2 text-sm text-green-700">
                  Thank you for reaching out. We&apos;ll get back to you as soon as possible.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="btn-primary mt-4"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Honeypot for spam prevention */}
                <input type="text" name="_honey" style={{ display: "none" }} />
                {/* Disable captcha page */}
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_subject" value="New Contact Form Submission - AFF Website" />

                <div>
                  <label htmlFor="name" className="mb-1 block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-navy-500 focus:outline-none focus:ring-1 focus:ring-navy-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-navy-500 focus:outline-none focus:ring-1 focus:ring-navy-500"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="mb-1 block text-sm font-medium text-gray-700">
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
                  <label htmlFor="message" className="mb-1 block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-navy-500 focus:outline-none focus:ring-1 focus:ring-navy-500"
                    placeholder="How can we help?"
                  />
                </div>

                {status === "error" && (
                  <p className="text-sm text-red-600">
                    Something went wrong. Please try again or email us directly at info@aff1.org.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="btn-primary w-full disabled:opacity-75"
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>
                <p className="text-xs text-gray-400 text-center">
                  Messages are sent directly to our team. We typically respond within 24-48 hours.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
