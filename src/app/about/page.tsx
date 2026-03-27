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
            America. This work isn&apos;t abstract for us — it&apos;s personal.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Our Executive Director, Jamie Lewis, lives with PTSD. That experience — navigating the
            weight of it, the silence around it, the moments of wondering if anyone else truly
            understands — is exactly what drives this foundation. Jamie knows firsthand what it
            means to struggle and to search for something that feels like real understanding, not
            just clinical acknowledgment. That empathy is baked into everything AFF does.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Millions of Americans are suffering in silence — held back not by a lack of courage,
            but by a culture of stigma that treats mental health struggles as weakness rather than
            a natural part of the human experience. We started AFF to change that culture, one
            conversation at a time. From our base in Austin, Texas, we build programs, partnerships,
            and community around a simple conviction: no one should have to carry this alone.
          </p>

          <h2 className="section-heading mt-12">Our Name &amp; Symbol</h2>
          <p className="text-gray-600 leading-relaxed">
            Our symbol is the letter <em>A</em> — rendered in red, white, and blue, crowned with
            three stars. The <em>A</em> stands for <em>America</em>, for <em>Awareness</em>, and
            for <em>Action</em>. It carries the colors of this nation as a reminder that caring
            for each other is a fundamentally American value — one that crosses every background,
            every community, every zip code.
          </p>
          <p className="mt-4 text-gray-600 leading-relaxed">
            The three stars represent the Trinity — God the Father, God the Son, and God the Holy
            Ghost. They sit at the center of our symbol because we believe, at the foundation of
            everything we do, that God can heal all. Not as a statement of exclusion, but as a
            statement of hope. Whatever someone has carried, whatever they&apos;ve survived — healing
            is possible. That conviction is what drives us.
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
                <dd className="text-gray-600">Austin, Texas</dd>
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
