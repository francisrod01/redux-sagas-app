import { createActions } from 'reduxsauce';


export const {
  Types,
  Creators
} = createActions({
  signinRequest: ['email', 'passwd'],
});


export default Creators;
