import React from 'react'
import "./Sidebar.css"
import avatar from "/src/assets/Avatar.svg"
import Logo from "/src/assets/Logo.svg"
import Action from "/src/assets/Action.svg"
import Bag from "/src/assets/Bag.svg"
import Calendar from "/src/assets/Calendar.svg"
import Chart from "/src/assets/Chart.svg"
import Discovery from "/src/assets/Discovery.svg"
import Document from "/src/assets/Document.svg"
import Dashboard from "/src/assets/Dashboard.svg"
import Lock from "/src/assets/Lock.svg"
import Paper from "/src/assets/Paper.svg"
import Wallet from "/src/assets/Wallet.svg"
import ArrowList from "/src/assets/List.svg"

function Sidebar() {
  return (
    <div>
      <div className='sidebar shown' id='sidebar'>
        {/* Header section  */}
        <div className="header">
          <div className='logo'>
            <img src={Logo} alt="Logo" />
            <h4 className='brand'>Test 1</h4>
          </div>
        </div>

        {/* Menu Items  */}

        <div className="navSidebar">
          <ul className='menuItems'>
            <li>
              <img src={Dashboard}  alt="" />
              <p>Dashboard</p>
              <img src={Action} className="action" alt="" />
            </li>
            <li>
              <img src={Bag} alt="" />
              <p>E-commerce</p>
              <img src={Action} className="action" alt="" />
            </li>
            <li>
              <img src={Chart} alt="" />
              <p>Pages</p>
              <img src={Action} className="action" alt="" />
            </li>
            <li>
              <img src={Discovery} alt="" />
              <p>Users</p>
              <div className="blank"></div>
            </li>
            <li>
              <img src={Wallet} alt="" />
              <p>Invoices</p>
              <img src={Action} className="action" alt="" />
            </li>
            <li>
              <img src={Document} alt="" />
              <p>Projects</p>
              <img src={Action} className="action" alt="" />
            </li>
            <li>
              <img src={Paper} alt="" />
              <p>Tasks</p>
              <img src={Action} className="action" alt="" />
            </li>
            <li>
              <img src={Calendar} alt="" />
              <p>Calendar</p>
              <div className="blank"></div>
            </li>
            <li>
              <img src={Lock} alt="" />
              <p>Authentication</p>
              <img src={Action} className="action" alt="" />
            </li>
          </ul>
        </div>

        {/* Get Pro Section  */}

        <div className="getPro">
          <p className="title">Upgrade to PRO to get
            access to all features!</p>
          <button>Get Pro Now</button>
        </div>

        {/* User section  */}

        <div className="user">
          <div className="avatar">
            <img src={avatar} alt="" />
          </div>
          <div className="userDetails">
            {/*dynamic userdetails*/}
            <p className='username'>Jane Eyre</p>
            <p className='profession'>UX Designer</p>
          </div>
          <img src={ArrowList} alt="" />
        </div>
        <div className="closer" onClick={() => { document.getElementById("sidebar").classList.toggle("shown") }}><span></span></div>
      </div>
    </div>

  )
}

export default Sidebar
