import './App.css'
import React from 'react'
import ReactDOM from 'react-dom/client'

export default function Form() {
  
  return (
    <div className="box">
      <div id="insidebox">
      <h2>Let's start with a simple quiz about <span className="underline">you</span>.</h2>
        
      <button className="button rounded-full" onClick={HideInside}>Ok!</button>
      </div>

      <div id="section2">
        <h2>What's your...?</h2>
        <form>
        <label>
          Name
        </label>
        <input type="text" name="name" className="border-2 border-black rounded-full"/>
          
        <label>
          Email
        </label>  
        <input type="text" name="name" className="border-2 border-black rounded-full"/>
        

        <button className="nextbutton rounded-full">Next</button>
       
      </form>
        
      </div>
      
    </div>

  );

  
  function HideInside(){
  const section1 = document.getElementById("insidebox")
  section1.style.display = 'none';
}
} 




function FormComponent() {
  return(
    <h1></h1>
  )
};

class FormComp extends React.Component{
  render() {
  return(
    <h1>d</h1>
  )}
}

// <input type="submit" value="Submit" />