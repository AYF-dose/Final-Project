import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import foto from "/src/img/profile.png";
import "/src/Team.css";

const Team = () => {
  return (
    <div className="section-title">
      <h2>Our Team</h2>

      <div className="section-member">
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <img src={foto} className="img-thumbnail" alt="AboutImage" />
            <h4> Ghifari </h4>
            <span>Front-end Dev</span>
          </div>
          <div className="col">
            <img src={foto} className="img-thumbnail" alt="AboutImage" />
            <h4> Raiyan </h4>
            <span>Front-end Dev</span>
          </div>
          <div className="col">
            <img src={foto} className="img-thumbnail" alt="AboutImage" />
            <h4> Stefiana </h4>
            <span>Front-end Dev</span>
          </div>
          <div className="col">
            <img src={foto} className="img-thumbnail" alt="AboutImage" />
            <h4> Ginanjar </h4>
            <span>Back-end Dev</span>
          </div>
          <div className="col">
            <img src={foto} className="img-thumbnail" alt="AboutImage" />
            <h4> Anggi Dwi </h4>
            <span>Back-end Dev</span>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Team;
