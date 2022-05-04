import { format } from 'date-fns';
import { useState } from 'react';
import { useLocation } from 'react-router-dom'
import SearchItem from '../searchItem/SearchItem';
import './SearchHotel.css'

const SearchHotel = () => {
  const location = useLocation().state
  const [openDate, setOpenDate] = useState(false);
  // const [searchValue, setSearchValue] = useState("");
  const [date, setDate] = useState(location.date);
  const [openOption, setOpenOption] = useState(false);
  const [option, setOption] = useState(location.option);

  
  return (
    <div className="searchHotelContainer">
    <div className="searchLeft">
        <h2>Search</h2>
        <p>Destination</p>
        <input type="text" placeholder={location.searchValue}/>
        <p>Check-in Date</p>
        <input type="text" value={`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
            date[0].endDate,
            "MM/dd/yyyy"
          )}`}/>
        <p>Options</p>
        <div className="sOptionItems">
            <div className="sOptionItem">
              <span>Min Price per night</span>
              <input type="number" />
            </div>
            <div className="sOptionItem">
              <span>Max Price per night</span>
              <input type="number"/>
            </div>
            <div className="sOptionItem">
              <span>Adult</span>
              <input type="number"  min={1} placeholder={option.adult} />
            </div>
            <div className="sOptionItem">
              <span>Children</span>
              <input type="number" min={0} placeholder={option.child} />
            </div>
            <div className="sOptionItem">
              <span>Room</span>
              <input type="number"  min={1} placeholder={option.room} />
            </div>
        </div>
        <button>Search</button>
    </div>
    <div className="searchRight">
        <SearchItem/>
        <SearchItem/>
        <SearchItem/>
        <SearchItem/>
        <SearchItem/>
        <SearchItem/>
    </div>
    </div>
  )
}

export default SearchHotel