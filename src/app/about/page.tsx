import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about the American Flags Foundation — who we are, our story, and our commitment to combatting mental health stigma.",
};

export default function AboutPage() {
  return (
    <>
      {/* Banner */}
      <section className="bg-navy-700 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h1 className="text-4xl font-extrabold sm:text-5xl">Who We Are</h1>
          <p className="mt-4 text-lg text-gray-300">
            A 501(c)(3) public charity founded to change how America talks about
            mental health.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="prose prose-lg max-w-none">
          <h2 className="section-heading">Our Story</h2>
          <p className="text-gray-600 leading-relaxed">
            The American Flags Foundation was established in September 2023 with
            a bold mission: to shatter the silence surrounding mental health in
            America. Our founder recognized that millions of
            Americans were suffering in silence — held back not by a lack of
            courage, but by a culture of stigma that treated mental health
            struggles as weakness rather than a natural part of the human
            experience.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            From our base in Pflugerville, Texas, we set out to build a
            foundation — literally and figuratively — that would embrace empathy,
            cultivate optimism, and break down the barriers that keep people from
            getting the help they need.
          </p>

          <h2 className="section-heading mt-12">Our Values</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              ["Compassion First", "Every interaction is guided by genuine care and understanding for those we serve."],
              ["Radical Transparency", "We operate with openness and accountability in everything we do."],
              ["Community-Driven", "Our programs are shaped by the people and communities who need them most."],
              ["Evidence-Based", "We ground our work in research and proven approaches to mental health support."],
              ["Inclusive Access", "Mental health support should be available to everyone, regardless of background."],
              ["Strength in Vulnerability", "We believe that asking for help is one of the bravest things a person can do."],
            ].map(([title, desc]) => (
              <div key={title} className="card">
                <h3 className="mb-2 font-bold text-navy-700">{title}</h3>
                <p className="text-sm text-gray-600">{desc}</p>
              </div>
            ))}
          </div>

          <h2 className="section-heading mt-12">Legal Status</h2>
          <div className="card mt-4 bg-gray-50">
            <dl className="grid gap-3 sm:grid-cols-2 text-sm">
              <div>
                <dt className="font-semibold text-navy-700">Organization</dt>
                <dd className="text-gray-600">American Flags Foundation</dd>
              </div>
              <div>
                <dt className="font-semibold text-navy-700">EIN</dt>
                <dd className="text-gray-600">93-3268747</dd>
              </div>
              <div>
                <dt className="font-semibold text-navy-700">Status</dt>
                <dd className="text-gray-600">501(c)(3) Public Charity</dd>
              </div>
              <div>
                <dt className="font-semibold text-navy-700">Founded</dt>
                <dd className="text-gray-600">September 2023</dd>
              </div>
              <div>
                <dt className="font-semibold text-navy-700">Headquarters</dt>
                <dd className="text-gray-600">Pflugerville, Texas</dd>
              </div>
              <div>
                <dt className="font-semibold text-navy-700">Contact</dt>
                <dd className="text-gray-600">Jamie Lewis, Executive Director</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </>
  );
}
