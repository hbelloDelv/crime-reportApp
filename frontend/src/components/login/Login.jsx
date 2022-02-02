import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { FaUserAstronaut } from 'react-icons/fa'
import './login.css'


export default function Login() {
    // const [password, setPassword] = useState("")
    const [error, setError] = useState(false)

        const [signIn, setSignIn] = useState({
            userName: "",
            password: ""
        })


        const handleChange = (e) =>{
            const {name, value } = e.target;
            setSignIn(prevSignIn =>{
                return{
                    ...prevSignIn,
                    [name]: value
                }
            })
        }
    
        const handleSubmit = async (e) =>{
            e.preventDefault();
                try {
                    const adminLogin ={
                        userName: signIn.userName,
                        password: signIn.password
                        }    
                  const res = await  axios.post('http://localhost:5000/user/login', adminLogin);
                  res.data && window.location.replace("/reports")
                } catch (err) {
                    setError(true)
                }
        }

    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="login-img">
                    <p>Welcome Admin</p>
                    <FaUserAstronaut className="loginIcon" />
                </div>
                <form className="loginForm" onSubmit={handleSubmit}>
                        <label>Username</label>
                        <input type="text" 
                                value={signIn.userName}
                                onChange={handleChange}
                                // placeholder="Enter username..." 
                                name="userName"
                                autoComplete="off"
                                required={true}
                                className="loginInput"/>
                  
                        <label>Password</label>
                        <input type="password" 
                                value={signIn.password}
                                onChange={handleChange}
                                // placeholder="Enter password..." 
                                name="password"
                                autoComplete="off"
                                required={true}
                                className="loginInput"/>
                        
                        <button className="loginBtn">Login</button>
                </form>
                <div className="forgetPassword">
                    <p> <Link className="link">Forget Password?</Link> <br /><span><Link to="/register" className="link">Register new admin</Link></span></p>
                </div>
            </div>
        </div>
    )
}
