import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Help Now",
  description:
    "Immediate mental health resources and crisis hotlines. You are not alone — help is available 24/7.",
};

const crisisResources = [
  {
    name: "988 Suicide & Crisis Lifeline",
    phone: "988",
    desc: "Free, confidential 24/7 support for people in suicidal crisis or emotional distress.",
    action: "Call or Text 988",
    url: "https://988lifeline.org",
  },
  {
    name: "Crisis Text Line",
    phone: "Text HOME to 741741",
    desc: "Free, 24/7 crisis support via text message. Trained crisis counselors ready to help.",
    action: "Text HOME to 741741",
    url: "https://www.crisistextline.org",
  },
  {
    name: "SAMHSA National Helpline",
    phone: "1-800-662-4357",
    desc: "Free, confidential, 24/7 treatment referral and information service for substance use and mental health.",
    action: "Call 1-800-662-4357",
    url: "https://www.samhsa.gov/find-help/national-helpline",
  },
  {
    name: "Veterans Crisis Line",
    phone: "988 (Press 1)",
    desc: "Specialized support for veterans and their loved ones, available 24/7.",
    action: "Call 988, Press 1",
    url: "https://www.veteranscrisisline.net",
  },
  {
    name: "Trevor Project (LGBTQ+ Youth)",
    phone: "1-866-488-7386",
    desc: "Crisis intervention and suicide prevention for LGBTQ+ young people under 25.",
    action: "Call 1-866-488-7386",
    url: "https://www.thetrevorproject.org",
  },
  {
    name: "NAMI Helpline",
    phone: "1-800-950-6264",
    desc: "Information, referrals, and support for individuals and families affected by mental illness.",
    action: "Call 1-800-950-6264",
    url: "https://www.nami.org/help",
  },
];

export default function GetHelpPage() {
  return (
    <>
      {/* Urgent Banner */}
      <section className="bg-red-600 py-8 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h1 className="text-3xl font-extrabold sm:text-4xl">
            If you are in immediate danger, call 911
          </h1>
          <p className="mt-3 text-lg text-red-100">
            For suicidal thoughts or emotional crisis, call or text{" "}
            <a href="tel:988" className="font-bold underline">
              988
            </a>{" "}
            — available 24/7, free, and confidential.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="section-heading">Crisis Resources</h2>
          <p className="section-subheading mx-auto">
            These organizations provide free, confidential support. You are not
            alone.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {crisisResources.map((r) => (
            <div
              key={r.name}
              className="card flex flex-col border-l-4 border-red-500"
            >
              <h3 className="mb-1 text-lg font-bold text-navy-700">
                {r.name}
              </h3>
              <p className="mb-2 text-sm font-semibold text-red-600">
                {r.phone}
              </p>
              <p className="mb-4 flex-1 text-sm text-gray-600">{r.desc}</p>
              <a
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-navy-600 hover:underline"
              >
                Learn More →
              </a>
            </div>
          ))}
        </div>

        {/* Self-help section */}
        <div className="mt-16">
          <h2 className="section-heading text-center">
            Additional Resources
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="card">
              <h3 className="mb-3 text-lg font-bold text-navy-700">
                🧠 Mental Health Screening
              </h3>
              <p className="mb-3 text-sm text-gray-600">
                Free, anonymous online screening tools to help you understand
                your mental health.
              </p>
              <a
                href="https://screening.mhanational.org/screening-tools/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-navy-600 hover:underline"
              >
                Take a Free Screening →
              </a>
            </div>
            <div className="card">
              <h3 className="mb-3 text-lg font-bold text-navy-700">
                📍 Find Treatment Near You
              </h3>
              <p className="mb-3 text-sm text-gray-600">
                SAMHSA&apos;s treatment locator helps you find mental health and
                substance use treatment facilities near your location.
              </p>
              <a
                href="https://findtreatment.gov"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-navy-600 hover:underline"
              >
                Find Treatment →
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
