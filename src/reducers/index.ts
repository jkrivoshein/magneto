import {combineReducers} from 'redux';
import photoReducer from './reducer_photo'


const rootReducer = combineReducers({
  photos: photoReducer,
});

export default rootReducer
