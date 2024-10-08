import { SiteConfig } from './types'

const validateConfig = (config: SiteConfig): SiteConfig => {
  if (!config.rootNotionPageId) {
    throw new Error('ROOT_NOTION_PAGE is not set in environment variables')
  }
  console.log('Root Notion Page ID:', config.rootNotionPageId)
  return config
}

export const siteConfig = (config: SiteConfig): SiteConfig => {
  return validateConfig(config)
}
