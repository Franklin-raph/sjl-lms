import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { logoutStudent, reset } from '../redux/studentAuthSlice'

const Navbar = () => {

    const { studentData, isLoading, isSuccess, isError, message } = useSelector(state => state.studentAuth)
    const dispatch = useDispatch()
    const naviate = useNavigate()

    useEffect(() => {
        if (studentData === null) {
            naviate('/')
        }
    })

    function handleStudentLogout() {
        dispatch(logoutStudent())
        dispatch(reset())
    }

    return (
        <nav className="navbar navbar-light ">
            <div>
                <i className="ri-code-box-fill"></i>
                <Link to='/'>Scholars</Link>
            </div>
            <div>
                <i className="ri-notification-4-fill"></i>
                <button onClick={handleStudentLogout}>Logout</button>
            </div>
        </nav>
    )
}

export default Navbar