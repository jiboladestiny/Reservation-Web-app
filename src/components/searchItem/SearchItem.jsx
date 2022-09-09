import { Link } from "react-router-dom";

import "./searchItem.scss";

const SearchItem = ({ item }) => {
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
            <button>Book Now</button>
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
            <div className="siRating">
              <span>Excellent</span>
              <button>{item.rating}</button>
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
