import { PageProps } from './types'

export function getSortedTagCounts(pages: PageProps[]): [string, number][] {
  const tagCounts = pages.reduce(
    (acc, page) => {
      const pageTags = page.properties.Tags || []
      pageTags.forEach((tag: string) => {
        acc[tag] = (acc[tag] || 0) + 1
      })
      return acc
    },
    {} as Record<string, number>,
  )

  tagCounts['All Posts'] = pages.length

  // 태그와 출현 횟수를 배열로 변환
  const tags = Object.entries(tagCounts).sort((a, b) => b[1] - a[1])
  return tags
}
