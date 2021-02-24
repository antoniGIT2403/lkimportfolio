import "./App.css";
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import Projects from "./project.js";
import About from "./about.js";
import Landing from "./landing.js";
import Press from "./press.js";
import Contact from "./contact.js";
import logo from "./img/logo.gif";
import shopbtn from "./img/shop.png";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faAngleDoubleDown ,faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { slide as Menu } from "react-burger-menu";
import React, { Component } from "react";

library.add(fab, faEnvelope, faAngleDoubleDown, faArrowLeft);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
    };
  }

  // This keeps your state in sync with the opening/closing of the menu
  // via the default means, e.g. clicking the X, pressing the ESC key etc.
  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }

  // This can be used to close the menu, e.g. when a user clicks a menu item
  closeMenu() {
    this.setState({ menuOpen: false });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
        <div className="header-burger">
          <Menu
            isOpen={this.state.menuOpen}
            onStateChange={(state) => this.handleStateChange(state)}
            burgerButtonClassName={"navigation-responsive-burger"}
          >
            <NavLink
              to="/project"
              onClick={() => this.closeMenu()}
              activeClassName="active-NavLink"
            >
              PROJECTS
            </NavLink>
            <NavLink
              to="/press"
              onClick={() => this.closeMenu()}
              activeClassName="active-NavLink"
            >
              PRESS
            </NavLink>
            <NavLink
              to="/contact"
              onClick={() => this.closeMenu()}
              activeClassName="active-NavLink"
            >
              CONTACT
            </NavLink>

            <NavLink
              to="/about"
              onClick={() => this.closeMenu()}
              activeClassName="active-NavLink"
            >
              ABOUT
            </NavLink>
          </Menu>
          </div>


          <div className="navigation navigation-responsive">
            <div className="navigation-sub">
              <img src={logo} alt="Project Imagee" className="logo" />

              <NavLink to="/project" activeClassName="active-NavLink">
                PROJECTS
              </NavLink>
              <NavLink to="/press" activeClassName="active-NavLink">
                PRESS
              </NavLink>
              <NavLink to="/contact" activeClassName="active-NavLink">
                CONTACT
              </NavLink>

              <NavLink to="/about" activeClassName="active-NavLink">
                ABOUT
              </NavLink>

              <img src={shopbtn} alt="Project e" className="shop-btn" />
            </div>
          </div>
          <Route exact path="/project" component={Projects} />
          <Route exact path="/" component={Landing} />

          <Route path="/press" component={Press} />
          <Route exact path="/contact" component={Contact} />

          <Route path="/about" component={About} />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
