import { Link } from "react-router-dom";
import React from 'react'
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import "./searchItem.scss";

const SearchItem = ({ item }) => {
  const [value, setValue] = React.useState(item.rating);
  const [hover, setHover] = React.useState(-1);

  const labels = {
    1: "Useless+",
    2: "Poor+",
    3: "Good",
    4: "Impressive",
    5: "Excellent+",
  };
  function getLabelText(value) {
    return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
  }
  return (
    <div className="col-md-12 col-sm-6">
      <div className="searchItem">
        <img src={item.photos[0]} alt="" className="siImg" />

        <div className="mobileDesc">
          <h4 className="mt-3">{item.name}</h4>
          {item.rating && (
            <div className="mobileDecRating">
              <span className="ratingText">Excellent</span>
              <button className="ratingBtn">{item.rating}</button>
            </div>
          )}

          <div className="mobileDescFooter">
            <div className="left">
              <h5>${item.cheapestPrice}</h5>
              <h6>Per night</h6>
            </div>
            <div className="right">
              <Link to={`/hotels/${item._id}`}>
                <button>Book Now</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="siDesc">
          <h1 className="siTitle">{item.name}</h1>
          <span className="siDistance">{item.distance}m from center</span>
          <span className="siTaxiOp">Free airport taxi</span>
          <span className="siSubtitle">
            Studio Apartment with Air conditioning
          </span>
          <span className="siCancelOp">Free cancellation </span>
          <span className="siCancelOpSubtitle">
            You can cancel later, so lock in this great price today!
          </span>
        </div>
        <div className="siDetails">
          {item.rating && (
            <div className="rating-cont">
              <Rating
                name="half-rating-read"
                defaultValue={item.rating}
                precision={0.5}
                readOnly
              />
            </div>
          )}
          <div className="siDetailTexts">
            <span className="siPrice">${item.cheapestPrice}</span>
            <span className="siTaxOp">Includes taxes and fees</span>
            <Link to={`/hotels/${item._id}`}>
              <button className="siCheckButton">See availability</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
