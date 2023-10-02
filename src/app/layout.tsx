import './globals.css'
import type { Metadata } from 'next'
import { Inter, Roboto } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const roboto = Roboto({
  weight: ['300', '400', '500', '900', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
})

export const metadata: Metadata = {
  title: 'Bruno Silva Advogado',
  description: 'Especialista em direito civil',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className} ${inter.className}`}>
        {children}
      </body>
    </html>
  )
}
