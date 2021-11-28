import React, {useState} from 'react';
import {connect} from 'react-redux';
import styles from './header.css';

import { Link, useNavigate } from 'react-router-dom';
import { itemsClearData } from '../../actions';


export function Header(props) {

    const { itemsClearData } = props;

    let navigate = useNavigate();

    function handleClick(event) {
        event.preventDefault();
        itemsClearData();
        navigate("/books", {state: {search: document.querySelector('#searchStr').value, categories: document.querySelector('#categories').value, strongBy: document.querySelector('#strongBy').value}});
    }

    return(
        <header className={styles.header}>
            <h2 className={styles.title}>Search for books</h2>
            <form onSubmit={handleClick}>
                <div className={styles.search}>
                    <input type="text" name="search" id="searchStr" className={styles.fldSearch} />
                    <button className={styles.btnSearch}></button>
                </div>
                <div className={styles.searchFilter}>
                    <div className={styles.categories}>
                        <p className={styles.text}>Categories</p>
                        <select name="categoties" id="categories" onChange={handleClick}>
                            <option value="all">all</option>
                            <option value="art">art</option>
                            <option value="biography">biography</option>
                            <option value="computers">computers</option>
                            <option value="history">history</option>
                            <option value="medical">medical</option>
                            <option value="poetry">poetry</option>
                        </select>
                    </div>
                    <div className={styles.strong}>
                        <p className={styles.text}>Strong by</p>
                        <select name="strongBy" id="strongBy" onChange={handleClick}>
                            <option value="relevance">relevance</option>
                            <option value="newest">newest</option>
                        </select>
                    </div>
                </div>
            </form>
        </header>
    );
}

const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps = (dispatch) => {
    return {
        itemsClearData: () => dispatch(itemsClearData())
    }
}

Header = connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);