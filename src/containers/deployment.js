import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Doughnut } from 'react-chartjs-2';
import { Dialog, DialogTitle, DialogContent, DialogActions, Spinner } from 'react-mdl';

const data = {
	labels: [
		'CPU %',
    'FREE %'
	],
	datasets: [{
		data: [30, 50],
		backgroundColor: [
		'#36A2EB',
		'#EEE',
		'#FFCE56'
		],
		hoverBackgroundColor: [
		'#36A2EB',
		'#EEE',
		'#FFCE56'
		]
	}]
};

const data2 = {
	labels: [
		'MEM %',
    'FREE %'
	],
	datasets: [{
		data: [70, 30],
		backgroundColor: [
		'#green',
		'#EEE',
		'#FFCE56'
		],
		hoverBackgroundColor: [
		'#green',
		'#EEE',
		'#FFCE56'
		]
	}]
};


class Deployment extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleOpenDialog = this.handleOpenDialog.bind(this);
    this.handleOpenDialog2 = this.handleOpenDialog2.bind(this);
    this.handleCloseDialog = this.handleCloseDialog.bind(this);
  }


  componentDidMount() {
    this.props.fetchDeployment(this.props.params.name);
  }

    handleOpenDialog(){
    this.setState({
      openDialog: true
    });
  }

    handleOpenDialog2(){
    this.setState({
      openDialog: true
    });
  }

  handleCloseDialog() {
    this.setState({
      openDialog: false
    })
  }


  renderName(app){
    return (
      <p key={app.uid}>
      <span> <strong>Name:</strong> {app.metadata.name}</span><br />
      <span> <strong>Namespace:</strong> {app.metadata.namespace}</span><br />
      <span> <strong>Strategy</strong> {app.spec.strategy.type}</span><br />
      <span> <strong>Status:</strong> {app.status.updatedReplicas} updated, </span>
      <span> {app.status.replicas} total, </span>
      <span> {app.status.availableReplicas} available</span>
      </p>
    );
  }

  render() {
    return (
      <div>
        <main className="mdl-layout__content">
          <div className="page-content">
            <div className="row">
            <div id="main-sidebar" className="content col1"></div>
            <div id="main-section" className="content col1">
              <span className="demo-card mdl-card mdl-shadow--2dp">
                <div className="mdl-card__supporting-text">
                    <Doughnut data={data} width={100} height={50} />
                </div>
              </span>
              <span className="demo-card mdl-card mdl-shadow--2dp">
                <div className="mdl-card__supporting-text">
                    <Doughnut data={data2} width={100} height={50} />
                </div>
              </span>
              </div>
            <div id="main-section" className="content col5">              
              <div className="demo-card-wide mdl-card mdl-shadow--2dp">
                <div className="mdl-card__supporting-text">                  
                  <h4><strong>Details</strong></h4>
                  {this.props.app.map(this.renderName)}
                </div>
                  <div>
                    <form>
                      <div className="mdl-textfield mdl-js-textfield">
                        <input className="mdl-textfield__input" type="number" min="1" max="10" pattern="-?[0-9]*(\.[0-9]+)?" id="nscale"/>
                        <label className="mdl-textfield__label" htmlFor="nscale">Número de escaladas de 1 a 10</label>
                        <span className="mdl-textfield__error">Máximo 10 escaladas</span>
                      </div>
                      <button id="btnscale" className="mdl-button mdl-js-button">Escalar</button>
                    </form>
                  </div> 
                  <form>
                    <div className="mdl-textfield mdl-js-textfield">
                      <input className="mdl-textfield__input" type="text" id="dockerimage"/>
                      <label className="mdl-textfield__label" htmlFor="dockerimage">Docker image...</label>  
                    </div>
                    <button id="btnupdate" className="mdl-button mdl-js-button">Update</button>
                  </form>
              </div>
            </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { app: state.app  };
}

export default connect(mapStateToProps, actions)(Deployment);