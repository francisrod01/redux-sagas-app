import { createReducer } from 'reduxsauce';

import { Types } from '../actionCreators';


export const INITIAL_STATE = {
  isAuthing: false,
  isAuth: false,
  isSigningIn: false,
  user: {},
  error: false,
  errorMessage: '',
}

// .......
export const signInRequest = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    isSigningIn: false,
    error: false,
    errorMessage: '',
  }
}


export const HANDLERS = {
  [Types.SIGNIN_REQUEST]: signInRequest,
}


export default createReducer(INITIAL_STATE, HANDLERS);
