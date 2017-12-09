import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_action'

const initialState = {
  modalOpen: false,
  modalType: null,
}

export const modalReducer = ( state = initialState, action ) => {
  let newState = {};

  switch (action.type) {

    case 'OPEN_MODAL':
      newState = {
        modalOpen: true,
        modalType: action.modal.modalType,
      }
      return Object.assign({}, state, newState)

    case 'CLOSE_MODAL':
      newState = {
        modalOpen: false,
        modalType: null,
      }
      return Object.assign({}, state, newState)

    default:
      return state
  }

}
