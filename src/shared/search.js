const searchBooks = async function() {
    // const books = await fetch("https://www.googleapis.com/books/v1/volumes?q=react&key=AIzaSyCQu2WsfHC4HY0C_RmLZlCv_93Cyf99hug");
    // return books;
    const books = await fetch('https://www.googleapis.com/books/v1/volumes?q=react&key=AIzaSyCQu2WsfHC4HY0C_RmLZlCv_93Cyf99hug')
//   .then(response => response.json())
//   .then(data => console.log(data));
    // console.log(await books.json())
    return await books.json();
}

export default searchBooks;