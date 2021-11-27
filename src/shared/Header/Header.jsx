import React from 'react';
import styles from './header.css';

export function Header() {
    return(
        <header className={styles.header}>
            <h2 className={styles.title}>Search for books</h2>
            <form action={"/books"}>
                <div className={styles.search}>
                    <input type="text" name="search" className={styles.fldSearch} />
                    <button className={styles.btnSearch}></button>
                </div>
                <div className={styles.searchFilter}>
                    <div className={styles.categories}>
                        <p className={styles.text}>Categories</p>
                        <select name="categoties" id="">
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
                        <select name="strongBy" id="">
                            <option value="relevance">relevance</option>
                            <option value="newest">newest</option>
                        </select>
                    </div>
                </div>
            </form>
        </header>
    );
}