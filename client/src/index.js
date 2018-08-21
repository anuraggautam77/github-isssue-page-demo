import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import Routing from './router/router';
import store from './store';
import './style/css/index.scss';

ReactDom.render(
        <Provider store={store}>
            <Routing/>
        </Provider>,
        document.getElementById('app-wrapper')
        )
