const {gql} = require('apollo-server-express')

const typeDefs = gql`

    # QUERY
    type Book {
        id: ID!,
        name: String,
        genre: String,
        image: String,
        des: String,
        slug: String,
        price: Int,
        author: Author
    }
    input BookInput {
        name: String,
        genre: String,
        image: String,
        des: String,
        price: Int,
        authorId: ID!
    }
    input AuthorInput {
        name: String,
        address: String,
        phone: Int,
        email: String,
    }

    type Author {
        id: ID!,
        name: String,
        slug: String,
        address: String,
        phone: Int,
        email: String,
        books: [Book]
    }

    type User {
        id: ID!,
        name: String,
        email: String,
        password: String,
        avatar: String,
        role: Int
    }
    input UserInput {
        name: String,
        email: String,
        password: String,
        avatar: String,
        role: Int
    }

    type OrderDetail {
        book: Book,
        quantily: Int,
    }

    type Order {
        id: ID!,
        listOrder: [OrderDetail!]!,
        email: String,
        address: String, 
        phone: String,
    }

    # ROOT TYPE : gốc của loại yêu cầu truy suất dữ liệu
    type Query {
        books: [Book],
        book (slug: String!): Book,
        authors: [Author],
        author (slug: String!): Author,
        users: [User],
        user (email: String!): User,
        orders: [Order],
        order (id: ID!): Order,
    }
    

    #MUTATION

    # TYPE: Thêm vào cơ sở dữ liệu
    type Mutation {
        createAuthor( input: AuthorInput): Author,
        updateAuthor( id: ID!, input: AuthorInput): Author,
        createBook( input: BookInput): Book,
        updateBook( id: ID!, input: BookInput): Book,
        deleteBook( id: ID!): Book,
        deleteAuthor( id: ID!): Author,
        createUser( input: UserInput): User,
        createOrder : Order,
    }
`

module.exports = typeDefs