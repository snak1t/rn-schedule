import { getSchedule } from './../data-request';

export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_FINISHED = 'FETCH_DATA_FINISHED';
export const FETCH_DATA_FAILED = 'FETCH_DATA_FAILED';
export const MENU_OPEN = 'MENU/OPEN';
export const MENU_CLOSE = 'MENU/CLOSE';

export const requestSchedule = (university, groupId) => dispatch => {
    dispatch({ type: FETCH_DATA_START });
    getSchedule(university, groupId)
        .then(data => {
            console.log(data);
            return data;
        })
        .then(data => dispatch({ type: FETCH_DATA_FINISHED, payload: data }))
        .catch(() => dispatch({ type: FETCH_DATA_FAILED }));
}

export const openMenu = () => dispatch => dispatch({ type: MENU_OPEN });
export const closeMenu = () => dispatch => dispatch({ type: MENU_CLOSE });