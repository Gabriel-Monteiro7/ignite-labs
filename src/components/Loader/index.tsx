import ContentLoader, { IContentLoaderProps } from 'react-content-loader'
import { ThemeState } from '~/context'
import { LocalStorageService } from '~/services/LocalStorage'

const Loader = (props: IContentLoaderProps): JSX.Element => {
  const theme = LocalStorageService.getItem<ThemeState>('@theme') ?? 'light'

  let backgroundColor = '#e9eaf1'
  let foregroundColor = '#dcdde2'
  if (theme === 'dark') {
    backgroundColor = '#424242'
    foregroundColor = '#606060'
  }

  return (
    <ContentLoader
      speed={2}
      backgroundColor={backgroundColor}
      foregroundColor={foregroundColor}
      {...props}
    />
  )
}

export default Loader
