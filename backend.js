const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./backend/src/schema');
const cors = require('cors');

const people = [
  {id: 1, firstName: 'Daniel', lastName: 'Holmes', fullName: 'Daniel Holmes'},
  {id: 2, firstName: 'Darth', lastName: 'Vader', fullName: 'Darth Vader'},
  {id: 3, firstName: 'Freddy', lastName: 'Mercury', fullName: 'Freddy Mercury'},
];

// The root provides a resolver function for each API endpoint
const rootValue = {
  people: () => {
    return people;
  },
  personById: ({id}) => {
    return people.filter((person) => {
      return person.id.toString() === id;
    }).pop();
  },
  updateFirstName: ({id, firstName}) => {
    const person = people.find((person) => person.id.toString() === id);
    person.firstName = firstName;
    person.fullName = `${firstName} ${person.lastName}`;
    return {person};
  }
};

const app = express();
app.use(
  '/graphql',
  cors(),
  graphqlHTTP({
    schema: schema,
    rootValue: rootValue,
    graphiql: true,
  })
);
app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');
