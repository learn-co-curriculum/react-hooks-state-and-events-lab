import React from 'react';
import ReactDOM from 'react-dom';

import DigitalClicker from './components/DigitalClicker';
import YouTubeDebugger from './components/YouTubeDebugger';

ReactDOM.render(
  <div>
    <DigitalClicker />
    <YouTubeDebugger />
  </div>,
  document.getElementById('global')
);
