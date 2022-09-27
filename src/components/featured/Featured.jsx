import useFetch from "../../hooks/useFetch.js";
import { useNavigate } from "react-router-dom";

import "./featured.scss";

const Featured = () => {
  const { data, loading } = useFetch(
    "https://thankful-bass-waders.cyclic.app/api/hotels/countByCity?cities=berlin,madrid,london,paris"
  );
  const navigate = useNavigate();
  return (
    <div className="container">
      <h1 className="homeTitle mb-3">Property by Cities</h1>
      <div className="featured row gy-3 gx-md-3 gx-3 justify-content-center">
        {loading || data.length === 0 ? (
          <div className="lds-roller">
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
            <div className="col-md-6 col-lg-3 col-6">
              <div
                className="featuredItem"
    
                onClick={() => {
                  navigate("/hotels", {
                    state: { destination: "berlin" },
                  });
                }}
              >
                <img
                  src="https://images.pexels.com/photos/1128408/pexels-photo-1128408.jpeg?cs=srgb&dl=pexels-niki-nagy-1128408.jpg&fm=jpg"
                  alt=""
                  className="featuredImg img-fluid"
                />
                <div className="featuredTitles">
                  <h1>Berlin</h1>
                  <h2>{data[0]} properties</h2>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 col-6">
              <div
                className="featuredItem"
                onClick={() => {
                  navigate("/hotels", {
                    state: { destination: "madrid" },
                  });
                }}
              >
                <img
                  src="https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt=""
                  className="featuredImg img-fluid"
                />
                <div className="featuredTitles">
                  <h1>Madrid</h1>
                  <h2>{data[1]} properties</h2>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 col-6">
              <div
                className="featuredItem"
                onClick={() => {
                  navigate("/hotels", {
                    state: { destination: "london" },
                  });
                }}
              >
                <img
                  src="https://images.pexels.com/photos/3458997/pexels-photo-3458997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt=""
                  className="featuredImg img-fluid"
                />
                <div className="featuredTitles">
                  <h1>London</h1>
                  <h2>{data[2]} properties</h2>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 col-6">
              <div
                className="featuredItem"
                onClick={() => {
                  navigate("/hotels", {
                    state: { destination: "paris" },
                  });
                }}
              >
                <img
                  src="https://images.pexels.com/photos/1530259/pexels-photo-1530259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt=""
                  className="featuredImg img-fluid"
                />
                <div className="featuredTitles">
                  <h1>Paris</h1>
                  <h2>{data[3]} properties</h2>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Featured;
