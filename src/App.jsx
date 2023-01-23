import { useState } from 'react'
import Header from './components/Header'
import Info from './components/Info'
import Service from './components/Service'
import './App.css'
import Client from './components/Client'

function App() {

  //      <Info />
  return (
    <div className="App">

      <Header />
      <Info className='header' />
      < Service />
      <Client />
    </div>
  )
}

export default App
