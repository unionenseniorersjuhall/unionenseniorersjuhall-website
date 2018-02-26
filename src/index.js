import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import app from './reducers';
import PageWrapper from './components/page-wrapper';
import NotFound from './components/not-found';
import Hem from './pages/hem';
import Program from './pages/program';
import Bildgalleri from './pages/bildgalleri';
import KontaktaOss from './pages/kontakta-oss';

import './assets/styles/index.css';

const store = createStore(app, window.__PRELOADED_STATE__);

const App = (
  <Provider store={store}>
    <BrowserRouter>
      <PageWrapper>
        <Switch>
          <Route exact path="/" component={Hem} />
          <Route exact path="/program" component={Program} />
          <Route exact path="/bildgalleri" component={Bildgalleri} />
          <Route exact path="/kontakta-oss" render={KontaktaOss} />
          <Route component={NotFound} />
        </Switch>
      </PageWrapper>
    </BrowserRouter>
  </Provider>
);

render(App, document.getElementById('root'));
