/* eslint-disable @next/next/no-head-element */

import Link from "next/link";

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
           ANA SAYFA LINKI HEADER
          </Link>
        </header>
        {children}
      </body>
    </html>
  );
}
