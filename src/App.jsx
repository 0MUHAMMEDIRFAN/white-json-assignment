import Dashboard from './Pages/Dashboard'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Ecommerse from './Pages/Ecommerse'
import Pages from './Pages/Pages'
import Users from './Pages/Users'
import Projects from './Pages/Projects'
import Tasks from './Pages/Tasks'
import Authentication from './Pages/Authentication'
import { useEffect, useState } from 'react'
import Home from './Pages/Home'
import Login from './Login/Login'

function App() {
  const [user, setUser] = useState()
  useEffect(() => {

    setUser("hi")
    if (user) {
      console.log("here")
    }
  })

  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Route exact path='/' element={<Home />} /> */}
          {/* <Route exact path='/Login' element={<Login/>} /> */}
          <Route path='/' element={<Dashboard />} />
          {/* <Route path='/dashboard' element={<Dashboard />} /> */}
          <Route path='/ecommerse' element={<Ecommerse />} />
          <Route path='/pages' element={<Pages />} />
          <Route path='/users' element={<Users />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/tasks' element={<Tasks />} />
          <Route path='/authentication' element={<Authentication />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
