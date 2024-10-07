import React from 'react'
import Link from 'next/link'
import { PagesProps } from '@/lib/types'

export const Pages: React.FC<PagesProps> = ({ pages, tag }) => {
  return (
    <>
      <h2 className="text-2xl text-center font-bold text-gray-700 dark:text-gray-400 mt-8 mb-8">
        {tag}
      </h2>

      <div className="space-y-6 max-w-xl mx-auto group">
        {pages.map((post, index) => (
          <Link
            key={index}
            href={`/post/${post.id}`}
            className="block p-2 rounded transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 group-hover:opacity-70 hover:!opacity-100"
          >
            <div key={index} className="flex justify-between items-center">
              <div className="flex-grow">
                <h3 className="text-m font-semibold text-gray-700">
                  {post.properties['Name']
                    ? post.properties['Name']
                    : 'Untitled'}
                </h3>
                <div className="mt-1 flex flex-wrap gap-2">
                  {post.properties['Tags'] &&
                    Array.isArray(post.properties['Tags']) &&
                    post.properties['Tags'].map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="inline-block bg-blue-100 rounded-sm px-1.5 py-0.5 text-xs font-semibold text-stone-700 opacity-85"
                      >
                        {tag}
                      </span>
                    ))}
                </div>
              </div>
              <div className="flex-shrink-0 ml-4">
                {Object.entries(post.properties).map(([key, value]) => (
                  <span
                    key={key}
                    className="text-xs text-gray-500 dark:text-gray-400"
                  >
                    {!Array.isArray(value) && key === 'Date' ? value : ''}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}
