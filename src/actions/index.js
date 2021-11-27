import axios from 'axios';

export const moreBooks = (books, page, items) => {
    return {
        type: 'MORE_BOOKS',
        books,
        page,
        items
    }
}

export function itemsFetchData(page, q='react') {
    return (dispatch) => {
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=react&key=AIzaSyCQu2WsfHC4HY0C_RmLZlCv_93Cyf99hug&startIndex=${page*10}`)
            .then((resp) => dispatch(moreBooks(resp.data.items, page, resp.data.totalItems)));
    };
}
