import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata = {
  title: "Sandip Palkar | Full Stack Developer",
  description:
    "Full Stack Developer with 2+ years of experience building scalable web applications using React.js, Next.js, Node.js, and MongoDB.",
  keywords: ["Full Stack Developer", "React", "Next.js", "Node.js", "MongoDB", "Sandip Palkar"],
  authors: [{ name: "Sandip Palkar" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Sandip Palkar | Full Stack Developer",
    description: "Full Stack Developer specializing in React.js, Next.js, Node.js & MongoDB",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-[#080B10] text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
