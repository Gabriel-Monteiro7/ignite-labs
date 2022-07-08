import React, {
  createContext,
  useContext as reactUseContext,
  useReducer
} from 'react'

import { State, reducer, Actions, initialState } from './reducer'

interface IContext {
  state: State
  dispatch: React.Dispatch<Actions>
}

export const _Context = createContext<IContext>({
  state: initialState,
  dispatch: () => null
})

export const Provider: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const value = { state, dispatch }

  return <_Context.Provider value={value}>{children}</_Context.Provider>
}

export const useContext = (): IContext => {
  const { state, dispatch } = reactUseContext(_Context)

  return { state, dispatch }
}

export * from './reducer'
