import { useReducer } from "react"
import { UIContext, uireducer } from "./"

const UI_INITIAL_STATE = {
  themeUI: 'light'
}

export const UIProvider = ({ children }) => {

  const [state, dispatch] = useReducer( uireducer, UI_INITIAL_STATE );

  const changeThemeDark = () => {
    dispatch({type: '[UI] - ChangeThemeDark' })
  }

  const changeThemeLight = () => {
    dispatch({type: '[UI] - ChangeThemeLight' })
  }

  return (
    <UIContext.Provider value={ { ...state, changeThemeDark, changeThemeLight } }>
      { children }
    </UIContext.Provider>
  )
}
