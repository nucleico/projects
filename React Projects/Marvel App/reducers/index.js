import { combineReducers } from 'redux';
import dataReducer from './dataReducer';
import alertReducer from './alert';

export default combineReducers({
  data: dataReducer,
  alert: alertReducer,
});
