import React from 'react'
import { pixelPatterns } from '../lib/pixelPatterns'

const PixelTitle = ({ text }: { text: string }) => {
  const pixelColor = 'bg-blue-500'

  const createPixelArt = (text: string) => {
    const words = text.toUpperCase().split(' ')

    return (
      <div className="flex flex-wrap justify-center items-center">
        {words.map((word, wordIndex) => (
          <div key={wordIndex} className="flex mx-2 my-1">
            {word.split('').map((char, charIndex) => {
              const pattern = pixelPatterns[char] || Array(100).fill(0)
              const isNarrow = char === '!'
              return (
                <div
                  key={charIndex}
                  className={`${isNarrow ? 'w-5' : 'w-10'} mr-1`}
                >
                  <div
                    className={`grid gap-0 ${isNarrow ? 'grid-cols-5' : 'grid-cols-10'} h-10`}
                  >
                    {pattern
                      .slice(0, isNarrow ? 50 : 100)
                      .map((pixel, index) => (
                        <div
                          key={index}
                          className={`w-1 h-1 ${pixel ? pixelColor : 'bg-transparent'}`}
                        />
                      ))}
                  </div>
                </div>
              )
            })}
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="w-full max-w-4xl mx-auto my-4 sm:my-6 md:my-8 flex justify-center">
      {createPixelArt(text)}
    </div>
  )
}

export default PixelTitle
