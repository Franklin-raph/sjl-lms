import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { logoutStudent, reset } from '../redux/studentAuthSlice'

const Navbar = () => {

    const { studentData, isLoading, isSuccess, isError, message } = useSelector(state => state.studentAuth)
    const dispatch = useDispatch()
    const naviate = useNavigate()
    console.log(studentData)

    useEffect(() => {
        if (studentData === null) {
            naviate('/')
        }
    }, [])

    function handleStudentLogout() {
        dispatch(logoutStudent())
        dispatch(reset())
        // location.reload()
    }

    return (
        <div className="nav">
            <div className=''>
                <i className="ri-code-box-fill"></i>
                <Link to='/'>Scholars</Link>
            </div>
            <h4>Welcome Back, {studentData ? studentData.user_data.first_name : ""} </h4>
            <div className=''>
                <i className="ri-notification-4-fill"></i>
                <button onClick={handleStudentLogout}>Logout</button>
            </div>
        </div>
    )
}

export default Navbar