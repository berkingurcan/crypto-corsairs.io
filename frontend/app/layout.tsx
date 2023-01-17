/* eslint-disable @next/next/no-head-element */
import Link from "next/link";
import '@/styles/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head></head>
      <body>
        <header>
          <Link href="/">

           <h3>SOLPirates</h3> 
          </Link>
        </header>
        {children}
      </body>
    </html>
  );
}
