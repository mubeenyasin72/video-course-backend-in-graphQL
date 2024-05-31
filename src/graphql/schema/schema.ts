export const schema = `#graphql

type User {
    _id: ID!
    name:String!
    email:String!
    passowrd: String!
    googleId:String!
    role:String!
    avatar:String!
    verified:Boolean!
    createdAt:String!
    updatedAt:String!
}
type Query {
    hello: String
    users:[User]
}


`;
