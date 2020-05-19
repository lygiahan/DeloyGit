import { SHOW_MODAL, EDIT_MODAL, CANCE_MODAL, EDITTING, TOGGLE_ADDCOURSE, TOGGLE_CANCECOURSE } from "../../actions/type";

let inistialState = {
    openModal: false,
    editModal: false,
    toggleAdd: false
};


export const ModalReducer = (state = inistialState, action) => {
    switch (action.type) {

        case SHOW_MODAL:
            {

                return {...state, openModal: true };
            }
        case EDIT_MODAL:
            {
                state.editModal = true;
                return {...state }
            }
        case CANCE_MODAL:
            {
                return {...state, openModal: false, editModal: false }
            }
        case TOGGLE_ADDCOURSE:
            {
                return {...state, toggleAdd: !state.toggleAdd }
            }
        case TOGGLE_CANCECOURSE:
            {
                return {...state, toggleAdd: false }
            }
        default:
            return state;

    }
}