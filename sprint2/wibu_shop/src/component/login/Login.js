import "../login/login.css"
import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

export function Login() {

  return (
    <>
      {/*--------------------- Main Container ------------------------*/}
      <div className="container d-flex justify-content-center align-items-center min-vh-100" style={{marginTop:"8vh"}}>
        {/*--------------------- Login Container ------------------------*/}
        <div className="row border rounded-5 p-3 bg-white shadow box-area">
          {/*------------------------- Left Box ---------------------------*/}
          <div
            className="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box"
           
          >
            <div >
              <figure>
                <img
                  src="login.png"
                  alt="sing up image"
                />
              </figure>

            </div>
          </div>
          {/*------------------ ------ Right Box --------------------------*/}
          <div className="col-md-6 right-box">
            <div className="row align-items-center">
              <div className="header-text mb-4">
                <h2>Chào bạn!</h2>
                <p>Chúng tôi rất vui khi bạn trở lại.</p>
              </div>

              <Formik>
                <Form>
                  <div className="input-group mb-2">
                    <div className="input-group mb-1">
                      <Field
                        name="username"
                        type="text"
                        className="form-control form-control-lg bg-light fs-6"
                        placeholder="Username"
                      />
                    </div>
                    <ErrorMessage
                      name="username"
                      component="span"
                      className="error-r mx-1"
                    />
                  </div>

                  <div className="input-group mb-2">
                    <div className="input-group">
                      <Field
                        name="password"
                        type="password"
                        className="form-control form-control-lg bg-light fs-6"
                        placeholder="Password"
                      />
                    </div>
                    <ErrorMessage
                      name="password"
                      component="span"
                      className="error-r mx-1"
                    />
                  </div>
                  <div className="input-group mb-5 d-flex justify-content-between">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="formCheck"
                      />
                      <label
                        htmlFor="formCheck"
                        className="form-check-label text-secondary"
                      >
                        <small>Ghi nhớ mật khẩu</small>
                      </label>
                    </div>
                    <div className="forgot">
                      <small>
                        <NavLink to="/login/forgot">Quên mật khẩu?</NavLink>
                      </small>
                    </div>
                  </div>
                  <div className="input-group mb-3 log">
                    <button style={{ background: "#6699FF" }}
                      className="btn btn-lg btn-info w-100 fs-6"
                      type="submit"
                    >
                      Đăng nhập
                    </button>
                  </div>
                </Form>
              </Formik>
              <div className="input-group mb-3">
                <button className="btn btn-lg btn-light w-100 fs-6">
                  <img src="google.jpg" style={{ width: 20 }} className="me-2" />
                  <small>Đăng nhập bằng Google</small>
                </button>
              </div>
              <div className="row">
                <small>
                  Bạn chưa có tài khoản? <NavLink to='/register'>Đăng ký</NavLink>
                </small>
              </div>
            </div>
          </div>
        </div>
      </div >

    </>
  );
}