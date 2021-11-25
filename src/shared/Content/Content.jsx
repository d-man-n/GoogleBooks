import React from 'react';
// import { Route, BrowserRouter } from 'react-router-dom';
import {connect} from 'react-redux';

import styles from './content.css';
import { BooksList } from './BooksList';
import { itemsFetchData } from '../../actions';

export function Content(props) {

    const {booksStore, itemsFetchData} = props;
    const {books, page, items} = booksStore;
    // console.log(booksStore)
    return (
        <main>
            <BooksList  books={books} itemsFetchData={itemsFetchData} page={page} items={items} />
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
