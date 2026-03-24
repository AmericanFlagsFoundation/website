import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Transparency Hub",
  description:
    "American Flags Foundation Transparency Hub — our commitment to openness, accountability, and responsible stewardship of your trust and donations.",
};

export default function TransparencyPage() {
  return (
    <>
      <section className="bg-navy-700 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h1 className="text-4xl font-extrabold sm:text-5xl">
            Transparency Hub
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            Accountability and openness are at the heart of everything we do.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Organization Info */}
        <div className="mb-12">
          <h2 className="section-heading">Organization Details</h2>
          <div className="card mt-4">
            <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                ["Legal Name", "American Flags Foundation"],
                ["EIN", "93-3268747"],
                ["Tax Status", "501(c)(3) Public Charity"],
                ["Date Founded", "September 2023"],
                ["Registered Address", "3801 N Capital of Texas Hwy, Ste E240-3901, Austin, TX 78746"],
                ["Contact", "Jamie Lewis, Executive Director"],
              ].map(([label, value]) => (
                <div key={label}>
                  <dt className="text-sm font-semibold text-navy-700">
                    {label}
                  </dt>
                  <dd className="text-sm text-gray-600">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Financial Transparency */}
        <div className="mb-12">
          <h2 className="section-heading">Financial Accountability</h2>
          <p className="section-subheading">
            We are committed to responsible stewardship of every dollar
            entrusted to us.
          </p>
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="card text-center">
              <p className="text-3xl font-extrabold text-navy-700">100%</p>
              <p className="text-sm text-gray-600">
                Commitment to transparent financial reporting
              </p>
            </div>
            <div className="card text-center">
              <p className="text-3xl font-extrabold text-navy-700">Annual</p>
              <p className="text-sm text-gray-600">
                Financial statements published yearly
              </p>
            </div>
            <div className="card text-center">
              <p className="text-3xl font-extrabold text-navy-700">Open</p>
              <p className="text-sm text-gray-600">
                IRS Form 990 available upon request
              </p>
            </div>
          </div>
        </div>

        {/* Governance */}
        <div className="mb-12">
          <h2 className="section-heading">Governance</h2>
          <div className="card">
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="mt-1 text-green-500">✓</span>
                Board of Directors provides strategic oversight and fiduciary responsibility
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-green-500">✓</span>
                Conflict of interest policy in place for all board members and staff
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-green-500">✓</span>
                Regular program evaluations to ensure impact and effectiveness
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-green-500">✓</span>
                Whistleblower protection policy
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-green-500">✓</span>
                Document retention and destruction policy
              </li>
            </ul>
          </div>
        </div>

        {/* Request Info */}
        <div className="rounded-xl bg-navy-50 p-8 text-center">
          <h2 className="mb-3 text-2xl font-bold text-navy-700">
            Request Information
          </h2>
          <p className="mb-2 text-gray-600">
            We believe in full transparency. If you have questions about our
            finances, governance, or operations, please don&apos;t hesitate to
            reach out.
          </p>
          <p className="text-sm text-gray-500">
            Write to us at: American Flags Foundation, 3801 N Capital of Texas Hwy,
            Ste E240-3901, Austin, TX 78746 | Email: info@aff1.org
          </p>
        </div>
      </section>
    </>
  );
}
