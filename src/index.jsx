import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import './index.scss';

import {store} from './store';
import {Index} from './components/App';

ReactDOM.render(
    <Provider store={store}>
        <Index/>
    </Provider>,
    document.getElementById('root')
);
