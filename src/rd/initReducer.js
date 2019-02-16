import { handleActions, createAction } from 'redux-actions';

export const initAction = {
  init: createAction('INIT_APPLICATION'),
};

const initReducer = (state = 'init') => state;

export default handleActions({
  [initAction]: initReducer,
}, {});
