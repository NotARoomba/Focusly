import './App.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Form from './Form'
import { motion } from "framer-motion";



/* DOCUMENT COMPONENT STARTS */
class NoteDoc extends React.Component {
  render() {
    return (
      <div className="document">
        <header className="doc-head">
          <h1 className="doc-h1">This is the topic</h1>
          <p className="doc-parag">This is information about the topic</p>
        </header>

        <div className="doc-body">
          <h2 className="doc-h2">This is a header2</h2>
          <p className="doc-parag">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has             been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into                     electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of                   Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus                 PageMaker including versions of Lorem Ipsum.
            </p>
          <p className="doc-parag">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has             been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into                     electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of                   Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus                 PageMaker including versions of Lorem Ipsum.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has             been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into                     electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of                   Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus                 PageMaker including versions of Lorem Ipsum.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has             been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into                     electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of                   Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus                 PageMaker including versions of Lorem Ipsum.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has             been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into                     electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of                   Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus                 PageMaker including versions of Lorem Ipsum.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has             been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into                     electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of                   Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus                 PageMaker including versions of Lorem Ipsum.
            </p>
        </div>
        
      </div>
    )
  }
}
/* DOCUMENT COMPONENT ENDS */


/* SIDE BAR COMPONENT STAAAAAARTS */


class SideBar extends React.Component {
  render() {
    return (
      <div className="sidebar rounded-lg drop-shadow-xl" id="sidebar">
        <div onClick={closeSide}><i className="closeSide lni lni-close" id="closeside"></i></div>
        
        <h2 className="myNotes">My Notes</h2>
        
        
        <ul>
          <li>
            <div className="note">
            <input type="radio" value="note1" name="notes" id="note1" />
              <label htmlFor="note1" className="rounded-full">
                This is the title
              </label>
            </div>

            <div className="note">
            <input type="radio" value="note2" name="notes" id="note2" />
              <label htmlFor="note2" className="rounded-full">
                This is the title
              </label>
            </div>
          </li>
        </ul>
      </div>
      
    )
  }
}

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
     
      <div className="tool-box rounded-full drop-shadow-xl">
        <ul>
          <li>
            <button id="highlight" onClick={highlight}>
              <i className="icon lni lni-highlight-alt rounded-full"></i>
            </button>
            
          </li>
          <li>
            <button id="save">
              <i className="icon lni lni-bookmark rounded-full"></i>
            </button>
          </li>
          <li>
            <button id="delete">
             <i className="icon lni lni-trash-can rounded-full"></i>
            </button>
          </li>
          <li>
            <button id="export">
             <i className="icon lni lni-save rounded-full"></i>
            </button>
          </li>
          <li>
            <button id="settings" onClick={CloseSettings}>
              <i className="icon lni lni-user rounded-full"></i>
            </button>
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

function CloseSettings(){
  const close = document.getElementById("userSettings")
  if(close.style.display == "flex"){
    close.style.display = "none"
  } else {
    close.style.display = "flex"
  }
  
}

function closeSide(){
  
 const side = document.getElementById("sidebar")
  const miniside = document.getElementById("miniside")

  if (side.style.visibility == "hidden") {
    miniside.style.visibility = "hidden"
    side.style.visibility = "visible"
  } else {
    miniside.style.visibility = "visible"
    side.style.visibility = "hidden"
    
  }
  
  
}


export default function Dashboard() {
  
  return (
      <html>
        <head>
        </head>
        <body>
          <section>
          <SideBar/>
          <NoteDoc/>
          <div className="miniside rounded-lg" id="miniside" onClick={closeSide}><i className="mini lni lni-plus rounded-lg"></i></div>
          <div id="userSettings" className="rounded-lg drop-shadow-xl">
            <h2>Settings</h2>
            <i className="close lni lni-close" onClick={CloseSettings}></i>
            <div className="setting-quest" id="sq1">
              <p className="mr-5 ml-2 font-semibold">Reading</p>
              <input type="radio" value="bionic" name="reading" id="bionic" />
              <label htmlFor="bionic" className="border-2 border-black rounded-full">
                <b>Bio</b>nic
              </label>

              <input type="radio" value="nonbionic" name="reading" id="nobionic" />
              <label htmlFor="nobionic" className="border-2 border-black rounded-full">
                Standard
              </label>
            </div>

            <div className="setting-quest">
              <p className="mr-5 ml-2 font-semibold">Color</p>
              <input type="radio" value="green" name="color" id="green" />
              <label htmlFor="green" className="border-2 border-black rounded-full">
                
              </label>

              <input type="radio" value="blue" name="color" id="blue" />
              <label htmlFor="blue" className="border-2 border-black rounded-full">
                
              </label>

              <input type="radio" value="pink" name="color" id="pink" />
              <label htmlFor="pink" className="border-2 border-black rounded-full">
                
              </label>
              
            </div>

            <div className="setting-quest" id="sq3">
              <p className="mr-5 ml-2 font-semibold">Mode</p>
              <input type="radio" value="light" name="mode" id="light" />
              <label htmlFor="light">
                <i className="text-4xl lni lni-sun mr-10 ml-8" id="lightmode"></i>
              </label>

              <input type="radio" value="dark" name="mode" id="dark" />
              <label htmlFor="dark">
                <i className="text-4xl lni lni-night" id="darkmode"></i>
              </label>
            </div>

            <button type="submit" className="transition-all duration-500 bg-neutral-900 hover:bg-neutral-600 text-white button rounded-full" id="nextButton">Save</button>
           
            
          </div>

            <footer>
          <ToolBar/>
          </footer>

          </section>

          

        </body>
      </html >
  );
}



