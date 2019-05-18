import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './product-card.css';

interface Props {
    title: string;
    description: string;
}

export default class ProductCardComponent extends React.Component<Props> {
    render() {
        return (
            <Card className="card">
                <CardActionArea>
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
                </CardActionArea>
            </Card>
        )
    }
}