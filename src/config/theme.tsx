'use client'

import { Montserrat } from 'next/font/google'
import { createTheme } from '@mui/material/styles'

declare module '@mui/material/styles' {
  // extends the Material UI theme to include custom components
  interface Components {
    Sidebar?: {
      width?: number
    }
  }
}

const montserrat = Montserrat({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap'
})

// const inter = Inter({
//   weight: ['300', '400', '500', '700'],
//   subsets: ['latin'],
//   display: 'swap'
// })

const theme = createTheme({
  cssVariables: true,
  palette: {
    primary: {
      main: '#7cb342',
      light: '#8ED27D',
      dark: '#37972C',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#F9A825',
      light: '#FFEB66',
      dark: '#C17900',
      contrastText: '#000'
    },
    info: {
      main: '#47ADDB',
      contrastText: '#ffffff'
    },
    background: {
      default: '#FAFAFA',
      paper: '#FFFFFF'
    },
    text: {
      primary: '#212121',
      secondary: '#424242'
    }
  },
  typography: {
    fontFamily: montserrat.style.fontFamily
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: ({ theme }) => ({
          paddingLeft: 24,
          paddingRight: 24,
          [theme.breakpoints.up('md')]: {
            paddingLeft: 50,
            paddingRight: 50
          }
        })
      }
    },
    MuiDrawer: {
      styleOverrides: {
        paper: ({ theme }) => ({
          background: theme.palette.text.primary,
          color: '#FFFFFF',

          // change font variant of a text
          '& .MuiTypography-root': {
            fontSize: '1.1rem'
          }
        })
      }
    },
    MuiToolbar: {
      styleOverrides: {
        root: ({ theme }) => ({
          background: theme.palette.text.primary,
          height: 70,
          paddingLeft: 24,
          paddingRight: 24,
          [theme.breakpoints.up('md')]: {
            height: 90,
            paddingLeft: 50,
            paddingRight: 50
          },
          [theme.breakpoints.up('xl')]: {
            height: 100,
            paddingLeft: 140,
            paddingRight: 140
          }
        })
      }
    },
    MuiButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: 0,
          wordSpacing: 2
        })
      }
    }
  }
})

export default theme
