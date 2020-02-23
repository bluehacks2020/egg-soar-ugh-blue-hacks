import React from "react";
import "./style.css";

import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image"
import check from "../../../assets/images/check.svg";


const ConfirmedPage = (props) => {
  return (

    <>
    <div className="kontainer text-center">
      <h4>Thank you for booking!</h4>
      <div>
        <Image src={check} alt="Confirmed"></Image>
      </div>
      <br>
      </br>
      <h5> You will receive an email shortly for further details </h5>
      <Link to="/"><h6 style={{color: "#ff7315" }}>Back to home</h6></Link>
    </div>
    </>
  );

}

export default ConfirmedPage;