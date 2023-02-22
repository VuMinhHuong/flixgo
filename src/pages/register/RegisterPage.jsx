import React, { useState } from 'react'
import "./RegisterPage.scss"
import logo from "../../assets/img/logo.svg"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginPage = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [warn, setWarn] = useState("")

  const handleSignUp = () => {
    let localData = JSON.parse(localStorage.getItem("data"));

    let userData = {
      name: name,
      email: email,
      pass: password,
    }

    console.log("name:", name, "email: ", email, "password: ", password);

    if (!name || !email || !password) {
      setWarn("warning")
    } else if(localData === null) {
      let localData = []
      localData.push(userData)
      localStorage.setItem("data", JSON.stringify(localData))
      toast.success("Đăng ký thành công!")
    } else {
      let check = localData.filter(e => e.email === email)
      if(check.length > 0) {
        toast.error("Tài khoản đã tồn tại !")
      } else {
        localData.push(userData)
        localStorage.setItem("data", JSON.stringify(localData))
        toast.success("Đăng ký thành công!")
      }
    }
  }

  const handleOnchangeName = (e) => {
    setName(e.target.value)
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
      <div className="email name"><input type="text" placeholder='Name' onChange={handleOnchangeName} value={name}/></div>
      <div className="email"><input type="email" placeholder='Email' onChange={handleOnchangeEmail} value={email}/></div>
      <div className="password email"><input type="Password" placeholder='Password' onChange={handleOnchangePass} value={password}/></div>
      <div className={warn}>Wrong email or password !</div>
      <div className="remenber">
        <input className='check-box' type="checkbox" />
        <span>I agree to the Privacy Polyci</span>
      </div>
      <button className='btn-si' onClick={handleSignUp}>SIGN UP</button>
      <div className="sing-up">
        <div className="first">Already have an account ?</div>
        <div className="second">Sing in!</div>
      </div>
    </div>
  )
}

export default LoginPage
