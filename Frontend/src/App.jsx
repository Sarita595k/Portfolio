import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainContainer from './Components/Header/MainContainer'
import SolarSystem from './Components/Header/solarSystem'
import SubContainer from './Components/Header/SubContainer'

const App = () => {
  return (
    <>
      <MainContainer />
      <SolarSystem />
      <SubContainer />
    </>
  )
}

export default App
