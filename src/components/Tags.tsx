import React from 'react'
import Link from 'next/link'
import { TagProps } from '@/lib/types'

export const Tags: React.FC<TagProps> = ({ tags }) => {
  return (
    <>
      {tags.map(([tag, count], index) => (
        <span
          key={index}
          className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs dark:bg-blue-900 dark:text-blue-200 flex items-center"
        >
          <Link key={index} href={`/tag/${tag}`}>
            {tag}
            <span className="ml-1 text-xxs bg-blue-200 dark:bg-blue-800 rounded-full px-1">
              {count}
            </span>
          </Link>
        </span>
      ))}
    </>
  )
}
