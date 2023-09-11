import "./fonts/material-icon/css/material-design-iconic-font.min.css";
import ".//css/style.css";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {ToastContainer,toast} from "react-toastify";
import React, {useEffect, useState} from "react";
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from "sweetalert2";
import {useNavigate} from "react-router";
import {createCustomersAPI} from "../../service/CustomersService";


export function Register() {
    const navigate = useNavigate();


    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            navigate("/")
        }
        document.title = "Đăng ký";
        window.scrollTo(0, 0)
    }, []);


    const loadSubmit = () => {
        Swal.fire({
            html: '<div className="loading-screen" style={{position: "fixed",\n' +
                '  top: "0;",\n' +
                '  left: "0",\n' +
                '  width: "100%",\n' +
                '  height: "100%",\n' +
                '  background-color: "rgba(0, 0, 0, 0.5)" }}/* Màu nền màn hình đen với độ mờ */></div>', // Sử dụng CSS để tạo màn hình đen.
            timer: 4000,
            title: "Xin vui lòng chờ trong giây lát.",
            showConfirmButton: false,
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false,
            didOpen: async () => {
                await Swal.showLoading();
            },
            willClose: () => {
                // Thêm xử lý khi SweetAlert2 đóng (nếu cần thiết).
            }
        });
    };
    return (
        <>

            <div className="main" style={{marginTop: "5%"}}>
                {/* Sign up form */}
                <section className="signup">
                    <div className="container">
                        <div className="signup-content">
                            <div className="signup-form">
                                <h2 className="form-title">Đăng ký</h2>
                                <Formik initialValues={{
                                    name: "",
                                    email: "",
                                    phoneNumber: "",
                                    birthday: "",
                                    gender: "1",
                                    username: "",
                                    password: "",
                                    confirmPassword: ""
                                }} onSubmit={async (values, {setSubmitting}) => {

                                        values = {
                                            ...values,
                                            usersDTO: {
                                                username: values.username,
                                                password: values.password
                                            }
                                        }
                                    try {
                                        await loadSubmit();
                                        await createCustomersAPI(values);
                                        navigate('/login');
                                        toast.success("Đăng ký thành công!");
                                    } catch (error) {
                                        toast.error("Đăng ký thất bại!");
                                    } finally {
                                        setSubmitting(false);
                                    }

                                }}>
                                    <Form method="POST" className="register-form" id="register-form">
                                        <div className="form-group ">
                                            <label htmlFor="name">
                                                <i className="zmdi zmdi-account material-icons-name"/>
                                            </label>
                                            <Field
                                                type="text"
                                                name="name"
                                                id="name"
                                                placeholder="Họ và tên"
                                            />
                                            <ErrorMessage style={{marginTop: "-5%"}} name="name" component="span"
                                                          className="error-r"/>
                                        </div>


                                        <div className="form-group">
                                            <label htmlFor="email">
                                                <i className="zmdi zmdi-email"/>
                                            </label>
                                            <Field
                                                type="email"
                                                name="email"
                                                id="email"
                                                placeholder="Email"
                                            />
                                            <ErrorMessage style={{marginTop: "-5%"}} name="email" component="span"
                                                          className="error-r"/>
                                        </div>
                                        <div className="row ">
                                            <div className="form-group col-7">
                                                <label>
                                                    <i className="fa-solid fa-phone-volume"></i>
                                                </label>
                                                <Field
                                                    type="number"
                                                    name="phoneNumber"

                                                    placeholder="Số điện thoại"
                                                />
                                                <ErrorMessage style={{marginTop: "-5%"}} name="phoneNumber"
                                                              component="span" className="error-r"/>
                                            </div>
                                            <div className="form-group col-5">
                                                <label>
                                                    <i className="fa-solid fa-phone-volume"></i>
                                                </label>
                                                <Field
                                                    type="date"
                                                    name="birthday"
                                                />

                                            </div>
                                        </div>
                                        <div className="form-group ">
                                            <label>
                                                <i className="fa-solid fa-user-plus"></i>
                                            </label>
                                            <Field
                                                type="text"
                                                name="address"
                                                placeholder="Địa chỉ"
                                            />
                                            <ErrorMessage style={{marginTop: "-5%"}} name="address" component="span"
                                                          className="error-r"/>
                                        </div>
                                        <div className="row">
                                            <div className="form-group col-9">
                                                <label>
                                                    <i className="fa-solid fa-user-plus"></i>
                                                </label>
                                                <Field
                                                    type="text"
                                                    name="username"
                                                    placeholder="Tài khoản"
                                                />
                                                <ErrorMessage style={{marginTop: "-5%"}} name="username"
                                                              component="span" className="error-r"/>
                                            </div>
                                            <div className="form-group col-3">
                                                <label htmlFor="name">
                                                    <i className="zmdi "/>
                                                </label>
                                                <div className="row">
                                                    <div className="col-5">
                                                        <Field type="radio" name="gender" value="1"/>
                                                        <div>
                                                            Nam
                                                        </div>
                                                    </div>
                                                    <div className="col-4">
                                                        <Field type="radio" name="gender" value="0"/>
                                                        <div>
                                                            Nữ
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="pass">
                                                <i className="zmdi zmdi-lock"/>
                                            </label>
                                            <Field
                                                type="password"
                                                name="password"
                                                id="pass"
                                                placeholder="Mật khẩu"
                                            />
                                            <ErrorMessage style={{marginTop: "-5%"}} name="password" component="span"
                                                          className="error-r"/>
                                        </div>
                                        <div className="form-group">
                                            <label>
                                                <i className="zmdi zmdi-lock-outline"/>
                                            </label>
                                            <Field
                                                type="password"
                                                name="confirmPassword"
                                                id="re_pass"
                                                placeholder="Nhập lại mật khẩu"
                                            />
                                            <ErrorMessage style={{marginTop: "-5%"}} name="confirmPassword" component="span"
                                                          className="error-r"/>
                                        </div>

                                        <div className="form-group form-button">
                                            <input
                                                type="submit"
                                                name="signup"
                                                id="signup"
                                                className="form-submit"
                                                defaultValue="Register"
                                            />
                                        </div>
                                    </Form>
                                </Formik>
                            </div>
                            <div className="signup-image">
                                <figure>
                                    <img style={{}}
                                         src="br-dr.jpg"
                                         alt="sing up image"
                                    />
                                </figure>

                            </div>
                        </div>
                    </div>
                </section>


            </div>

            <ToastContainer/>

        </>
    )

}