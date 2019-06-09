import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './contact.css';
import HeaderComponent from '../../components/header/header';
import EmailComponent from '../../components/email/email';
import { FooterComponent } from '../../components/footer/footer';
import Avatar from '@material-ui/core/Avatar';


export default class Contact extends React.Component {
    render() {
        return (
            <div>
                <Container fluid={true}>
                    <HeaderComponent title="Contact Us"/>
                    <Row style={{marginTop: 20}}>
                        <Col lg={{span: 4, offset: 2}}>
                            <div>
                                <div>   
                                    <h2 className="subHeaderText">Email Directly</h2>
                                    <hr />
                                </div>
                            </div>
                        </Col>
                        <Col lg={{offset: 1, span: 5}}>
                            <div>
                                <div>   
                                    <h2 className="subHeaderText">Sales and Accounts Enquiries</h2>
                                    <hr />
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={{offset: 2, span: 4}}>
                            <EmailComponent />
                        </Col>
                        <Col lg={{offset: 1, span: 5}}>
                            <div>
                                <p className="contactText"><img src={require('../../assets/icons/phone-call.png')}/> <span style={{fontWeight: 600}}>Tel:</span> +64 214 3657</p>
                                <p className="contactText"><img src={require('../../assets/icons/phone-call.png')}/> <span style={{fontWeight: 600}}>Mobile:</span> +64 21 235 3483</p>
                                <p className="contactText"><img src={require('../../assets/icons/envelope.png')}/> <span style={{fontWeight: 600}}>Email:</span> accounts@waterlife.co.nz</p>
                                <p className="contactText"><img src={require('../../assets/icons/mailbox.png')} style={{marginBottom: 5}}/> P.O. Box 230165</p>
                                <p className="contactText"><img src={require('../../assets/icons/planet-earth.png')} style={{marginBottom: 5}}/> North Park, Auckland 2013, New Zealand</p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12} lg={{offset: 1, span: 10}}>
                            <div style={{marginTop: 20}}>
                                <hr style={{backgroundColor: 'black', height: 1, width: '100%'}}/>                        
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12} lg={{offset: 2, span: 4}}>
                            <div style={{marginTop: 50}}>
                                <div>
                                    <h2 className="subHeaderText">Head Office</h2>
                                    <hr />
                                </div>
                                <p style={{fontSize: 25, marginBottom: 0, fontWeight: 600}}>Jackie Phiri, <span style={{fontSize: 10}}>MBA, MPH, DEH</span></p>
                                <p style={{fontSize: 20, fontWeight: 600}}>Chief Executive</p>
                                <p className="contactText"><img src={require('../../assets/icons/phone-call.png')}/> <span style={{fontWeight: 600}}>Tel:</span> +64 9 250 1037</p>
                                <p className="contactText"><img src={require('../../assets/icons/phone-call.png')}/> <span style={{fontWeight: 600}}>Mobile:</span> +64 210 277 8580</p>
                                <p className="contactText"><img src={require('../../assets/icons/envelope.png')}/> <span style={{fontWeight: 600}}>Email:</span> jackiephiri@waterlife.co.nz</p>
                                <p className="contactText"><img src={require('../../assets/icons/mailbox.png')} style={{marginBottom: 5}}/> P.O. Box 230165</p>
                                <p className="contactText"><img src={require('../../assets/icons/planet-earth.png')} style={{marginBottom: 5}}/> Northpark, Auckland, 2013, New Zealand</p>
                            </div>
                        </Col>
                        <Col md={12} lg={{offset: 1, span: 5}}>
                            <div style={{marginTop: 50}}>
                                <h2 className="subHeaderText">Botswana Office</h2>
                                <hr />
                            </div>
                            <div>
                                {/* <img src={require('../../assets/images/maogisi.jpg')} height="250px"/> */}
                                <p style={{fontSize: 25, marginBottom: 0, fontWeight: 600, marginTop: 20}}>Moagisi Kingsley Ramadi, <span style={{fontSize: 10}}>BBA</span></p>
                                <p style={{fontSize: 20, fontWeight: 600}}>Country Manager</p>
                                <p className="contactText"><img src={require('../../assets/icons/phone-call.png')}/> <span style={{fontWeight: 600}}>Tel:</span> +267 73904151</p>
                                <p className="contactText"><img src={require('../../assets/icons/envelope.png')}/> <span style={{fontWeight: 600}}>Email:</span> kingsleyramadi@gmail.com</p>
                                <p className="contactText"><img src={require('../../assets/icons/mailbox.png')} style={{marginBottom: 5}}/> P.O. Box 4552</p>
                                <p className="contactText"><img src={require('../../assets/icons/planet-earth.png')} style={{marginBottom: 5}}/> Gaborone, Botswana</p>
                                <img src={require('../../assets/images/maogisi.jpg')} height="250px"/>
                                
                            </div>
                        </Col>
                    </Row>
                    {/* <Row>
                        <Col md={6} lg={{offset: 2, span: 3}}>
                            <div>
                                <p style={{fontSize: 25, marginBottom: 0, fontWeight: 600}}>Jackie Phiri, <span style={{fontSize: 10}}>MBA, MPH, DEH</span></p>
                                <p style={{fontSize: 20, fontWeight: 600}}>Chief Executive</p>
                                <p className="contactText"><img src={require('../../assets/icons/phone-call.png')}/> <span style={{fontWeight: 600}}>Tel:</span> +64 9 250 1037</p>
                                <p className="contactText"><img src={require('../../assets/icons/phone-call.png')}/> <span style={{fontWeight: 600}}>Mobile:</span> +64 210 277 8580</p>
                                <p className="contactText"><img src={require('../../assets/icons/envelope.png')}/> <span style={{fontWeight: 600}}>Email:</span> jackiephiri@waterlife.co.nz</p>
                                <p className="contactText"><img src={require('../../assets/icons/mailbox.png')} style={{marginBottom: 5}}/> P.O. Box 230165</p>
                                <p className="contactText"><img src={require('../../assets/icons/planet-earth.png')} style={{marginBottom: 5}}/> Northpark, Auckland, 2013, New Zealand</p>
                            </div>
                        </Col>

                        
                    </Row> */}
                    <Row>
                        <Col sm={12} lg={{offset: 1, span: 10}}>
                            <div style={{marginTop: 50}}>
                                <hr style={{backgroundColor: 'black', height: 1, width: '100%'}}/>                        
                            </div>
                        </Col>
                    </Row>
                   
                </Container>
                <FooterComponent />
            </div>
        )
    }
}