import React from 'react';
import NoMatch from './NoMatch';
import {QueryRenderer} from 'react-relay';
import {environment} from '../graphql';
import {Link} from 'react-router-dom';

export default ({match}) => {
  return <QueryRenderer
    environment={environment}
    query={graphql`
      query AboutQuery($id: ID!) {
        personById(id: $id) {
          id
          fullName
        }
      }
    `}
    variables={{id: match.params.id}}
    render={({props, error}) => {
      if (!props) {
        return <div>Loading</div>;
      }

      const {personById} = props;
      if (!personById) {
        return <NoMatch />;
      }
      return <div>
        <h2>About</h2>
        Id: {personById.id}<br />
        Name: {personById.fullName}
        <div>
          <Link to="/">Back</Link>
        </div>
      </div>;
    }}
  />;
}
