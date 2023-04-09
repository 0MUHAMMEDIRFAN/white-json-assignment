import React from 'react'
import "./Animation.css"
import Loading from "../../assets/LoadingAnimation.svg"
import { useNavigate } from 'react-router-dom'


function Animation() {
    const navigate = useNavigate()
    return (
        <div className='loadingContainer'>
            <div className="loading">
                <div className="image">
                    <img src={Loading} alt="" />
                </div>
                <div className="box"></div>
            </div>

            {/* remove this */}

            <button onClick={() => { navigate("/white-json/Login") }} className='gotoButton'>go to login page</button>
        </div>
    )
}

export default Animation
