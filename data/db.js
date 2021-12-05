const Book = require('../models/book');
const Author = require('../models/author');
const User = require('../models/user');
const slugify = require('slugify');
const Order = require('../models/order');
const mongooseDataMethods = {
    getAllBooks: async (conditions = null) => {
        return await Book.find(conditions)
    }, //get all books
    getBookById: async (id) => await Book.findById(id), // get a book by slug
    getBookBySlug: async (slug) => await Book.findOne({slug: slug}), // get a book by slug
    createBook: async args => { // create a new book
        const newBook = new Book(args.input)
        newBook.slug = slugify(newBook.name)
        return await newBook.save()
    },
    updateBook: async (args) => { // update a book
        const BookUpdateConditions = { _id: args.id}
        args.input.slug = slugify(args.input.name)
        return await Book.findOneAndUpdate(BookUpdateConditions, args.input, {new: true})
    },
    deleteBook: async (args) => { // delete a book
        console.log(args);
        const BookUpdateConditions = { _id: args.id}
        return await Book.findOneAndDelete(BookUpdateConditions)
    },
    getAllAuthors: async () => await Author.find(), //get all authors
    getAuthorBySlug: async (slug) => await Author.findOne({slug: slug}), //get a author by id
    getAuthorById: async (id) => await Author.findById(id), //get a author by id
    createAuthor: async args => { // create a new author
        const newAuthor = new Author(args.input)
        newAuthor.slug = slugify(newAuthor.name)
        return await newAuthor.save()
    },
    deleteAuthor: async args => {
        const BookUpdateConditions = { _id: args.id}
        return await Author.findOneAndDelete(BookUpdateConditions)
    },
    updateAuthor: async args => {
        const BookUpdateConditions = { _id: args.id}
        args.input.slug = slugify(args.input.name)
        return await Author.findOneAndUpdate(BookUpdateConditions, args.input, {new: true})
    },
    getUserByEmail: async email => await User.findOne({email: email}),
    getUsers: async () => await User.find(),
    signUpUser: async args => {
        const newUser = new User(args.input)
        return await newUser.save();
    },
    createOrder: async args => {
        const order = new Order(args)
        return await order.save();
    } 
}

module.exports = mongooseDataMethods;