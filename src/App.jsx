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
          <Route exact path='white-json/' element={<Home />} />
          <Route exact path='white-json/Login' element={<Login/>} />
          <Route path='white-json/dashboard' element={<Dashboard />} />
          <Route path='white-json/ecommerse' element={<Ecommerse />} />
          <Route path='white-json/pages' element={<Pages />} />
          <Route path='white-json/users' element={<Users />} />
          <Route path='white-json/projects' element={<Projects />} />
          <Route path='white-json/tasks' element={<Tasks />} />
          <Route path='white-json/authentication' element={<Authentication />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
