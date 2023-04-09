import './App.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Form from './Form'
import { motion } from "framer-motion";

export default function Home() {
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
            <Link className="transition-all duration-500 bg-neutral-900 hover:bg-neutral-700 text-white font-bold button rounded-full mt-10" to="/start">Start</Link>
          </div>
        </body>
      </html >

    </motion.main>
  );
}

