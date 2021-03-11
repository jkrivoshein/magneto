import {combineReducers} from 'redux';
import musicReducer from './reducer_music'


const rootReducer = combineReducers({
  music: musicReducer,
});

export default rootReducer
