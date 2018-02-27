import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import app from './reducers';
import PageWrapper from './components/page-wrapper';
import NotFound from './components/not-found';
import Home from './containers/home';
import Program from './containers/program';
import Gallery from './containers/gallery';
import Contact from './containers/contact';

import './assets/styles/index.css';

const store = createStore(app, window.__PRELOADED_STATE__);

const App = (
  <Provider store={store}>
    <BrowserRouter>
      <PageWrapper>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/program" component={Program} />
          <Route exact path="/bildgalleri" component={Gallery} />
          <Route exact path="/kontakta-oss" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </PageWrapper>
    </BrowserRouter>
  </Provider>
);

render(App, document.getElementById('root'));
