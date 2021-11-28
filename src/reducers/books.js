const books = (state = [], action) => {
    switch(action.type) {
        case 'MORE_BOOKS':
            let img;
            let imgMin;
            if (action.books) {
                for (let i = 0; i < action.books.length; i++) {
                    img = action.books[i].volumeInfo.hasOwnProperty('imageLinks') ? action.books[i].volumeInfo.imageLinks.thumbnail : "";
                    imgMin = action.books[i].volumeInfo.hasOwnProperty('imageLinks') ? action.books[i].volumeInfo.imageLinks.smallThumbnail : "";
    
                    if (action.books[i].volumeInfo.categories) {
                        const cat = action.books[i].volumeInfo.categories.find(item => item.toUpperCase() === action.categories.toUpperCase());
                    }
                    
                    if (cat || action.categories === "all") {
                        state = [
                            ...state,
                            {
                                id: action.books[i].id, 
                                pdf: action.books[i].accessInfo.pdf.acsTokenLink, 
                                title: action.books[i].volumeInfo.title,
                                publishedDate: action.books[i].volumeInfo.publishedDate,
                                description: action.books[i].volumeInfo.description,
                                authors: action.books[i].volumeInfo.authors,
                                categories: action.books[i].volumeInfo.categories,
                                imgMin: imgMin,
                                img: img
                            }
                        ];
                    }
                }
            }

            return action.strongBy==="newest" ? state.sort((prev, next) => {if ( prev.publishedDate < next.publishedDate ) return -1; if ( prev.publishedDate < next.publishedDate ) return 1;}) : state;

        case 'CLEAR_BOOKS':
            state = []
            return state;

        default:
            return state;    
    }
}

export default books;