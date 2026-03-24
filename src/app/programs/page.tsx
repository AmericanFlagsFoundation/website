import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Programs & Care",
  description:
    "Explore the programs and care initiatives of the American Flags Foundation — community outreach, education, advocacy, and direct support.",
};

const programs = [
  {
    icon: "📢",
    title: "Community Awareness Campaigns",
    desc: "We bring mental health conversations into schools, workplaces, and neighborhoods through workshops, speaker series, and community events designed to normalize seeking help.",
    tag: "Shattering Silence",
  },
  {
    icon: "🎓",
    title: "Mental Health Education",
    desc: "Our educational programs provide evidence-based training on recognizing signs of mental health challenges, supporting loved ones, and practicing self-care.",
    tag: "Building Hope",
  },
  {
    icon: "🤝",
    title: "Peer Support Network",
    desc: "Connecting individuals with trained peer mentors who have lived experience with mental health challenges. Because sometimes, the best support comes from someone who truly understands.",
    tag: "Embracing Empathy",
  },
  {
    icon: "🏥",
    title: "Care Navigation",
    desc: "Our navigators help individuals find affordable, accessible mental health care — from therapy and counseling to crisis intervention and long-term support services.",
    tag: "Breaking Barriers",
  },
  {
    icon: "🌱",
    title: "Resilience Workshops",
    desc: "Hands-on workshops teaching coping strategies, stress management, mindfulness, and emotional regulation skills to individuals and families.",
    tag: "Fostering Resilience",
  },
  {
    icon: "📋",
    title: "Policy Advocacy",
    desc: "We advocate at local, state, and federal levels for policies that expand mental health coverage, increase funding, and protect the rights of those with mental health conditions.",
    tag: "Cultivating Optimism",
  },
];

export default function ProgramsPage() {
  return (
    <>
      <section className="bg-navy-700 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h1 className="text-4xl font-extrabold sm:text-5xl">
            Programs &amp; Care
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            Comprehensive initiatives to support mental health at every level.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((p) => (
            <div key={p.title} className="card flex flex-col">
              <span className="mb-3 text-4xl">{p.icon}</span>
              <span className="mb-2 inline-block w-fit rounded-full bg-navy-50 px-3 py-1 text-xs font-semibold text-navy-700">
                {p.tag}
              </span>
              <h3 className="mb-2 text-xl font-bold text-navy-700">
                {p.title}
              </h3>
              <p className="flex-1 text-gray-600">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-xl bg-navy-50 p-8 text-center sm:p-12">
          <h2 className="mb-4 text-2xl font-bold text-navy-700 sm:text-3xl">
            Want to Get Involved?
          </h2>
          <p className="mb-6 text-gray-600">
            Whether you want to volunteer, partner, or bring a program to your
            community, we&apos;d love to hear from you.
          </p>
          <Link href="/contact" className="btn-primary">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
