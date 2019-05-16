import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './products.css';
import HeaderComponent from '../../components/header/header';

export default class Products extends React.Component {
    render() {
        return (
            <Container fluid={true}>
                <HeaderComponent title="Products"/>
            </Container>
        )
    }
}