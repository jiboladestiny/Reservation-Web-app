import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import "./reserve.scss";
import useFetch from "../../hooks/useFetch";
import { useContext, useState, useEffect } from "react";
import { SearchContext } from "../../context/SearchContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import success from "./success-svgrepo-com.svg";
const Reserve = ({ setOpen, hotelId }) => {
  const notify = () => toast.error("Reservation is empty !");
  const [selectedRooms, setSelectedRooms] = useState([]);
  const { data, loading } = useFetch(
    `https://thankful-bass-waders.cyclic.app/api/hotels/room/${hotelId}`
  );
  const { dates } = useContext(SearchContext);
  const [modal, setModal] = useState(false);
  const [random, setRandom] = useState();
  useEffect(()=>{
    setRandom( Math.random().toString(36).substring(2, 12))
  },[modal])

  const getDatesInRange = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    const date = new Date(start.getTime());

    const dates = [];

    while (date <= end) {
      dates.push(new Date(date).getTime());
      date.setDate(date.getDate() + 1);
    }

    return dates;
  };

  const alldates = getDatesInRange(dates[0].startDate, dates[0].endDate);

  const isAvailable = (roomNumber) => {
    const isFound = roomNumber.unavailableDates.some((date) =>
      alldates.includes(new Date(date).getTime())
    );

    return !isFound;
  };

  const handleSelect = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    setSelectedRooms(
      checked
        ? [...selectedRooms, value]
        : selectedRooms.filter((item) => item !== value)
    );
  };

  const navigate = useNavigate();

  const handleClick = async () => {
    if (selectedRooms.length !== 0) {
      try {
        await Promise.all(
          selectedRooms.map((roomId) => {
            const res = axios.put(`/rooms/availability/${roomId}`, {
              dates: alldates,
            });
            return res.data;
          })
        );
        setModal(true);
        // setOpen(false);
        // navigate("/");
      } catch (err) {}
    } else {
      notify();
    }
  };



  return (
    <div className="reserve">
      <ToastContainer />
      <div className="rContainer">
        {modal === false && (
          <FontAwesomeIcon
            icon={faCircleXmark}
            className="rClose"
            onClick={() => setOpen(false)}
          />
        )}
        {modal === false && (
          <div>
            <span>Select your rooms:</span>
            <br />
            {loading ? (
              <div className="d-flex justify-content-center">
                <div class="lds-hourglass"></div>
              </div>
            ) : (
              data.map((item) => (
                <div className="rItem" key={item._id}>
                  <div className="rItemInfo">
                    <div className="rTitle">{item.title}</div>
                    <div className="rDesc">{item.desc}</div>
                    <div className="rMax">
                      Max people: <b>{item.maxPeople}</b>
                    </div>
                    <div className="rPrice">{item.price}</div>
                  </div>
                  <div className="rSelectRooms">
                    {item.roomNumbers.map((roomNumber) => (
                      <div className="room">
                        <label>{roomNumber.number}</label>
                        <input
                          type="checkbox"
                          value={roomNumber._id}
                          onChange={handleSelect}
                          disabled={!isAvailable(roomNumber)}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))
            )}

            <button onClick={handleClick} className="rButton">
              Reserve Now!
            </button>
          </div>
        )}
        {modal === true && (
          <div className="feedback">
            <div className="d-flex justify-content-center">
              <img src={success} width="57" height="57" alt="" />
            </div>
            <p>Rerservation booked succesfully</p>
            <p className="id">
              <span className="book">Booking id</span>: <span>{random}</span>
              <i
                onClick={() => {
                  navigator.clipboard.writeText(random);
                }}
                class="bx ms-2 bx-copy"
              ></i>
            </p>
            <div class="button-cont d-flex justify-content-center">
              <button
                onClick={() => {
                  navigate("/hotels", {
                    state: {
                      destination: "",
                      dates,
                      options: {
                        adult: 1,
                        children: 0,
                        room: 1,
                      },
                    },
                  });
                }}
                class="btn explore btn-md me-2 btn-primary"
                type="button"
              >
                Explore
              </button>
              <button
                onClick={() => {
                  navigate("/");
                }}
                class="btn home btn-md btn-primary"
                type="button"
              >
                Home page
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Reserve;
