import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PageWrapper from './components/page-wrapper';
import NotFound from './components/not-found';
import Hem from './pages/hem';
import Program from './pages/program';
import Bildgalleri from './pages/bildgalleri';
import KontaktaOss from './pages/kontakta-oss';

import './assets/styles/index.css';

const App = (
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
);

render(App, document.getElementById('root'));
