import React from 'react'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import SearchHotel from '../../components/searchHotel/SearchHotel'
import "./Hotels.css"

const Hotels = () => {
  return (
    <div>
          <>
    <div className='homeContainer'>
        <Navbar type="list"/>
        <Header type="list"/>
    </div>
    <div className="searchWrapper">
        <SearchHotel/>
    </div>
    </>
    </div>
  )
}

export default Hotels