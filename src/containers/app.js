import React, { Component } from 'react';
import Header from './header';

class App extends Component {

 //  componentWillMount() {
   // this.props.getNameSpace();    
  //} 

  render() {

    return (
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <Header />
        { this.props.children }
      </div>
    );
  }
}

export default App;