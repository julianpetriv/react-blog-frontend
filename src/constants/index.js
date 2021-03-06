//let BASE_URL = `https://api.rails.viwi.app/`;
let BASE_URL = `http://localhost:3000/`;

if(process.env.NODE_ENV === 'production')
    BASE_URL = `https://api.${window.location.host}/`;

export {BASE_URL};

export const IMAGES_URL = 'https://rails-blog.fra1.digitaloceanspaces.com/';

//константи AccountController
export const VERIFY_PHONE_NUMBER_URL = 'account/verify_phone_number';
export const LOGIN_REGISTER_USER = 'account/login_register';

//константи ArticleController
export const ARTICLES_URL = 'articles';
export const ARTICLES_FIND_URL = 'articles/find';

//константи CommentController
export const COMMENTS_URL = 'comments';