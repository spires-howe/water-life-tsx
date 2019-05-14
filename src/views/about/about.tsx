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
                        <Col sm={{offset: 2, span: 2}} md={{offset: 2, span: 3}}>
                            <div className="pageHeaderBorder"/>
                        </Col>
                        <Col sm={4} md={2}>
                            <div>
                                <h1 className="pageHeaderText">
                                    About Us
                                </h1>
                            </div>
                        </Col>
                        <Col sm={2} md={3}>
                            <div className="pageHeaderBorder"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={{offset: 2, span: 8}}>
                            <div className="aboutDescContainer">
                                <p style={{fontSize: 30}}>
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
                            <Col lg={{offset: 3, span: 6}}>
                                <div style={{textAlign: 'center'}}>
                                    <p style={{fontSize: 22}}>
                                        Water Life Limited’s core business is the supply and maintenance of highly specialised manual, automated, remote-operated, real-time environmental and commercial monitoring equipment.
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <Row>
                        <Col md={{offset: 1, span: 5}} lg={{offset: 2, span: 2}}>
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
                        <Col md={5} lg={{offset: 1, span: 2}}>
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
                        <Col lg={{offset: 1, span: 2}}>
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
                    <div style={{marginTop: 100}}>
                        <Row>    
                            <Col lg={{offset: 2, span: 6}}>
                                <div>
                                    <h2 className="subHeaderText" style={{marginBottom: 0}}>Water Life</h2>
                                    <div className="underline">
                                    </div>
                                    <div style={{marginTop: 10}}>
                                        <p style={{fontSize: 20}}>
                                            Through a written agreement, Water Life Limited has a presence in Botswana through a company known as Mason – M Advertising and Promotions (MAP), who act as its Country Agent. Water Life Limited is a distributer and supplier of various monitoring equipment ranging from light-weight hand-held portable equipment to heavy fixed stationery equipment. Water Life Limited also provides several consultancy services.
                                        </p>
                                    </div>
                                    
                                </div>
                            </Col>
                            <Col lg={2}>
                                <div>
                                    <img src={require('../../assets/images/gas-monitor.png')} height='200px'/>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    
                    
                </Container>
            </div>
        )
    }
}