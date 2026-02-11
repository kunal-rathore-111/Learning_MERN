
import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { Poppins } from 'next/font/google'

const roboto = Roboto({
  subsets: ['latin'],
  variable: "--font-roboto"
})

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: "400"
})



export const metadata: Metadata = {
  title: {
    default: "Kunal Rathore",
    template: "%s | Kunal Rathore"
  },
  description: 'A webpage exploring about the nextjs metaData for SEO',
  keywords: ['webpage', 'nextjs', 'kunalrathore', 'SEO'],
  authors: { name: 'Kunal Rathore', url: 'kunalx1-is.a-dev' },
  icons: {
    icon: '/fav.png'
  }

}


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="eng">
    <body className={`${poppins.className} ${roboto.variable}`}>
      {children}
    </body>
  </html>
}