import React, {Component} from 'react';
import { Link } from 'react-router';
import { browserHistory } from 'react-router';

class Header extends Component {

  render() {
    return (
        <header className="demo-header mdl-layout__header mdl-color--grey-100 mdl-color-text--grey-600">
          <div className="mdl-layout-icon"><a href="http://console.yaybox.com.br:8081"><i className="material-icons md-36">apps</i></a></div>
        <div className="mdl-layout__header-row">
          <div className="mdl-layout-spacer"></div>
          <span className="mdl-layout-title"><img src="img/logo_yaybox3.png" /></span>        
          <div className="mdl-layout-spacer"></div>
            <button className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon avatar" id="hdrbtn">
              <i className="material-icons"></i>
            </button>
              <ul className="mdl-menu mdl-js-menu mdl-js-ripple-effect mdl-menu--bottom-right" htmlFor="hdrbtn">
                <li className="mdl-menu__item ">Profile</li>
                <li className="mdl-menu__item"><Link to="/signout"><span><i className="material-icons md-18">power_settings_new</i>Logout</span></Link></li>
              </ul>
          </div>
        </header>
    );
  }
}

export default Header;