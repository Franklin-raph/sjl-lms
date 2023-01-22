import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Task = () => {

    const naviate = useNavigate()
    const { studentData, isLoading, isSuccess, isError, message } = useSelector(state => state.studentAuth)

    useEffect(() => {
        if (studentData === null) {
            naviate('/')
        }
    }, [])

    return (
        <div>Task</div>
    )
}

export default Task