import React from "react";
import "./style.css";
import { locations } from "../../../data/locations";
import image from "../../../assets/images/dumagat.jpg";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const LocationPage = () => {
  const data = locations.locations[0];

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
          <br>
          </br>
        {data.schedule.map(sched => (
            <>
            <div className="schedule" key={sched.date}>
                <div> {sched.date} </div>
                <div> Slots: {sched.slots} </div>
                <Button variant="outline-warning">Book</Button>
                <div class="border-top my-3"></div> 
                
            </div>
            </>

        ))}
      </div>
    </div>
  );
};

export default LocationPage;
