const books = [
  { title: "The Great Gatsby", authorName: "F. Scott Fitzgerald", releaseYear: 1925 },
  { title: "The Hobbit", authorName: "J.R.R. Tolkien", releaseYear: 1937 },
  { title: "Brave New World", authorName: "Aldous Huxley", releaseYear: 1932 },
  { title: "To Kill a Mockingbird", authorName: "Harper Lee", releaseYear: 1960 }
];

const sortByYear = (book1, book2) => {
  if (book1.releaseYear < book2.releaseYear) {
    return -1;
  } else if (book1.releaseYear > book2.releaseYear) {
    return 1;
  } else {
    return 0;
  }
};

const filteredBooks = books.filter(book => book.releaseYear <= 1950);

filteredBooks.sort(sortByYear);