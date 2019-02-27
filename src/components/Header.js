import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  // Collapse,
  Navbar,
  // NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  // UncontrolledDropdown,
  // DropdownToggle,
  // DropdownMenu,
  // DropdownItem
} from "reactstrap";

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="primary" light expand="md">
          <NavbarBrand><Link to="/">HealthPet</Link></NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink><Link to="/About">About</Link></NavLink>
              </NavItem>
            </Nav>
        </Navbar>
      </div>
    );
  }
}

export default Header;