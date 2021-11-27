const books = (state = [], action) => {
    switch(action.type) {
        case 'MORE_BOOKS':
            let img;
            let imgMin;
            for (let i = 0; i < action.books.length; i++) {
                img = action.books[i].volumeInfo.hasOwnProperty('imageLinks') ? action.books[i].volumeInfo.imageLinks.thumbnail : "";
                imgMin = action.books[i].volumeInfo.hasOwnProperty('imageLinks') ? action.books[i].volumeInfo.imageLinks.smallThumbnail : "";
                state = [
                    ...state,
                    {
                        id: action.books[i].id, 
                        pdf: action.books[i].accessInfo.pdf.acsTokenLink, 
                        title: action.books[i].volumeInfo.title,
                        description: action.books[i].volumeInfo.description,
                        authors: action.books[i].volumeInfo.authors,
                        categories: action.books[i].volumeInfo.categories,
                        imgMin: imgMin,
                        img: img
                    }
                ];
            }
            return state;

        default:
            return state;
    }
}

export default books;