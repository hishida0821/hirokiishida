import './globals.css'
import type { Metadata } from 'next'
import { Noto_Sans_JP } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Main from '@/components/Main'
import Layout from '@/components/Layout'

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'HIROKI ISHIDA | Portfolio Site',
  description: '',
  robots: 'noindex, nofollow',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={notoSansJP.className}>
        <Header />
        <Main>
          <Layout>
            {children}
          </Layout>
        </Main>
        <Footer />
      </body>
    </html>
  )
}
