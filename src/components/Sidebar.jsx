import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className='sideBarItems'>
            <Link to={'/dashboard'}>
                <i className="ri-dashboard-fill"></i>
                <p>Home</p>
            </Link>
            <Link to={'/profile'}>
                <i className="ri-user-fill"></i>
                <p>Profile</p>
            </Link>
            <Link to={'/mylearning'}>
                <i className="ri-book-fill"></i>
                <p>My Learning</p>
            </Link>
            <Link to={'/task'}>
                <i className="ri-code-fill"></i>
                <p>Tasks</p>
            </Link>
        </div>
    )
}

export default Sidebar