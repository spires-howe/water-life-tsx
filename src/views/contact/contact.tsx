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
                        <Col lg={{offset: 1, span: 3}}>
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
                        <Col lg={{offset: 1, span: 3}}>
                            <div>
                                <p className="contactText"><img src={require('../../assets/icons/phone-call.png')}/> <span style={{fontWeight: 600}}>Tel:</span> +64 9 214 3657</p>
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
                        <Col md={6} lg={{offset: 2, span: 3}}>
                            <div style={{marginTop: 50}}>
                                <h2 className="subHeaderText">Chief Executive</h2>
                                <hr />
                            </div>
                            <div>
                                <p style={{fontSize: 30, textDecoration: 'underline', marginBottom: 0}}>Jackie Phiri</p>
                                <p style={{fontSize: 10, marginLeft: 5}}>MBA, MPH, DEH</p>
                                <p className="contactText"><img src={require('../../assets/icons/phone-call.png')}/> <span style={{fontWeight: 600}}>Tel:</span> +64 9 250 1037</p>
                                <p className="contactText"><img src={require('../../assets/icons/phone-call.png')}/> <span style={{fontWeight: 600}}>Mobile:</span> +64 210 277 8580</p>
                                <p className="contactText"><img src={require('../../assets/icons/envelope.png')}/> <span style={{fontWeight: 600}}>Email:</span> jackiephiri@waterlife.co.nz</p>
                            </div>
                        </Col>

                        <Col md={6} lg={{offset: 1, span: 3}}>
                            <div style={{marginTop: 50}}>
                                <h2 className="subHeaderText">Botswana Office</h2>
                                <hr />
                            </div>
                            <div>
                                <p style={{fontSize: 30, textDecoration: 'underline', marginBottom: 0}}>Country Manager: Moagisi Kingsley Ramadi</p>
                                <p style={{fontSize: 10, marginLeft: 5}}>BBA</p>
                                <p className="contactText"><img src={require('../../assets/icons/phone-call.png')}/> <span style={{fontWeight: 600}}>Tel:</span> +64 9 250 1037</p>
                                <p className="contactText"><img src={require('../../assets/icons/envelope.png')}/> <span style={{fontWeight: 600}}>Email:</span> kingsleyramadi@gmail.com</p>
                                <p className="contactText"><img src={require('../../assets/icons/mailbox.png')} style={{marginBottom: 5}}/> P.O. Box 4552</p>
                                <p className="contactText"><img src={require('../../assets/icons/planet-earth.png')} style={{marginBottom: 5}}/> Gaborone, Botswana</p>
                            </div>
                        
                        </Col>
                    </Row>
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