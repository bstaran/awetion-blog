import { Metadata } from 'next'
import localFont from 'next/font/local'
import { Nunito_Sans, Inter, Noto_Sans_KR } from 'next/font/google'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/react'
import siteConfig from '@root/site.config'
import { ReactNode } from 'react'
import './globals.css'
import { cn } from '../lib/utils'
import { PageHeader } from '@/components/PageHeader'

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
}

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-nunito-sans',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const pretendard = localFont({
  src: '../styles/fonts/PretendardVariable.woff2',
  display: 'swap',
  variable: '--font-pretendard',
})

interface LayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="ko">
      <body
        className={cn(
          pretendard.variable,
          nunitoSans.variable,
          inter.variable,
          'antialiased',
          'selection:bg-gray-200 dark:selection:bg-gray-800',
          'bg-white dark:bg-gray-900',
        )}
      >
        <PageHeader />
        <div className="text-gray-800 dark:text-gray-200">{children}</div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
