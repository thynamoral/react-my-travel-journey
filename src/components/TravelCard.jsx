import React from "react";
import location_icon from "/location-icon.svg";

const TravelCard = (props) => {
  const { img, country, googleMap, place, startDate, endDate, caption } = props;
  return (
    <div className="card">
      <img className="card--img" src={img} alt={place} />
      <div className="card--info">
        <div className="card--location">
          <img
            className="card--location-icon"
            src={location_icon}
            alt="location-icon"
          />
          <h3 className="card--location--country">{country}</h3>
          <a className="location-map" href={googleMap} target="_blank">
            View on Google Map
          </a>
        </div>
        <h2 className="card--title">{place}</h2>
        <p className="card--travel-date">
          {startDate} - {endDate}
        </p>
        <p className="card--travel-caption">{caption}</p>
      </div>
    </div>
  );
};

export default TravelCard;
