import { createAction } from 'redux-actions';
import { getUser } from 'services/userService';

const loginActions = {
  LOGIN_REQUEST: 'USERS_LOGIN_REQUEST',
  LOGIN_SUCCESS: 'USERS_LOGIN_SUCCESS',
  LOGIN_FAILURE: 'USERS_LOGIN_FAILURE',
};

export const SEND_LOGIN_REQUEST = createAction(loginActions.LOGIN_REQUEST);
export const SEND_LOGIN_SUCCESS = createAction(loginActions.LOGIN_SUCCESS);
export const SEND_LOGIN_FAILURE = createAction(loginActions.LOGIN_FAILURE);

export const login = (username, password, history) => async (dispatch) => {
  await dispatch(SEND_LOGIN_REQUEST());
  try {
    const user = await getUser(username, password);
    await dispatch(SEND_LOGIN_SUCCESS(user));
    await localStorage.setItem('user', JSON.stringify(user));
    await history.push('/');
  } catch (error) {
    await dispatch(SEND_LOGIN_FAILURE(error));
  }
};
