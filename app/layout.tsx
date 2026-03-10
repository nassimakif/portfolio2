import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Space_Mono } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Nassim Akif — Software Engineer",
  description:
    "Portfolio of Nassim Akif, a software engineer building clean, performant web applications.",
  openGraph: {
    title: "Nassim Akif — Software Engineer",
    description:
      "Portfolio of Nassim Akif, a software engineer building clean, performant web applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${spaceMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
