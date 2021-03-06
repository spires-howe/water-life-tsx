import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './products.css';
import HeaderComponent from '../../components/header/header';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ProductCardComponent from '../../components/product-card/product-card';
import { FooterComponent } from '../../components/footer/footer';

export default class Products extends React.Component {
    render() {
        return (
            <div>
                <Container fluid={true}>
                    <HeaderComponent title="Products"/>
                    <div>
                        <Row>
                            <Col xs={{offset: 1,span: 11}} sm={{span: 4, offset: 1}} md={4} lg={{span: 2, offset: 2}} className="cardContainer" style={{marginTop: 30, height: '100%'}}>
                                    <ProductCardComponent thumbnail="wq-3" title="Water Equipment" description="Water Quality Monitoring and Testing Equipment." productImages={['wq-3', 'wq-2', 'wq-5', 'wq-7', 'wq-4', 'wq-6', 'wq-1',]}/>
                                </Col>
                            <Col xs={{offset: 1,span: 11}} sm={{span: 4, offset: 2}} md={4} lg={{span: 2, offset: 1}} className="cardContainer" style={{marginTop: 30, height: '100%'}}>
                                <ProductCardComponent thumbnail="cm-4" title="Monitoring Equipment" description="Specialised Real-Time Environmental and Water Quality Monitoring Equipment." productImages={['cm-1', 'cm-2', 'cm-3', 'cm-4']}/>
                            </Col>
                            <Col xs={{offset: 1,span: 11}} sm={{span: 4, offset: 1}} md={4} lg={{span: 2, offset: 1}} className="cardContainer" style={{marginTop: 30, height: '100%'}}>
                                        <ProductCardComponent thumbnail="cc-1" title="Water Treatment" description="Commercial and Domestic Water Treatment Chemicals/Reagents/Consumables." productImages={['cc-1', 'cc-2', 'cc-3', 'cc-4']}/>
                                    </Col>
                            
                        </Row>
                    </div>
                    <div>
                        <Row>
                            <Col xs={{offset: 1,span: 11}} sm={{span: 4, offset: 1}} md={4} lg={{span: 2, offset: 2}} className="cardContainer" style={{marginTop: 30, height: '100%'}}>
                                <ProductCardComponent thumbnail="bw-4" title="Bulk Water Meters" description="Pre-paid Domestic and Industrial Bulk Water Meters." productImages={['bw-1', 'bw-2', 'bw-3', 'bw-4', 'bw-5', 'bw-6']}/>
                            </Col>
                            <Col xs={{offset: 1,span: 11}} sm={{span: 4, offset: 2}} md={4} lg={{span: 2, offset: 1}} className="cardContainer" style={{marginTop: 30, height: '100%'}}>
                                    <ProductCardComponent thumbnail="aq-3" title="Air Quality" description="Air Quality Particulate Monitoring and Measurement Equipment." productImages={['aq-1', 'aq-2', 'aq-3', 'aq-4']}/>
                            </Col>
                            <Col xs={{offset: 1,span: 11}} sm={{span: 4, offset: 1}} md={4} lg={{span: 2, offset: 1}} className="cardContainer" style={{marginTop: 30, height: '100%'}}>
                                <ProductCardComponent thumbnail="r2" title="Radiation Health" description="Radiation Health Detection and Protection Equipment." productImages={['r1', 'r2', 'r3', 'r4', 'r5', 'r6', 'r7', 'r8', 'r9']}/>
                            </Col>
                           
                        </Row>
                    </div>
                    <div>
                        <Row>
                            <Col xs={{offset: 1,span: 11}} sm={{span: 4, offset: 1}} md={4} lg={{span: 2, offset: 2}} className="cardContainer" style={{marginTop: 30, height: '100%'}}>
                                <ProductCardComponent thumbnail="lb-5" title="Laboratory" description="Scientific and Industrial Laboratory Equipment." productImages={['lb-1', 'lb-2', 'lb-3', 'lb-4', 'lb-5', 'lb-6', 'lb-7', 'lb-8']}/>
                            </Col>
                            <Col xs={{offset: 1,span: 11}} sm={{span: 4, offset: 2}} md={4} lg={{span: 2, offset: 1}} className="cardContainer" style={{marginTop: 30, height: '100%'}}>
                                <ProductCardComponent thumbnail="p-5" title="Processing" description="Industrial Manufacturing and Processing Equipment." productImages={['p-1', 'p-2', 'p-3', 'p-4', 'p-5']}/>
                            </Col>
                            <Col xs={{offset: 1,span: 11}} sm={{span: 4, offset: 1}} md={4} lg={{span: 2, offset: 1}} className="cardContainer" style={{marginTop: 30, height: '100%'}}>
                                <ProductCardComponent thumbnail="pm-5" title="Protection and Monitoring" description="Environmental Protection Shielding and Monitoring Equipment." productImages={['pm-1', 'pm-2', 'pm-3', 'pm-4', 'pm-5', 'pm-6']}/>
                            </Col>
                            
                        </Row>
                    </div>
                    <div>
                        <Row>
                            <Col xs={{offset: 1,span: 11}} sm={{span: 4, offset: 1}} md={4} lg={{span: 2, offset: 2}} className="cardContainer" style={{marginTop: 30, height: '100%'}}>
                                <ProductCardComponent thumbnail="ba-4" title="Body Armour" description="Non-Penetrative Piercing Protective Body Armour." productImages={['ba-1', 'ba-2', 'ba-3', 'ba-4', 'ba-5', 'ba-6', 'ba-7', 'ba-8']}/>
                            </Col>
                            
                            <Col xs={{offset: 1,span: 11}} sm={{span: 4, offset: 2}} md={4} lg={{span: 2, offset: 1}} className="cardContainer" style={{marginTop: 30, height: '100%'}}>
                                <ProductCardComponent thumbnail="h-3" title="Health and Safety" description="Occupational Health and Safety Body Protection Equipment." productImages={['h-1', 'h2', 'h-3', 'h-4', 'h-5']}/>
                            </Col>
                            <Col xs={{offset: 1,span: 11}} sm={{span: 4, offset: 1}} md={4} lg={{span: 2, offset: 1}} className="cardContainer" style={{marginTop: 30, height: '100%'}}>
                                <ProductCardComponent thumbnail="f-3" title="Food Safety" description="Food Safety Detection and Control Monitoring Equipment." productImages={['f-1', 'f-2', 'f-3', 'f-4', 'f-5', 'f-6', 'f-7', 'f-8', 'f-9', 'f-10', 'f-11', 'f-12', 'f-13']}/>
                            </Col>
                        </Row>
                    </div>
                    <div>
                        <Row>
                            
                            <Col xs={{offset: 1,span: 11}} sm={{span: 4, offset: 1}} md={4} lg={{span: 2, offset: 2}} className="cardContainer" style={{marginTop: 30, height: '100%'}}>
                                <ProductCardComponent thumbnail="c-2" title="Civil Engineering" description="Building/Civil Engineering/Survey Equipment." productImages={['c-1', 'c-2', 'c-3', 'c-4', 'c-5', 'c-6', 'c-7',]}/>
                            </Col>
                            <Col xs={{offset: 1,span: 11}} sm={{span: 4, offset: 2}} md={4} lg={{span: 2, offset: 1}} className="cardContainer" style={{marginTop: 30, height: '100%'}}>
                                <ProductCardComponent thumbnail="i-3" title="Industrial Chemicals" description="Industrial Chemicals." productImages={['i-1', 'i-2', 'i-3']}/>
                            </Col>
                        </Row>
                    </div>
                    <Row>
                        <Col lg={12}>
                        <div style={{marginTop: 50}}>
                            <hr style={{backgroundColor: 'black', height: 2}}/>
                        </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={{offset: 1, span : 4}}>
                            <div style={{marginTop: 50}}>
                                <h2 className="subHeaderText">Committment To Clients 
                                <img src={require('../../assets/icons/workers.png')} alt="team" style={{marginLeft: 10, marginBottom: 10}}/>
                                </h2>
                                <hr />
                                <div style={{fontSize: 20}}>
                                    <p>
                                    <img src={require('../../assets/images/water-life-text.png')} height="35px"/> Limited’s direct access to manufacturers of the best, latest and
                                        most technologically-advanced products that they deal in, is translated to clients
                                        getting the most competitive prices. 
                                    </p>
                                    <p>
                                        Any equipment is air-freighted using the shortest and most effective means
                                        possible, thereby giving peace of mind that products will arrive quickly, safely
                                        and can be used as soon as is practicably required.
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={{offset: 1, span: 4}}> 
                            <div style={{marginTop: 50}}>
                                <h2 className="subHeaderText">Product Warranty
                                <img src={require('../../assets/icons/guarantee.png')} alt="team" style={{marginLeft: 10}}/>
                                </h2>
                                <hr />
                                <div style={{fontSize: 20}}>
                                    <p>
                                    <img src={require('../../assets/images/water-life-text.png')} height="35px"/>
                                     Limited products carry a minimum 12 months written
                                    Manufacturer’s Warranty. Some products carry a longer warranty of up to ten
                                    years. 
                                    </p>
                                    <p>
                                    <img src={require('../../assets/images/water-life-text.png')} height="35px"/>
                                     will endeavour to provide a back-up service on the products
                                    it supplies and in all reasonableness without additional cost to the client.
                                    Where a cost is likely to be incurred, the matter will be discussed with the
                                    client prior to any service being provided.
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <FooterComponent />
            </div>
        )
    }
}