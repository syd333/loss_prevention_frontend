import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const NavBar = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.history.pushState({}, "", "/");
    window.location.reload();
  };
  return (
      <Navbar>
          <Navbar.Brand href="#home">Loss Prevention</Navbar.Brand>
          {/* <Navbar.Toggle /> */}
          <Navbar.Collapse className="justify-content-end">
          <Nav className='mr-auto'>
					<Link to='/'>
						<Nav.Link>Home</Nav.Link>
					</Link>
				</Nav>
                <Nav className='mr-auto'>
					<Link to='/login'>
						<Nav.Link>Login</Nav.Link>
					</Link>
				</Nav>
                <Nav className='mr-auto'>
					<Link to='/signup'>
						<Nav.Link>Signup</Nav.Link>
					</Link>
				</Nav>
            {/* <Navbar.Text>
              Signed in as: <a href="#login">Mark Otto</a>
            </Navbar.Text> */}
          </Navbar.Collapse>
      </Navbar>
  );
};

const mapStateToProps = state => {
    return {

    }
}

export default connect(mapStateToProps)(NavBar);
