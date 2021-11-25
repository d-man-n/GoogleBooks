const books = (state = [], action) => {
    switch(action.type) {
        case 'MORE_BOOKS':
            let img;
            let imgMin;
            for (let i = 0; i < action.items.length; i++) {
                img = action.items[i].volumeInfo.hasOwnProperty('imageLinks') ? action.items[i].volumeInfo.imageLinks.thumbnail : "";
                imgMin = action.items[i].volumeInfo.hasOwnProperty('imageLinks') ? action.items[i].volumeInfo.imageLinks.smallThumbnail : "";
                state = [
                    ...state,
                    {
                        id: action.items[i].id, 
                        pdf: action.items[i].accessInfo.pdf.acsTokenLink, 
                        title: action.items[i].volumeInfo.title,
                        authors: action.items[i].volumeInfo.authors,
                        categories: action.items[i].volumeInfo.categories,
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