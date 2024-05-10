import Layout from "../components/Layout";

import "https://kit.fontawesome.com/287b21eead.js";
import "../assets/styles/login_form.css";

function LoginPage() {
    return (
        <Layout isViewHeight100={true}>
            <div className="container-fluid m-0 p-0 d-flex flex-column justify-content-between flex-grow-1">
                <section className="">
                    <div className="container-fluid h-custom">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-md-9 col-lg-6 col-xl-5">
                                <img src={require("../assets/images/CityNight.jpg")} style={{borderRadius: 10 + "%"}} className="img-fluid" alt="Sample image" />
                            </div>
                            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                                <form>
                                    {/* {% csrf_token %} */}

                                    <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                                        <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                                        <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-floating mx-1">
                                            <i className="fab fa-facebook-f"></i>
                                        </button>
                            
                                        <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-floating mx-1">
                                            <i className="fab fa-twitter"></i>
                                        </button>
                            
                                        <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-floating mx-1">
                                            <i className="fab fa-linkedin-in"></i>
                                        </button>
                                    </div>
                            
                                    <div className="divider d-flex align-items-center my-4">
                                        <p className="text-center fw-bold mx-3 mb-0">Or</p>
                                    </div>
                            
                                        {/* <!-- Email input --> */}
                                    <div data-mdb-input-init className="form-outline mb-4">
                                        <input type="text" id="formUsername" className="form-control form-control-lg"
                                            placeholder="Enter your username" name="username" />
                                        <label className="form-label" for="formUsername">Username</label>
                                    </div>
                            
                                        {/* <!-- Password input --> */}
                                    <div data-mdb-input-init className="form-outline mb-3">
                                        <input type="password" id="formPassword" className="form-control form-control-lg"
                                            placeholder="Enter password" name="password"/>
                                        <label className="form-label" for="formPassword">Password</label>
                                    </div>
                            
                                    <div className="d-flex justify-content-between align-items-center">
                                        {/* <!-- Checkbox --> */}
                                        <div className="form-check mb-0">
                                            <input className="form-check-input me-2" type="checkbox" value="" id="rememberMe" />
                                            <label className="form-check-label" for="rememberMe">
                                            Remember me
                                            </label>
                                        </div>
                                        <a href="#!" className="text-body">Forgot password?</a>
                                    </div>

                                        
                                    <div className="text-center text-lg-start mt-4 pt-2">
                                            {/* <div>
                                                {% if login_error_msg %} <p style="color: #F00"> {{login_error_msg}} </p> {% endif %}
                                            </div> */}
                                        <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-lg"
                                            style={{paddingLeft: 2.5 + "rem", paddingRight: 2.5 + "rem"}}>Login</button>
                                        <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="{% url 'account:signup'%}"
                                            className="link-warning">Register</a></p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    {/* <!--
                        Copyright © 2020. All rights reserved.
                    --> */}
                    <div className="d-flex flex-column flex-md-row justify-content-center align-items-center w-100 py-4 px-4 px-xl-5 bg-primary"
                    style={{position: "fixed", bottom: 0}}>
                
                        {/* <!-- Right --> */}
                        <div className="align-self-end">
                            <a href="#!" className="text-white me-4">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#!" className="text-white me-4">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#!" className="text-white me-4">
                                <i className="fab fa-google"></i>
                            </a>
                            <a href="#!" className="text-white">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                        {/* <!-- Right --> */}
                    </div>
                </section>
            </div> 
        </Layout>
    );
};


export default LoginPage;