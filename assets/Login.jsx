import './App.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Form from './Form'
import { motion } from "framer-motion";
const BACKEND_URL = "https://focusly-api.onrender.com"

function setCookie(key, value) {
  var expires = new Date();
  expires.setTime(expires.getTime() + (10 * 365 * 24 * 60 * 60 * 1000));
  document.cookie = key + '=' + value + ';expires=' + expires.toUTCString();
}

export default function Login() {
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
          <div id="errorBox" className="error-box rounded-lg">
            <img src="assets/img/warning.png" class="warning"></img>
            <p id="errorMsg" class="error">Invalid. Please try again.</p>
          </div>
          <div className="box">
            <h2 className="mb-10">Log In</h2>
            <label>Email</label>
            <input type="text" id="email" name="email" className="border-2 border-black rounded-full" />

            <label>Password</label>
            <input type="text" id="password" name="password" className="border-2 border-black rounded-full" />

            <button type="submit" className="bg-neutral-900 hover:bg-neutral-600 text-white font-bold button rounded-full mt-10" onClick="login" id="loginButton">Log In</button>
          </div>
        </body>
      </html >

    </motion.main>
  );
}
function login() {
  const user = {email: $('#email').get(0).value, password: $('#password').get(0).value}
     let data = await superagent.post(BACKEND_URL + "/user").send(user)
 if (data.body.text) {
          $('#errorMsg').get(0).innerText = data.body.text
          return $('#errorBox').get(0).style.visibility = 'visible'
        } else if ($('#errorBox').get(0).style.visibility == 'visible') {
          $('#errorBox').get(0).style.visibility = 'hidden'
        }
  setCookie("key", person.password)
  navigate("/dashboard");
  
}

