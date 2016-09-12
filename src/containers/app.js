import React, { Component } from 'react';

import Header from './header';


export default class App extends Component {
  render() {
    return (
      <div className="mdl-layout mdl-js-layout">
        <Header />
        { this.props.children }
      </div>
    );
  }
}
