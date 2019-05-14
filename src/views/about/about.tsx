import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './about.css';

export default class About extends React.Component {
    render() {
        return (
            <div>
                <Container fluid={true}>
                    <Row>
                        <Col sm={{offset: 2, span: 2}} md={{offset: 1, span: 4}}>
                            <div className="pageHeaderBorder"/>
                        </Col>
                        <Col sm={4} md={2}>
                            <div>
                                <h1 className="pageHeaderText">
                                    About Us
                                </h1>
                            </div>
                        </Col>
                        <Col sm={2} md={4}>
                            <div className="pageHeaderBorder"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={{offset: 2, span: 8}}>
                            <div className="aboutDescContainer">
                                <p style={{fontSize: 25}}>
                                Water Life Limited is a 100% registered and owned company head-quartered in Auckland, New Zealand. We provide the best, latest and most effective measuring, monitoring and analyzing equipment.
                                </p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={{offset: 5 , span: 2}}>
                            <div style={{textAlign: 'center'}}>
                                <img src={require('../../assets/icons/logo.png')} height="200px"/>
                            </div>
                        </Col>
                    </Row>
                    <div className="businessContainer">
                        <Row>
                            <Col lg={{offset: 4, span: 4}}>
                                <div style={{marginTop: 30, textAlign: 'center'}}>
                                    <h2 className="subHeaderText">Business</h2>
                                    <hr />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={{offset: 2, span: 8}}>
                                <div style={{textAlign: 'center'}}>
                                    <p style={{fontSize: 22}}>
                                        Water Life Limited’s core business is the supply and maintenance of highly specialised manual, automated, remote-operated, real-time environmental and commercial monitoring equipment.
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <Row>
                        <Col md={{offset: 1, span: 5}} lg={{offset: 2, span: 4}}>
                            <div style={{textAlign: 'center', marginTop: 50}}>
                                <img src={require('../../assets/images/glasses.png')}/>
                                <p className="aboutAttributeText">
                                    Vision
                                </p>
                                <p className="aboutAttributeDescriptionText">
                                    Mitigating environmental risks by supplying the correct equipment.
                                </p>
                            </div>
                        </Col>
                        <Col md={5} lg={4}>
                            <div style={{textAlign: 'center', marginTop: 50}}>
                                <img src={require('../../assets/images/mission.png')}/>
                                <p className="aboutAttributeText">
                                    Mission
                                </p>
                                <p className="aboutAttributeDescriptionText">
                                    Exceptional, excellent service through goods and servcies provided.
                                </p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12}>
                            <div style={{textAlign: 'center', marginTop: 50}}>
                                <img src={require('../../assets/images/deal.png')}/>
                                <p className="aboutAttributeText">
                                    Values
                                </p>
                                <p className="aboutAttributeDescriptionText">
                                    Integrity, cerdibility and commitment to service.
                                </p>
                            </div>
                        </Col>
                    </Row>
                    <div style={{marginTop: 50}}>
                        <Row className="aboutBannerContainer">
                            <Col lg={{offset: 1, span: 10}}>
                                <div style={{marginTop: 100}}>
                                    <div style={{marginTop: 10}}>
                                        <p className="aboutBannerText">
                                            Strategic Links  
                                        </p>
                                    </div>
                                    <hr style={{backgroundColor: 'white'}}/>
                                    <div className="aboutBannerDescContainer">
                                        <p style={{marginBottom: 0}}>
                                        Water Life Limited has access to global international markets such as Australia, Germany, Italy, Ireland, <br/>Switzerland, the United Kingdom and the United States of America where all types of equipment <br/>are sourced directly from reputable manufacturers hence obtaining competitive <br/>prices and delivering products using the quickest means possible.
                                        </p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div style={{marginTop: 150}}>
                        <Row className="aboutBannerContainerSecondary">
                            <Col lg={{offset: 2, span: 8}}>
                                <div style={{marginTop: 100}}>
                                    <div style={{marginTop: 10}}>
                                        <p className="aboutBannerText">
                                        Corporate Social Investment (CSl)  
                                        </p>
                                    </div>
                                    <hr style={{backgroundColor: 'white'}}/>
                                    <div className="aboutBannerDescContainer">
                                        <p style={{marginBottom: 0}}>
                                        In recognising the need to promote environmental protection, Water Life
                                        Limited, materially supports community-initiated and community-driven <br/>
                                        sustainable environmentally green projects that provide the <br/>beneficiary
                                        community with long-term benefits.
                                        </p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div style={{marginTop: 50}}>
                        <Row>    
                            <Col lg={{offset: 2, span: 6}}>
                                <div>
                                    <h2 className="subHeaderText" style={{marginBottom: 0}}>Management Team</h2>
                                    <div className="underline">
                                    </div>
                                    <div style={{marginTop: 10}}>
                                        <p style={{fontSize: 20}}>
                                            <ul>
                                                <li>
                                                    Chief Executive
                                                </li>
                                                <li>
                                                    Operations Manager
                                                </li>
                                                <li>
                                                    Technical Manager
                                                </li>
                                                <li>
                                                    Accounts Manager
                                                </li>
                                            </ul>
                                        </p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        )
    }
}