import "../login/login.css"
import {ErrorMessage, Field, Form, Formik} from "formik";
import React, {useEffect, useState} from "react";
import {NavLink, useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";


export function Login() {
    const navigate = useNavigate();
    const [userName, setUserName] = useState(localStorage.getItem("user_name"));
    const [password, setPassword] = useState(localStorage.getItem("password"));
    const {params} = useParams();

    const setPwUs = async (u, p) => {
        setUserName(u);
        setPassword(p);
    };


    useEffect(() => {
        setPwUs(localStorage.getItem("user_name"), localStorage.getItem("password"))
            .then(r => null);
    }, [localStorage.getItem("username"), localStorage.getItem("password")])


    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            navigate("/")
        }
        document.title = "Đăng nhập";
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            {/*--------------------- Main Container ------------------------*/}
            <div className="container d-flex justify-content-center align-items-center min-vh-100"
                 style={{marginTop: "8vh"}}>
                {/*--------------------- Login Container ------------------------*/}
                <div className="row border rounded-5 p-3 bg-white shadow box-area">
                    {/*------------------------- Left Box ---------------------------*/}
                    <div
                        className="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box"

                    >
                        <div>
                            <figure>
                                <img
                                    src="/login.png"
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

                            <Formik initialValues={{
                                username: userName,
                                password: password,
                                check: '',
                            }}
                                    validationSchema={Yup.object({
                                        username: Yup.string().required("Vui lòng nhập tài khoản."),
                                        password: Yup.string().required("Vui lòng nhập mật khẩu."),
                                    })}
                                    onSubmit={async (values, {setSubmitting}) => {
                                        if (values.check.length === 1) {
                                            localStorage.setItem("user_name", values.username);
                                            localStorage.setItem("password", values.password);
                                        } else {
                                            localStorage.setItem("user_name", '');
                                            localStorage.setItem("password", '');
                                        }
                                        values = {
                                            username: values.username,
                                            password: values.password,
                                        }
                                        try {
                                            const res = await axios.post("http://localhost:8080/api/users/authenticate", values, {withCredentials: true});
                                            if (res.data.token) {
                                                localStorage.setItem("token", res.data.token);
                                                localStorage.setItem("username", res.data.username);
                                                localStorage.setItem("role", res.data.role);
                                            }
                                           if (params==="l"){
                                                navigate("/")
                                            }else {
                                                navigate("/cart")
                                            }
                                            window.location.reload()
                                        } catch (e) {
                                            toast.error("Sai tài khoản hoặc mật khẩu !!");
                                        } finally {
                                            setSubmitting(false);
                                        }
                                    }}>
                                <Form>
                                    <div className="input-group mb-2">
                                        <div className="input-group mb-1">
                                            <Field
                                                name="username"
                                                type="text"
                                                className="form-control form-control-lg bg-light fs-6"
                                                placeholder="Tài khoản"
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
                                                placeholder="Mật khẩu"
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
                                            <Field type="checkbox" name="check" value="1" id="myCheckbox"
                                                   className="myCheckbox"/>
                                            <label id="dn" htmlFor="myCheckbox" className="myCheckbox">
                                                Ghi nhớ mật khẩu
                                            </label>
                                        </div>
                                        <div className="forgot">
                                            <small>
                                                <NavLink to="/login/forgot">Quên mật khẩu?</NavLink>
                                            </small>
                                        </div>
                                    </div>
                                    <div className="input-group mb-3 log">
                                        <button style={{background: "#6699FF"}}
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
                                    <img src="/google.jpg" style={{width: 20}} className="me-2"/>
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
            </div>
            <ToastContainer/>
        </>
    );
}