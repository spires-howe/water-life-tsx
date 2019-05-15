import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'; 
import './App.css';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import { NavRouting } from './components/nav-routing/nav-routing';
import ScrollToTop from 'react-router-scroll-top';
import Home from './views/home/home';
import Home2 from './views/home2/home2';
import About from './views/about/about';
require('dotenv').config();

interface Props {

}
class App extends React.Component<Props> {
  render() {
    return (
        <Router>
          <ScrollToTop>
            <div> 
              <Navbar bg="light" expand="lg" sticky='top' >
              <Nav>
                  <Link to="/" style={{fontSize: '2em', fontWeight: 400, textAlign: 'left'}}>
                  <img src={require('./assets/icons/logo.png')} height='60px;'/>
                  Water Life
                  </Link>
              </Nav>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse>
                <Nav className="ml-auto">
                    <NavRouting routePath='/' routeText='Home'/>
                    <NavRouting routePath='/about' routeText='About'/>
                    <NavRouting routePath='/pricing' routeText='Products'/>             
                    <NavRouting routePath='/contact' routeText='Contact'/>                    
                </Nav>
                </Navbar.Collapse>
              </Navbar>
              <Route path="/" exact component={Home} />
              <Route path="/about/" component={About} />
            </div>
          </ScrollToTop>
        </Router>
        
    );
  }
}

export default App;