import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
const Mylearning = () => {

    const naviate = useNavigate()
    const { studentData, isLoading, isSuccess, isError, message } = useSelector(state => state.studentAuth)
    useEffect(() => {
        if (studentData === null) {
            naviate('/')
        }
    }, [])

    return (
        <div>
            <h1>Mylearning</h1>
        </div>
    )
}

export default Mylearning