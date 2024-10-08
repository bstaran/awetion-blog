import { ExtendedRecordMap, CollectionPropertySchemaMap } from 'notion-types'
import { PageProps } from './types'
import { NotionAPI } from 'notion-client'

const notion = new NotionAPI()

export async function getPage(pageId: string): Promise<ExtendedRecordMap> {
  const recordMap = await notion.getPage(pageId)
  return recordMap
}

export async function getDatabasePages(
  databaseId: string,
  tag: string = 'All Posts',
): Promise<PageProps[]> {
  let pages: PageProps[] = []

  try {
    const recordMap = await notion.getPage(databaseId)

    const collection = Object.values(recordMap.collection)[0]?.value
    const schema = collection?.schema as CollectionPropertySchemaMap

    // console.log('recordMap', recordMap.block)
    // console.log('collection', collection)
    // console.log('schema', schema)

    pages = Object.values(recordMap.block ?? {})
      .filter(
        (block) =>
          block?.value &&
          block.value.parent_id === collection.id &&
          block.value.type === 'page',
      )
      .map((block) => {
        if (!block?.value) return null
        const pageProperties = {} as Record<string, any>
        Object.entries(schema).forEach(([key, value]) => {
          if (value.name === 'Date' && block.value.properties?.[key]) {
            // Date 속성 처리
            const dateValue = block.value.properties[key][0][1][0][1]
            pageProperties[value.name] = dateValue.start_date || null
          } else if (value.name === 'Tags' && block.value.properties?.[key]) {
            // Tags 속성 처리
            const tagValues = block.value.properties[key][0][0]
            pageProperties[value.name] = tagValues.split(',')
          } else if (value.name === 'Name' && block.value.properties?.[key]) {
            // Name 속성 처리
            pageProperties[value.name] = block.value.properties[key]
              .flat()
              .filter((item: string) => typeof item === 'string')
              .join('')
          } else {
            pageProperties[value.name] = block.value.properties?.[key] ?? null
          }
        })
        return {
          id: block.value.id,
          properties: pageProperties,
          type: block.value.type,
          parent_id: block.value.parent_id,
        }
      })
      .filter((page) => page !== null)
      .filter((page) => {
        if (tag === 'All Posts') return true
        return page.properties.Tags && page.properties.Tags.includes(tag)
      })
      .sort((a, b) => {
        const dateA = a.properties.Date
          ? new Date(a.properties.Date).getTime()
          : 0
        const dateB = b.properties.Date
          ? new Date(b.properties.Date).getTime()
          : 0
        return dateB - dateA
      })
  } catch (error) {
    console.error('Error fetching Notion data:', error)
    return []
  }

  // console.log('pages: ', JSON.stringify(pages[0].properties, null, 2))

  return pages
}
