import React from 'react'
import Navbar from '../../components/homePage/Navbar'
import "./Hompage.scss"

const Hompage = () => {
  return (
    <div className='homepage'>
        <div className="nav-comp">
            <div className="load"><Navbar/></div>
        </div>
    </div>
  )
}

export default Hompage
