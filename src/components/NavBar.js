import React from "react";
import { Input, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const NavBar = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.history.pushState({}, "", "/");
    window.location.reload();
  };
  return (
    <div className="nav">
      <Menu secondary>
        <Menu.Item>
          <Link to="/" className="item">
            loss prevention
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/login" className="item">
            login
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/signup" className="item">
            signup
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/logout" className="item">
            logout
          </Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

// const mapStateToProps = (state) => {
//   return {};
// };

export default NavBar;
