import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "American Flags Foundation | Combatting Mental Health Stigma",
};

const pillars = [
  {
    icon: "🔇",
    title: "Shattering Silence",
    desc: "Breaking the silence around mental health to create open, honest conversations in every community.",
  },
  {
    icon: "💛",
    title: "Embracing Empathy",
    desc: "Fostering understanding and compassion so no one faces mental health challenges alone.",
  },
  {
    icon: "🌅",
    title: "Building Hope",
    desc: "Inspiring individuals and families to believe in recovery, growth, and brighter tomorrows.",
  },
  {
    icon: "🚧",
    title: "Breaking Barriers",
    desc: "Removing systemic obstacles that prevent people from accessing the mental health care they deserve.",
  },
  {
    icon: "💪",
    title: "Fostering Resilience",
    desc: "Equipping communities with tools and support to bounce back from adversity.",
  },
  {
    icon: "☀️",
    title: "Cultivating Optimism",
    desc: "Planting seeds of positivity and forward-looking change in the mental health landscape.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-navy-700 via-navy-800 to-navy-900 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-red-500" />
          <div className="absolute -bottom-32 -left-32 h-[500px] w-[500px] rounded-full bg-blue-400" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-red-300">
              501(c)(3) Public Charity &bull; EIN 93-3268747
            </p>
            <h1 className="mb-6 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              Combatting Mental Health Stigma,{" "}
              <span className="text-red-400">One Life at a Time</span>
            </h1>
            <p className="mb-8 max-w-xl text-lg text-gray-300 sm:text-xl">
              The American Flags Foundation is dedicated to shattering the
              silence surrounding mental health. We embrace empathy, build hope,
              and break barriers so every American can thrive.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/donate" className="btn-primary">
                Support Our Mission
              </Link>
              <Link
                href="/get-help"
                className="inline-block rounded-lg border-2 border-white px-6 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-navy-800"
              >
                Get Help Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="section-heading">Our Mission</h2>
          <p className="text-lg leading-relaxed text-gray-600">
            Founded in September 2023, the American Flags Foundation exists to
            combat mental health stigma and challenges across America. We believe
            that mental health is a fundamental right — not a privilege. Through
            advocacy, education, and direct support, we work to create a nation
            where seeking help is a sign of strength, not weakness.
          </p>
        </div>
      </section>

      {/* Impact Areas / Pillars */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="section-heading">Our Six Pillars of Impact</h2>
            <p className="section-subheading mx-auto">
              Every action we take is guided by these core commitments.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((p) => (
              <div key={p.title} className="card text-center">
                <span className="mb-3 inline-block text-4xl">{p.icon}</span>
                <h3 className="mb-2 text-xl font-bold text-navy-700">
                  {p.title}
                </h3>
                <p className="text-gray-600">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-red-600 py-14 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            You Are Not Alone
          </h2>
          <p className="mb-6 text-lg text-red-100">
            If you or someone you know is struggling, help is available right
            now. Call or text <strong>988</strong> for the Suicide &amp; Crisis
            Lifeline.
          </p>
          <Link
            href="/get-help"
            className="inline-block rounded-lg bg-white px-8 py-3 font-bold text-red-600 transition-colors hover:bg-gray-100"
          >
            Find Resources →
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 text-center sm:grid-cols-3">
            {[
              ["1 in 5", "Americans experience mental illness each year"],
              ["60%", "Of adults with mental illness received no treatment"],
              ["988", "Call or text for immediate crisis support"],
            ].map(([stat, label]) => (
              <div key={stat}>
                <p className="text-4xl font-extrabold text-navy-700 sm:text-5xl">
                  {stat}
                </p>
                <p className="mt-2 text-gray-600">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
