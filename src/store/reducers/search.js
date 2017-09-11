import {
    FETCH_DATA_START,
    FETCH_DATA_FINISHED,
} from './../actions';

const initialState = {
    lessons: [],
    lectors: [],
};

export default (state = initialState, action = null) => {
    switch (action.type) {
        case (FETCH_DATA_START):
            return { ...initialState };
        case (FETCH_DATA_FINISHED):
            return {
                ...state,
                lessons: action.payload.lessonsList,
                lectors: action.payload.lectorsList,
            };
        default:
            return state;
    }
}