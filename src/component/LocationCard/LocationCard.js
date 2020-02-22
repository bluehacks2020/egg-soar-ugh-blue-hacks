import React from 'react'

import zambales from '../../assets/images/zambales.jpg'
import './style.css'

const LocationCard = ({ id, location}) => {
    return(
        <div className="LocationCard"
            style={{backgroundImage: `url(${zambales})`, backgroundSize: 'cover'}}
            location-id={id}>
            <h6>{location}</h6>
        </div>
    )
}

export default LocationCard