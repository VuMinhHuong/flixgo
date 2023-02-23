import React, { useState } from 'react'
import "./NewItemDown.scss"
import newItemTop_1 from "../../assets/img/newItemTop-1.jpg"

const NewItemDown= () => {
    const [display, setDisplay] = useState("")

    const handleonMouseEnter = () => {
        setDisplay("bru-over")
    }

    const handleonMouseLeave = () => {
        setDisplay("")
    }

  return (
    <div className='new-item-down'>

        <div className="left-item">
            <div className="img" onMouseEnter={handleonMouseEnter} ><img src={newItemTop_1} alt="newItemTop_1"/></div>
            <div className={`cover-img ${display}`} onMouseLeave={handleonMouseLeave}>
                <div className="ion-icon"><ion-icon name="play-circle-outline"></ion-icon></div>
            </div>
        </div>

        <div className="right-item">
            <div className="new-item-down-main-title">Whitney</div>
            <div className="type">
                <div className="type-film">Romace,</div>
                <div className="type-type">Drame</div>
            </div>
            <div className="rate">
                <div className="rate-start"><ion-icon name="star"></ion-icon></div>
                <div className="rate-number">6.3</div>
                <div className="rate-display">HD</div>
                <div className="rate-age">16+</div>
            </div>
            <div className="descript">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to ...
            </div>
        </div>

    </div>
  )
}

export default NewItemDown
