import React from 'react'

import zambales from '../../assets/images/zambales.jpg'
import './style.css'

const LocationCard = props => {
    return(
        <div className="LocationCard" style={{backgroundImage: `url(${zambales})`, backgroundSize: 'cover'}}>
            <div>Zambales</div>
            <div>Aeta Community</div>
        </div>
    )
}

export default LocationCard