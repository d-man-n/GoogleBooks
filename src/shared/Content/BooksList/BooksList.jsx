import React, { useEffect } from 'react';

import Masonry from 'react-masonry-css';
import InfiniteScroll from 'react-infinite-scroller';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import styles from './bookslist.css';

export function BooksList(props) {
    let {books, page, itemsFetchData} = props;
    const breakpointColumnsObj = {
        default: 4,
            1350: 3,
            1100: 2,
            700: 1
        };

useEffect(() => itemsFetchData(0), [])
    return (
        <div>
            <InfiniteScroll
                loadMore={() => itemsFetchData(++page)}
                hasMore={true}
                loader={<h2>Loading...</h2>}
            >
                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className={styles.BooksList}
                    columnClassName={styles.BooksListColumn}
                >
                    {
                    books.map(el => {
                        // console.log(el);
                        return (
                            <div key={el.id} className={styles.book}>
                                <LazyLoadImage 
                                    effect="blur"
                                    src={el.imgMin} 
                                    className="photo-item__photo"
                                    alt={el.title}
                                    key={el.id}
                                    placeholder={<h1>Loading....</h1>}
                                    width="276"
                                >
                                </LazyLoadImage>
                                {/* <Link to={{pathname: `/photo/${el.id}`}} >
                                    regrthyhtyj
                                        <LazyLoadImage 
                                            effect="blur"
                                            src={el.url} 
                                            className="photo-item__photo"
                                            alt={el.alt_description}
                                            key={el.id}
                                            placeholder={<h1>Loading....</h1>}
                                            width="276"
                                            height={(el.height*276)/el.width}
                                            placeholderSrc={Logo}
                                        >
                                        </LazyLoadImage>
                                </Link> */}
                            </div>
                            );
                        })
                    }
                </Masonry>
            </InfiniteScroll>
        </div>
    );
}
