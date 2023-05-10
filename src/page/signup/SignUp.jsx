import React from 'react';
import log from '../../assets/images/login/login.svg'
import { Link } from 'react-router-dom';

const SignUp = () => {

    const handleSignUp = event =>{
        event.preventDefault()

        const form = event.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password)
    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className=" mr-5 w-1/2">
                    <img src={log} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-5xl font-bold text-center">SignUp now!</h1>
                        <form onSubmit={handleSignUp}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' required placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' required placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>
                        <p className='text-center'>Already have an account? Please <Link className='text-orange-400 font-bold' to={'/login'}>Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;