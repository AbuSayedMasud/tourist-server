// log in form
import React from 'react';
import { Link,useLocation,useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';



import './LogIn.css'
const LogIn = () => {
    const { signInUsingGoogle, handleEmail, handlePassword, error, processLogIn } = useAuth();
const location =useLocation();
const redirect_uri =location.state?.from|| '/home';
const history=useHistory()
const handleGoogleLogIn=()=>
{
    signInUsingGoogle()
    .then(result => {
       history.push(redirect_uri)
    })
   
}

    return (
        <div className="my-5 container ">
            <div className="form-container">
                <div className="row justify-content-center">
                    <div className="col-12 col-sm-8 col-md-6">
                        <form className="" onSubmit={processLogIn}>
                            <h3 className="fs-2 fw-bolder text-info">Login Form</h3>
                            <div className="row mb-3">
                                <label htmlFor="inputEmail3" className="text-start col-form-label">Email</label>
                                <div className="col-sm-10">
                                    <input onBlur={handleEmail} type="email" className="form-control" id="inputEmail3" />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label htmlFor="inputPassword3" className="text-start col-form-label">Password</label>
                                <div className="col-sm-10">
                                    <input onBlur={handlePassword} type="password" className="form-control" id="inputPassword3" />
                                </div>
                            </div>


                            <button type="submit" className="btn btn-primary d-block text-start ">Sign in</button>
                            <p className="text-danger">{error}</p>
                            <p className="text-danger text-start mt-2">Or</p>


                        </form>

                        <button onClick={handleGoogleLogIn} className="btn btn-primary d-block text-start mt-2">Google login
                        </button>
                        <p>New to Travele? <Link to="/registration">Register</Link></p>
                    </div>



                </div>
            </div>
        </div>
    );
};

export default LogIn;