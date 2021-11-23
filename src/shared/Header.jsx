import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import style from './header.less';
import searchBooks from './search';

function HeaderComponent() {
    const book = async () => {
        console.log(await searchBooks());      
    }

    book();
    return (
        <header>
            <h1 className={style.h1}>
                Hello React

            </h1>
        </header>
    )
}

export const Header = hot(HeaderComponent)
