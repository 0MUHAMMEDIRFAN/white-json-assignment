import React from 'react'
import "./Sidebar.css"
import Logo from "../../assets/logo.svg"
import Action from "../../assets/Action.svg"
import Bag from "../../assets/Bag.svg"
import Calendar from "../../assets/Calendar.svg"
import Chart from "../../assets/Chart.svg"
import Discovery from "../../assets/Discovery.svg"
import Document from "../../assets/Document.svg"
import Dashboard from "../../assets/Dashboard.svg"
import Lock from "../../assets/Lock.svg"
import Paper from "../../assets/Paper.svg"
import Wallet from "../../assets/Wallet.svg"
import ArrowList from "../../assets/List.svg"

function Sidebar() {
  return (
    <div className='sidebar'>

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
            <img src={Dashboard} alt="" />
            <p>Dashboard</p>
            <img src={Action} alt="" />
          </li>
          <li>
            <img src={Bag} alt="" />
            <p>E-commerce</p>
            <img src={Action} alt="" />
          </li>
          <li>
            <img src={Chart} alt="" />
            <p>Pages</p>
            <img src={Action} alt="" />
          </li>
          <li>
            <img src={Discovery} alt="" />
            <p>Users</p>
          </li>
          <li>
            <img src={Wallet} alt="" />
            <p>Invoices</p>
            <img src={Action} alt="" />
          </li>
          <li>
            <img src={Document} alt="" />
            <p>Projects</p>
            <img src={Action} alt="" />
          </li>
          <li>
            <img src={Paper} alt="" />
            <p>Tasks</p>
            <img src={Action} alt="" />
          </li>
          <li>
            <img src={Calendar} alt="" />
            <p>Calendar</p>
          </li>
          <li>
            <img src={Lock} alt="" />
            <p>Authentication</p>
            <img src={Action} alt="" />
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
          <img src="" alt="" />
        </div>
        <div className="userDetails">
          {/*dynamic userdetails*/}
          <p className='username'>Jane Eyre</p>
          <p className='profession'>UX Designer</p>
        </div>
        <img src={ArrowList} alt="" />
      </div>
    </div>
  )
}

export default Sidebar
