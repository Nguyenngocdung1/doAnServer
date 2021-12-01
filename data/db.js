const Book = require('../models/book');
const Author = require('../models/author');
const User = require('../models/user');
const slugify = require('slugify');
const mongooseDataMethods = {
    getAllBooks: async (conditions = null) => {
        return await Book.find(conditions)
    }, //get all books
    getBookById: async (id) => await Book.findById(id), // get a book by slug
    getBookBySlug: async (slug) => await Book.findOne({slug: slug}), // get a book by slug
    createBook: async args => { // create a new book
        const newBook = new Book(args)
        newBook.slug = slugify(newBook.name)
        return await newBook.save()
    },
    updateBook: async (args) => { // update a book
        const book = await Book.findOne({slug: slug})
        const BookUpdateConditions = { _id: book.slug}
        args.slug = slugify(args.name)
        return await Book.findOneAndUpdate(BookUpdateConditions, args, {new: true})
    },
    deleteBook: async (id) => { // delete a book
        const BookUpdateConditions = { _id: id}
        return await Product.findOneAndDelete(BookUpdateConditions)
    },
    getAllAuthors: async () => await Author.find(), //get all authors
    getAuthorBySlug: async (slug) => await Author.findOne({slug: slug}), //get a author by id
    getAuthorById: async (id) => await Author.findById(id), //get a author by id
    createAuthor: async args => { // create a new author
        const newAuthor = new Author(args)
        newAuthor.slug = slugify(newAuthor.name)
        return await newAuthor.save()
    },
    getUserByEmail: async email => await User.findOne({email: email}),
    signInUser: async args => {
        const newUser = new User(args)
        return await newUser.save();
    }
}

module.exports = mongooseDataMethods;