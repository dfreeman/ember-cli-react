import React from 'react';
import WithEmberSupport from 'ember-cli-react';

@WithEmberSupport
export default class <%= classifiedModuleName %> extends React.Component {
  render() {
    return <h1>Hello from React</h1>;
  }
}
