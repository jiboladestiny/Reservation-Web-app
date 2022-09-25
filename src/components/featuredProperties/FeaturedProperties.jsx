import useFetch from "../../hooks/useFetch";
import "./featuredProperties.css";
import { useNavigate } from "react-router-dom";

const FeaturedProperties = () => {
  const { data, loading } = useFetch("/hotels?featured=true&limit=4");
  const navigate = useNavigate();

  return (
    <div className="res container mt-5">
      <h1 className="homeTitle mb-4">Top Homes</h1>
     
      <div className="fp row gy-4">
        {loading ? (
          <div className="lds-roller mx-auto">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        ) : (
          <>
            {data.map((item) => (
              <div className="col-md-6 col-lg-3">
                <div
                  onClick={() => {
                    navigate(`/hotels/${item._id}`);
                  }}
                  className="fpItem"
                  key={item._id}
                >
                  <img src={item.photos[0]} alt="" className="fpImg" />
                  <span className="fpName">{item.name}</span>
                  <span className="fpCity">{item.city}</span>
                  <span className="fpPrice">
                    Starting from ${item.cheapestPrice}
                  </span>
                  {item.rating && (
                    <div className="fpRating">
                      <button>{item.rating}</button>
                      <span>Excellent</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default FeaturedProperties;
