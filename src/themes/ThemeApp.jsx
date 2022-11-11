import { useContext } from "react"

import { Container, CssBaseline, ThemeProvider } from "@mui/material"

import { AppRouter } from "../router"
import { UIContext } from "../context"
import { lightTheme, darkTheme } from "./"

export const ThemeApp = () => {

  const { themeUI } = useContext( UIContext );

  return (
    <ThemeProvider theme={ themeUI === 'light' ? lightTheme : darkTheme }>
      <CssBaseline />
      <Container maxWidth="xl" sx={{ mt: 20 }}>
        <AppRouter />
      </Container>
    </ThemeProvider>
  )
}
