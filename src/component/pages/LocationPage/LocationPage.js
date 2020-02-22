import React from "react";
import "./style.css";
import { locations } from "../../../data/locations";

const LocationPage = () => {
  const data = locations.locations[0];

  return (
    <div className="LocationPage">
      <h4> Location Overview </h4>
      <p>{data.locOverview}</p>
      <h4> Community Overview </h4>
      <p>{data.comOverview}</p>
      <h4> Book an Immersion </h4>
      <h5 className="text-left"> What to expect</h5>
      <p>{data.expect}</p>
      <h5 className="text-left"> Things to prepare </h5>
      <ol>
        <ul>
          {data.prepare.map(prepare => (
            <li key={prepare}>{prepare}</li>
          ))}
        </ul>
      </ol>
      <h4> Schedules Available </h4>
      
    </div>
  );
};

export default LocationPage;
