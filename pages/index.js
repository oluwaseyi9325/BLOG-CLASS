import Navbar from 'Component/Navbar'
import NewsCard from 'Component/NewsCard'
import LatestNews from "Component/LatestNews"
import React from 'react'

function index() {
  return (
    <div>
      <Navbar/>


      <div className='container'>
        <LatestNews/>
        <NewsCard/>
      </div>

    </div>
  )
}

export default index
