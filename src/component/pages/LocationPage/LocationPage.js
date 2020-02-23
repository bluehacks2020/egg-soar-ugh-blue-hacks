import React, { useState, useEffect } from "react";
import "./style.css";
import { locations } from "../../../data/locations";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

import Testimonial from "../../Testimonial";

const BookButton = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="outline-warning" onClick={handleShow}>
          Book
      </Button>

      <Modal show={show} onHide={handleClose} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5> Booking {props.date} </h5>
          <h6> Please answer a few questions before confirming your booking </h6>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Why do you want to join this immersion? </Form.Label>
              <Form.Control type="text" />
              <Form.Label>
                Have you joined any immersion before? If yes, where is it and
                how was your experience?
              </Form.Label>
              <Form.Control type="text" />
              <Form.Label>
                Are you willing to sleep on a banig?
              </Form.Label>
              <Form.Control type="text" />
              <Form.Label>Please check all that apply: </Form.Label>
              <Form.Check label={`Heart Complications`} />
              <Form.Check label={`Physical disability`} />
              <Form.Check label={`Dust Allergy`} />
              <Form.Check label={`Food Allergy`} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={handleClose}>
            Close
          </Button>
          <Button variant="outline-warning" onClick={handleClose}>
            Confirm Booking
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
const LocationPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const data = locations.locations[2];

  return (
    <div className="LocationPage">
      <h3 className="location-header">{data.location}</h3>
      <div className="kontainer">
        <h4> Location Overview </h4>
        <p>{data.locOverview}</p>
      </div>
      <div className="kontainer">
        <h4> Community Overview </h4>
        <p>{data.comOverview}</p>
      </div>
      <div className="kontainer">
        <h4> Book an Immersion </h4>
        <h5> What to expect</h5>
        <p>{data.expect}</p>
        <h5> Things to prepare </h5>
        <ol>
          <ul>
            {data.prepare.map(prepare => (
              <li key={prepare}>{prepare}</li>
            ))}
          </ul>
        </ol>
      </div>
      <div className="kontainer">
        <h4> Schedules Available </h4>
        <br></br>
        {data.schedule.map(sched => (
          <>
            <div className="schedule" key={sched.date}>
              <div> {sched.date} </div>
              <div> Slots: {sched.slots} </div>
              <BookButton date={sched.date} />
              <div className="border-top my-3"></div>
            </div>
          </>
        ))}
      </div>
      <Testimonial />
    </div>
  );
};

export default LocationPage;
