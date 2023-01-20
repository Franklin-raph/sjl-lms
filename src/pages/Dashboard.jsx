import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logoutStudent, reset } from '../redux/studentAuthSlice'

const Dashboard = () => {
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
        <div>
            <h2>Dashboard</h2>
            <button onClick={handleStudentLogout}>Logout</button>
            <input type="text" />
        </div>
    )
}

export default Dashboard