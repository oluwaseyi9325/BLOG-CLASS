import Navbar from 'Component/Navbar'
import NewsCard from 'Component/NewsCard'
import React from 'react'

function index() {
  return (
    <div>
      <Navbar/>

      <div className='container'>
        <NewsCard/>
      </div>

    </div>
  )
}

export default index
