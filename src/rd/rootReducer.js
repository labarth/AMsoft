import { combineReducers } from 'redux';
import user from 'pages/login/redux/reducers';
import init from './initReducer';


export default combineReducers({
  init,
  user,
});
