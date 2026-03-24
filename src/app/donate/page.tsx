import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Support the American Flags Foundation — your tax-deductible donation helps combat mental health stigma and fund life-saving programs.",
};

const tiers = [
  {
    amount: "$25",
    label: "Supporter",
    impact: "Provides mental health resource guides for 10 individuals.",
  },
  {
    amount: "$50",
    label: "Advocate",
    impact: "Funds one community awareness workshop session.",
  },
  {
    amount: "$100",
    label: "Champion",
    impact: "Sponsors a peer support training for one volunteer mentor.",
  },
  {
    amount: "$250",
    label: "Guardian",
    impact:
      "Covers care navigation services for a family in need for one month.",
  },
  {
    amount: "$500",
    label: "Beacon",
    impact: "Funds a full resilience workshop series for a local community.",
  },
  {
    amount: "Custom",
    label: "Your Choice",
    impact: "Every dollar makes a difference in someone's life.",
  },
];

export default function DonatePage() {
  return (
    <>
      <section className="bg-navy-700 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h1 className="text-4xl font-extrabold sm:text-5xl">
            Make a Difference Today
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            Your tax-deductible donation directly funds programs that combat
            mental health stigma and save lives.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.label}
              className="card flex flex-col items-center text-center"
            >
              <p className="text-3xl font-extrabold text-navy-700">
                {t.amount}
              </p>
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-red-600">
                {t.label}
              </p>
              <p className="mb-4 flex-1 text-sm text-gray-600">{t.impact}</p>
              <button
                disabled
                className="btn-primary w-full cursor-not-allowed opacity-75"
              >
                Coming Soon
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-xl bg-gray-50 p-8 text-center">
          <h2 className="mb-3 text-2xl font-bold text-navy-700">
            Payment Integration Coming Soon
          </h2>
          <p className="mb-4 text-gray-600">
            We are currently setting up our secure online donation platform. In
            the meantime, please reach out to us directly to make a
            contribution.
          </p>
          <div className="card mx-auto max-w-md bg-white">
            <h3 className="mb-2 font-bold text-navy-700">
              Donate by Mail
            </h3>
            <address className="text-sm not-italic text-gray-600">
              <p>American Flags Foundation</p>
              <p>18000 Prato Drive</p>
              <p>Pflugerville, TX 78660</p>
            </address>
            <p className="mt-3 text-xs text-gray-400">
              EIN: 93-3268747 — All donations are tax-deductible.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
