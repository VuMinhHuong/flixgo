import React, { useState } from 'react'
import "./NewItemTop.scss"
import newItemTop_1 from "../../assets/img/newItemTop-1.jpg"

const NewItemTop = () => {
    const [display, setDisplay] = useState("")

    const handleonMouseEnter = () => {
        setDisplay("bru-over")
    }

    const handleonMouseLeave = () => {
        setDisplay("")
    }

  return (
    <div className='new-item-top'>
        <div className="img" onMouseEnter={handleonMouseEnter} ><img src={newItemTop_1} alt="newItemTop_1"/></div>
        <div className={`cover-img ${display}`} onMouseLeave={handleonMouseLeave}>
            <div className="ion-icon"><ion-icon name="play-circle-outline"></ion-icon></div>
        </div>
        <div className="new-item-top-main-title">Whitney</div>
        <div className="type">
            <div className="type-film">Romace,</div>
            <div className="type-type">Drame</div>
        </div>
        <div className="rate">
            <div className="rate-start"><ion-icon name="star"></ion-icon></div>
            <div className="rate-number">6.3</div>
        </div>

    </div>
  )
}

export default NewItemTop
