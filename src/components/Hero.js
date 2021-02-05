import React from "react";
import "../heroes.css";

const Hero = (props) => {
  return (
    <div className="hero">
      <div className="hero-pic">
        <img src={props.pic} alt={props.name} />
      </div>
      <div className="hero-detail">
        <div className="hero-name">{props.name}</div>
        <div className="hero-desc">
          <div className="roles">
            {props.roles.map((role, index) => {
              return index === 0 ? (
                <span key={role}>{role}</span>
              ) : (
                <span key={role}>/{role}</span>
              );
            })}
          </div>
          <div className="specials">
            {props.specials.map((special, index) => {
              return index === 0 ? (
                <span key={special}>{special}</span>
              ) : (
                <span key={special}>/{special}</span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
