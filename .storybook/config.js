import { configure } from '@storybook/react';

import '../src/assets/styles/index.css';

const req = require.context('../src/components/', true, /story\.js$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);
