import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import InfiniteScroll from 'react-infinite-scroller';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import styles from './bookslist.css';

export function BooksList(props) {

    const { search, categories, strongBy } = useLocation().state;

    let {books, page, items, itemsFetchData} = props;
    let hasMore = items>books.length ? true : false;

    useEffect(() => itemsFetchData(0, search, categories, strongBy), [search]);
    useEffect(() => itemsFetchData(0, search, categories, strongBy), [categories]);
    useEffect(() => itemsFetchData(0, search, categories, strongBy), [strongBy]);

    return (
        <div>
            <h2 className={styles.coll}>Found {items} results</h2>
            <InfiniteScroll
                loadMore={() => itemsFetchData(page++, search, categories, strongBy)}
                hasMore={hasMore}
                loader={<h2 className={styles.loading} key={-1}>Loading...</h2>}
                className={styles.BooksList}
            >
                {
                books.map((el, index)=> {
                    return (
                        <Link to={"/books/" + el.id} className={styles.link}>
                            <div key={index} className={styles.book}>
                                <LazyLoadImage 
                                    effect="blur"
                                    src={el.imgMin} 
                                    className={styles.img}
                                    alt={el.title}
                                    placeholder={<h1>Loading....</h1>}
                                    width="200"
                                    height="290"
                                >
                                </LazyLoadImage>
                                <p className={styles.categories}>{el.categories}</p>
                                <h3 className={styles.title}>{el.title}</h3>
                                <p className={styles.authors}>{el.authors}</p>
                            </div>
                        </Link>
                        );
                    })
                }
            </InfiniteScroll>
        </div>
    );
}
