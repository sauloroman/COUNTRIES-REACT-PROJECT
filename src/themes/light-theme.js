import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#111517'
    },
    secondary: {
      main: '#ffffff'
    },
    text: {
      primary: '#111517'
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff'
    }
  },
  typography: {
    fontFamily: ['Poppins', 'sans-serif'].join(','),
    fontSize: 16
  },
})