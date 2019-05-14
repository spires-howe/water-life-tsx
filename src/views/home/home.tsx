import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'; 
import Col from 'react-bootstrap/Col'; 
import './home.css';
import { BrowserRouter as Router, Route, Link, withRouter, NavLink, Redirect, RouteComponentProps } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
 
export default class Home extends React.Component {
render() {
    return (
        <div className="homebg">
          <Container fluid={true}>
            <Row>
                <Col lg={{offset: 2, span: 8}}>
                    <div className="bannerContainer">
                        <img src={require('../../assets/images/header-trans.png')} className="bannerImage"/>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col lg={true}>
                    <div className=""> 
                        {/* <h1 className="homeHeaderText"> */}
                        {/* <img src={require('../../assets/icons/logo.png')} className="pageLogo"/>Water Life</h1> */}
                        
                        <hr className="headerHR"/>
                        <div className="homeHeaderDescContainer">
                        <p className="homeHeaderDescContainerText">To provide the <span style={{color: '#38C0E9'}}>best</span>, <span style={{color: '#38C0E9'}}>latest</span> and most <span style={{color: '#38C0E9'}}>effective</span> measuring,  <br></br>monitoring and analyzing equipment. </p>
                        <div className="buttonContainer">
                        <ButtonToolbar style={{marginBottom: 20}}>
                            <NavLink to="/contact"> 
                                <Button variant="outline-light" style={{fontSize: 20}}>Enquiries</Button>
                            </NavLink>
                            <NavLink to="/about">
                                <Button variant="outline-light" style={{marginLeft: 20, fontSize: 20}}>Learn More ➥</Button>
                            </NavLink>
                        </ButtonToolbar>
                            {/* <NavLink to="/about"><Button variant="outline-light">Learn More ➥</Button></NavLink>  */}
                        </div>
                        

                        {/* <div className="circleButtonContainer"> */}
                            {/* <Link activeClass="active" className="test1" to="test1" spy={true} smooth={true} duration={500}> */}
                            {/* <Button variant="outline-dark" className="circleButton">↓</Button> */}
                            {/* </Link> */}
                        {/* </div> */}
                        </div>
                    </div>
                </Col>
            </Row>
          </Container>          
        </div>
    )
  }
}
