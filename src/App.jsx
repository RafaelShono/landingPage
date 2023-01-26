import { useState } from 'react'
import Header from './components/Header'
import Info from './components/Info'
import Service from './components/Service'
import './App.css'
import Client from './components/Client'
import Footer from './components/Footer'
import 'react-multi-carousel/lib/styles.css';
import Zoom from 'react-reveal/Zoom';
function App() {

  //      <Info />
  return (
    <div className="App">
      <Zoom>
        <Header />
      </Zoom>
      <Zoom>
        <Info className='header' />
      </Zoom>
      <Zoom>
        < Service />
      </Zoom>
      <Zoom>
        <Client />
      </Zoom>
      <Zoom>
        <Footer />
      </Zoom>

    </div>
  )
}

export default App
