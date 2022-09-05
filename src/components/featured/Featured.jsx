import useFetch from "../../hooks/useFetch.js";
import "./featured.scss";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=berlin,madrid,london,paris"
  );

  return (
    <div className="container mb-5">
      <h1 className="homeTitle mb-3">Property by Cities</h1>
      <div className="featured row gy-3 gx-md-3 gx-3 justify-content-center">
        {loading ? (
          "Loading please wait"
        ) : (
          <>
            <div className="col-md-3 col-6">
              <div className="featuredItem">
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

            <div className="col-md-3 col-6">
              <div className="featuredItem">
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
            <div className="col-md-3 col-6">
              <div className="featuredItem">
                <img
                  src="https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o="
                  alt=""
                  className="featuredImg img-fluid"
                />
                <div className="featuredTitles">
                  <h1>London</h1>
                  <h2>{data[2]} properties</h2>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="featuredItem">
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
