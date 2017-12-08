
export const OPEN_MODAL = "OPEN_MODAL"
export const CLOSE_MODAL = "CLOSE_MODAL"

export const openModal = () => {
  return {
    type: 'OPEN_MODAL',
    modal: {modalOpen: true},
  }
}

export const closeModal = () => {
  return {
    type: 'CLOSE_MODAL',
    modal: {modalOpen: false},
  }
}
