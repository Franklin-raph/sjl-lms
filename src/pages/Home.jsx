import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loginStudent, reset } from '../redux/studentAuthSlice'
import loadingGif from '../assets/images/loading2.gif'
import { toast } from 'react-toastify'

const Home = () => {
    const [email, setEmail] = useState("igboekwulusifranklin@gmail.com");
    const [password, setPassword] = useState("123456")
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { studentData, isLoading, isSuccess, isError, message } = useSelector(state => state.studentAuth)

    useEffect(() => {
        if (isError) {
            toast.error("Invalid login credentials !!!!")
        }

        if (studentData === false) {
            toast.error("Invalid login credentials", {
                toastId: "1234"
            })
            navigate('/')
        }

        if (isSuccess || studentData) {
            navigate('/dashboard')
        }

        dispatch(reset())

    }, [studentData, message, dispatch, navigate, isSuccess, isError])

    const handleStudentLogin = (e) => {
        e.preventDefault();
        dispatch(loginStudent({
            email, password
        }))
    }

    return (
        <div id="signupmodal">
            {isLoading ? (
                <div className="loaderContainer">
                    <img src={loadingGif} alt="" className="loadingGif" />
                </div>) :
                // (<div className="error">
                //     <p>Please Validate all fields</p>
                //     <i className="ri-close-circle-line closeErrorModal"></i>
                // </div>)

                (<form className="singInForm" onSubmit={handleStudentLogin}>
                    <input type="text" className="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} />
                    <input type="password" className="email pass" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} />
                    <input type="submit" value="Sign In" className="signup" />
                </form>)
            }
        </div>
    )
}

export default Home