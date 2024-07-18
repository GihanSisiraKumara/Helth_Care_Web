import React from 'react'
import About from './components/About'
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
      </main>
    </>
  )
}

export default App
