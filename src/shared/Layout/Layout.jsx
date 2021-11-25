import React from 'react';
import styles from './layout.css';

export function Layout({ children }) {
    return(
        <div className={styles.layout}>
            {children}
        </div>
    );
}

export function MyHooks({title}) {
    React.useEffect(() => {
        
    })
}
