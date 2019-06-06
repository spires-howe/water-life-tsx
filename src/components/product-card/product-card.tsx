import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Icon from '@material-ui/core/Icon';
import Collapse from '@material-ui/core/Collapse';
import Modal from '@material-ui/core/Modal';
import Dialog from '@material-ui/core/Dialog';
import './product-card.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

interface Props {
    title: string;
    description: string;
    productImages: string[];
}

interface State {
    open: boolean;
}

const test = ['Water-Products', 'Water-Products', 'Water-Products'];

export default class ProductCardComponent extends React.Component<Props, State> {
    state = {
        open: false
    }
    
    handleClickOpen = () => {
    this.setState({
        open: true,
    });
    };

    handleClose = () => {
    this.setState({ open: false });
    };

    render() {
        let images = this.props.productImages;
        return (
            <div>
                {/* <Card className="card" onClick={this.handleClickOpen}>
                    <CardActionArea>
                        <CardMedia
                        className="media"
                        image={require('../../assets/images/wq-3.jpg')}
                        title="Contemplative Reptile"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {this.props.title}
                        </Typography>
                        <p style={{fontSize:15}}>
                            {this.props.description}
                        </p>
                        </CardContent>
                    </CardActionArea>
                        
                        <CardActions>
                            <ButtonToolbar>
                                <Button variant="outline-primary" size='sm'>View More</Button>
                            </ButtonToolbar>
                    </CardActions>
                </Card> */}
                <div>
                    <div>
                        <img src={require('../../assets/images/wq-3.jpg')} className="media"/>
                    </div>
                    <div style={{marginTop: 10}}>
                        <p style={{fontSize: 20, fontWeight: 600, letterSpacing: 1, marginBottom: 0}}>
                            {this.props.title}
                        </p>
                    </div>
                    <div>
                        <p style={{color: '#666666'}}>
                        {this.props.description}
                        </p>
                    </div>
                    <div>
                        <ButtonToolbar>
                            <Button variant="outline-primary" size='sm' onClick={this.handleClickOpen}>View More</Button>
                        </ButtonToolbar>
                    </div>
                </div>
                <Dialog
                onClose={this.handleClose}
                aria-labelledby="customized-dialog-title"
                open={this.state.open}
                // style={{maxWidth: 1000}}
                >
                    <div>
                        <p style={{fontSize: 30, fontWeight: 600, textAlign: 'center', marginTop: 20}}>
                            {this.props.title}
                        </p>
                        <hr style={{backgroundColor: "black"}}/>
                    </div>
                    <Container fluid={true}>
                        <Row className="productContainer">
                            {
                                this.props.productImages.map((value, index) => {
                                    return (
                                        <div>
                                            <div key={index} style={{marginTop: 20, padding: 20}}>
                                                        <img src={require('../../assets/images/' + value + '.jpg')} height="200px" width="200px"/>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </Row>
                    </Container>
                    <ButtonToolbar style={{marginLeft: 20, marginBottom: 20}}>
                        <Button variant="outline-danger" size='lg' onClick={this.handleClose}>Exit</Button>
                    </ButtonToolbar>
                </Dialog>
            </div>
        )
    }
}