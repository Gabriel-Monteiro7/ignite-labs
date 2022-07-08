export type ThemeState = 'light' | 'dark'

export const initialState: State = {
  theme: 'dark'
}
export interface State {
  theme: ThemeState
}

export enum Types {
  changeTheme = 'CHANGE_THEME'
}

export type Actions = {
  type: Types.changeTheme
  theme: ThemeState
}

export const reducer = (state: State, action: Actions) => {
  switch (action.type) {
    case Types.changeTheme:
      return { ...state, theme: action.theme }
    default:
      return state
  }
}
