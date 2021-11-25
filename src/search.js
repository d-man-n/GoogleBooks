const searchBooks = async () => {
    const books = await fetch('https://www.googleapis.com/books/v1/volumes?q=react&key=AIzaSyCQu2WsfHC4HY0C_RmLZlCv_93Cyf99hug')
    return await books.json();
}

export default searchBooks;