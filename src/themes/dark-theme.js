import { createTheme } from "@mui/material";

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#2B3743'
    },
    text: {
      primary: '#ffffff'
    },
    background: {
      default: '#202c37',
      paper: '#2B3743'
    }
  },
  typography: {
    fontFamily: ['Poppins', 'sans-serif'].join(','),
  },
})