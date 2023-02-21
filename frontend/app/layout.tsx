/* eslint-disable @next/next/no-head-element */
import '@/styles/reset.css';
import '@/styles/globals.css';
import Header from "@/components/header";
import Footer from "@/components/footer";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head></head>
      <body className="container">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
