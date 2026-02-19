import type { Metadata } from "next";
import "./globals.css"
import { Lusitana } from 'next/font/google';
import { Poppins } from 'next/font/google';
import Nav from "@/components/Nav";

const lusitana = Lusitana({
  weight: "400",
  subsets: ["latin"],
  style: "normal",
  variable: "--font-lusitana"
})

const poppins = Poppins({
  weight: '400',
  subsets: ["latin"],
  variable: "--font-poppins"
})

export const metadata: Metadata = {
  title: { default: "Revision of next JS", template: "%s | Revision" },
  description: 'hi',
  authors: [{ name: "Kunal", url: "Kunal.com", }],
  keywords: ['hi', 'by']
}

export default function RootLayout({ children }: { children: Readonly<React.ReactNode> }) {
  return <html>
    <body className={`${lusitana.variable} ${poppins.className} ${'m-20'}`}>
      <Nav />
      <main className="mt-10">
        {children}
      </main>
    </body>
  </html>
}


