import { getSchedule } from './../data-request';

export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_FINISHED = 'FETCH_DATA_FINISHED';
export const FETCH_DATA_FAILED = 'FETCH_DATA_FAILED';
export const MENU_OPEN = 'MENU/OPEN';
export const MENU_CLOSE = 'MENU/CLOSE';
export const SEARCH_LECTOR = 'SEARCH/LECTOR';
export const SEARCH_LESSON = 'SEARCH/LESSON';
export const SEARCH_CLEAR = 'SEARCH/CLEAR';

export const requestSchedule = (university, groupId) => dispatch => {
    dispatch({ type: FETCH_DATA_START });
    getSchedule(university, groupId)
        .then(data => dispatch({ type: FETCH_DATA_FINISHED, payload: data }))
        .catch(() => dispatch({ type: FETCH_DATA_FAILED }));
}

export const openMenu = () => dispatch => dispatch({ type: MENU_OPEN });
export const closeMenu = () => dispatch => dispatch({ type: MENU_CLOSE });

export const clearSearch = () => dispatch => dispatch({ type: SEARCH_CLEAR });
export const searchLector = name => dispatch => dispatch({ type: SEARCH_LECTOR, payload: name });
export const searchLesson = name => dispatch => dispatch({ type: SEARCH_LESSON, payload: name });