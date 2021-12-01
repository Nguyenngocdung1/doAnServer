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
    user: async (parent, args, { mongooseDataMethods }) => {
      return await mongooseDataMethods.getUserByEmail(args.email);
    } 
  },
  Book: {
    author: async ({ authorId }, args, { mongooseDataMethods }) => {
      console.log(authorId);
      return await mongooseDataMethods.getAuthorById(authorId);
    },
  },
  Author: {
    books: async ({id}, args, { mongooseDataMethods }) => {
      console.log(id);
      return await mongooseDataMethods.getAllBooks({ authorId: id });
    },
  },



  // MUTATION

  Mutation: {
    createAuthor: async (parent, args, { mongooseDataMethods }) => {
      console.log(args);
      await mongooseDataMethods.createAuthor(args);
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
      await mongooseDataMethods.deleteBook(args.id);
    },
    createUser: async (parent, args, { mongooseDataMethods}) => {
      await mongooseDataMethods.signInUser(args);
    }
  },
};

module.exports = resolvers;
