import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Doughnut } from 'react-chartjs-2';

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
  componentDidMount() {
    this.props.fetchDeployment(this.props.params.name);
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