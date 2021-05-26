import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import App from './components/App/App';
import { store } from './store/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import ScrollToTop from './utils/ScrollToTop';
import { getDataFromLocal } from './utils/localStorage';
import { SetTokensGetUser } from './services';
import { setCurrentUser } from './components/LoginRegister/actions';
import { toast } from 'react-toastify';

toast.configure({
  position: 'bottom-right'
})

const history = createBrowserHistory();

//set tokens from localstorage
const tokens = getDataFromLocal("tokens");
const user = SetTokensGetUser(tokens);
store.dispatch(setCurrentUser(user));

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
