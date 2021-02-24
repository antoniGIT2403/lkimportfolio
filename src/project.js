import React from "react";
import { BrowserRouter, Route, NavLink } from "react-router-dom";

import Design from './projet-composant/design.js';
import Paintings from './projet-composant/paintings.js';
import Books from './projet-composant/books.js';
import Branding from './projet-composant/branding.js';
import Clip from './projet-composant/clip.js';
import { Redirect } from "react-router-dom";



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
              <NavLink to="/project/paintings" activeClassName="active-NavLink">
                PAINTINGS
              </NavLink>
              <NavLink to="/project/books" activeClassName="active-NavLink">
                BOOKS
              </NavLink>
              <NavLink to="/project/branding" activeClassName="active-NavLink">
                BRANDING
              </NavLink>

              <NavLink to="/project/design" activeClassName="active-NavLink">
                DESIGN
              </NavLink>
              <NavLink to="/project/clips" activeClassName="active-NavLink">
                CLIPS
              </NavLink>
            </div>
          </div>
          <Route exact path="/project" > 
          <Redirect to="/project/paintings" /> 
          </Route>
         
          <Route exact path="/project/paintings" component={Paintings} />
          <Route exact path="/project/books" component={Books} />
          <Route exact path="/project/branding" component={Branding} />
          <Route exact path="/project/clips" component={Clip} />
          <Route exact path="/project/design" component={Design} />
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
