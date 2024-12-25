import { useState } from 'react'


import Navbar from './components/Navbar'
import Login from './components/Login'
import Register from './components/Register'
import BarChart from './components/BarChart'
import { Doughnut } from 'react-chartjs-2'
import DoughnutChart from './components/DoughnutChart'
import Dashboard from './components/Dashboard'
import AddAccount from './components/AddAccount'
import Home from './pages/Home'
function App() {
  

  return (
    <>
      <Navbar/>
      <Home/>
      {/* <AddAccount/> */}
      {/* <Dashboard/> */}
      {/* <Login/> */}
      {/* <Register/> */}
      {/* <BarChart/>
      <DoughnutChart/> */}
    </>
  )
}

export default App
