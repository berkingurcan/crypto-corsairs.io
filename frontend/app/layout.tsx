/* eslint-disable @next/next/no-head-element */
import { Quicksand } from "@next/font/google";
import '@/styles/reset.css';
import '@/styles/globals.css';
import Header from "@/components/header";
import Footer from "@/components/footer";

const quicksandFontFamily = Quicksand({
  subsets: ['latin'],
  weight: "300"
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={quicksandFontFamily.className}>
      <head></head>
      <body className="container">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
