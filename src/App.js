import { Header } from './components/Header'
import { TaskList } from './components/TaskList'
import { GlobalStyle } from './styles/global'

import { ThemeProvider } from 'styled-components'

import { darkMode as darkModeTheme } from './styles/theme'
import { lightMode } from './styles/theme'

import { useState } from 'react'
function App() {
  const [darkMode, setDarkMode ] = useState(false)

  return (
    <ThemeProvider theme={ darkMode ? darkModeTheme :  lightMode }>
      <Header  darkMode={darkMode} />
      <TaskList darkMode={darkMode} setDarkMode={setDarkMode}/>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
