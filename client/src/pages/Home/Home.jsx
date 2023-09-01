import React from 'react'
import HomeMainbar from '../../components/HomeMainbar/HomeMainbar'
import RightSidebar from '../../components/RightSidebar/RightSidebar'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import '../../App.css'

const Home = () => {
  return (
    <div className="main-home">
    <div className="home-container-1">
      <LeftSidebar />
      <div className="home-container-2">
        <HomeMainbar/>
        <RightSidebar/>
      </div>
    </div>
    </div>
  )
}

export default Home