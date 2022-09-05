import useFetch from "../../hooks/useFetch";
import "./propertyList.scss";

const PropertyList = () => {
  const { data, loading, error } = useFetch("/hotels/countByType");

  const images = [
    "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/1977342/pexels-photo-1977342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  ];

  const right = () => {
    var right = document.querySelector(".pListMobile");
    right.scrollBy(100, 0);
  };

  const left = () => {
    var right = document.querySelector(".pListMobile");
    right.scrollBy(-100, 0);
  };

  return (
    <div className="list container">
      <h1 className="homeTitle mb-3">Property by type</h1>
      <div className="pList row">
        {loading ? (
          "loading"
        ) : (
          <>
            {data &&
              images.map((img, i) => (
                <div className="col">
                  <div className="pListItem" key={i}>
                    <img src={img} alt="" className="pListImg" />
                    <div className="pListTitles">
                      <h1>{data[i]?.type}</h1>
                      <h2>
                        {data[i]?.count} {data[i]?.type}
                      </h2>
                    </div>
                  </div>
                </div>
              ))}
          </>
        )}
      </div>
      <div className="mobile">
        <div className="pListMobile">
          <i class="right bx bx-chevrons-right" onClick={right}></i>
          <i class="left bx bx-chevrons-left" onClick={left}></i>
          {loading ? (
            "loading"
          ) : (
            <>
              {data &&
                images.map((img, i) => (
                  <div className="pListItemMobile me-3" key={i}>
                    <img src={img} alt="" className="pListImg" />

                    <div className="pListTitles">
                      <h1>{data[i]?.type}</h1>
                      <h2>
                        {data[i]?.count} {data[i]?.type}
                      </h2>
                    </div>
                  </div>
                ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PropertyList;
