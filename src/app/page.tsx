import { getDatabasePages } from '@/lib/notion'
import { Pages } from '@/components/Pages'
import { Tags } from '@/components/Tags'
import siteConfig from '@root/site.config'
import PixelTitle from '@/components/PixelTitle'
import { getSortedTagCounts } from '../lib/getSortedTagCounts'

export const revalidate = 10

export default async function MainPage() {
  const databaseId = siteConfig.rootNotionPageId
  const pages = await getDatabasePages(databaseId)
  const tags = getSortedTagCounts(pages)

  return (
    <main className="container mx-auto px-4 py-12">
      <PixelTitle text={siteConfig.mainPageTitle} />

      <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-xl mx-auto">
        <Tags tags={tags} />
      </div>

      <Pages pages={pages} tag="All Posts" />
    </main>
  )
}
