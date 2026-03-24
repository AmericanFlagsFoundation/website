import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-800 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="mb-3 text-lg font-bold text-white">
              🇺🇸 American Flags Foundation
            </h3>
            <p className="text-sm leading-relaxed">
              A 501(c)(3) public charity combatting mental health stigma and
              challenges since September 2023.
            </p>
            <p className="mt-2 text-xs text-gray-400">EIN: 93-3268747</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-3 font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                ["/about", "About Us"],
                ["/programs", "Programs & Care"],
                ["/blog", "Blog"],
                ["/get-help", "Get Help Now"],
                ["/donate", "Donate"],
                ["/transparency", "Transparency Hub"],
                ["/contact", "Contact"],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="transition-colors hover:text-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-3 font-semibold text-white">Contact</h4>
            <address className="space-y-2 text-sm not-italic">
              <p>18000 Prato Drive</p>
              <p>Pflugerville, TX 78660</p>
              <p className="mt-4">
                <span className="font-medium text-white">Crisis Hotline:</span>{" "}
                <a href="tel:988" className="hover:text-white">
                  988 (Suicide &amp; Crisis Lifeline)
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-10 border-t border-navy-700 pt-6 text-center text-xs text-gray-400">
          <p>
            &copy; {year} American Flags Foundation. All rights reserved. |
            501(c)(3) Public Charity
          </p>
          <p className="mt-1">
            Shattering Silence &bull; Embracing Empathy &bull; Building Hope
            &bull; Breaking Barriers &bull; Fostering Resilience &bull;
            Cultivating Optimism
          </p>
        </div>
      </div>
    </footer>
  );
}
