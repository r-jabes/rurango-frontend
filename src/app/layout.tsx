import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteShell } from "@/components/layout/SiteShell";
import {
  OrganizationJsonLd,
  ProfessionalServiceJsonLd,
  WebSiteJsonLd,
} from "@/components/seo/JsonLd";
import { site } from "@/content/site";
import { getSiteUrl } from "@/lib/site-url";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.name} · Software, web development & SEO`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  keywords: [...site.serviceKeywords],
  category: "technology",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [{ url: "/icons/app_icon.png", type: "image/png" }],
    apple: [{ url: "/icons/app_icon.png", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: site.name,
    title: `${site.name} · Websites, applications & platforms`,
    description: site.description,
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} · Websites, applications & platforms`,
    description: site.description,
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#191C1B",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        <OrganizationJsonLd />
        <WebSiteJsonLd />
        <ProfessionalServiceJsonLd />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
