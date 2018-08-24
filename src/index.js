import React from 'react';
import {render} from 'react-dom';
import App from './components/app.js';
import {} from './index.css';

render(<App />, document.getElementById('mount'));

// This is only here due to webpack HMR. Ideally this would not exist in a PRODUCTION build
if (module.hot) {
  module.hot.accept();
}
