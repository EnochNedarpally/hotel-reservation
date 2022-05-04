import {
  faBed,
  faCalendar,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css";
import { DateRange } from "react-date-range";
import { useState } from "react";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const Header = ({type}) => {
  const [openDate, setOpenDate] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOption, setOpenOption] = useState(false);
  const [option, setOption] = useState({
    adult: 1,
    child: 0,
    room: 1,
  });

  const headClassName= type ? "headContainer headType" : "headContainer"
  const navigate = useNavigate();

  const handleOptionChange = (name, operation) => {
    setOption((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? option[name] + 1 : option[name] - 1,
      };
    });
  };
  const handleSearch = ()=>{
    navigate("/hotels", { state: { searchValue, date, option } });
  }
  return (
    <div className={headClassName}>
      <div className="headItems">
        <div className="headItem">
          <FontAwesomeIcon icon={faBed} />
          <span className="headTitle">Stays</span>
        </div>
        <div className="headItem">
          <FontAwesomeIcon icon={faPlane} />
          <span className="headTitle">Flights</span>
        </div>
        <div className="headItem">
          <FontAwesomeIcon icon={faCar} />
          <span className="headTitle">Car Rentals</span>
        </div>
        <div className="headItem">
          <FontAwesomeIcon icon={faBed} />
          <span className="headTitle">Attractions</span>
        </div>
        <div className="headItem">
          <FontAwesomeIcon icon={faTaxi} />
          <span className="headTitle">Airport Taxis</span>
        </div>
      </div>
      {!type && <><div className="headDesc">
        <h2>A lifetime of Discounts? It's Genius .</h2>
        <p>
          Get rewarded for your travels - unlock instant savings of 10% or more
          with a free hotelBook account
        </p>
        <button>SignIn/Register</button>
      </div>
      <div className="searchContainer">
        <div className="searchInputs">
          <FontAwesomeIcon icon={faBed} />
          <input type="text" placeholder="Where are you going?" value={searchValue} onChange={(e)=>setSearchValue(e.target.value)} />
        </div>
        <div className="date">
          <FontAwesomeIcon icon={faCalendar} />
          <span
            onClick={() => setOpenDate(!openDate)}
            className="headerSearchText"
          >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
            date[0].endDate,
            "MM/dd/yyyy"
          )}`}</span>
          {openDate && (
            <div className="dateRange">
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                minDate={new Date()}
                ranges={date}
              />
            </div>
          )}
        </div>
        <div className="options">
          <FontAwesomeIcon icon={faPerson} />
          <span
            onClick={() => setOpenOption(!openOption)}
          >{` ${option.adult} adult ${option.child} children  ${option.room} room`}</span>
          {openOption && (
            <div className="selectOption">
              <div className="option">
                <p>Adult</p>
                <button
                  onClick={() => handleOptionChange("adult", "d")}
                  disabled={option.adult <= 1}
                >
                  -
                </button>
                <span>{option.adult}</span>
                <button onClick={() => handleOptionChange("adult", "i")}>
                  +
                </button>
              </div>
              <div className="option">
                <p>Child</p>
                <button
                  onClick={() => handleOptionChange("child", "d")}
                  disabled={option.child < 1}
                >
                  -
                </button>
                <span>{option.child}</span>
                <button onClick={() => handleOptionChange("child", "i")}>
                  +
                </button>
              </div>
              <div className="option">
                <p>Room</p>
                <button
                  onClick={() => handleOptionChange("room", "d")}
                  disabled={option.room <= 1}
                >
                  -
                </button>
                <span>{option.room}</span>
                <button onClick={() => handleOptionChange("room", "i")}>
                  +
                </button>
              </div>
            </div>
          )}
        </div>
        <button onClick={handleSearch}>Search</button>
      </div> </>}
    </div>
  );
};

export default Header;
