import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';

import { hot } from 'react-hot-loader/root';
import style from './app.css';
import configureStore from './shared/store/configureStore';

import { Layout } from './shared/Layout/Layout';
import { Header } from './shared/Header/Header';
import { Content } from './shared/Content';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';

let initialState = {};

const store = configureStore(initialState);

function AppComponent() {
    // const [mounted, setMounted] = useState(false);

    // useEffect(() => {
    //     setMounted(true);
    // }, []);

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
