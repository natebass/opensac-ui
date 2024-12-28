import React from 'react';

import "./theme.css"

const ThemeContext = React.createContext(undefined)

export interface OpenSacProviderProps {
  value: undefined
  children: React.ReactNode
}


function OpenSacProvider(props: OpenSacProviderProps) {
  const { value: sys, children } = props

  return (
    <ThemeContext.Provider value={sys}>
      {children}
    </ThemeContext.Provider>
  )
}

function useTheme() {
  const context = React.useContext(ThemeContext)
  
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

export {OpenSacProvider, useTheme}
