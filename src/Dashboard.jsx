import './App.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Form from './Form'
import { motion } from "framer-motion";

/* SIDE BAR COMPONENT STAAAAAARTS */


class SideBar extends React.Component {
  render() {
    return (
      
      /*drawer init and show*/
    <div className="text-center">
      <button className="navigationBTN text-white bg-grey-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" type="button" data-drawer-target="drawer-navigation" data-drawer-show="drawer-navigation" aria-controls="drawer-navigation">
   Show navigation
      </button>
    </div>

        {/* drawer component */}
    <div id="drawer-navigation" className="fixed top-0 left-0 z-40 w-64 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white dark:bg-gray-800" tabindex="-1" aria-labelledby="drawer-navigation-label">
        <h5 id="drawer-navigation-label" className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">My Notes</h5>
        <button type="button" data-drawer-hide="drawer-navigation" aria-controls="drawer-navigation" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" >
          <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        <span className="sr-only">Close menu</span>
    </button>

      
  <div className="py-4 overflow-y-auto">
      <ul className="space-y-2 font-medium" id="note-list">
        { /* ADD NOTES HERE */}
          <Note 
            haveNotes = {false}
            />
      </ul>
      <div class="sign out">
        <p>Sign out</p>
      </div>
    
   </div>
</div>
      
    )
  }
}

function Note({ name }) {
  if (haveNotes) {
    return <li id="note">
            <button className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              {/* HERE SHOULD BE THE NOTE NAME */}
            </button>
         </li> ;
  }
  return <h3 className="noSaved">You have no saved notes</h3>;  /* if theres no saaved notes: */
}


/* SIDE BAR COMPONENT EEEEEEEEEENDS */


/* TOOOOOOL BOX COMPONENT STARTS */
<div className="tool-box">
  
</div>



/* TOOOOOOL BOX COMPONENT EEEENDS */





export default function Dashboard() {
  
  return (
      <html>
        <head>
        </head>
        <body>
          <SideBar/>
        </body>
      </html >
  );
}



