import LoginContainer from '../LoginRegister/Login/LoginContainer';
import updateUser from './UserData/userDataReducer';
import updateLoginRegister from './loginRegisterReducer';
import {logout} from './actions';
export {updateLoginRegister, updateUser, logout};
export default LoginContainer;
