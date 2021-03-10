import {combineReducers} from 'redux';
import musicReducer from './reducer_music'


const rootReducer = combineReducers({
  content: musicReducer,
});

export default rootReducer
