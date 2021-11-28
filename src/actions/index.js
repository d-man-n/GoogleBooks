import axios from 'axios';

export const moreBooks = (books, page, items, categories, strongBy) => {
    return {
        type: 'MORE_BOOKS',
        books,
        categories,
        strongBy,
        page,
        items
    }
}

export const clearBooks = () => {
    return {
        type: 'CLEAR_BOOKS'
    }
}

export function itemsFetchData(page, search="react", categories="all", strongBy="relevance") {
    return (dispatch) => {
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyCQu2WsfHC4HY0C_RmLZlCv_93Cyf99hug&maxResults=30&startIndex=${page*10}`)
            .then((resp) => dispatch(moreBooks(resp.data.items, page, resp.data.totalItems, categories, strongBy)));
    };
}

export function itemsClearData() {
    return (dispatch) => dispatch(clearBooks());
}
