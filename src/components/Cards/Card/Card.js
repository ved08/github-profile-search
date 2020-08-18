import React from 'react';
import "./Card.css"

const Card = props => {
    return (
        <div className="Card" onClick={props.showContent}>
            <img src={props.image}/>
            <h2 className="Name">{props.username}</h2>
        </div>
    )
}

export default Card;