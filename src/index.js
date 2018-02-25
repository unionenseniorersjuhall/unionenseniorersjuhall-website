import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PageWrapper from './components/page-wrapper';
import NotFound from './components/not-found';
import CmsContent from './components/cms-content';

import './assets/styles/index.css';

const App = (
  <BrowserRouter>
    <PageWrapper>
      <Switch>
        <Route exact path="/" component={CmsContent} />
        <Route exact path="/program" component={CmsContent} />
        <Route exact path="/bildgalleri" component={CmsContent} />
        <Route exact path="/kontakta-oss" render={() => CmsContent(window.__PRELOADED_STATE__.homepage)} />
        <Route component={NotFound} />
      </Switch>
    </PageWrapper>
  </BrowserRouter>
);

render(App, document.getElementById('root'));
