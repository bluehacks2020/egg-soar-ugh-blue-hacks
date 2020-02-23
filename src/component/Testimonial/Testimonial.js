import React from "react";
import "./style.css";
import Image from "react-bootstrap/Image";
import avatar from "../../assets/images/avatar.png";

const Testimonial = props => {
  return (
    <div className="testimonial">
      <div className="avatar-header">
        <Image
          className="avatar"
          src={avatar}
          alt="Profile Picture"
          roundedCircle
        />
        <h5>The most fun that I ever had traveling</h5>
      </div>
        <p>
          I had fun and I learned more about the different cultures in the country. The Dumagat people are very hospitable and kind.
        </p>
    </div>
  );
};

export default Testimonial;
