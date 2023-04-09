import './App.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Form from './Form'
import { motion } from "framer-motion";

/* SIDE BAR COMPONENT STAAAAAARTS */


/*class SideBar extends React.Component {
  render() {
    return (
    )
  }
}*/

/*function Note({ name }) {
  if (haveNotes) {
    return <li id="note">
            <button className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
               HERE SHOULD BE THE NOTE NAME
            </button>
         </li> ;
  }
  return <h3 className="noSaved">You have no saved notes</h3>;   if theres no saaved notes: 
} */




/* SIDE BAR COMPONENT EEEEEEEEEENDS */


/* TOOOOOOL BOX COMPONENT STARTS */
class ToolBar extends React.Component{
  render() {
    return(
      <div className="tool-box rounded-full">
        <ul>
          <li>
            <button id="highlight" onClick={highlight}>
              <i class="icon lni lni-highlight-alt rounded-full"></i>
            </button>
            
          </li>
          <li>
            <button id="save">
              <i class="icon lni lni-save"></i>
            </button>
          </li>
          <li>
            <button id="delete"></button>
          </li>
          <li>
            <button id="export"></button>
          </li>
          <li>
            <button id="settings"></button>
          </li>
        </ul>
      </div>
    )
  }
}



      /* HIGHLIGHTER FUNCTION */
      function highlight(){
          if (document.getSelection)
            //let highlightText = document.getSelection();
            highlightText.style.textDecoration = "underline";
            
      return document.getSelection();
          }

/* TOOOOOOL BOX COMPONENT EEEENDS */





export default function Dashboard() {
  
  return (
      <html>
        <head>
        </head>
        <body>
          <ToolBar/>
          




          
        </body>
      </html >
  );
}



