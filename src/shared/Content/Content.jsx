import React, { useEffect, useState } from 'react';
// import { Route, BrowserRouter } from 'react-router-dom';
import {connect} from 'react-redux';

import styles from './content.css';
import { BooksList } from './BooksList';
import { StartPage } from './StartPage';
import { itemsFetchData } from '../../actions';

import { BrowserRouter, Link, Switch, Route, Routes } from 'react-router-dom';

export function Content(props) {

    const {booksStore, itemsFetchData} = props;
    const {books, page, items} = booksStore;

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);
    // console.log(booksStore)
    return (
        <main>
            {mounted && (
                <BrowserRouter>
                <Routes>
                    <Route path="/"  element={ <StartPage /> } />
                    <Route path="/books" element={ <BooksList books={books} itemsFetchData={itemsFetchData} page={page} items={items} /> } />
                </Routes>

                    {/* <BooksList  books={books} itemsFetchData={itemsFetchData} page={page} items={items} /> */}
                </BrowserRouter>
            )}
        </main>
    );
}

const mapStateToProps = (state) => {
    return {
        booksStore: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        itemsFetchData: (page) => dispatch(itemsFetchData(page))
    }
}

Content = connect(
    mapStateToProps,
    mapDispatchToProps
)(Content);
