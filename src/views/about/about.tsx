import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './about.css';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { FooterComponent } from '../../components/footer/footer';
import HeaderComponent from '../../components/header/header';

export default class About extends React.Component {
    render() {
        return (
            <div>
                <Container fluid={true}>
                    <HeaderComponent title="About Us"/>
                    <Row>
                        <Col md={{offset: 2, span: 8}}>
                            <div className="aboutDescContainer">
                                <p style={{fontSize: 25}}>
                                <img src={require('../../assets/images/water-life-text.png')} className="waterLifeText"/>
                                 Limited is a 100% registered and owned company head-quartered in Auckland, New Zealand. We provide the <span style={{color: '#38C0E9'}}>best</span>, <span style={{color: '#38C0E9'}}>latest</span> and most <span style={{color: '#38C0E9'}}>effective</span> measuring, monitoring and analyzing equipment.
                                </p>
                                <div className="buttonContainer">
                                    <ButtonToolbar>
                                        <NavLink to="/contact"> 
                                            <Button variant="outline-dark" style={{fontSize: 17}} className="buttonShadow">Enquire ➥</Button>
                                        </NavLink>
                                    </ButtonToolbar>
                                </div>
                            </div>
                            <hr style={{width: '30%', backgroundColor: 'black', marginTop: 40, height: 1}}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={{offset: 1, span: 5}} lg={{offset: 2, span: 2}}>
                            <div style={{textAlign: 'center', marginTop: 20}}>
                                <img src={require('../../assets/images/glasses.png')}/>
                                <p className="aboutAttributeText">
                                    Vision
                                </p>
                                <p className="aboutAttributeDescriptionText">
                                    Mitigating environmental risks by supplying the appropriate equipment.
                                </p>
                            </div>
                        </Col>
                        <Col md={5} lg={{offset: 1, span: 2}}>
                            <div style={{textAlign: 'center', marginTop: 20}}>
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
                            <div style={{textAlign: 'center', marginTop: 20}}>
                                <img src={require('../../assets/images/deal.png')}/>
                                <p className="aboutAttributeText">
                                    Values
                                </p>
                                <p className="aboutAttributeDescriptionText">
                                    Integrity, credibility and commitment to service.
                                </p>
                            </div>
                        </Col>
                    </Row>
                    <div className="businessContainer">
                        <Row>
                            <Col lg={{offset: 2, span: 8}}>
                                <div style={{marginTop: 70}}>
                                    <h2 className="subHeaderText">Equipment & Services
                                    <img src={require('../../assets/icons/repair.png')} alt="equipment" style={{marginLeft: 10}}/>
                                    </h2>
                                    <hr />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={{offset: 2, span: 8}}>
                                <div>
                                    <p style={{fontSize: 22}}>
                                        <img src={require('../../assets/images/water-life-text.png')} className="waterLifeText"/>
                                        Limited’s core business is the supply and maintenance of highly specialised manual, automated, remote-operated, real-time environmental and commercial monitoring equipment.
                                    </p>
                                </div>
                                <ButtonToolbar style={{marginBottom: 20}}>
                                    <NavLink to="/contact"> 
                                        <Button variant="outline-dark">View More ➥</Button>
                                    </NavLink>
                                </ButtonToolbar>
                            </Col>
                        </Row>
                    </div>
                    <Row>
                        <Col lg={{offset: 2, span: 4}}>
                            <div className="priceColumnContainer">
                                <div className="priceBannerContainer">
                                    <p style={{marginBottom: 0}} className="bundleText">
                                        Equipment Provided  
                                    </p>
                                </div>
                                <div className="bundleFeaturesContainer">
                                    <div className="bundleFeatureContainer">
                                        <p className="bundleFeatureText">
                                            - Water Quality Monitoring
                                        </p>
                                    </div>
                                    <div className="bundleFeatureContainer">
                                        <p className="bundleFeatureText">
                                            - Air Quality Monitoring/Measurement
                                        </p>
                                    </div>
                                    <div className="bundleFeatureContainer">
                                        <p className="bundleFeatureText">
                                            - Occupational Health
                                        </p>
                                    </div>
                                    <div className="bundleFeatureContainer">
                                        <p className="bundleFeatureText">
                                            - Scientific and Industrial Equipment
                                        </p>
                                    </div>
                                    <div className="bundleFeatureContainer">
                                        <p className="bundleFeatureText">
                                            - Environmental Monitoring
                                        </p>
                                    </div>
                                    <div className="bundleFeatureContainer">
                                        <p className="bundleFeatureText">
                                        - Public Health
                                        </p>
                                    </div> 
                                    <div className="bundleFeatureContainer">
                                        <p className="bundleFeatureText">
                                        - Food Control
                                        </p>
                                    </div> 
                                    <div className="bundleFeatureContainer">
                                        <p className="bundleFeatureText">
                                        - Building/Civil Engineering
                                        </p>
                                    </div>    
                                </div>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="priceColumnContainer">
                                <div className="priceBannerContainer">
                                    <p style={{marginBottom: 0}} className="bundleText">
                                        Services Provided  
                                    </p>
                                </div>
                                <div className="bundleFeaturesContainer">
                                    <div className="bundleFeatureContainer">
                                        <p className="bundleFeatureText">
                                            - Design/Set Up of Laboratories
                                        </p>
                                    </div>
                                    <div className="bundleFeatureContainer">
                                        <p className="bundleFeatureText">
                                            - Water Quality Monitoring Programmes
                                        </p>
                                    </div>
                                    <div className="bundleFeatureContainer">
                                        <p className="bundleFeatureText">
                                            - Sanitation Services
                                        </p>
                                    </div>
                                    <div className="bundleFeatureContainer">
                                        <p className="bundleFeatureText">
                                            - Environmental Consultancies
                                        </p>
                                    </div>
                                    <div className="bundleFeatureContainer">
                                        <p className="bundleFeatureText">
                                            - Waste Management Services
                                        </p>
                                    </div>
                                    <div className="bundleFeatureContainer">
                                        <p className="bundleFeatureText">
                                        - Food Control Programmes
                                        </p>
                                    </div> 
                                    <div className="bundleFeatureContainer">
                                        <p className="bundleFeatureText">
                                        - In-House Course Specific Training
                                        </p>
                                    </div> 
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <div style={{marginTop: 50}}>
                        <Row className="aboutBannerContainer">
                            <Col lg={{offset: 1, span: 10}}>
                                <div style={{marginTop: 75}}>
                                    <div style={{marginTop: 10}}>
                                        <p className="aboutBannerText">
                                            Strategic Links
                                            <img src={require('../../assets/icons/air-freight.png')} alt="airplane" style={{marginLeft: 10}}/>
                                        </p>
                                    </div>
                                    <hr style={{backgroundColor: 'white'}}/>
                                    <div className="aboutBannerDescContainer">
                                        <p style={{marginBottom: 0}}>
                                        <img src={require('../../assets/images/water-life-text.png')} className="waterLifeText"/>
                                        Limited has access to global international markets such as Australia, Germany, Italy, Ireland, <br/>Switzerland, the United Kingdom and the United States of America where all types of equipment <br/>are sourced directly from reputable manufacturers hence obtaining competitive <br/>prices and delivering products using the quickest means possible.
                                        </p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div>
                        <Row>
                            <Col lg={{offset: 2, span: 8}}>
                                <div style={{marginTop: 30}}>
                                    <h2 className="subHeaderText">Current Clients
                                    <img src={require('../../assets/icons/target.png')} alt="clients" style={{marginLeft: 10}}/>
                                    </h2>
                                    <hr />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={{offset: 2, span: 8}}>
                                <ul className="clientList">
                                    <li style={{fontSize: 22}}>
                                        Commercial Water Clients
                                    </li>
                                    <li style={{fontSize: 22}}>
                                        Universities and similar Institutions of Higher Learning
                                    </li>
                                    <li style={{fontSize: 22}}>
                                        Environmental Monitoring Companies
                                    </li>
                                    <li style={{fontSize: 22}}>
                                        National Water Quality Monitoring Regulatory Agencies/Departments.
                                    </li>
                                    <li style={{fontSize: 22}}>
                                        Water Bottling Companies
                                    </li>
                                    <li style={{fontSize: 22}}>
                                        Local Authorities – City, District and Municipal Councils
                                    </li>
                                    <li style={{fontSize: 22}}>
                                        Government Occupational Health Departments
                                    </li>
                                    <li style={{fontSize: 22}}>
                                        Public and Private Health Institutions
                                    </li>
                                    <li style={{fontSize: 22}}>
                                        Private Companies
                                    </li>
                                    <li style={{fontSize: 22}}>
                                        Non-governmental Organisations (NGOs)
                                    </li>
                                    <li style={{fontSize: 22}}>
                                        Consultancy Companies
                                    </li>
                                    <li style={{fontSize: 22}}>
                                        Government Ministries and Departments
                                    </li>
                                    <li style={{fontSize: 22}}>
                                        National Environmental Monitoring Regulatory Agencies/Departments.
                                    </li>

                                </ul>
                            </Col>
                        </Row>
                    </div>
                    <div style={{marginTop: 20}}>
                        <Row className="aboutBannerContainerSecondary">
                            <Col lg={{offset: 2, span: 8}}>
                                <div style={{marginTop: 75}}>
                                    <div style={{marginTop: 10}}>
                                        <p className="aboutBannerText">
                                        Corporate Social Investment (CSl)  
                                        <img src={require('../../assets/icons/growth.png')} alt="growth" style={{marginLeft: 10}}/>
                                        </p>
                                    </div>
                                    <hr style={{backgroundColor: 'white'}}/>
                                    <div className="aboutBannerDescContainer">
                                        <p style={{marginBottom: 0}}>
                                        In recognising the need to promote environmental protection, 
                                        <img src={require('../../assets/images/water-life-text.png')} className="waterLifeText"/>
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
                                    <h2 className="subHeaderText" style={{marginBottom: 0}}>Management Team
                                    <img src={require('../../assets/icons/workers.png')} alt="team" style={{marginLeft: 10, marginBottom: 10}}/>
                                    </h2>
                                    <hr />
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
                <FooterComponent />
            </div>
        )
    }
}