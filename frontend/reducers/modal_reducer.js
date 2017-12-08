import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_action'

const initialState = {
  modalType: null,
}

function modal(state = initialState, action) {
  switch (action.type) {
    case 'OPEN_MODAL':
      return action.modal
    case 'CLOSE_MODAL':
      return initialState
    default:
      return state
  }
}
