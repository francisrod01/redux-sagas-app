import { takeLatest, all, put } from 'redux-saga/effects';
import axios from 'axios';
import jwtDecode from 'jwt-decode';

import ActionCreators, { Types } from '../actionCreators';


function* signIn(action) {
  console.log('=== call to signIn(...) saga.');
}


export default function* rootSaga() {
  yield all([
    takeLatest(Types.SIGNIN_REQUEST, signIn),
  ]);
}
