import React from "react";
import { Link } from "react-router-dom";
import Context from "../../Context/Context";
import TokenService from "../../Services/token-service";
import IdleService from "../../Services/idle-service";


class Navbar extends React.Component {
  static contextType = Context;

  handleLogoutClick = () => {
    TokenService.clearAuthToken();
    /* when logging out, clear the callbacks to the refresh api and idle auto logout */
    TokenService.clearCallbackBeforeExpiry();
    IdleService.unRegisterIdleResets();
  };

  renderLogoutLink() {
    return (
      <div className="nav-links">
        <Link to='/grocery-lists/'>
          View lists
        </Link>
        <Link onClick={this.handleLogoutClick} to="/">
          Logout
        </Link>
      </div>
    );
  }

  renderLoginLink() {
    return (
   
    <div className="nav-links">
        <Link to="/register" className="register-button">
              {" "}
              Register
          </Link>
          <Link to="/login" className="login-button">
              Login
          </Link>
    </div>
    );
  }

  render() {
    return (
    
        <nav>
        <div className="logo-section">
            <h1>
                <Link to='/'>
                {' '}
                Grocery list
                </Link>
            </h1>
        </div>
        {TokenService.hasAuthToken()
            ? this.renderLogoutLink()
            : this.renderLoginLink()}
        </nav>
    );
  }
}

export default Navbar;