import React from 'react';
import { Provider } from 'react-redux';

import { hot } from 'react-hot-loader/root';
import style from './app.css';
import configureStore from './shared/store/configureStore';

import { Layout } from './shared/Layout/Layout';
import { Header } from './shared/Header/Header';
import { Content } from './shared/Content';

let initialState = {};

const store = configureStore(initialState);

function AppComponent() {
    return (
        <Provider store={store}>
            <Layout>
                <Header />
                <Content />
            </Layout>
        </Provider>
    )
}

export const App = hot(AppComponent)
