import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Login from './components/Login'
import Register from './components/Register'
import Dashboard from './components/Dashboard'
import Home from './pages/Home'

import { UserProvider } from './context/UserContext'
import { TransactionProvider } from './context/TransactionContext'
function App() {


  return (
    <>
      {/* <UserProvider>
        <TransactionProvider> */}
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </Router>
        {/* </TransactionProvider>
      </UserProvider> */}


    </>
  )
}

export default App
