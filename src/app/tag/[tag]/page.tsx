import { getDatabasePages } from '@/lib/notion'
import siteConfig from '@root/site.config'
import { Pages } from '@/components/Pages'

export default async function TagPosts({
  params,
}: {
  params: { tag: string }
}) {
  const databaseId = siteConfig.rootNotionPageId
  const decodeTag = decodeURIComponent(params.tag)
  const pages = await getDatabasePages(databaseId, decodeTag)
  return <Pages pages={pages} tag={decodeTag} />
}
