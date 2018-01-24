import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './Home';
import NoMatch from './NoMatch';
import About from './About';
import {QueryRenderer} from 'react-relay';
import {createRelayEnvironment} from '../relay';

const relayEnvironment = createRelayEnvironment();

export default () => {
  return <QueryRenderer
    environment={relayEnvironment}
    query={graphql`
      query AppQuery {
        people {
          id
          fullName
        }
      }`}
    render={({props, error}) => {
      if (error) {
        console.error(error);
        return <div>Error</div>;
      }

      if (!props) {
        return <div>Loading</div>;
      }

      const {people} = props;
      return <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => <Home people={people} />}/>
          <Route exact path="/about/:id/" render={(props) => <About relayEnvironment={relayEnvironment} {...props} />}/>
          <Route component={NoMatch}/>
        </Switch>
      </BrowserRouter>;
    }}
    />;
};
