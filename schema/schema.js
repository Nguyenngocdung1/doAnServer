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
        field: String,
        price: Int,
        author: Author
    }
    type Author {
        id: ID!,
        name: String,
        slug: String,
        field: String,
        address: String,
        phone: String,
        email: String,
        books: [Book]
    }

    type User {
        id: ID!,
        name: String,
        email: String,
        password: String,
    }

    # ROOT TYPE : gốc của loại yêu cầu truy suất dữ liệu
    type Query {
        books: [Book],
        book (slug: String!): Book,
        authors: [Author],
        author (slug: String!): Author,
        user: User,
    }

    #MUTATION

    # TYPE: Thêm vào cơ sở dữ liệu
    type Mutation {
        createAuthor( name: String, address: String, email: String, phone: String, field: String): Author,
        createBook( name: String, genre: String, authorId: ID!, price: Int, image: String, des: String,  field: String): Book,
        updateBook( name: String, genre: String, authorId: ID!, price: Int, image: String, des: String,  field: String, id: ID!): Book,
        deleteBook(id: ID!): Book,
        createUser( name: String, email: String, password: String) : User,
    }
`

module.exports = typeDefs