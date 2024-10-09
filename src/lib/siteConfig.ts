import { SiteConfig } from './types'

const validateConfig = (config: SiteConfig): SiteConfig => {
  // 서버 사이드 검증
  if (typeof window === 'undefined') {
    if (!config.rootNotionPageId) {
      throw new Error('ROOT_NOTION_PAGE is not set in environment variables')
    }
    if (!config.title) {
      console.warn('TITLE is not set')
    }
    if (!config.description) {
      console.warn('DESCRIPTION is not set')
    }
  }

  // 클라이언트 사이드 검증
  if (!config.mainPageTitle) {
    console.warn('NEXT_PUBLIC_MAIN_PAGE_TITLE is not set')
  }
  if (!config.homeLinkTitle) {
    console.warn('NEXT_PUBLIC_HOME_LINK_TITLE is not set')
  }

  return {
    rootNotionPageId: config.rootNotionPageId,
    title: config.title,
    description: config.description,
    mainPageTitle: config.mainPageTitle,
    homeLinkTitle: config.homeLinkTitle,
  }
}

export const siteConfig = (config: SiteConfig): SiteConfig => {
  return validateConfig(config)
}
