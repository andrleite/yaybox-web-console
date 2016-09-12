import React, {Component} from 'react';
import { Link } from 'react-router';

class Header extends Component {
  render() {
    return (
        <header className="demo-header mdl-layout__header mdl-color--grey-100 mdl-color-text--grey-600">
          <div className="mdl-layout-icon"><Link to="/"><i className="material-icons md-36">apps</i></Link></div>
        <div className="mdl-layout__header-row">
          <div className="mdl-layout-spacer"></div>
          <span className="mdl-layout-title">Yaybox</span>        
          <div className="mdl-layout-spacer"></div>
            <button className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon avatar" id="hdrbtn">
              <i className="material-icons"></i>
            </button>
              <ul className="mdl-menu mdl-js-menu mdl-js-ripple-effect mdl-menu--bottom-right" htmlFor="hdrbtn">
                <li className="mdl-menu__item ">Profile</li>
                <li className="mdl-menu__item"><span><i className="material-icons md-18">power_settings_new</i>Logout</span></li>
              </ul>
          </div>
        </header>
    );
  }
}

export default Header;