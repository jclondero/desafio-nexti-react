import { createContext, useCallback, useMemo, useState } from 'react'

import { createMuiTheme, ThemeProvider } from '@material-ui/core'

import { deepOrange, deepPurple, lightBlue, orange } from '@material-ui/core/colors'

export const ThemeContext = createContext('theme')

const Theme = ({ children }) => {
  const [palletMode, setPallet] = useState('dark')

  const togglePallet = useCallback(() => {
    if (palletMode === 'light') {
      setPallet('dark')
    } else {
      setPallet('light')
    }
  }, [palletMode, setPallet])

  const darkTheme = useMemo(
    () => ({
      palette: {
        type: 'dark',
        primary: {
          main: orange[500],
        },
        secondary: {
          main: deepOrange[900],
        },
      },
    }),
    []
  )

  const lightTheme = useMemo(
    () => ({
      palette: {
        type: 'light',
        primary: {
          main: lightBlue[500],
        },
        secondary: {
          main: deepPurple[500],
        },
      },
    }),
    []
  )

  const theme = createMuiTheme(palletMode === 'light' ? lightTheme : darkTheme)

  return (
    <ThemeContext.Provider
      value={{
        palletMode,
        togglePallet,
      }}
    >
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default Theme
