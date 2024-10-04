'use client'

import React, { useEffect, useState } from 'react'
import { Moon } from 'lucide-react'
import Link from 'next/link'
import siteConfig from '@root/site.config'
import clsx from 'clsx'

export const PageHeader: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  const SCROLL_THRESHOLD = 50 // 스크롤 임계값 설정 (픽셀 단위)

  const controlNavbar = () => {
    const currentScrollY = window.scrollY
    const isScrollingDown = currentScrollY > lastScrollY
    const isAboveThreshold = currentScrollY <= SCROLL_THRESHOLD

    setIsVisible(isAboveThreshold || !isScrollingDown)
    setLastScrollY(currentScrollY)
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar)
      return () => {
        window.removeEventListener('scroll', controlNavbar)
      }
    }
  }, [lastScrollY])

  // TODO: navbar 구현
  return (
    <header
      className={clsx(
        'sticky top-0 left-0 right-0 bg-white dark:bg-gray-900 transition-transform duration-300 z-50',
        'border-b border-gray-200 dark:border-gray-700',
        {
          'translate-y-0': isVisible,
          '-translate-y-full': !isVisible,
        },
      )}
    >
      <div className="w-full px-6 py-3 flex justify-between items-center">
        <div className="text-xl font-bold flex">
          <Link href={'/'}>{siteConfig.homeLinkTitle}</Link>
        </div>
        {/* <nav className="flex items-center space-x-4 text-sm font-semibold">
          <a href="#" className="hover:underline">
            About
          </a>
          <a href="#" className="hover:underline">
            Contact
          </a>
          <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
            <Moon className="w-5 h-5" />
          </button>
        </nav> */}
      </div>
    </header>
  )
}

export default PageHeader
