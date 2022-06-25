import React, { useState } from 'react'
import "./Styles.scss";
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../Navbar/Navbar';
import MenuIndex from '../Menu/MenuIndex';
import Footer from '../Footer/Footer';
import Image from '../Image/Image';
import TopMenu from '../TopMenu/TopMenu';
// import axios from 'axios';
const Index = () => {
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    });
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    };


    const validate = (values) => {
        const errors = {}
        
        if (!values.firstName) {
          errors.firstName = "First Name is required";
        }
        if (!values.lastName) {
          errors.lastName = "Last Name is required";
        }
        if (!values.userName) {
          errors.userName = "User Name is required";
        }
        if (!values.password) {
          errors.password = "Password is required";
        }
        if (values.password !== values.confirmPassword) {
          errors.confirmPassword = "Password is not match";
        }
        return errors;
      }

    const [formError, setFormError] = useState({});
    const handleSubmit = async (e) => {
        e.preventDefault();
        // setFormError(validate(data))  
        const newPerson = { ...data };

        await fetch("http://localhost:5000/users/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newPerson),
        })
            .catch(error => {
                window.alert(error);
                if (error.response &&
                    error.response.status >= 400 &&
                    error.response.status <= 500
                ) {
                    setError(error.response.data.message);
                }
                return;
            });

        setData({ firstName: "", lastName: "", email: "", password: "" });
        navigate("/Home");

        // try{
        //     const url = "http://localhost:5000/api/users";
        //     const{data:res} = await axios.post(url,data);
        //     navigate("/login");
        //     console.log(res.message);
        // }
        // catch(error){
        //     if(error.response && 
        //         error.response.status >= 400 &&
        //         error.response.status <= 500
        //         ){
        //             setError(error.response.data.message);
        //         }
        // }
    }
    return (
        <div className='signupTop'>
         <div className="signupTopmenu">
                <TopMenu />
            </div>
            <div className="homeContainer">
                <Navbar />
            </div>
            <div className="menuContainer">
                <MenuIndex />
            </div>
        <div className="signup_container">
            <div className="signup_form_container">
                <div className="left">
                    <h1>I have Account</h1>
                    <Link to="/signips">
                        <button type="button" className="white_btn">
                            Sign in
                        </button>
                    </Link>
                </div>
                <div className="right">
                    <form className="form_container" onSubmit={handleSubmit}>
                        <h1>Create Account</h1>
                        <input
                            type="text"
                            placeholder="First Name"
                            name="firstName"
                            value={data.firstName}
                            className="input"
                            onChange={handleChange}
                        />
                        {/* <p className='error_msg'>{formError.firstName}</p> */}
                        <input
                            type="text"
                            placeholder="Last Name"
                            name="lastName"
                            value={data.lastName}
                            className="input"
                            onChange={handleChange}
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            value={data.email}
                            className="input"
                            onChange={handleChange}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={data.password}
                            className="input"
                            onChange={handleChange}
                        />
                        {error && <div className="error_msg">{error}</div>}
                        <button type='submit' className="green_btn">
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>
        </div>
        <div className="image">
                <Image />
            </div>
            <div className="bottom2">
                <Footer />
            </div>
            <div className="footer3">Copyright &copy; 2022 Addiss Gafat Technology College</div>
        </div>
    )
}

export default Index
