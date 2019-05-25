import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Icon from '@material-ui/core/Icon';
import Collapse from '@material-ui/core/Collapse';
import Modal from '@material-ui/core/Modal';
import './product-card.css';

interface Props {
    title: string;
    description: string;
}

interface State {
    expanded: boolean;
}

export default class ProductCardComponent extends React.Component<Props, State> {
    state = {
        expanded: false
    }
    
    handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }));
      };

    render() {
        return (
            <Card className="card">
                <CardMedia
                className="media"
                image={require('../../assets/images/Water-Products.jpg')}
                title="Contemplative Reptile"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {this.props.title}
                </Typography>
                <Typography component="p">
                    {this.props.description}
                </Typography>
                </CardContent>
            </Card>
            
        )
    }
}