import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Cards extends Component {
  componentWillMount() {
    this.props.fetchPods();
  }
  

  renderPods(podsData){
    return podsData.map(x => {
      return (
            <div className="mdl-cell mdl-cell--4-col">
            <div className="demo-card-square mdl-card mdl-shadow--2dp">
              <div className="mdl-card__title">
                <h2 className="mdl-card__title-text">{x.metadata.labels.app}</h2>
              </div>
              <div className="mdl-card__supporting-text">
                <span>URL <strong>guestbook.yayboxapp.com</strong></span><br/><br/>
                <span>PLANO <strong>Basic</strong></span>
              </div>
              <div className="mdl-card__actions mdl-card--border">
                <a className="mdl-button mdl-button-colored mdl-js-button mdl-js-ripple-effect">
                  View APP
                </a>
              </div>
            </div>
          </div>
      );
    });

/*             <div className="mdl-grid">
                <div className="mdl-cell">
                  <div className="demo-card-square mdl-card mdl-shadow--2dp">
                    <div className="mdl-card__title">
                      <h2 className="mdl-card__title-text"><i className="material-icons md-36">add</i>{name}</h2>
                    </div>
                    <div className="mdl-card__supporting-text">
                    </div>
                    <div className="mdl-card__actions mdl-card--border">
                      <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                        View Updates
                      </a>
                    </div>
                  </div>
                </div>
              </div> */
  }

  render() {

    return (
      <div className="mdl-grid">
      {this.props.pods.map(this.renderPods)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { pods: state.kube }; 
}

export default connect(mapStateToProps, actions)(Cards);