import React, {Component} from 'react';
import { reduxForm } from 'redux-form';

class Appform extends Component {
  render() {
    return (
      <div>
        <form>
          <div className="mdl-textfield mdl-js-textfield">
            <input className="mdl-textfield__input" type="text" id="appname" />
            <label className="mdl-textfield__label" htmlFor="appname">Nome Aplicativo...</label>
          </div>  
          <div className="mdl-textfield mdl-js-textfield">
            <input className="mdl-textfield__input" type="text" id="dockerimage" />
            <label className="mdl-textfield__label" htmlFor="dockerimage">Docker image...</label>  
          </div>
          <div className="mdl-textfield mdl-js-textfield">
            <input className="mdl-textfield__input" type="number" min="1" max="10" pattern="-?[0-9]*(\.[0-9]+)?" id="sample4"/>
            <label className="mdl-textfield__label" htmlFor="sample4">Número de escaladas de 1 a 10</label>
            <span className="mdl-textfield__error">Máximo 10 escaladas</span>
          </div>
          <div className="mdl-textfield mdl-js-textfield">
            <input className="mdl-textfield__input" type="text" id="description" />
            <label className="mdl-textfield__label" htmlFor="description">Descrição...</label>
          </div>
          <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label getmdl-select getmdl-select__fullwidth">
            <input className="mdl-textfield__input" type="text" id="plain" value="Básico" readOnly tabIndex="-1" />
            <label htmlFor="plain">
                <i className="mdl-icon-toggle__label material-icons">keyboard_arrow_down</i>
            </label>
            <label htmlFor="plain" className="mdl-textfield__label">Plano...</label>
            <ul htmlFor="plain" className="mdl-menu mdl-menu--bottom-left mdl-js-menu">
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

export default Appform;