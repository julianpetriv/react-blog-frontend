import { useState, useEffect } from 'react';
import { formatPhoneNumberIntl, isValidPhoneNumber } from 'react-phone-number-input/input';
import { useSelector, useDispatch } from 'react-redux';
import './Login.scss';
import { verifyPhoneNumber, loginRegister } from '../actions';
import useInterval from '../../../utils/customHooks/useInterval';
import { LOGIN_REGISTER_USER } from '../../../constants';
import Login from './Login';
import { useLocation } from 'react-router-dom';

const LoginContainer = _ => {
  let location = useLocation();
  // стейт з Redax
  const success = useSelector(state => state.loginRegister.verifyPhoneNumber.success);
  const vPhNError = useSelector(state => state.loginRegister.verifyPhoneNumber.error);
  const loginError = useSelector(state => state.loginRegister.login.error?.error.user_authentication);
  const nameRedux = useSelector(state => state.loginRegister.verifyPhoneNumber.name);
  // локальний стейт
  const [validated, setValidated] = useState(false);
  const [value, setValue] = useState();
  const [count, setCount] = useState();
  const [delay, setDelay] = useState(null);
  const [name, setName] = useState();
  const [submitActive, setSubmitActive] = useState(true);
   // dispatch from redux
   const dispatch = useDispatch();

  useEffect(()=> {
    setName(nameRedux);
  }, [nameRedux]);

  useEffect(()=> {
    if(success)
      setSubmitActive(true);
  }, [success]);
  
  const handleSubmit = (event, func) => {
    event.preventDefault();
    event.stopPropagation();    
    const form = event.currentTarget;
    if (form.checkValidity() === true) {
      setSubmitActive(false);
      if (func === "vPhN") {            
        dispatch(verifyPhoneNumber(value));            
        resetCounter();
      }
      else {
        const token = form.elements.token.value;
        login(token);       
      }
    }    
    setValidated(true);    
  };

  const login = (token) => {
    const phone = formatPhoneNumberIntl(value).replace(/\s+/g, '');
    dispatch(loginRegister(phone, token, name,
      LOGIN_REGISTER_USER,
      location.state ? location.state.table : null))
  }

  useInterval(() => {
    setCount(count - 1)

  }, count ? delay : null);

  const resetCounter = _ => {
    setCount(120);
    setDelay(1000);
  };
  const sendCodeAgain = _ => {
    const phone = formatPhoneNumberIntl(value).replace(/\s+/g, '');
    dispatch(verifyPhoneNumber(phone));
    resetCounter();
  }
  return (
    <Login   
      validated={validated}
      handleSubmit={handleSubmit}
      setValue={(value) => { setValue(value) }}
      success={success}
      vPhNError={vPhNError}
      loginError={loginError}
      name={name}
      count={count}
      submitActive={submitActive}
      sendCodeAgain={() => sendCodeAgain()}
      isValidPhoneNumber={_ => isValidPhoneNumber(value)}
      onTokenChange={(e) => {e.target.value.length===6 && login(e.target.value)}}
      onNameChange={(e) => setName(e.target.value)}
    />
  )
};

export default LoginContainer;