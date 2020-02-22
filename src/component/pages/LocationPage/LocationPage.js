import React from "react";
import "./style.css";
import { locations } from "../../../data/locations";

const LocationPage = () => {
  const data = locations.locations[0];

  return (
    <div className="LocationPage">
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
        <div> March 1 Book</div>
        <div> March 1 Book</div>
        <div> March 1 Book</div>
        <div> March 1 Book</div>

      </div>

    </div>
  );
};

export default LocationPage;
