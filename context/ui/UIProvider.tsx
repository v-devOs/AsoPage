import { FC, ReactNode, useReducer } from 'react';
import { UIContext, uiReducer } from './';

interface Props {
  children: ReactNode
}

export interface UIState {
  isSideMenuOpen: boolean;
}

const UI_INITIAL_STATE : UIState = {
  isSideMenuOpen: false,
}

export const UIProvider: FC<Props> = ({ children }) => {

  const [state, dispatch] = useReducer( uiReducer, UI_INITIAL_STATE)

  const onToggleSideMenu = () => {
    dispatch({type: '[UI] - Toggle side menu'})
  }

  return (
    <UIContext.Provider value={{
      ...state,

      // Methods
      onToggleSideMenu
    }}>
    { children }
    </UIContext.Provider>
  )
}