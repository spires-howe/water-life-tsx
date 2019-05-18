import React from 'react';
import Row from 'react-bootstrap/Row'; 
import Col from 'react-bootstrap/Col';
import './header.css';

interface Props {
    title: string;
}

export default class HeaderComponent extends React.Component<Props> {
    render() {
        return (
            <Row>
                <Col sm={{offset: 2, span: 2}} lg={{offset: 1, span: 4}}>
                    <div className="pageHeaderBorder"/>
                </Col>
                <Col sm={4} lg={2}>
                    <div>
                        <h1 className="pageHeaderText">
                            {this.props.title}
                        </h1>
                    </div>
                </Col>
                <Col sm={2} lg={4}>
                    <div className="pageHeaderBorder"/>
                </Col>
            </Row>
        )
    }
}