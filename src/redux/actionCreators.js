import { createActions } from 'reduxsauce';


export const {
  Types,
  Creators
} = createActions({
  signInRequest: ['email', 'passwd'],
});


export default Creators;
