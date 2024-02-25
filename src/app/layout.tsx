import './globals.css'
import type { Metadata } from 'next'
import { Inter, Roboto } from 'next/font/google'
import Script from 'next/script'
import { Container } from './components/Container'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '900', '700'],
})

const roboto = Roboto({
  weight: ['300', '400', '500', '900', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
})

export const metadata: Metadata = {
  title: 'Dr. Bruno Silva',
  description: 'Especialista expert em busca e apreensão',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // eslint-disable-next-line prettier/prettier

  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Script
          id="fb-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '333567652673981');
fbq('track', 'PageView');

`,
          }}
        />

        <Container>{children}</Container>
      </body>
    </html>
  )
}
