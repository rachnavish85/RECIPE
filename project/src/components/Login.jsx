import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import useUserContext from '../UserContext';
import { useNavigate, Link } from 'react-router-dom';
const LoginSchema = Yup.object().shape({
  email: Yup.string().required("required"),
  password: Yup.string().required("required"),

});


const Login = () => {
  const navigate = useNavigate();


  const { setLoggedIn } = useUserContext();

  //initialization formik
  const loginForm = useFormik(
    {
      initialValues: {
        email: '',
        password: ''
      },
      onSubmit: async (values, action) => {
        console.log(values);

        const res = await fetch('http://localhost:5000/user/authenticate', {
          method: 'POST',
          body: JSON.stringify(values),
          headers: {
            'Content-Type': 'application/json'
          }
        });
        console.log(res.status);
        action.resetForm();

        if (res.status === 200) {
          Swal.fire({
            icon: 'success',
            title: 'Login Success',
          });
          navigate('/home');

          const data = await res.json();
          sessionStorage.setItem('user', JSON.stringify(data));
          setLoggedIn(true);

        }
        else if (res.status === 401) {
          Swal.fire({
            icon: 'error',
            title: 'Login Failed',
            text: 'Email Nd Password is inCorrect'
          });
        }
        else {
          Swal.fire({
            icon: 'error',
            title: 'Something Went Wrong'
          });
        }

      },
      validationSchema: LoginSchema
    });


  return (
    <section className="h-50 gradient-form" style={{ backgroundColor: "#eee" }}>
      <div className="container py-5 h-50">
        <div className="row d-flex justify-content-center align-items-center h-50">
          <div className="col-xl-10">
            <div className="card rounded-3 text-black">
              <div className="row g-0">
                <div className="col-lg-6">
                  <div className="card-body p-md-5 mx-md-4">
                    <div className="text-center">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                        style={{ width: 185 }}
                        alt="logo"
                      />
                      <h4 className="mt-1 mb-5 pb-1">We are The Lotus Team</h4>
                    </div>
                    <form onSubmit={loginForm.handleSubmit}
                      action="#"
                      method="post">
                      <p>Please login to your account</p>

                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example11">
                          Username
                        </label>
                        <span
                          style={{ color: "red", fontsize: 10, marginLeft: 10 }}
                        >
                          {loginForm.touched.email && loginForm.errors.email}
                        </span>
                        <input
                          type="email"
                          id="email"
                          className="form-control"
                          placeholder=" email address"
                          onChange={loginForm.handleChange}
                          value={loginForm.values.email}

                        />

                      </div>
                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example22">
                          Password
                        </label>
                        <span
                          style={{ color: "red", fontsize: 10, marginLeft: 10 }}
                        >
                          {loginForm.touched.password && loginForm.errors.password}
                        </span>

                        <input
                          type="password"
                          id="password"
                          className="form-control"
                          onChange={loginForm.handleChange}
                          value={loginForm.values.password}

                        />

                      </div>
                      <div className="text-center pt-1 mb-5 pb-1">
                        <Link to="http://localhost:5173/thank"><button
                          className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                          type="button"
                        >
                          Log in
                        </button></Link>
                        <Link className="text-muted" to="/">
                          Forgot password?
                        </Link>
                      </div>
                      <div className="d-flex align-items-center justify-content-center pb-4">
                        <p className="mb-0 me-2">Don't have an account?</p>
                        <button type="button" className="btn btn-outline-danger">
                          <Link to={"http://localhost:5173/signup"}>Signup</Link>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                  <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                    <h1 className='welcome'>Welcome</h1>
                    <h1 className='to'> to</h1>
                    <h1 className='khana'> Khana </h1>
                    <h1 className='khajana'> Khajana...</h1>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Login
