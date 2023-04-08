import './App.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { motion, useAnimationControls } from "framer-motion";
let person = {
  name: "",
  email: "",
  password: "",
  bionic: null,
  reading: null,
  color: "",
  topics: []
}
let section = 1;
export default function Form() {
  const section1 = useAnimationControls()
  const section2 = useAnimationControls()
  const section3 = useAnimationControls()
  const section4 = useAnimationControls()
  const section5 = useAnimationControls()
  const section6 = useAnimationControls()
  const section7 = useAnimationControls()
  const section8 = useAnimationControls()
  const variants = {
    hidden: { opacity: 0, transition: { duration: 0.75 } },
    visible: { opacity: 1, display: 'flex', transition: { duration: 0.75 } }
  };
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
          <div className="error-box rounded-lg">
                <img src="src/warning.png" class="warning"></img>
                <p class="error">Invalid. Please try again.</p>
              </div>
          <div className="box">

            <motion.div
              className="section"
              id="section-1"
              variants={variants}
              animate={section1}
              exit={{ 'display': 'none' }}
            >
              <h2>Let's start with a simple quiz about <span className="underline">you</span>.</h2>

            </motion.div>
            {/*wait a minute  is the motion div the animation?*/}

            <motion.div
              className="section"
              id="section-2"
              variants={variants}
              style={{ 'display': 'none' }}
              animate={section2}
              initial="hidden"
              exit={{ 'display': 'none' }}
            >
              
              <h2 className="mb-10">
                Name
              </h2>

              <input type="text" name="name" className="border-2 border-black rounded-full" />
            </motion.div>


            <motion.div className="section" id="section-3" variants={variants}
              style={{ 'display': 'none' }}
              animate={section3}
              exit={{ 'display': 'none' }}
              initial="hidden">
              {/*<h2>What's your...?</h2>*/}
              <h2 className="mb-10">
                Email
              </h2>
              <input type="text" name="email" className="border-2 border-black rounded-full" />
            </motion.div>

            <motion.div className="section" id="section-4" variants={variants}
              style={{ 'display': 'none' }}
              animate={section4}
              initial="hidden"
            >
              {/*<h2>What's your...?</h2>*/}
              <h2 className="mb-10">
                Password
              </h2>
              <input type="text" name="password" className="border-2 border-black rounded-full" />
            </motion.div>

            <motion.div className="section" id="section-5" variants={variants}
              style={{ 'display': 'none' }}
              animate={section5}
              initial="hidden">
              <h2 className="mb-10">Which paragraph do you think is easier to read</h2>
              <div className="paragraphs">
                <input type="radio" value={true} name="bionic" id="bionic" />
                <label htmlFor="bionic" className="border-2 border-black rounded">
                  <img src="/src/bionic.png"></img>
                </label>

                <input type="radio" value={false} name="bionic" id="bionic" />
                <label htmlFor="nobionic" className="border-2 border-black rounded">
                  <img src="/src/nobionic.png"></img>
                </label>

              </div>
            </motion.div>

            <motion.div className="section" id="section-6" variants={variants}
              style={{ 'display': 'none' }}
              animate={section6}
              initial="hidden">
              <h2 className="mb-10">How do you learn better</h2>
              <div className="paragraphs">
                <input type="radio" value={true} name="reading" id="read" />
                <label htmlFor="read" className="border-2 border-black rounded-full">
                  Reading
                </label>

                <input type="radio" value={false} name="reading" id="watch" />
                <label htmlFor="watch" className="border-2 border-black rounded-full">
                  Watching
                </label>

              </div>

            </motion.div>

            <motion.div className="section" id="section-7" variants={variants}
              style={{ 'display': 'none' }}
              animate={section7}
              initial="hidden">
              <h2 className="mb-10">What color do you prefer?</h2>

              <input type="radio" value="green" name="color" id="green" />
              <label htmlFor="green" className="border-2 border-black rounded-full">
                Green
              </label>

              <input type="radio" value="blue" name="color" id="blue" />
              <label htmlFor="blue" className="border-2 border-black rounded-full">
                Blue
              </label>

              <input type="radio" value="pink" name="color" id="pink" />
              <label htmlFor="pink" className="border-2 border-black rounded-full">
                Pink
              </label>
            </motion.div>


            {/* SECTION 8 STARTSS */}
            <motion.div className="section" id="section-8" variants={variants}
              style={{ 'display': 'none' }}
              animate={section8}
              initial="hidden">

              <h2 className="mb-10">What topics are you interested in?</h2>

              <div className="top-box">
                <ul className="items-center w-full text-sm font-medium text-black bg-white border border-gray-300 rounded-lg sm:flex dark:bg-gray-200 dark:border-gray-300 dark:text-white">

                  <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-300">
                    <div className="flex items-center pl-3">
                      <input id="gardening" type="checkbox" value="gardening" className="w-4 h-4 text-blue-300 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-300 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                      <label for="gardening" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-black">Gardening</label>
                    </div>
                  </li>

                  <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-300">
                    <div className="flex items-center pl-3">
                      <input id="cooking" type="checkbox" value="cooking" className="w-4 h-4 text-blue-300 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                      <label for="cooking" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-black">Cooking</label>
                    </div>
                  </li>

                  <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-300">
                    <div className="flex items-center pl-3">
                      <input id="sports" type="checkbox" value="sports" className="w-4 h-4 text-blue-300 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                      <label for="sports" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-black">Sports</label>
                    </div>
                  </li>

                  <li className="w-full dark:border-gray-600">
                    <div className="flex items-center pl-3">
                      <input id="reading" type="checkbox" value="reading" className="w-4 h-4 text-blue-300 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                      <label for="reading" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-black">Reading</label>
                    </div>
                  </li>
                </ul>
              </div>


              <div className="bottom-box">
                <ul className="items-center w-full text-sm font-medium text-black bg-white border border-gray-300 rounded-lg sm:flex dark:bg-gray-200 dark:border-gray-300 dark:text-white">
                  <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-300">
                    <div className="flex items-center pl-3">
                      <input id="painting" type="checkbox" value="painting" className="w-4 h-4 text-blue-300 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-300 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                      <label for="painting" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-black">Painting</label>
                    </div>
                  </li>

                  <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-300">
                    <div className="flex items-center pl-3">
                      <input id="videogames" type="checkbox" value="videogames" className="w-4 h-4 text-blue-300 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                      <label for="videogames" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-black">Video Games</label>
                    </div>
                  </li>

                  <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-300">
                    <div className="flex items-center pl-3">
                      <input id="music" type="checkbox" value="music" className="w-4 h-4 text-blue-300 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                      <label for="music" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-black">Music</label>
                    </div>
                  </li>

                  <li className="w-full dark:border-gray-600">
                    <div className="flex items-center pl-3">
                      <input id="fashion" type="checkbox" value="fashion" className="w-4 h-4 text-blue-300 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                      <label for="fashion" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-black">Fashion</label>
                    </div>
                  </li>
                </ul>
              </div>

            </motion.div>
            {/* SECTION 8 STARTSS */}




            <button type="submit" className="transition-all duration-500 bg-neutral-900 hover:bg-neutral-600 text-white font-bold button rounded-full mt-10	" id="nextButton" onClick={next}>Next</button>

          </div>
        </body>
      </html>
    </motion.main>


  );


  function next() {
      console.log(section)
    if (section < 5 && section != 1) {
      person[$('input[type=text]').toArray()[section-2].name] = $('input[type=text]').toArray()[section-2].value
    } else if (section >= 4) {
      $('input[type=radio]:checked').toArray().forEach(e => {
        person[e.name] = e.value
      })
    } else {
      $('input[type=checkbox]:checked').toArray().forEach(e => {
        console.log(e)
        person.topics.push(e.value)
    })
    }
    Array.from(document.querySelectorAll('.section')).forEach(f => f.style.display = 'none')
    document.getElementById("nextButton").disabled = true;
    setTimeout(function() { document.getElementById("nextButton").disabled = false }, 1000);
    if (section != 8) {
      const sectionCurrent = document.getElementById("section-" + (section))
      sectionCurrent.style.display = 'none'

      eval('section' + (section + 1)).start('visible')
      section++
    }
  }
}









/*
const Data = [
  {
    question1: "What is your... ",
    answer1: [
      "Name",
      "Email",
      "Password",

    question2: "Which paragraph do you think is easier to read",
    answer2: [
      "paragraph1",
      "paragraph2"


 }

*/

// <input type="submit" value="Submit" />