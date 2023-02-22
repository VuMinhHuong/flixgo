import React from 'react'
import "./Navbar.scss"

import logo from "../../assets/img/logo.svg"

const header = () => {

  return (
    <div className='nav-bar'>
        <div className="logo"><img src={logo} alt="logo" /></div>
        <div className="menu">
            <div className="menu-item">
                <div className="menu-item-title">HOME</div>
                <div className="menu-item-icon"><ion-icon name="chevron-down-outline"></ion-icon></div>
            </div>
            <div className="menu-item">
                <div className="menu-item-title">CATALOGUE</div>
                <div className="menu-item-icon"><ion-icon name="chevron-down-outline"></ion-icon></div>
            </div>
            <div className="menu-item">
                PRICING PLAN
            </div>
            <div className="menu-item">
                HELP
            </div>
            <div className="menu-item">
                ...
            </div>
        </div>
        <div className="right">
            <div className="search"><ion-icon name="search-outline"></ion-icon></div>
            <div className="language">EN</div>
            <button>SIGN IN</button>
        </div>
    </div>
  )
}

export default header
