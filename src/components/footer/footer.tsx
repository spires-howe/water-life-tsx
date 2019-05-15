import React from 'react';
import Row from 'react-bootstrap/Row'; 
import './footer.css'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { BrowserRouter as Router, Route, Link, withRouter, NavLink, Redirect, RouteComponentProps } from "react-router-dom";

export class FooterComponent extends React.Component {
    render(){
        return (
            <div className='footerContainer justify-content-md-center'>
                <Container fluid={true}>
                    <Row style={{paddingTop: 30}}> 
                        <Col lg={3} sm={6}> 
                            <div>
                            <NavLink to="/">
                                <p style={{color: 'white'}}>
                                Water Life
                                </p>
                            </NavLink> 
                            </div>
                        </Col>
                        <Col lg={3} sm={6}>
                            <NavLink to="/about">
                                <div>
                                    <p style={{color: 'white'}}>About</p>
                                </div>
                            </NavLink> 
                        </Col>
                        <Col lg={3} sm={6}> 
                            <NavLink to="/pricing">
                                <div>
                                    <p style={{color: 'white'}}>Products</p>
                                </div>
                            </NavLink> 
                        </Col>
                        <Col lg={3} sm={6}> 
                            <NavLink to="/contact">
                                <div>
                                    <p style={{color: 'white'}}>Contact Us</p>
                                </div>
                            </NavLink> 
                        </Col>
                    </Row>
                    <hr style={{backgroundColor: 'white'}}/>
                    <Row> 
                        <Col lg={true}>
                            <p style={{marginBottom: 0}}>
                                Tel: + 64 9 214 3657
                            </p>
                            <p style={{marginBottom: 0}}>
                                + 64 21 2353 483
                            </p>
                            <p>
                                + 64 21 0277 8580
                            </p>
                        </Col>
                    </Row>
                    <Row> 
                        <Col lg={true}>
                            <p>
                                Email: accounts@waterlife.co.nz
                            </p>
                            
                        </Col>
                    </Row>
                    <Row> 
                        <Col lg={true}>
                            <p>
                                Copyright © 2019 Water Life. All rights reserved.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}