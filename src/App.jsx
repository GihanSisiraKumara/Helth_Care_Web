import React from 'react'
import About from './components/About'
import Home from './components/Home'
import Navibar from './components/Navibar'

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
      </main>
    </>
  )
}

export default App
