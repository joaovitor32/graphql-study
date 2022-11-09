import { gql } from 'apollo-server'

const typeDefs = gql`
    type User {
        _id: ID!
        name: String!
        email: String!
    }

    type UserUpdate {
        acknowledged: Boolean!
        matchedCount: Int!
        modifiedCount: Int!
        upsertedCount: Int!
        upsertedId: String
    }

    type DeleteUser {
        acknowledged: Boolean
        deletedCount: Int
    }

    type Query{
        users:[User!]!
        user:[User!]!
    }

    type Mutation{
        createUser(name: String!, email: String!):User!
        updateUser(_id: String!,name: String!, email: String!):UserUpdate!
        deleteUser(_id: String!):DeleteUser
    }
`

export default typeDefs