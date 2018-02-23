import React from 'react';
import {Col, Grid, Row} from 'react-bootstrap';
import {createFragmentContainer} from 'react-relay';
import HomeItem from './HomeItem';

const Home = ({people}) => {
  return <Grid fluid>
    <Row>
      <Col xs={12}>
        <h2>Home</h2>
        <ul>
          {people.map((person) => <HomeItem key={person.id} person={person}/>)}
        </ul>
      </Col>
    </Row>
  </Grid>;
};

export default createFragmentContainer(
  Home,
  graphql`
    fragment Home_people on Person @relay(plural: true) {
      id
      ...HomeItem_person
    }
  `
)
