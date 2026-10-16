import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "RURANGO",
    template: "%s · RURANGO",
  },
  description:
    "RURANGO designs and engineers digital products — property operations, local commerce, and retail systems built with intent.",
  applicationName: "RURANGO",
  icons: {
    icon: [{ url: "/icons/app_icon.png", type: "image/png" }],
    apple: [{ url: "/icons/app_icon.png", type: "image/png" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#191C1B",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        {children}
      </body>
    </html>
  );
}
