import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { useSelector } from 'react-redux'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import 'react-toastify/dist/ReactToastify.css'
import Sidebar from './components/Sidebar'
import Task from './pages/Task'
import Profile from './pages/Profile'
import Mylearning from './pages/Mylearning'

// const { studentData, isLoading, isSuccess, isError, message } = useSelector(state => state.studentAuth)
const studentData = localStorage.getItem('student')
// console.log(studentData);

function App() {
  return (
    <>
      <Router>
        {studentData ? <Navbar /> : ""}
        <div className="main-container">
          <div className="sidebar">
            <Sidebar />
          </div>
          <div className="mainArea">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/task' element={<Task />} />
              <Route path='/mylearning' element={<Mylearning />} />
              <Route path='/profile' element={<Profile />} />
            </Routes>
          </div>
        </div>
      </Router>
      <ToastContainer />
    </>
  )
}

export default App
