import React from 'react';
import ReactDom from 'react-dom';

import '@styles/main.scss';

import Router from './Core/router/';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import ourStore from './Core/Store';

const container = document.querySelector('#app');

ReactDom.render(
    <Provider store={ ourStore() }>
        <BrowserRouter>
            <Router />
        </BrowserRouter>
    </Provider>,
    container
);