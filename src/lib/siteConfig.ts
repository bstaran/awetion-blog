import { SiteConfig } from './types'

const validateConfig = (config: SiteConfig): SiteConfig => {
  //TODO: Validate the config object
  console.log('validate: ', config.rootNotionPageId)

  return config
}

export const siteConfig = (config: SiteConfig): SiteConfig => {
  return validateConfig(config)
}
