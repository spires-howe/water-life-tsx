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
                                <p style={{fontSize: 25}}>
                                Water Life Limited is a 100% registered and owned company head-quartered in Auckland, New Zealand. We provide the best, latest and most effective measuring, monitoring and analyzing equipment.
                                </p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={{offset: 2, span: 4}}>
                            <div style={{textAlign: 'center', marginTop: 40}}>
                                <img src={require('../../assets/images/glasses.png')}/>
                                <p className="aboutAttributeText">
                                    Vision
                                </p>
                                <p className="aboutAttributeDescriptionText">
                                    Mitigating environmental risks by supplying the correct equipment.
                                </p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div style={{textAlign: 'center', marginTop: 40}}>
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
                        <Col lg={true}>
                            <div style={{textAlign: 'center'}}>
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
                </Container>
            </div>
        )
    }
}