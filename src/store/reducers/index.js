import { combineReducers } from 'redux';

import schedule from './schedule';
import search from './search';
import menu from './menu';

export default combineReducers({
    schedule,
    search,
    menu,
});