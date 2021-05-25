import React from 'react';
import Layout from '../Layout';
import { Redirect, Route, Switch } from 'react-router-dom';
import ErrorBoundry from '../ErrorBoundry';
import Error404 from '../Error404';
import { Suspense } from 'react';
import Spinner from '../Spinner';
import LoginContainer from '../LoginRegister';
import ArticlesContainer from '../Articles/ArticlesContainer'

const App = _ => (
  <Suspense fallback={<Spinner />}>
    <Layout>
      <ErrorBoundry>
        <Switch>
          <Redirect exact from="/" to="/articles" />
          <Route path='/articles/:id?' component={ArticlesContainer} />
          <Route path='/login' component={LoginContainer} />
          <Route component={Error404} />
        </Switch>
      </ErrorBoundry>
    </Layout>
  </Suspense>
);

export default App;