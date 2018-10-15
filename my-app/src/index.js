import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SocialMedia from './components/js/social-media';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<SocialMedia />, document.getElementById('main'));

serviceWorker.unregister();
