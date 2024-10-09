export interface PageProps {
  id: string
  properties: Record<string, any>
  type: string
  parent_id: string
}

export interface TagProps {
  tags: [string, number][]
}

export interface PagesProps {
  pages: PageProps[]
  tag: string
}

export interface SiteConfig {
  readonly rootNotionPageId: string
  // readonly domain: string
  readonly title: string
  readonly description: string
  readonly mainPageTitle: string
  readonly homeLinkTitle: string
}

export interface MainProps {
  pages: PageProps[]
  tags: [string, number][]
}
