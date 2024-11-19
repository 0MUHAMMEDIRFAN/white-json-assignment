import React, { useEffect } from 'react'
import "./Navbar.css"
import Search from "/src/assets/Search.svg"
import bell from "/src/assets/bell.svg"
import avatar from "/src/assets/Avatar.svg"



function Navbar() {
  useEffect(() => {
    const sidebar = document.getElementById("sidebar");
    console.log(sidebar)
  })
  return (
    <div className='navbar shown'>
      <div className="burgerIconContainer" onClick={() => { sidebar.classList.toggle("shown") }}>
        <div className='burgerIcon'></div>
        <div className='burgerIcon'></div>
      </div>
      <div className="otherIcon">
        <div className="searchIcon"><img src={Search} alt="" /></div>
        <div className="notificationIcon"><img src={bell} alt="" /></div>
        <div className="userIcon"><img src={avatar} alt="" /></div>
      </div>
    </div>
  )
}

export default Navbar
