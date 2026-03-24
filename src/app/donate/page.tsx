import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Support the American Flags Foundation — your tax-deductible donation helps combat mental health stigma and fund life-saving programs.",
};

const ZEFFY_URL =
  "https://www.zeffy.com/en-US/donation-form/aef23625-da53-4e28-bcb4-6ba1c9df701c";

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
            mental health stigma and save lives. 100% of your donation goes to
            our mission — zero platform fees.
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
              <a
                href={ZEFFY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full text-center"
              >
                Donate {t.amount}
              </a>
            </div>
          ))}
        </div>

        {/* Embedded Zeffy Form */}
        <div className="mt-16">
          <h2 className="mb-6 text-center text-2xl font-bold text-navy-700">
            Donate Securely Online
          </h2>
          <div className="mx-auto max-w-2xl overflow-hidden rounded-xl border border-gray-200 shadow-lg">
            <iframe
              title="Donation form powered by Zeffy"
              src={ZEFFY_URL}
              width="100%"
              height="700"
              style={{ border: "none" }}
              allow="payment"
            />
          </div>
          <p className="mt-3 text-center text-xs text-gray-400">
            Powered by Zeffy — 100% free for nonprofits. You will receive a
            tax receipt automatically.
          </p>
        </div>

        <div className="mt-12 rounded-xl bg-gray-50 p-8 text-center">
          <h2 className="mb-3 text-2xl font-bold text-navy-700">
            Other Ways to Give
          </h2>
          <div className="card mx-auto max-w-md bg-white">
            <h3 className="mb-2 font-bold text-navy-700">Donate by Mail</h3>
            <address className="text-sm not-italic text-gray-600">
              <p>American Flags Foundation</p>
              <p>3801 N Capital of Texas Hwy</p>
              <p>Ste E240-3901</p>
              <p>Austin, TX 78746</p>
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
