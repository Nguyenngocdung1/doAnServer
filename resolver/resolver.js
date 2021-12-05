const resolvers = {
  Query: {
    books: async (parent, args, { mongooseDataMethods }) => {
      return await mongooseDataMethods.getAllBooks();
    },
    book: async (parent, { slug }, { mongooseDataMethods }) => {
      return await mongooseDataMethods.getBookBySlug(slug);
    },
    authors: async (parent, args, { mongooseDataMethods }) => {
      return await mongooseDataMethods.getAllAuthors();
    },
    author: async (parent, { slug }, { mongooseDataMethods }) => {
      return await mongooseDataMethods.getAuthorBySlug(slug);
    },
    user: async (parent, {email}, { mongooseDataMethods }) => {
      console.log('email', email);
      return await mongooseDataMethods.getUserByEmail(email);
    },
    users: async (parent, args, { mongooseDataMethods }) => {
      return await mongooseDataMethods.getUsers();
    },

  },
  Book: {
    author: async ({ authorId }, args, { mongooseDataMethods }) => {
      return await mongooseDataMethods.getAuthorById(authorId);
    },
  },
  Author: {
    books: async ({id}, args, { mongooseDataMethods }) => {
      return await mongooseDataMethods.getAllBooks({ authorId: id });
    },
  },
  // MUTATION

  Mutation: {
    createAuthor: async (parent, args, { mongooseDataMethods }) => {
      console.log(args);
      await mongooseDataMethods.createAuthor(args);
    },
    updateAuthor: async (parent, args, { mongooseDataMethods }) => {
      await mongooseDataMethods.updateAuthor(args);
    },
    deleteAuthor: async (parent, args, { mongooseDataMethods }) => {
      await mongooseDataMethods.deleteAuthor(args);
    },
    createBook: async (parent, args, { mongooseDataMethods }) => {
      console.log(args);
      await mongooseDataMethods.createBook(args);
    },
    updateBook: async (parent, args, { mongooseDataMethods}) => {
      console.log('updtae', args)
      await mongooseDataMethods.updateBook(args);
    },
    deleteBook: async (parent, args, { mongooseDataMethods}) => {
      await mongooseDataMethods.deleteBook(args);
    },
    createUser: async (parent, args, { mongooseDataMethods}) => {
      await mongooseDataMethods.signUpUser(args);
    },
    createOrder: async (parent, args, { mongooseDataMethods}) => {
      await mongooseDataMethods.createOrder(args);
    }
  },
};

module.exports = resolvers;
