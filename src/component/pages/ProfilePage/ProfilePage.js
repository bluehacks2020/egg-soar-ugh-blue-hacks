import React from 'react'
import {Image, Card} from 'react-bootstrap'

import profile from '../../../data/profile'
import './style.css'
import avatar from '../../../assets/images/avatar.png'
import fish from '../../../assets/images/fish.svg'
import wave from '../../../assets/images/wave.svg'

const ProfilePage = () => {
    const immersions = profile.immersionHistory.reduce((a, curr) => {
        a.push(
            <Card body className="immersion-card">
                <div className="immersion-icon"><img src={curr.icon === "fish" ? fish : wave} height={35} style={{color:"#ff7315"}}/></div>
                <div><strong>Location:</strong> {curr.location}</div>
                <div><strong>Community</strong>: {curr.community}</div>
                <div><strong>Duration</strong>: {curr.duration}</div>
            </Card>
        )
        return a
    }, [])

    return (
    <div className="ProfilePage">
        <div className="profile-header">
            <div className="profile-text">
                <Image className="profile-pic" src={avatar} width={120} height={120} roundedCircle/>
                <h3 className="name">
                    {profile.name}
                </h3>
                <h6 className="info">
                    {profile.info}
                </h6>
            </div>
        </div>
        <div style={{height:"150px"}}/>
        <hr/>
        <div className="profile-subsection">
            <h4>Past Immersions</h4>
            <div className="immersion-list">
                {immersions}
            </div>
        </div>
        <div className="profile-subsection">
            <h4>Top Recommended</h4>
            <div>
            </div>
        </div>
    </div>
    )
}

export default ProfilePage