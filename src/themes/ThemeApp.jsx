import { useContext } from "react"

import { CssBaseline, ThemeProvider } from "@mui/material"

import { AppRouter } from "../router"
import { UIContext } from "../context/ui"
import { lightTheme, darkTheme } from "./"

export const ThemeApp = () => {

  const { themeUI } = useContext( UIContext );
  const themeChosen = themeUI === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={ themeChosen }>
      <CssBaseline />
      <AppRouter />
    </ThemeProvider>
  )
}
