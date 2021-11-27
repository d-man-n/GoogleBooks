import React, { useEffect, useState } from 'react';
import {connect} from 'react-redux';

import styles from './content.css';
import { BooksList } from './BooksList';
import { StartPage } from './StartPage';
import { itemsFetchData } from '../../actions';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { OneBook } from './OneBook';

export function Content(props) {

    const {booksStore, itemsFetchData} = props;
    const {books, page, items} = booksStore;

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <main>
            {mounted && (
                <BrowserRouter>
                    <Routes>
                        <Route path="/"  element={ <StartPage /> } />
                        <Route path="/books" element={ <BooksList books={books} itemsFetchData={itemsFetchData} page={page} items={items} /> } />
                        <Route path="/books/:id" element={ <OneBook books={books}/> } />
                    </Routes>
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
