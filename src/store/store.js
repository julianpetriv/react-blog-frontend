import { configureStore } from '@reduxjs/toolkit';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { updateLoginRegister, updateUser } from '../components/LoginRegister';
import articlesSlice from '../components/Articles/articlesSlice';

const history = createBrowserHistory();

export const store = configureStore({
  reducer: {
    user: updateUser,
    loginRegister: updateLoginRegister,
    articles: articlesSlice,
    router: connectRouter(history)
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(routerMiddleware(history))
});
