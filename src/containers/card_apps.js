import React, {Component} from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { Link } from 'react-router';
import {ModalContainer, ModalDialog} from 'react-modal-dialog';
import { Dialog, DialogTitle, DialogContent, DialogActions, Spinner } from 'react-mdl';

import { fetchDeployments, deleteApp } from '../actions';
import Appform from './app_form';

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleOpenDialog = this.handleOpenDialog.bind(this);
    this.handleCloseDialog = this.handleCloseDialog.bind(this);
  }

  componentWillMount() {
    this.props.fetchDeployments();
  }

  handleOpenDialog(){
    this.setState({
      openDialog: true
    });
  }

  handleCloseDialog() {
    this.setState({
      openDialog: false
    })
  }

  renderPods(podsData){
    return podsData.map(x => {
      
      return (
            <div className="mdl-cell mdl-cell--4-col">
            <div className="demo-card-square mdl-card mdl-shadow--2dp">
              <div className="mdl-card__title">
                <h2 className="mdl-card__title-text">{x.metadata.name}</h2>
                <button onClick={ () => deleteApp(x.metadata.name) } id="settbtn" className="config_card mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon"><i id="delete-icon" className="material-icons md-18">delete</i></button>
              </div>
              <div className="mdl-card__supporting-text">
                <span>Replicas <strong>{x.spec.replicas}</strong></span><br/><br/>
                <span>URL <strong>guestbook.yayboxapp.com</strong></span><br/><br/>
                <span>PLANO <strong>Basic</strong></span>
              </div>
              <div className="mdl-card__actions mdl-card--border">
                <Link to={"deployments/" + x.metadata.name}><button id="edit_btn" className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored mdl-js-ripple-effect mdl-button--accent">
                  Editar  
                  </button>
                </Link>
              </div>
            </div>
          </div>
      );
    });
  }

  render() {
    const { deploys } = this.props

    if (!deploys) {
      return <Spinner />
    }

    return (
      <div>
        <button onClick={this.handleOpenDialog} id="add-button" className="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab"><span><i className="material-icons">add</i></span></button>
        <Dialog open={this.state.openDialog}>
          <DialogTitle>Novo aplicativo</DialogTitle>
          <DialogContent>
            <Appform />
          </DialogContent>
          <DialogActions fullWidth>
            <button onClick={this.handleCloseDialog} className="mdl-button mdl-js-button">Cancelar</button>
          </DialogActions> 
        </Dialog>
        <div className="mdl-grid">
          {this.props.deploys.map(this.renderPods)}
        </div>
    </div>
    );
  }
}

function mapStateToProps(state) {
  return { 
    deploys: state.k8s
  };
}

export default connect(mapStateToProps, { fetchDeployments, deleteApp })(Cards);
