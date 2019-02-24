import { handleActions } from 'redux-actions';
import { Record } from 'immutable';
import * as Actions from './actions';

const initialState = Record({
  loading: false,
  user: null,
  error: null,
});

export default handleActions({
  [Actions.SEND_LOGIN_REQUEST]: (state) => state.set('loading', true),
  [Actions.SEND_LOGIN_SUCCESS]: (state, { payload }) => state.set('loading', false).set('user', payload.user),
  [Actions.SEND_LOGIN_FAILURE]: (state, { payload }) => state.set('loading', false).set('user', null).set('error', payload.error),
}, initialState());
