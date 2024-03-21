import Header from "@/components/header";
import "./globals.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  fallback: ["sans-serif"],
});

export const metadata = {
  title: "kirsten.pl",
  description: "Kirsten's website",
  openGraph: {
    title: "kirsten.pl",
    description: "Kirsten's website",
    type: "website",
    locale: "en_US",
    url: "https://kirsten.pl",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header
          navigation={[
            { name: "Home", href: "/" },
            { name: "Projects", href: "/projects/" },
            // { name: "Blog", href: "/blog/" },
          ]}
        ></Header>
        {children}
      </body>
    </html>
  );
}
