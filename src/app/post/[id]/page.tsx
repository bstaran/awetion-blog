import { getPage } from '@/lib/notion'
import PageRenderer from '@/components/PageRenderer'

export default async function BlogPost({ params }: { params: { id: string } }) {
  const page = await getPage(params.id)
  console.log('pageId: ', params.id)

  return <PageRenderer recordMap={page} />
}
