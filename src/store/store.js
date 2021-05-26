import { configureStore } from '@reduxjs/toolkit';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { updateLoginRegister, updateUser } from '../components/LoginRegister';
import articlesSlice from '../components/Articles/articlesSlice';
import commentsSlice from '../components/Comments/commentsSlice';

const history = createBrowserHistory();

export const store = configureStore({
  reducer: {
    user: updateUser,
    loginRegister: updateLoginRegister,
    articles: articlesSlice,
    comments: commentsSlice,
    router: connectRouter(history)
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(routerMiddleware(history))
});
