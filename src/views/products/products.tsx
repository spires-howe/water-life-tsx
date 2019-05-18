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
                            <Col md={6} lg={3} className="cardContainer" style={{marginTop: 30}}>
                                    <ProductCardComponent title="Water Equipment" description="Water Quality Monitoring and Testing Equipment."/>
                                </Col>
                            <Col md={6} lg={3} className="cardContainer" style={{marginTop: 30}}>
                                <ProductCardComponent title="Monitoring Equipment" description="Specialised Real-Time Environmental and Water Quality Monitoring Equipment."/>
                            </Col>
                            <Col md={6} lg={3} className="cardContainer" style={{marginTop: 30}}>
                                        <ProductCardComponent title="Water Treatment" description="Commercial and Domestic Water Treatment Chemicals/Reagents/Consumables."/>
                                    </Col>
                            <Col md={6} lg={3} className="cardContainer" style={{marginTop: 30}}>
                                <ProductCardComponent title="Bulk Water Meters" description="Pre-paid Domestic and Industrial Bulk Water Meters."/>
                            </Col>
                        </Row>
                    </div>
                    <div>
                        <Row>
                            <Col md={6} lg={3} className="cardContainer" style={{marginTop: 30}}>
                                    <ProductCardComponent title="Air Quality" description="Air Quality Particulate Monitoring and Measurement Equipment."/>
                            </Col>
                            <Col md={6} lg={3} className="cardContainer" style={{marginTop: 30}}>
                                <ProductCardComponent title="Radiation Health" description="Radiation Health Detection and Protection Equipment."/>
                            </Col>
                            <Col md={6} lg={3} className="cardContainer" style={{marginTop: 30}}>
                                <ProductCardComponent title="Laboratory" description="Scientific and Industrial Laboratory Equipment."/>
                            </Col>
                            <Col md={6} lg={3} className="cardContainer" style={{marginTop: 30}}>
                                <ProductCardComponent title="Processing" description="Industrial Manufacturing and Processing Equipment."/>
                            </Col>
                        </Row>
                    </div>
                    <div>
                        <Row>
                            <Col md={6} lg={3} className="cardContainer" style={{marginTop: 30}}>
                                <ProductCardComponent title="Protection and Monitoring" description="Environmental Protection Shielding and Monitoring Equipment."/>
                            </Col>
                            <Col md={6} lg={3} className="cardContainer" style={{marginTop: 30}}>
                                <ProductCardComponent title="Health and Safety" description="Occupational Health and Safety Body Protection Equipment."/>
                            </Col>
                            <Col md={6} lg={3} className="cardContainer" style={{marginTop: 30}}>
                                <ProductCardComponent title="Food Safety" description="Food Safety Detection and Control Monitoring Equipment."/>
                            </Col>
                            <Col md={6} lg={3} className="cardContainer" style={{marginTop: 30}}>
                                <ProductCardComponent title="Civil Engineering" description="Building/Civil Engineering/Survey Equipment."/>
                            </Col>
                        </Row>
                    </div>
                    <div>
                        <Row>
                            <Col md={6} lg={3} className="cardContainer" style={{marginTop: 30}}>
                                <ProductCardComponent title="Body Armour" description="Non-Penetrative Piercing Protective Body Armour."/>
                            </Col>
                            <Col md={6} lg={3} className="cardContainer" style={{marginTop: 30}}>
                                <ProductCardComponent title="Industrial Chemicals" description="Industrial Chemicals."/>
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
                                    <p>Water Life Limited’s direct access to manufacturers of the best, latest and
                                        most technologically-advanced products that they deal iis translated to clients
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
                                    All Water Life Limited products carry a minimum 12 months written
                                    Manufacturer’s Warranty. Some products carry a longer warranty of up to ten
                                    years. 
                                    </p>
                                    <p>
                                    Water Life will endeavour to provide a back-up service on the products
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