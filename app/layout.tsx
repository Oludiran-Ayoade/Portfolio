import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Oludiran-Ayoade Olutimileyin | Full Stack Developer",
  description:
    "Full Stack Developer specializing in ASP.NET Core, React.js, and Node.js. Building scalable APIs and intuitive user interfaces.",
  keywords: [
    "Full Stack Developer",
    "ASP.NET Core",
    "React.js",
    "Next.js",
    "Node.js",
    "Nigeria",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
