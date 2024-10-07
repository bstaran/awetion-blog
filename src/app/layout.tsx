import { Metadata } from 'next'
import localFont from 'next/font/local'
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
      <body className={cn('antialiased', pretendard.className)}>
        <PageHeader />
        <div className="white dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-200">
          {children}
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
