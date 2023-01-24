import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
    const { studentData, isLoading, isSuccess, isError, message } = useSelector(state => state.studentAuth)

    const [first_name, setFirst_name] = useState(studentData ? studentData.user_data.first_name : "")
    const [last_name, setLast_name] = useState(studentData ? studentData.user_data.last_name : "")
    const [email, setEmail] = useState(studentData ? studentData.user_data.email : "")
    const [phone_numuber, setPhone_numuber] = useState("")
    const [github_repo, setGithub_repo] = useState("")
    const [linkedln_profile, setLinkedln_profile] = useState("")

    const naviate = useNavigate()
    useEffect(() => {
        if (studentData === null) {
            naviate('/')
        }
    }, [])

    return (
        <form className="bg-white p-5 mx-auto w-full md:w-3/4 lg:w-2/4 rounded mt-9 signUpForm">
            <h1 className="text-center text-xl">Profile Update</h1>
            <label className="block my-7">
                <span>First Name</span>
                <input type="text" value={first_name} className="focus:outline-none" />
            </label>
            <label className="block my-7">
                <span>Last Name</span>
                <input type="text" value={last_name} className="focus:outline-none" />
            </label>
            <label className="block my-7">
                <span>Email</span>
                <input type="text" disabled value={email} className="rounded-md py-2 px-2 hover:cursor-not-allowed focus:outline-none text-sm w-full text-slate-400 bg-slate-100" />
            </label>
            <label className="block my-7">
                <span>Phone Number</span>
                <input type="number" className="focus:outline-none" />
            </label>
            <label className="block my-7">
                <span>Github Account</span>
                <input type="text" className="focus:outline-none" />
            </label>
            <label className="block my-7">
                <span>Linkedln Profile</span>
                <input type="text" className="focus:outline-none" />
            </label>
            <input type="submit" value="Update" className="successBtn" />
        </form>
    )
}

export default Profile