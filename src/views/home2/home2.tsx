import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'; 
import Col from 'react-bootstrap/Col'; 
import './home2.css';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

export default class Home2 extends React.Component {
    render() {
        return (
            <div>
               <Container fluid={true}> 
                    <Row>
                        <Col lg={12} style={{padding: 0}}>
                            <div style={{textAlign: 'center'}} className="logoBannerContainer">
                                <img src={require('../../assets/images/header-trans.png')} className="logoBanner"/>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={{offset: 2, span: 6}}>
                            <div className="homeTextContainer">
                                <p className="homeText">
                                To provide the <span style={{color: '#38C0E9'}}>best</span>, <span style={{color: '#38C0E9'}}>latest</span> and most <span style={{color: '#38C0E9'}}>effective</span> measuring, monitoring and analyzing equipment. 
                                </p>
                                <p style={{marginBottom: 0}}>
                                  <br></br>  
                                </p>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div style={{marginTop: 30}}>
                                <ButtonToolbar>
                                        {/* <NavLink to="/contact">  */}
                                            <Button variant="outline-dark" style={{fontSize: 30}}>Enquiries</Button>
                                        {/* </NavLink> */}
                                        {/* <NavLink to="/about"> */}
                                        {/* </NavLink> */}
                                </ButtonToolbar>
                                <ButtonToolbar>
                                    {/* <NavLink to="/contact">  */}
                                    {/* </NavLink> */}
                                    {/* <NavLink to="/about"> */}
                                        <Button variant="outline-dark" style={{fontSize: 30, marginTop: 30}}>Learn More ➥</Button>
                                    {/* </NavLink> */}
                                </ButtonToolbar>
                            </div>
                        </Col>
                    </Row>
                    {/* <Row>
                        <Col lg={{offset: 1, span: 6}}>
                            <div className="bottomLine">

                            </div>
                        </Col>
                    </Row> */}
                </Container>
            </div>
        )
    }
}