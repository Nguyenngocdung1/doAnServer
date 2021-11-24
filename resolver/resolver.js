const resolvers = {
  Query: {
    books: async (parent, args, { mongooseDataMethods }) => {
      return await mongooseDataMethods.getAllBooks();
    },
    book: async (parent, { id }, { mongooseDataMethods }) => {
      return await mongooseDataMethods.getBookById(id);
    },
    authors: async (parent, args, { mongooseDataMethods }) => {
      return await mongooseDataMethods.getAllAuthors();
    },
    author: async ({ id }, args, { mongooseDataMethods }) => {
      return await mongooseDataMethods.getAuthorById(id);
    },
  },
  Book: {
    author: async ({authorId}, args, { mongooseDataMethods }) => {
      console.log(authorId)
      return await mongooseDataMethods.getAuthorById(authorId);
    },
  },
  Author: {
    books: async ({ id }, args, { mongooseDataMethods }) => {
      console.log(id);
      return await mongooseDataMethods.getAllBooks({ authorId: id });
    },
  },

  // MUTATION

  Mutation: {
    createAuthor: async (parent, args, { mongooseDataMethods }) =>
      await mongooseDataMethods.createAuthor(args),
    createBook: async (parent, args, { mongooseDataMethods }) =>
      await mongooseDataMethods.createBook(args),
  },
};

module.exports = resolvers;
