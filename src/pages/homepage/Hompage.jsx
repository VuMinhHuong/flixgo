import React, { useState } from 'react'
import Navbar from '../../components/homePage/Navbar'
import NewItemDown from '../../components/homePage/NewItemDown'
import NewItemTop from '../../components/homePage/NewItemTop'
import "./Hompage.scss"

const Hompage = () => {
  const [choseMenu, setChoseMenu] = useState("")

  const handChose = () => {
    setChoseMenu("border")
  }
  return (
    <div className='homepage'>
        <div className="nav-comp">
            <div className="load"><Navbar/></div>
        </div>
        <div className="new-item-top-container">
            <div className="main-title"><b>NEW ITEMS</b> OF THIS SEASON</div>
            <div className="new-item-top-comp">
              <NewItemTop/>
              <NewItemTop/>
              <NewItemTop/>
              <NewItemTop/>
            </div>
          </div>
          <div className="new-item-down-comp">
              <div className="menu-item">
                <div className="menu-item-top">New items</div>
                <div className="menu-item-down">
                  <span>NEW RELEASES</span>
                  <span>MOVIES</span>
                  <span>TV SERIES</span>
                  <span>CARTOONS</span>
                </div>
              </div>
              <div className="items">
                <NewItemDown/>
                <NewItemDown/>
                <NewItemDown/>
                <NewItemDown/>
                <NewItemDown/>
                <NewItemDown/>
              </div>
            </div>
            <div className="expect">
              <NewItemTop/>
              <NewItemTop/>
              <NewItemTop/>
              <NewItemTop/>
              <NewItemTop/>
              <NewItemTop/>
            </div>
    </div>
  )
}

export default Hompage
