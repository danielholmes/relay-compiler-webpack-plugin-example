var { buildSchema } = require('graphql')

module.exports = buildSchema(`
  type Person {
    id: ID!
    firstName: String!
    lastName: String!
    fullName: String!
  }
  
  type Query {
    people: [Person]
    personById(id: ID!): Person
  }
  
  type UpdateFirstNameOutput {
    person: Person!
  }
  
  type Mutation {
    updateFirstName(id: ID!, firstName: String!): UpdateFirstNameOutput!
  }
`)
