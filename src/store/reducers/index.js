import { combineReducers } from 'redux';

import schedule from './schedule';
import search from './search';

export default combineReducers({
    schedule,
    search,
});