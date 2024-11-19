import React from 'react'
import "./Title.css"
import Search from "/src/assets/Search.svg"
import bell from "/src/assets/bell.svg"
import Hand from "/src/assets/Hand.png"

function Title() {
    return (
        <div className='titleContainer'>
            <div className="header">
                <h5 className='username'>Hi Jane Eyre,</h5> {/*dynamic username user.username */}
                <div className='welcome'>
                    <h2>Welcome back&nbsp;</h2>
                    <img src={Hand} alt="" />
                </div>
            </div>
            <div className='sn'>
                <div className="searchBar">
                    <img src={Search} alt="" />
                    <input type="text" placeholder='Search' />
                </div>
                <div className="notification">
                    <img src={bell} alt="" />
                    <div className="notificationCount">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Title
