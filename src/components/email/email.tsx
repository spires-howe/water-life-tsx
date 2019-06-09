import React, { Component, createRef } from 'react';
import Form from 'react-bootstrap/Form';
import * as emailjs from 'emailjs-com';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';
import './email.css'

interface State {
    name: string;
    address: string;
    phoneNumber: string;
    email: string;
    message: string;
}

interface Props {

}
export default class EmailComponent extends React.Component<Props, State> {
    constructor(props: any) {
        super(props)
        this.state = {
            name: '',
            address: '',
            phoneNumber: '',
            email: '',
            message: '',
        }
    }

    componentDidMount() {
        emailjs.init("user_HBCyhbZa6VofOxKQFfcUX");
    }

    private handleSubmit(e: any) {
        e.preventDefault();
        let template_params = {
            "name": this.state.name,
            "address": this.state.address,
            "phoneNumber": this.state.phoneNumber,
            "email": this.state.email,
            "message": this.state.message,
         }
         
         let service_id = "waterlife";
         let template_id = "waterlife";
         emailjs.send(service_id, template_id, template_params).then(res => {
             alert('Email Successfully Sent!');
             console.log('Email Succesfully Sent!');
         })
         .catch(err => console.log("Error has occured", err));
    }

    render() {
        return (
                <Form onSubmit={(e: any) => this.handleSubmit(e)}>
                    <Form.Group controlId='formBasicName' as={Row}> 
                        <Col lg="10" sm="10">
                            <Form.Control 
                                type="text"
                                placeholder='name'
                                onChange={(e: any) => this.setState({name: e.target.value})}/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Col lg="10" sm="10">
                            <Form.Control 
                                type="text"
                                placeholder='address'
                                onChange={(e:any) => this.setState({address: e.target.value})}/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Col lg="10" sm="10">
                            <Form.Control 
                                type="text"
                                placeholder='phone number'
                                onChange={(e:any) => this.setState({phoneNumber: e.target.value})}/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Col lg="10" sm="10">
                            <Form.Control 
                                type="text"
                                placeholder='email'
                                onChange={(e:any) => this.setState({email: e.target.value})}/>
                        </Col>
                        
                    </Form.Group>
                    
                    <Form.Group as={Row}>
                        <Col lg="12" sm="12">
                            <Form.Control as="textarea" rows="5"
                                type="text"
                                placeholder='message'
                                onChange={(e:any) => this.setState({message: e.target.value})}/>
                        </Col>
                    </Form.Group>
                    
                    <ButtonToolbar style={{marginBottom: 10}}>
                        <Button type='submit' variant="outline-primary">Send</Button>
                    </ButtonToolbar>
                </Form>
            
        )
    }
}