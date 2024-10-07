import { siteConfig } from '@/lib/siteConfig'
import { root } from 'postcss'

const config = siteConfig({
  rootNotionPageId: process.env.ROOT_NOTION_PAGE || '',
  domain: process.env.DOMAIN || '',
  title: process.env.TITLE || '',
  description: process.env.DESCRIPTION || '',
  mainPageTitle: process.env.NEXT_PUBLIC_MAIN_PAGE_TITLE || '',
  homeLinkTitle: process.env.NEXT_PUBLIC_HOME_LINK_TITLE || '',
})

export default config
