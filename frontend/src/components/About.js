import React from 'react';
import NoMatch from './NoMatch';
import {QueryRenderer} from 'react-relay';
import {Link} from 'react-router-dom';
import updateFirstNameMutation from '../mutations/updateFirstNameMutation';

export default ({match, relayEnvironment}) => {
  const onSubmit = (e) => {
    e.preventDefault();

    updateFirstNameMutation(relayEnvironment, {id: match.params.id, firstName: e.target.firstName.value});
  };

  return <QueryRenderer
    environment={relayEnvironment}
    query={graphql`
      query AboutQuery($id: ID!) {
        personById(id: $id) {
          id
          firstName
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
        <div>
          Id: {personById.id}<br />
          Name: {personById.fullName}
        </div>
        <div>
          <form onSubmit={onSubmit}>
            Change first name:
            <input type="text" name="firstName" defaultValue={personById.firstName} required />
            <input type="submit" value="Change" />
          </form>
        </div>
        <div>
          <Link to="/">Back</Link>
        </div>
      </div>
    }}
  />;
}
