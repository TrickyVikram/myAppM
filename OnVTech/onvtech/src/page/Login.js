

import { useState } from 'react';
import { Link, } from 'react-router-dom'

const Login = () => {

    const [form, setForm] = useState({});


    const handleForm = (e) => {


        setForm({
            ...form,
            [e.target.name]: e.target.value


        })

    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await fetch('http://localhost:4000/login', {
            method: 'POST',
            body: JSON.stringify(form),
            headers: {
                'Content-Type': 'application/json'
            }
        })







        console.log(response)

    }

    return (

        <div className='' style={{ minHeight: "100vh" }}>

            <div className="container my-5">
                <div className="card o-hidden border-0 shadow-lg my-5">
                    <div className="card-body p-0">

                        <div className="row">
                            <div className="col-lg-5 d-none d-lg-block" style={{
                                background: 'url("data:image/jpeg;base64,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")',
                                backgroundPosition: 'center',
                                backgroundSize: 'cover'

                            }}>
                            </div>
                            <div className="col-lg-7">
                                <div className="p-5">

                                    <div className="text-center">
                                        <h1 className="h4 text-gray-900 mb-4">Login to <div className='d-inline-block'></div>!</h1>
                                    </div>
                                    <form className="user" onSubmit={handleSubmit}  >

                                        <div className="form-group mb-3">
                                            <input type="email" className="form-control" name="username" required placeholder="username" autoCapitalize='off'
                                                onChange={handleForm}

                                            />
                                        </div>
                                        <div className="form-group mb-3">
                                            <input type="password" className="form-control" name="password" required placeholder="Password"
                                                onChange={handleForm}
                                            />
                                        </div>

                                        <div className="text-center">

                                            <input type="submit" className="btn btn-success mb-3" value="Login" />
                                        </div>
                                        <hr />
                                        <div className="text-center">
                                            <a href="/login" className="btn btn-danger my-2 me-2">
                                                <i className="fab fa-google fa-fw"></i> Login with Google
                                            </a>
                                            <a href="/login" className="btn btn-primary my-2">
                                                <i className="fab fa-facebook-f fa-fw"></i> Login with Facebook
                                            </a>
                                        </div>
                                    </form>
                                    <hr />
                                    <div className="text-center">
                                        <a className="small" href="forgot-password.html">Forgot Password?</a>
                                    </div>
                                    <div className="text-center">
                                        <Link to="/signup" className="small">Don't have account? Create now!</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
