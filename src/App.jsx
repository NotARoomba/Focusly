import './App.css'
import React from 'react'
import ReactDOM from 'react-dom/client'

export default function App() {
  const title = "Welcome to Focusly"
  return (
    <div className="box">
      <h1>{title}</h1>
      <h2>Enjoy studying again</h2>
      <button className="button rounded-full" onClick="">Start</button>
    </div>
  );
} 



class FormComp extends React.Component{
  render() {
  return(
    <h1>d</h1>
  )}
}