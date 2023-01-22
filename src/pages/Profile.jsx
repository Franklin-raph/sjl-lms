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
        <form className="bg-white p-5 mx-auto w-3/6 rounded mt-9">
            <h1 className="text-center text-xl">Profile Update</h1>
            <label className="block my-7">
                <span className="block text-sm font-medium text-slate-700 pb-2">First Name</span>
                <input type="text" value={first_name} className="rounded-md py-2 px-2 focus:outline-none text-sm w-full bg-slate-100" />
            </label>
            <label className="block my-7">
                <span className="block text-sm font-medium text-slate-700 pb-2">Last Name</span>
                <input type="text" value={last_name} className="rounded-md py-2 px-2 focus:outline-none text-sm w-full bg-slate-100" />
            </label>
            <label className="block my-7">
                <span className="block text-sm font-medium text-slate-700 pb-2">Email</span>
                <input type="text" disabled value={email} className="rounded-md py-2 px-2 hover:cursor-not-allowed focus:outline-none text-sm w-full text-slate-400 bg-slate-100" />
            </label>
            <label className="block my-7">
                <span className="block text-sm font-medium text-slate-700 pb-2">Phone Number</span>
                <input type="number" className="rounded-md py-2 px-2 focus:outline-none text-sm w-full bg-slate-100" />
            </label>
            <label className="block my-7">
                <span className="block text-sm font-medium text-slate-700 pb-2">Github Account</span>
                <input type="text" className="rounded-md py-2 px-2 focus:outline-none text-sm w-full bg-slate-100" />
            </label>
            <label className="block my-7">
                <span className="block text-sm font-medium text-slate-700 pb-2">Linkedln Profile</span>
                <input type="text" className="rounded-md py-2 px-2 focus:outline-none text-sm w-full bg-slate-100" />
            </label>
            <input type="submit" value="Update" className="py-2 px-4 rounded bg-green-500 text-white" />
        </form>
    )
}

export default Profile