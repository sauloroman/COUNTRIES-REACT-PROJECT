import { useReducer } from "react"
import { UIContext, uireducer} from "./"

export const init = () => { 
  const themeUI = localStorage.getItem('theme') || 'light';
  return { themeUI, isLoading: true }
}

export const UIProvider = ({ children }) => {

  const [state, dispatch] = useReducer( uireducer, {}, init );

  const changeThemeDark = () => {
    dispatch({type: '[UI] - ChangeThemeDark' })
    localStorage.setItem('theme', 'dark');
  }
  
  const changeThemeLight = () => {
    dispatch({type: '[UI] - ChangeThemeLight' })
    localStorage.setItem('theme', 'light');
  }

  const setIsLoading = ( state ) => {
    dispatch({ type: '[UI] - SetIsLoading', payload: state })
  }

  return (
    <UIContext.Provider value={ { 
      ...state, 
      
      // METHODS
      changeThemeDark, 
      changeThemeLight, 
      setIsLoading
    }}>
      { children }
    </UIContext.Provider>
  )
}
