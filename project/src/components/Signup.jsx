import React from 'react'
import { Link } from 'react-router-dom'
import { useFormik } from "formik";
import * as Yup from "yup";


const LoginSchema = Yup.object().shape({
  email: Yup.string().required("required"),
  password: Yup.string().required("required"),
  password1: Yup.string().required("required")
});
const Signup = () => {

  const loginForm = useFormik({
    initialValues: {
      email: "",
      password: "",
      password1: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: LoginSchema,
  });
  return (
    <div>

      <section className="login-wrapper p-5">
        <div className="container-xxl">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-8 col-sm-10">
              <div className="card">
                <div className="card-body p-5">
                  <h2 className="text-center price">Sign Up</h2>
                  <p className="text-center mb-3 price">Join us in shopping!!</p>
                  <form onSubmit={loginForm.handleSubmit}
                    action="#"
                    method="post">
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label mb-3">
                        Enter Your Email address
                      </label>
                      <span
                        style={{ color: "red", fontsize: 10, marginLeft: 10 }}
                      >
                        {loginForm.touched.email && loginForm.errors.email}
                      </span>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="enter email here ..."
                        onChange={loginForm.handleChange}
                        value={loginForm.values.email}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label mb-3">
                        Enter Your password
                      </label>
                      <span
                        style={{ color: "red", fontsize: 10, marginLeft: 10 }}
                      >
                        {loginForm.touched.password &&
                          loginForm.errors.password}
                      </span>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="enter password here..."
                        onChange={loginForm.handleChange}
                        value={loginForm.values.password}
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="confirmPassword"
                        className="form-label mb-3"
                      >
                        Confirm Your password
                      </label>

                      <span
                        style={{ color: "red", fontsize: 10, marginLeft: 10 }}
                      >
                        {loginForm.touched.password1 &&
                          loginForm.errors.password1}
                      </span>

                      <input
                        type="password"
                        className="form-control"
                        id="password1"
                        placeholder="rewrite password here..."
                        onChange={loginForm.handleChange}
                        value={loginForm.values.password1}
                      />
                    </div>

                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <p>
                        Have an account?
                      </p>
                      <Link to="/login" className="form-link">
                        Log In
                      </Link>
                    </div>
                    <div className="d-grid gap-2">
                      <button type="submit">Sign Up</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Signup
