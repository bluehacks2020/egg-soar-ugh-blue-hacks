import React from 'react'

import Card from 'react-bootstrap/Card'
import aeta from '../../assets/images/aeta.jpg'
import './style.css'

const ArticleCard = props => (
    <Card className="ArticleCard">
        <Card.Img variant="top" src={aeta} />
        <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <small>{props.date}</small>
            <Card.Text>{props.preview}</Card.Text>
            <a href="#Read more">Read more</a>
        </Card.Body>
    </Card>
)

export default ArticleCard