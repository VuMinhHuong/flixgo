import React, { useState } from 'react'
import "./LoginPage.scss"
import logo from "../../assets/img/logo.svg"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginPage = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [warn, setWarn] = useState("")

  const handleSignIn = () => {
    console.log(email, password)
    let name = localStorage.getItem("name")

    let localData = JSON.parse(localStorage.getItem("data"));

    if (!email || !password) {
      setWarn("display")
    }
    // else if(localData === null) {
    //   let localData = []
    //   localData.push(userData)
    //   console.log("localData1111", localData)
    //   localStorage.setItem("data", JSON.stringify(localData))
    //   toast.success("Đăng ký thành công!")
    // }
    else {
      let checkEmail = localData.filter(e => e.email === email)
      let checkPassword = localData.filter(e => e.pass === password)
      if(checkEmail.length > 0 & checkPassword.length > 0) {
        toast.success("Đăng nhập thành công!")
        setWarn("")
      } else {
        setWarn("display")
      }
    }
  }

  const handleOnchangeEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleOnchangePass = (e) => {
    setPassword(e.target.value)
  }

  return (
    <div className='login-page'>
      <ToastContainer />
      <div className="logo"><img src={logo} alt="logo" /></div>
      <div className="email"><input type="email" placeholder='Email' onChange={handleOnchangeEmail} value={email} /></div>
      <div className="password email"><input type="Password" placeholder='Password' onChange={handleOnchangePass} value={password} /></div>
      <div className={`warning ${warn}`}>Wrong email or password !</div>
      <div className="remenber">
        <input className='check-box' type="checkbox" />
        <span>Remenber Me</span>
      </div>
      <button className='btn-si'onClick={handleSignIn} >SING IN</button>
      <div className="sing-up">
        <div className="first">Don't have an account ?</div>
        <div className="second">Sing up!</div>
      </div>
      <div className="forgot">Forgot password ?</div>
            
    </div>
  )
}

export default LoginPage
