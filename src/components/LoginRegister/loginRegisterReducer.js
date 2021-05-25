import {
    LOGIN_STARTED, 
    LOGIN_SUCCESS, 
    LOGIN_FAILED,    
    VERIFY_PHONE_NUMBER_STARTED,
    VERIFY_PHONE_NUMBER_RESET,
    VERIFY_PHONE_NUMBER_SUCCESS,
    VERIFY_PHONE_NUMBER_FAILED
    } from '../../constants/reducerConstants';
import { login, loginFailed, loginStarted, loginSuccess } from './Login/loginHandler';
import { verifyPhoneNumber, verifyPhoneNumberFailed, verifyPhoneNumberReset, verifyPhoneNumberStarted, verifyPhoneNumberSuccess } from './registerHandler';

const loginRegisterReducer = (state, action) => {
    if (state === undefined) {
        return {
            login: login,
            verifyPhoneNumber: verifyPhoneNumber
        }
    };
    switch (action.type) {
        case LOGIN_STARTED: 
            return loginStarted(state);
        case LOGIN_SUCCESS: 
            return loginSuccess(state);
        case LOGIN_FAILED: 
            return loginFailed(state, action);
        case VERIFY_PHONE_NUMBER_STARTED:
            return verifyPhoneNumberStarted(state);
        case VERIFY_PHONE_NUMBER_RESET:
            return verifyPhoneNumberReset(state);
        case VERIFY_PHONE_NUMBER_SUCCESS:
            return verifyPhoneNumberSuccess(state, action);
        case VERIFY_PHONE_NUMBER_FAILED:
            return verifyPhoneNumberFailed(state, action);
        default: 
            return state;
        
    };
   
};

export default loginRegisterReducer;