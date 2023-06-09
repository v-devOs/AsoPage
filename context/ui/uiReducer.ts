import { UIState } from './';

type UIActionType = 
| { type: '[UI] - Toggle side menu' } 

export const uiReducer = ( state: UIState, action: UIActionType ): UIState => {
  
  switch (action.type) {
    case '[UI] - Toggle side menu':
      return{
        ...state,
        isSideMenuOpen: !state.isSideMenuOpen
      }


    default:
      return state;
  }
}