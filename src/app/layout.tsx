import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import "../scss/style.scss";
import GridContainer from "@/components/common/grid-container/GridContainer.component";
import Sidebar from "@/components/common/desktop/sidebar/Sidebar.component";
import Bottombar from "@/components/common/mobile/bottombar/Bottombar.component";
import FloatingSocialLinks from "@/components/common/floating-social-links/FloatingSocialLinks.component";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dev-mina-ezzat.vercel.app/"),

  title: {
    default: "Mina Ezzat – Front-End Developer React.js Specialist",
    template: "%s | Mina Ezzat",
  },
  description:
    "Mina Ezzat is a Front-End Developer with Full Stack experience specializing in React, Next.js, Tailwind CSS, and scalable web applications. View projects, skills, and contact information.",
  keywords: [
    // English (primary)
    "Mina Ezzat",
    "Front-End Developer",
    "Full Stack Developer",
    "React Developer",
    "React.js Developer",
    "Next.js Developer",
    "Node.js Developer",
    "MERN Stack Developer",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "Full-Stack Developer",
    "Software Engineer",
    "Software Developer",
    "JavaScript Developer",
    "TypeScript Developer",

    // Arabic (secondary)
    "مينا عزت",
    "مطور مواقع ويب",
    "مطور تطبيقات ويب",
    "مطور واجهات امامية",
    "مطور واجهات خلفية",
    "مبرمج مواقع ويب",
    "مبرمج تطبيقات ويب",
    "",
  ],
  authors: [{ name: "Mina Ezzat" }],
  creator: "Mina Ezzat",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dev-mina-ezzat.vercel.app/",
    siteName: "Mina Ezzat Portfolio",
    title: "Mina Ezzat – Front-End Developer React.js Specialist",
    description:
      "Personal portfolio of Mina Ezzat, a Front-End Developer with Full Stack experience building modern, fast, and accessible web applications.",
    images: [
      {
        url: "/mina-banner.webp",
        width: 1200,
        height: 630,
        alt: "Mina Ezzat Front-End Developer and React.js Specialist portfolio banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mina Ezzat – Front-End Developer React.js Specialist",
    description:
      "Front-End Developer with Full Stack experience specializing in React and Next.js.",
    images: ["/mina-banner.webp"],
    creator: "@MinaEzzat",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ibmPlexSans.className} ${spaceGrotesk.variable} bg-background antialiased`}
      >
        <GridContainer cols={12}>
          <Sidebar />
          <main className="w-full h-full xl:col-span-10 col-span-full">
            {children}
          </main>
          <FloatingSocialLinks />
        </GridContainer>
        <Bottombar />
        <Analytics />
        <SpeedInsights />
        <ToastContainer
          theme="dark"
          toastClassName={"!bg-background !p-5"}
          pauseOnHover
          closeButton={false}
          hideProgressBar={false}
          newestOnTop
        />
      </body>
    </html>
  );
}
