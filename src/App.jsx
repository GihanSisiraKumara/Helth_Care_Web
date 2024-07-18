import React from 'react'
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
      </main>
    </>
  )
}

export default App
