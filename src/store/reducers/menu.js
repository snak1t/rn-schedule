import { MENU_CLOSE, MENU_OPEN } from './../actions';

const initialState = {
    isOpened: true,
};

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case MENU_OPEN:
            return { ...state, isOpened: true };
        case MENU_CLOSE:
            return { ...state, isOpened: false };
        default:
            return state;
    }
}