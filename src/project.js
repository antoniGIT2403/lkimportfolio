import React from "react";
import { BrowserRouter, Route, NavLink } from "react-router-dom";

import Design from './projet-composant/design.js';
import Paintings from './projet-composant/paintings.js';
import Books from './projet-composant/books.js';
import Branding from './projet-composant/branding.js';
import Clip from './projet-composant/clip.js';




function Project(props) {
  return (
    <div>
      
      {/* <nav class="nav flex-column">
  <a class="nav-link active" href="#">Active</a>
  <a class="nav-link" href="#">Link</a>
  <a class="nav-link" href="#">Link</a>
  <a class="nav-link disabled" href="#">Disabled</a>
</nav> */}

      <BrowserRouter>
        <div className="App">
          <div className="">
            <div className="nav  flex-column subnav">
              <NavLink to="/paintings" activeClassName="active-NavLink">
                PAINTINGS
              </NavLink>
              <NavLink to="/books" activeClassName="active-NavLink">
                BOOKS
              </NavLink>
              <NavLink to="/branding" activeClassName="active-NavLink">
                BRANDING
              </NavLink>

              <NavLink to="/design" activeClassName="active-NavLink">
                DESIGN
              </NavLink>
              <NavLink to="/clips" activeClassName="active-NavLink">
                CLIPS
              </NavLink>
            </div>
          </div>
          <Route exact path="/paintings" component={Paintings} />
          <Route exact path="/books" component={Books} />
          <Route exact path="/branding" component={Branding} />
          <Route exact path="/clips" component={Clip} />
          <Route exact path="/design" component={Design} />
          {/* <Route exact path="/project" component={Projects} />

        <Route path="/press" component={Press} />
        <Route exact path="/contact" component={Contact} />

        <Route path="/about" component={About} /> */}
        </div>
      </BrowserRouter>
    </div>
  );
}

export default Project;
