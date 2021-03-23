import "./App.css";
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import Projects from "./project.js";
import About from "./about.js";
import Landing from "./landing.js";
import Press from "./press.js";
import Contact from "./contact.js";
import logo from "./img/logo.gif";
import shopbtn from "./img/shop-gif.gif";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faAngleDoubleDown ,faArrowLeft, faDesktop } from "@fortawesome/free-solid-svg-icons";
import { slide as Menu } from "react-burger-menu";
import React, { Component } from "react";
import {withRouter} from 'react-router-dom';
import PropTypes from "prop-types";

library.add(fab, faEnvelope, faAngleDoubleDown, faArrowLeft, faDesktop);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
    };
  }
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

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
    const { match, location, history } = this.props;
    const Button = withRouter(({ history }) => (
      <img src={logo} onClick={() => history.push('/lkimportfolio')} alt="Project Imagee" className="logo" />
    ))
    return (
      <BrowserRouter>
        <div className="App">
        <div className="header-burger">
        <a href='https://lkimshop.bigcartel.com/?fbclid=IwAR1t93AARycSHv1ztEYi5e50bVfET_Xc66YOjXduBtWK25qo7wD94Mzq1tM'  target="_blank"><img src={shopbtn} alt="Project e" className="shop-btn" /> </a>
          <Menu
            isOpen={this.state.menuOpen}
            onStateChange={(state) => this.handleStateChange(state)}
            burgerButtonClassName={"navigation-responsive-burger"}
          >
            
            <Button></Button>
            <NavLink
              to="/project"
              
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
              
           
              <Button></Button>

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

            
              <div> <a href='https://lkimshop.bigcartel.com/?fbclid=IwAR1t93AARycSHv1ztEYi5e50bVfET_Xc66YOjXduBtWK25qo7wD94Mzq1tM'  target="_blank"><img src={shopbtn} alt="Project e" className="shop-btn" /> </a></div>
 
            </div>
          </div>
          <Route exact path="/project" component={Projects} />
          <Route exact path="/lkimportfolio" component={Landing} />
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
