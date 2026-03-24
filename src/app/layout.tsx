import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "American Flags Foundation | Combatting Mental Health Stigma",
    template: "%s | American Flags Foundation",
  },
  description:
    "American Flags Foundation is a 501(c)(3) nonprofit dedicated to combatting mental health stigma and challenges. Shattering Silence, Embracing Empathy, Building Hope.",
  keywords: [
    "mental health",
    "nonprofit",
    "stigma",
    "empathy",
    "hope",
    "resilience",
    "American Flags Foundation",
  ],
  openGraph: {
    title: "American Flags Foundation",
    description:
      "Combatting mental health stigma and challenges. Shattering Silence, Embracing Empathy, Building Hope.",
    url: "https://americanflagsfoundation.org",
    siteName: "American Flags Foundation",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "American Flags Foundation",
    description:
      "Combatting mental health stigma and challenges. Shattering Silence, Embracing Empathy, Building Hope.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-gray-50">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
