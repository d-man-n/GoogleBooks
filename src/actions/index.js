import axios from 'axios';

export const moreBooks = (items, page) => {
    return {
        type: 'MORE_BOOKS',
        items,
        page
    }
}

export function itemsFetchData(page) {
    return (dispatch) => {
        axios.get('https://www.googleapis.com/books/v1/volumes?q=react&key=AIzaSyCQu2WsfHC4HY0C_RmLZlCv_93Cyf99hug&startIndex=' + page*10)
            .then((resp) => dispatch(moreBooks(resp.data.items, page)));
    };
}
