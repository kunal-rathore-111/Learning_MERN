
import "./globals.css";

/*
font opt. is usefull for- check contentful.com (download the font at build time not when user uses so makes efficient)
*/

import { Roboto } from "next/font/google" /*font loader*/

import { Playfair_Display } from "next/font/google"

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto"
}) //font loader function


const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display"
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${playfairDisplay.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
