import { LocalStorageService } from '~/services/LocalStorage'
import { Types, useContext } from '~/context'

export const useTheme = () => {
  const { state, dispatch } = useContext()

  const changeTheme = () => {
    const newtheme = state.theme === 'light' ? 'dark' : 'light'

    dispatch({
      type: Types.changeTheme,
      theme: newtheme
    })

    LocalStorageService.setItem('@theme', newtheme)

    const classList = document.documentElement.classList

    if (newtheme === 'dark') {
      classList.add('dark')
    } else {
      classList.remove('dark')
    }
  }

  return { changeTheme }
}
