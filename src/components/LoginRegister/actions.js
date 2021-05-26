import { PostResourceWithTokens, PostResource } from '../../services';
import {VERIFY_PHONE_NUMBER_URL} from '../../constants';
import { push } from 'connected-react-router';
import {LOGIN_STARTED, 
    LOGIN_SUCCESS, 
    LOGIN_FAILED,
    SET_CURRENT_USER,
    VERIFY_PHONE_NUMBER_STARTED, 
    VERIFY_PHONE_NUMBER_RESET,
    VERIFY_PHONE_NUMBER_SUCCESS,
    VERIFY_PHONE_NUMBER_FAILED
} from '../../constants/reducerConstants';

const vPhNStarted = _  => ({type: VERIFY_PHONE_NUMBER_STARTED });
const vPhNReset = _  => ({type: VERIFY_PHONE_NUMBER_RESET });
const vPhNSuccess = result => ({type: VERIFY_PHONE_NUMBER_SUCCESS, payload: result});
const vPhNFailed = err => ({ type: VERIFY_PHONE_NUMBER_FAILED, payload: err });

const loginStarted = _ =>({ type: LOGIN_STARTED });
const loginSuccess = _ => ({type: LOGIN_SUCCESS});
const loginFailed = err => ({type: LOGIN_FAILED, payload: err});

export const setCurrentUser = user => ({type: SET_CURRENT_USER, payload: user});

export const verifyPhoneNumber = phone => {
    return dispatch => {
        dispatch(vPhNStarted())
        PostResource(VERIFY_PHONE_NUMBER_URL, {phone_number: phone})
        .then((result) => {
            dispatch(vPhNSuccess(result));
        })
        .catch((err) => {
            dispatch(vPhNFailed(err.response?err.response.data:err.message));
        })
    };
};
export const loginRegister = (phone, phonetoken, name, type) => {
    return dispatch => {
        dispatch(loginStarted());
        PostResourceWithTokens(type, {phone_number: phone, verif: parseInt(phonetoken), name: name})
        .then(user => {
            dispatch(loginSuccess());
            dispatch(setCurrentUser(user));
            dispatch(vPhNReset())
            dispatch(push("/"))
        })
        .catch((err) => {
            dispatch(loginFailed(err.response?err.response.data:err.message));
        })
    };
};

export const logout = _ => {
    return(dispatch, getState) => {
        localStorage.clear();
        dispatch(setCurrentUser({}));
        dispatch(push('/'));
    };
};