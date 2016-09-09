const React = require('react');
const ReactDOM = require('react-dom');

const DigitalClicker = require('./components/DigitalClicker');
const YouTubeDebugger = require('./components/YouTubeDebugger');

ReactDOM.render(
  <div>
    <DigitalClicker />
    <YouTubeDebugger />
  </div>,
  document.getElementById('main')
);

require('./test/index-test.js'); // Leave this in!
