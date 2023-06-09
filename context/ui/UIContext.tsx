import { createContext } from 'react'

interface ContextProps {
  isSideMenuOpen: boolean

  // Methods

  onToggleSideMenu: () => void
}

export const UIContext = createContext({} as ContextProps)