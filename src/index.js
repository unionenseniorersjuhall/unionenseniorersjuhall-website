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
        {window.__PRELOADED_STATE__.pages.map((page) => <Route exact path={page.route} component={CmsContent} />)}
        <Route component={NotFound} />
      </Switch>
    </PageWrapper>
  </BrowserRouter>
);

render(App, document.getElementById('root'));
