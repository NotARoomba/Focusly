import './App.css'
import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Link, useNavigate } from "react-router-dom";
import Form from './Form'
import { motion } from "framer-motion";

function setCookie(key, value) {
  var expires = new Date();
  expires.setTime(expires.getTime() + (10 * 365 * 24 * 60 * 60 * 1000));
  document.cookie = key + '=' + value + ';expires=' + expires.toUTCString();
}

function getCookie(key) {
  var keyValue = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
  return keyValue ? keyValue[2] : null;
}
let navigate = null

  function login() {
  if (getCookie("key") == null) {
    navigate("/login");
  }else {
    navigate("/dashboard")
  }
}
function signup() {
  if (getCookie("key") == null) {
    navigate("/start");
  } else {
    navigate("/dashboard")
  }
}

export default function Home() {
navigate = useNavigate();
  const title = "Welcome to Focusly"



  
  return (
    <motion.main
      className="main__container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.75 }}
    >

      <html>
        <head>
          <link rel="preconnect" href="https://rsms.me/"></link>
          <link rel="stylesheet" href="https://rsms.me/inter/inter.css" ></link>
        </head>
        <body>
          <div className="box">

            {/* logo ball lol */}
            <div className="bowl-container">
              <div id="bowlG">
                <div id="bowl_ringG">
                  <div className="ball_holderG">
                    <div className="ballG"></div>
                  </div>
                </div>
              </div>
            </div>

            <h1>{title}</h1>
            <h2>Enjoy studying again</h2>
            <button className="transition-all duration-500 bg-neutral-900 hover:bg-neutral-700 text-white font-bold button rounded-full mt-10" onClick={login}>Log In</button>
            <button className="transition-all duration-500 bg-neutral-900 hover:bg-neutral-700 text-white font-bold button rounded-full mt-5" onClick={signup}>Sign Up</button>
          </div>
        </body>
      </html >

    </motion.main>
  );
  

}
