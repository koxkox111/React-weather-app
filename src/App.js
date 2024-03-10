import React, { useState } from 'react'

import { City } from './City/City'
import { Weather } from './Weather/Weather'
import { Location } from './Location/Location'
import { lightTheme , darkTheme, Switch } from './Theme/Theme'

import { createGlobalStyle, ThemeProvider } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.textColor};
    transition: all 1s ease;
  }
`

export function App() {

  const [theme, setTheme] = useState('light')
  const isDarkTheme = theme === 'dark'
  const toggleTheme = () => {
    setTheme(isDarkTheme ? 'light' : 'dark')
  }

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyle/>
      <City/>
      <div>
        <Switch toggleTheme={toggleTheme} isDarkTheme={isDarkTheme}/>
        <Location/>
      </div>
      <Weather/>
    </ThemeProvider>
  )
}