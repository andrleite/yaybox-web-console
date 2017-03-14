import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { browserHistory } from 'react-redux';

class Signout extends Component {
  componentWillMount() {
    this.props.signoutUser();
    console.log('REMOVE TOKEN');
  }

  render() {
    return (
      window.location.href = 'http://yaybox.com.br:8080'
    );
  }
}

export default connect(null, actions)(Signout);