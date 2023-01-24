import { useState } from 'react'
import Header from './components/Header'
import Info from './components/Info'
import Service from './components/Service'
import './App.css'
import Client from './components/Client'
import Footer from './components/Footer'
import 'react-multi-carousel/lib/styles.css';
function App() {

  //      <Info />
  return (
    <div className="App">

      <Header />
      <Info className='header' />
      < Service />
      <Client />
      <Footer />

    </div>
  )
}

export default App
