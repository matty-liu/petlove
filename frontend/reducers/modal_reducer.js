import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_action'

export const modalReducer = ( state = { modalOpen: false }, action ) => {

  

  switch (action.type) {

    case 'OPEN_MODAL':
      return Object.assign({}, state, action.modal)

    case 'CLOSE_MODAL':
      return Object.assign({}, state, action.modal)

    default:
      return state
  }

}
