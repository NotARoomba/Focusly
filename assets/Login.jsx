import './App.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Form from './Form'
import { motion } from "framer-motion";


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
          <div className="box">
            <h2 className="mb-10">Log In</h2>
            <label>Email</label>
            <input type="text" name="email" className="border-2 border-black rounded-full" />

            <label>Password</label>
            <input type="text" name="password" className="border-2 border-black rounded-full" />

            <button type="submit" className="bg-neutral-900 hover:bg-neutral-600 text-white font-bold button rounded-full mt-10	" id="loginButton">Log In</button>
          </div>
        </body>
      </html >

    </motion.main>
  );
}

