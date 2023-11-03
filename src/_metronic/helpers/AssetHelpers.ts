import {useLayout} from '../layout/core'
import {ThemeModeComponent} from '../assets/ts/layout'

export const toAbsoluteUrl = (pathname: string) =>  pathname // import.meta.env.PUBLIC_URL +

export const useIllustrationsPath = (illustrationName: string): string => {
  const {config} = useLayout()

  const extension = illustrationName.substring(
    illustrationName.lastIndexOf('.'),
    illustrationName.length
  )
  const illustration =
    ThemeModeComponent.getMode() === 'dark'
      ? `${illustrationName.substring(0, illustrationName.lastIndexOf('.'))}-dark`
      : illustrationName.substring(0, illustrationName.lastIndexOf('.'))
  return toAbsoluteUrl(
    `/media/illustrations/${config.illustrations?.set}/${illustration}${extension}`
  )
}