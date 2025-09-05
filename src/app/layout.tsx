import type { Metadata } from "next";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anshumat",
  description:
    "Anshumat Foundation is a non-profit organization dedicated to empowering individuals through knowledge, mentorship, and career development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`font-blackbird bg-surface text-on-surface tracking-wider antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
