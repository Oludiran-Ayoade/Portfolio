import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "./providers/ThemeProvider";

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
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="antialiased transition-colors duration-300">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
