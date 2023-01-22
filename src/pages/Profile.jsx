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
        <form className="bg-white p-5 mx-auto w-3/6 rounded mt-9">
            <h1 className="text-center text-xl">Profile Update</h1>
            <label className="block my-7">
                <span className="block text-sm font-medium text-slate-700 pb-2">First Name</span>
                <input type="text" className="rounded-md py-2 px-2 focus:outline-none text-sm w-full bg-slate-100" />
            </label>
            <label className="block my-7">
                <span className="block text-sm font-medium text-slate-700 pb-2">Last Name</span>
                <input type="text" className="rounded-md py-2 px-2 focus:outline-none text-sm w-full bg-slate-100" />
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