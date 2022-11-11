export const uireducer = ( state, action ) => {
  switch( action.type ) {
    case '[UI] - ChangeThemeDark':
      return {
        ...state,
        themeUI: "dark"
      }
    case '[UI] - ChangeThemeLight':
      return {
        ...state,
        themeUI: "light"
      }
    default:
      return state
  }
}
