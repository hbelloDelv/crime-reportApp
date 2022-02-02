import React, {useState, useEffect} from 'react';
import './registerform.css'
import { FaUser } from 'react-icons/fa';
import axios from 'axios';


const RegisterForm = () => {
    const [register, setRegister] = useState({
        firstName: "",
        lastName: "",
        forceNumber: "",
        phoneNumber: "",
        zoneAddress: "",
        email: "",
        userName: "",
        password: "",
    })

    const [error, setError] = useState(false)

    const handleChange = (e) =>{
        const {name, value } = e.target;
        setRegister(prevRegister =>{
            return{
                ...prevRegister,
                [name]: value
            }
        })
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();

        try {
            const newRegister ={
                firstName: register.firstName,
                lastName: register.lastName,
                forceNumber: register.forceNumber,
                phoneNumber: register.phoneNumber,
                zoneAddress: register.zoneAddress,
                email: register.email,
                userName: register.userName,
                password: register.password
                }
        
        //   const res = await  axios.post('http://localhost:5000/user/register', newRegister);
          const res = await  axios.post('user/register', newRegister);
          res.data && window.location.replace("/login")
        } catch (err) {
            setError(true)
        }

        
        
    }
    return (
        <div className="registerForm-wrapper">
            <div className="regform-container">
                <div className="left-section">
                    left section
                </div>
                <div className="right-section">
                    <div className="form-header">
                        <div>Create your account</div>
                        <div className="form-headerIcon">
                            <FaUser className="regIcon"/>
                        </div>
                        <div className="forAdmin">
                            For admin only
                        </div>
                    </div>
                    <div className="form-container">
                        <form onSubmit={handleSubmit}>
                            <div className="form-control">
                                <label className="labelFor">First name</label>
                                <input type="text" 
                                        name="firstName"
                                        value={register.firstName}
                                        onChange={handleChange}
                                        autoComplete="off"
                                        required="true"
                                        className="input-control"/>
                            </div>
                            
                            <div className="form-control">
                                <label className="labelFor">Last name</label>
                                <input type="text"
                                        name="lastName" 
                                        value={register.lastName}
                                        onChange={handleChange}
                                        autoComplete="off"
                                        required="true"
                                        className="input-control"/>
                            </div>
                            
                            <div className="form-control">
                                <label className="labelFor">Force number</label>
                                <input type="text" 
                                        name="forceNumber"
                                        value={register.forceNumber}
                                        onChange={handleChange}
                                        autoComplete="off"
                                        required="true"
                                        className="input-control"/>
                            </div>
                            
                            <div className="form-control">
                                <label className="labelFor">Phone number</label>
                                <input type="text" 
                                        name="phoneNumber"
                                        value={register.phoneNumber}
                                        onChange={handleChange}
                                        autoComplete="off"
                                        required="true"
                                        className="input-control" 
                                        placeholder="070655..."/>
                            </div>
                            
                            <div className="form-control">
                                <label className="labelFor">Zone address</label>
                                <input type="text" 
                                        name="zoneAddress"
                                        value={register.zoneAddress}
                                        onChange={handleChange}
                                        autoComplete="off"
                                        required="true"
                                        className="input-control"/>
                            </div>
                            
                            <div className="form-control">
                                <label className="labelFor">E-mail</label>
                                <input type="email" 
                                        name="email"
                                        value={register.email}
                                        onChange={handleChange}
                                        autoComplete="off"
                                        required="true"
                                        className="input-control"/>
                            </div>
                            
                            <div className="form-control">
                                <label className="labelFor">Username</label>
                                <input type="text" 
                                        name="userName"
                                        value={register.userName}
                                        onChange={handleChange}
                                        autoComplete="off"
                                        required="true"
                                        className="input-control"/>
                            </div>
                            
                            <div className="form-control">
                                <label className="labelFor">Password</label>
                                <input type="password" 
                                        name="password"
                                        value={register.password}
                                        onChange={handleChange}
                                        autoComplete="off"
                                        required="true"
                                        className="input-control"/>
                            </div>
                            <button className="regButton"> Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterForm
