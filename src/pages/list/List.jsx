import "./list.scss";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";
import useFetch from "../../hooks/useFetch";
import Empty from "./Empty";

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state?.destination);
  const [dates, setDates] = useState(location.state?.dates);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state?.options);
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);
  const [filter, setFilter] = useState(false);
console.log(destination)
  const { data, loading, error, reFetch } = useFetch(
    `/hotels?city=${destination}&min=${min || 0}&max=${max || 999}`
  );

  const handleClick = () => {
    reFetch();
  };

  return (
    <div>
    
      <Header type="list" />
      <div className="listContainer container">
        <h3 className="mb-4">Choose from wide range of reservaion</h3>
        <div className="listWrapper row gy-5">
          <div className="col-lg-3 col-md-12">
            <div className={filter ? "listSearch showFilter" : "listSearch"}>
              <i
                class="bx bx-filter"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Filter"
                onClick={() => {
                  setFilter(!filter);
                }}
              ></i>
              <h1 className="lsTitle">Search</h1>
              <div className="lsItem">
                <label>Destination</label>
                <input
                  placeholder={destination}
                  onChange={(e) => {
                    setDestination(e.target.value);
                  }}
                  type="text"
                />
              </div>
              <div className="lsItem">
                <label>Check-in Date</label>
                {dates && (
                  <span onClick={() => setOpenDate(!openDate)}>
                    {`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(
                      dates[0].endDate,
                      "MM/dd/yyyy"
                    )}`}
                  </span>
                )}

                {openDate && (
                  <DateRange
                    onChange={(item) => setDates([item.selection])}
                    minDate={new Date()}
                    ranges={dates}
                  />
                )}
              </div>
              <div className="lsItem">
                <label>Options</label>
                <div className="lsOptions">
                  <div className="lsOptionItem">
                    <span className="lsOptionText">
                      Min price <small>per night</small>
                    </span>
                    <input
                      type="number"
                      onChange={(e) => setMin(e.target.value)}
                      className="lsOptionInput"
                    />
                  </div>
                  <div className="lsOptionItem">
                    <span className="lsOptionText">
                      Max price <small>per night</small>
                    </span>
                    <input
                      type="number"
                      onChange={(e) => setMax(e.target.value)}
                      className="lsOptionInput"
                    />
                  </div>
                  <div className="lsOptionItem">
                    <span className="lsOptionText">Adult</span>
                    <input
                      type="number"
                      min={1}
                      className="lsOptionInput"
                      placeholder={options?.adult}
                    />
                  </div>
                  <div className="lsOptionItem">
                    <span className="lsOptionText">Children</span>
                    <input
                      type="number"
                      min={0}
                      className="lsOptionInput"
                      placeholder={options?.children}
                    />
                  </div>
                  <div className="lsOptionItem">
                    <span className="lsOptionText">Room</span>
                    <input
                      type="number"
                      min={1}
                      className="lsOptionInput"
                      placeholder={options?.room}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-8">
            <div className="listResult">
              {data.length === 0 && !loading && <Empty />}
              {loading ? (
                // "loading"
                <div className="loader"></div>
              ) : (
                <div className="row gy-4">
                  {data.map((item) => (
                    <SearchItem item={item} key={item._id} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default List;
