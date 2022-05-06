const resolvers = {
  Query: {
    books: async (parent, args, { mongooseDataMethods }) => {
      return await mongooseDataMethods.getAllBooks();
    },
    genres: async (parent, args, { mongooseDataMethods }) => {
      return await mongooseDataMethods.getAllGenres();
    },
    genre: async (parent, { slug }, { mongooseDataMethods }) => {
      return await mongooseDataMethods.getGenreBySlug(slug);
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
    orders : async (parent, args, { mongooseDataMethods }) => {
      return await mongooseDataMethods.getOrders(args);
    },
    order: async (parent, {id}, { mongooseDataMethods}) => {
      return await mongooseDataMethods.getOrderById(id);
    },
    comments: async (parent, {bookId}, { mongooseDataMethods}) => {
      return await mongooseDataMethods.getComments(bookId);
    },
  },
  Book: {
    author: async ({ authorId }, args, { mongooseDataMethods }) => {
      return await mongooseDataMethods.getAuthorById(authorId);
    },
    genre: async ({ genreId }, args, { mongooseDataMethods }) => {
      return await mongooseDataMethods.getGenreById(genreId);
    },
  },
  Comment: {
    book: async ({ bookId }, args, { mongooseDataMethods }) => {
      return await mongooseDataMethods.getBookById(bookId);
    },
    user: async ({ email }, args, { mongooseDataMethods }) => {
      return await mongooseDataMethods.getUserByEmail(email);
    },
  },
  Author: {
    books: async ({id}, args, { mongooseDataMethods }) => {
      return await mongooseDataMethods.getAllBooks({ authorId: id });
    },
  },
  Genre: {
    books: async ({id}, args, { mongooseDataMethods }) => {
      return await mongooseDataMethods.getAllBooks({ genreId: id });
    },
  },

  // MUTATION

  Mutation: {
    createAuthor: async (parent, args, { mongooseDataMethods }) => {
      console.log(args);
      return await mongooseDataMethods.createAuthor(args);
    },
    createGenre: async (parent, args, { mongooseDataMethods }) => {
      console.log(args);
      return await mongooseDataMethods.createGenre(args);
    },
    updateAuthor: async (parent, args, { mongooseDataMethods }) => {
      return await mongooseDataMethods.updateAuthor(args);
    },
    deleteAuthor: async (parent, args, { mongooseDataMethods }) => {
      return await mongooseDataMethods.deleteAuthor(args);
    },
    deleteGenre: async (parent, args, { mongooseDataMethods }) => {
      return await mongooseDataMethods.deleteGenre(args);
    },
    createBook: async (parent, args, { mongooseDataMethods }) => {
      console.log(" sadsadas" ,args);
      return await mongooseDataMethods.createBook(args);
    },
    updateBook: async (parent, args, { mongooseDataMethods}) => {
      console.log('updtae', args)
      return await mongooseDataMethods.updateBook(args);
    },
    deleteBook: async (parent, args, { mongooseDataMethods}) => {
      return await mongooseDataMethods.deleteBook(args);
    },
    createUser: async (parent, args, { mongooseDataMethods}) => {
      return await mongooseDataMethods.signUpUser(args);
    },
    createOrder: async (parent, args, { mongooseDataMethods}) => {
      return await mongooseDataMethods.createOrder(args);
    },
    updateStatusOrder: async (parent, args, { mongooseDataMethods }) => {
      return await mongooseDataMethods.updateStatusOrder(args);
    },
    deleteStatusOrder: async (parent, args, { mongooseDataMethods}) => {
      return await mongooseDataMethods.deleteStatusOrder(args);
    },
    deleteComment: async (parent, args, { mongooseDataMethods}) => {
      return await mongooseDataMethods.deleteComment(args);
    },
    danhGiaOrder: async (parent, args, { mongooseDataMethods}) => {
      return await mongooseDataMethods.danhGiaOrder(args);
    },
    login : async (parent, args, { mongooseDataMethods}) => {
      return await mongooseDataMethods.login(args);
    },
    createComment : async (parent, args, { mongooseDataMethods}) => {
      return await mongooseDataMethods.createComment(args);
    },
    updateCommentStatus : async (parent, args, { mongooseDataMethods }) => {
      return await mongooseDataMethods.updateCommentStatus(args);
    },
  },
};

module.exports = resolvers;
