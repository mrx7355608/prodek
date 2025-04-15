import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const font = Bricolage_Grotesque({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-bricolage-grotesque",
});

// app/layout.tsx or app/layout.jsx

export const metadata = {
  title: "Prosoft",
  description:
    "Prosoft is a software company offering top-notch web design, mobile apps, animation, and branding services to help your business stand out.",
  keywords: [
    "Prosoft",
    "web design",
    "app development",
    "animation",
    "branding",
    "creative agency",
    "software company",
    "UI/UX",
    "design studio",
  ],
  authors: [{ name: "Prosoft" }],
  openGraph: {
    title: "Prosoft",
    description:
      "Creative software solutions for modern businesses. Discover Prosoft's expert services in web design, mobile apps, animation, and branding.",
    url: "https://prosoft.com",
    siteName: "Prosoft",
    images: [
      {
        url: "https://prosoft.com/og-image.jpg", // replace with actual image URL
        width: 1200,
        height: 630,
        alt: "Prosoft - Web Design and App Development",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prosoft | Web Design, App Development, Animation & Branding",
    description:
      "Your partner in digital innovation. Prosoft offers cutting-edge web, app, animation, and branding services.",
    images: ["https://prosoft.com/twitter-card.jpg"], // replace with actual image URL
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Navbar />
      <body className={`${font.variable} antialiased`}>{children}</body>
      <Footer />
    </html>
  );
}
