import React from 'react'
import About from './components/About'
import Doctors from "./components/Doctors"
import Home from './components/Home'
import Navibar from './components/Navibar'
import Services from './components/Services'

const App = () => {
  return (
    <>
      <Navibar />
      <main>
        <div id='home'>
          <Home />
        </div>
        <div id='about'>
          <About />
        </div>

        <div id='services'>
          <Services />
        </div>
        <div id='doctors'>
          < Doctors />
        </div>


      </main>
    </>
  )
}

export default App
