import React from 'react'

import aeta from '../../assets/images/aeta.jpg'
import dumagat from '../../assets/images/dumagat.jpg'
import ivatan from '../../assets/images/ivatan.jpg'
import './style.css'

const LocationCard = ({ id, location}) => {
    return(
        <div className="LocationCard"
            style={{
                backgroundImage: `url(${id === 1 ? aeta : id === 2 ? ivatan : dumagat})`, 
                backgroundSize: 'cover'
            }}
            location-id={id}>
            <h6>{location}</h6>
        </div>
    )
}

export default LocationCard