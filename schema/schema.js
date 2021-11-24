const {gql} = require('apollo-server-express')

const typeDefs = gql`

    # QUERY
    type Book {
        id: ID,
        name: String,
        genre: String,
        image: String,
        des: String,
        field: String,
        author: Author
    }
    type Author {
        id: ID!,
        name: String,
        age: Int,
        field: String,
        address: String,
        phone: String,
        email: String,
        books: [Book]
    }

    # ROOT TYPE : gốc của loại yêu cầu truy suất dữ liệu
    type Query {
        books: [Book],
        book (id: ID!): Book,
        authors: [Author],
        author (id: ID!): Author,
    }

    #MUTATION

    # TYPE: Thêm vào cơ sở dữ liệu
    type Mutation {
        createAuthor( name: String, age: Int, address: String, email: String, phone: String, field: String): Author,
        createBook( name: String, genre: String, authorId: ID!,image: String, des: String,  field: String): Book,
    }
    
`

module.exports = typeDefs