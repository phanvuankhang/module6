import "./fonts/material-icon/css/material-design-iconic-font.min.css";
import ".//css/style.css";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {ToastContainer, toast} from "react-toastify";
import React, {useEffect, useState} from "react";
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from "sweetalert2";
import {useNavigate} from "react-router";
import {createCustomersAPI} from "../../service/CustomersService";
import * as Yup from "yup";


export function Register() {
    const navigate = useNavigate();
    const today = new Date();
    const maxDate = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());
    const minDate = new Date(today.getFullYear() - 100, today.getMonth(), today.getDate());

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
            timer: 3000,
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
                                }}
                                        validationSchema={Yup.object({
                                            name: Yup.string()
                                                .required("Không được để trống!").min(8, "Tên không thể quá ngắn!")
                                                .matches(/^[\p{Lu}\p{Ll}\p{N}\s]+$/u, "Tên không được chứa ký tự đặc biệt!")
                                            ,
                                            address: Yup.string()
                                                .required("Không được để trống!"),
                                            username: Yup.string()
                                                .required("Không được để trống!").min(6, "Tên tài khoản không thể quá ngắn!").max(50, "Tên tài khoản không thể quá dài!")
                                                .matches(/^[a-z0-9]{8,}$/u, "Tên đăng nhập phải là ký tự thường!")
                                            ,
                                            password:Yup.string()
                                                .required("Không được để trống!"),
                                            birthday:Yup.string().required("Không được để trống!").max(maxDate, 'Khách hàng phải trên 18 tuổi.')
                                                .min(minDate, 'Khách hàng phải trên 18 tuổi và dưới 100 tuổi.'),
                                            phoneNumber: Yup.string().required("Không được để trống!")
                                                .matches(/^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/, 'Nhập đúng định dạng SDT ví dụ: 098XXXXXXX (X là chữ số)'),
                                            email: Yup.string().required("Không được để trống!").email('Nhập đúng định dạng email!'),
                                            confirmPassword: Yup.string()
                                                .oneOf([Yup.ref('password'), null], 'Mật khẩu nhập lại không đúng!')
                                                .required('Không được để trống này!'),

                                        })}
                                        onSubmit={async (values, {setSubmitting}) => {

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
                                                navigate('/login/l');
                                                await Swal.fire({
                                                    icon: "success",
                                                    title: "Đăng ký thành công!",
                                                    timer: "3000"
                                                })
                                            } catch (error) {
                                                toast.error("Đăng ký thất bại!");
                                            } finally {
                                                setSubmitting(false);
                                            }

                                        }}>
                                    <Form method="POST" className="register-form"  id="register-form">
                                        <div className="form-group ">
                                            <label htmlFor="name">
                                                <i className="zmdi zmdi-account material-icons-name"/>
                                            </label>
                                            <Field
                                                className="k"
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
                                                className="k"
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
                                                    className="k"
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
                                                    className="k"
                                                    type="date"
                                                    name="birthday"
                                                />
                                                <ErrorMessage style={{marginTop: "-5%"}} name="birthday" component="span"
                                                              className="error-r"/>
                                            </div>
                                        </div>
                                        <div className="form-group ">
                                            <label>
                                                <i className="fa-solid fa-user-plus"></i>
                                            </label>
                                            <Field
                                                className="k"
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
                                                    className="k"
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
                                                className="k"
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
                                                className="k"
                                                type="password"
                                                name="confirmPassword"
                                                id="re_pass"
                                                placeholder="Nhập lại mật khẩu"
                                            />
                                            <ErrorMessage style={{marginTop: "-5%"}} name="confirmPassword"
                                                          component="span"
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