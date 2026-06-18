import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sankalpa Fernando",
  description: "Portfolio of Sankalpa Fernando",
  openGraph: {
    title: "Sankalpa Fernando",
    siteName: "Sankalpa Fernando",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>Sankalpa Fernando | Software Engineer</title>
        <meta
          name="description"
          content="I'm Sankalpa Fernando, a Software Engineer specializing in Web Development, Networking and Cybersecurity."
        />
        <meta name="google-site-verification" content="pKrwQ0vUYNqZ4C0oK4LGVKPNygIOUH3-ZXy8_yiUQ-o" />
        <meta
          name="keywords"
          content="Sankalpa Fernando, Software Engineer, Web Developer, Networking and Cybersecurity Researcher"
        />
        <meta name="author" content="Sankalpa Fernando" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Sankalpa Fernando | Software Engineer" />
        <meta
          property="og:description"
          content="I'm a passionate Web developer and Cybersecurity researcher."
        />
        <meta
          property="og:image"
          content="https://sankalpafernando.github.io/sankalpa/preview.png"
        />
        <meta property="og:url" content="https://sankalpafernando.github.io/sankalpa" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sankalpa Fernando | Software Engineer" />
        <meta
          name="twitter:description"
          content="I build scalable web applications"
        />
        <meta
          name="twitter:image"
          content="https://sankalpafernando.github.io/sankalpa/preview.png"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Sankalpa Fernando",
            url: "https://sankalpafernando.github.io/sankalpa",
            sameAs: [
              "https://linkedin.com/in/sankalpa",
              "https://github.com/sankalpa",
            ],
            jobTitle: "Software Engineer",
            worksFor: { "@type": "Organization", name: "Sankalpa Fernando" },
          })}
        </script>
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
