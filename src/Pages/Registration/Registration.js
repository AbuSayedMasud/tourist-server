//  registation form

import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';



import '../LogIn/LogIn/LogIn.css'
const Registration = () => {

    const { handleRegister, handleEmail, handlePassword, error, handleName } = useAuth();
    return (
        <div className="my-5 container">

            <div class="row justify-content-center">
                <div className="col-12 col-sm-8 col-md-6">
                    <form className="form-container" onSubmit={handleRegister}>

                        <h3 className="fs-2 fw-bolder text-info">Register Form</h3>
                        <div class="row mb-3">
                            <label for="inputEmail3" class="text-start col-form-label">Name</label>
                            <div class="col-sm-10">
                                <input type="text" onBlur={handleName} class="form-control" id="inputEmail3" />
                            </div>
                        </div>
                        <div class="row mb-3">
                            <label for="inputEmail3" class="text-start col-form-label">Email</label>
                            <div class="col-sm-10">
                                <input type="email" onBlur={handleEmail} class="form-control" id="inputEmail3" />
                            </div>
                        </div>

                        <div class="row mb-3">
                            <label for="inputPassword3" class="text-start col-form-label">Password</label>
                            <div class="col-sm-10">
                                <input type="password" onBlur={handlePassword} class="form-control" id="inputPassword3" />
                            </div>
                        </div>

                        <p>{error}</p>
                        <button type="submit" class="btn btn-primary d-block text-start ">Register</button>
                        <p className="text-danger">Already have an Account? <Link to="/login">Login</Link></p>
                    </form>

                </div>

            </div>
        </div>
    );
};

export default Registration ;