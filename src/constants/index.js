//let BASE_URL = `https://api.rails.viwi.app/`;
let BASE_URL = `http://localhost:3000/`;

if(process.env.NODE_ENV === 'production')
    BASE_URL = `https://api.${window.location.host}/`;

export {BASE_URL};

//константи AccountController
export const VERIFY_PHONE_NUMBER_URL = 'account/verify_phone_number';
export const LOGIN_USER = 'account/login';
export const REGISTER_CLIENT = 'account/register';

//константи ArticleController
export const ARTICLES_URL = 'articles';