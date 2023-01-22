import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Profile = () => {

    const naviate = useNavigate()
    const { studentData, isLoading, isSuccess, isError, message } = useSelector(state => state.studentAuth)
    useEffect(() => {
        if (studentData === null) {
            naviate('/')
        }
    }, [])

    return (
        <div>Profilenujiu9iujiu9iouinyu8t 7               iuyiuiuiuni9;uj 98y7ltry7ft6stfyg u7y8yhiyupb88yuye5ejijiuijijiujijihihujgufyc</div>
    )
}

export default Profile