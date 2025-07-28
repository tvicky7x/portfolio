import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  style: ["normal", "italic"],
  variable: "--font-poppins",
});

// export const metadata = {
//   title: "T Vicky",
//   description: "",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} bg-background text-primary-text antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

export async function generateMetadata() {
  const url = process.env.LIVE_URL;

  return {
    title: "T Vicky - Frontend Developer",
    description:
      "T Vicky is a passionate Frontend Developer specializing in React, Next.js, UI/UX, and building interactive web projects with a focus on performance, usability, and maintainability.",
    keywords: [
      "T Vicky",
      "Frontend Developer",
      "React",
      "Next.js",
      "UI/UX",
      "Web Development",
      "JavaScript",
      "Tailwind CSS",
      "Framer Motion",
      "GSAP",
      "Portfolio",
    ],
    alternates: {
      canonical: url,
    },
    authors: [{ name: "T Vicky", url: url }],
    robots: {
      index: false,
      follow: false,
      nocache: true,
    },
    openGraph: {
      title: "T Vicky - Frontend Developer",
      description:
        "Explore projects, skills, and the development journey of T Vicky, specializing in React, Next.js, and UI/UX.",
      url: url,
      siteName: "T Vicky Portfolio",
      images: [
        {
          url: `${url}/png/tvicky-seo-image.png`,
          width: 1200,
          height: 630,
          alt: "T Vicky Portfolio Preview Image",
        },
      ],
      locale: "en-US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "T Vicky - Frontend Developer",
      description:
        "Showcasing frontend projects and development journey by T Vicky using React, Next.js, and modern tools.",
      images: [`${url}/png/tvicky-seo-image.png`],
      creator: "@tvicky_dev",
    },
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      httpEquiv: {
        "Content-Type": "text/html; charset=utf-8",
      },
    },
  };
}
