const Book = require('../models/book');
const Author = require('../models/author');

const mongooseDataMethods = {
    getAllBooks: async (conditions = null) => conditions === null ? await Book.find() : await Book.find({conditions}), //get all books
    getBookById: async (id) => await Book.findById(id), // get a book by id
    createBook: async args => { // create a new book
        const newBook = new Book(args)
        return await newBook.save()
    },
    getAllAuthors: async () => await Author.find(), //get all authors
    getAuthorById: async (id) => await Author.findById(id), //get a author by id
    createAuthor: async args => { // create a new author
        const newAuthor = new Author(args)
        return await newAuthor.save()
    }
}

module.exports = mongooseDataMethods;