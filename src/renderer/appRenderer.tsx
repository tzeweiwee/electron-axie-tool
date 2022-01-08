import React from 'react';
import ReactDOM from 'react-dom';
import { inDev } from '@common/helpers';
import WindowFrame from '@misc/window/components/WindowFrame';
import { Grommet } from 'grommet';
import Application from './components/Application';

import './main.css'

// Say something
console.log('[ERWT] : Renderer execution started');

const theme = {
  global: {
    font: {
      family: 'Nunito, san-serif',
      size: '50px'
    },
  },
};

// Application to Render
const app = (
  <WindowFrame title='Axie Energy Calculator' platform='windows'>
    <Grommet theme={theme}>
      <Application />
    </Grommet>
  </WindowFrame>
);

// Render application in DOM
ReactDOM.render(app, document.getElementById('app'));

// Hot module replacement
if (inDev() && module.hot) module.hot.accept();
