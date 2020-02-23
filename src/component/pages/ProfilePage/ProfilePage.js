import React, { useEffect, useState } from 'react'
import {Image, Card, Button, Modal, Form, FormControl } from 'react-bootstrap'

import profile from '../../../data/profile'
import LocationCard from '../../LocationCard'
import { locations } from '../../../data/locations'
import './style.css'
import avatar from '../../../assets/images/avatar.png'
import fish from '../../../assets/images/fish.svg'
import wave from '../../../assets/images/wave.svg'

const ProfilePage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
      
    const immersions = profile.immersionHistory.reduce((a, curr) => {
        a.push(
            <Card body className="immersion-card">
                <div className="immersion-icon"><img src={curr.icon === "fish" ? fish : wave} height={35} style={{color:"#ff7315"}}/></div>
                <div><strong>Location:</strong>: {curr.location}</div>
                <div><strong>Community</strong>: {curr.community}</div>
                <div><strong>Duration</strong>: {curr.duration}</div>
                <div className="hyperlink"><a href=""><u>Keep connected with {curr.location}</u></a></div>
            </Card>
        )
        return a
    }, [])

    const loc = locations.locations[0]
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                <LocationCard key={loc.id} id={loc.id} location={loc.location} community={loc.community} />
            </div>
        </div>
        <div className="profile-article">
            <Button variant="outline-warning" onClick={handleShow}>
                <strong>Write an Article</strong>
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Post an Article</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form inline>
                        <FormControl type="text" as="textarea" rows="3" placeholder="Tell us about your immersion experience" />
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose} className="orange">
                    Post
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
    </div>
    )
}

export default ProfilePage