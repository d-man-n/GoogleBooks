import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';

import { hot } from 'react-hot-loader/root';
import style from './app.css';
import configureStore from './shared/store/configureStore';

import { Layout } from './shared/Layout/Layout';
import { Header } from './shared/Header/Header';
import { Content } from './shared/Content';
import { BrowserRouter } from 'react-router-dom';

import { itemsClearData } from './actions';

let initialState = {};

const store = configureStore(initialState);

function AppComponent() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <Provider store={store}>
            {mounted && (
                <BrowserRouter>
                    <Layout>
                        <Header itemsClearData={itemsClearData} />
                        <Content />
                    </Layout>
                </BrowserRouter>
            )}
        </Provider>
    )
}

export const App = hot(() => <AppComponent/>);
