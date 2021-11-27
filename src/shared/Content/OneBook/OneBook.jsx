import React from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from './onebook.css';

export function OneBook(props) {

    const params = useParams();
    const book = props.books.find(el => el.id === params.id);

    return (
        <div className={styles.book}>
            <div className={styles.bookImg}>
                <img src={book.img} alt={book.title} className={styles.img} />
            </div>
            <div className={styles.bookDescription}>
                <p className={styles.categories}>{book.categories}</p>
                <h3 className={styles.title}>{book.title}</h3>
                <p className={styles.authors}>{book.authors}</p>
                <div className={styles.description}>{book.description}</div>
                <Link to="/books" className={styles.link}>Back</Link>
            </div>
        </div>
    );
}