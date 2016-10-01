import React, {Component} from 'react';
import { reduxForm } from 'redux-form';

import * as actions from '../actions';

class Appform extends Component {
  handleFormSubmit(formProps) {
    this.props.createDeployment(formProps);
  }

  render() {
    const { handleSubmit, fields: { appname, dockerimage, nscale, description, plan } } = this.props;

    return (
      <div>
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <div className="mdl-textfield mdl-js-textfield">
            <input className="mdl-textfield__input" type="text" id="appname" {...appname} />
            <label className="mdl-textfield__label" htmlFor="appname">Nome Aplicativo...</label>
          </div>  
          <div className="mdl-textfield mdl-js-textfield">
            <input className="mdl-textfield__input" type="text" id="dockerimage" {...dockerimage} />
            <label className="mdl-textfield__label" htmlFor="dockerimage">Docker image...</label>  
          </div>
          <div className="mdl-textfield mdl-js-textfield">
            <input className="mdl-textfield__input" type="number" min="1" max="10" pattern="-?[0-9]*(\.[0-9]+)?" id="nscale" {...nscale} />
            <label className="mdl-textfield__label" htmlFor="nscale">Número de escaladas de 1 a 10</label>
            <span className="mdl-textfield__error">Máximo 10 escaladas</span>
          </div>
          <div className="mdl-textfield mdl-js-textfield">
            <input className="mdl-textfield__input" type="text" id="description" {...description} />
            <label className="mdl-textfield__label" htmlFor="description">Descrição...</label>
          </div>
          <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label getmdl-select getmdl-select__fullwidth">
            <input className="mdl-textfield__input" type="text" id="plan" value="Básico" readOnly tabIndex="-1" {...plan}/>
            <label htmlFor="plan">
                <i className="mdl-icon-toggle__label material-icons">keyboard_arrow_down</i>
            </label>
            <label htmlFor="plan" className="mdl-textfield__label">Plano...</label>
            <ul htmlFor="plan" className="mdl-menu mdl-menu--bottom-left mdl-js-menu">
              <li className="mdl-menu__item">Básico</li>
              <li className="mdl-menu__item">Standard</li>
              <li className="mdl-menu__item">Performance</li>
            </ul>
          </div>                      
          <button id="btn_create_app" className="mdl-button mdl-js-button">Criar</button>
        </form>
      </div>
    );
  }
}


export default reduxForm({ 
  form: 'createapp',
  fields: ['appname', 'dockerimage', 'nscale', 'description', 'plan'] 
}, null, actions)(Appform);