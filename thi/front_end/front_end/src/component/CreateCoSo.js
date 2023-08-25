import Swal from "sweetalert2";
import {createCoSoAPI, getListQuanLyAPI} from "../service/CoSoService";
import {ErrorMessage, Field, Form, Formik} from "formik";
import moment from "moment";
import {useEffect, useState} from "react";
import * as Yup from "yup";
import '../css/liquidation.css'
import {useNavigate} from "react-router-dom";


export default function CreateCoSo() {

    const [quanLy, setQuanLy] = useState([]);
    const navigate = useNavigate();
    const getListQuanLy = async () => {
        const res = await getListQuanLyAPI();
        setQuanLy(res.data)
    }
    useEffect(() => {
        getListQuanLy();
    }, [])

    if (!quanLy) {
        return null;
    }
    return (
        <>
            <Formik
                initialValues={{
                    id: "",
                    name: "",
                    startDate: "",
                    address: "",
                    quanLy: ""
                }}
                validationSchema={Yup.object({
                    name: Yup.string().required("Tên không dược để trống"),
                    address: Yup.string().required("Địa chỉ không dược để trống"),
                    quanLy: Yup.string().required("Người quản lý không dược để trống"),
                    startDate: Yup.date().required("Vui lòng nhập ngày khai trương")
                })}
                onSubmit={(values, {resetForm}) => {
                    const save = async () => {
                        const newValue = {
                            ...values,
                            startDate: moment(values.startDate, 'YYYY/MM/DD').format('DD/MM/YYYY'),
                            quanLy: quanLy.find((item) => item.id === +values.quanLy)
                        }
                        values = createCoSoAPI(newValue)
                        await Swal.fire({
                            icon: "success",
                            title: "Thêm mới cơ sở thành công",
                            timer: 2000
                        })
                        resetForm()

                    }
                    save()
                    navigate("/list")
                }}>
                {
                    <div className="container mt-5 mb-5">
                        <div className="row  d-flex justify-content-center align-items-center">
                            <div className="col-md-6">
                                <div className="card px-5 py-4">
                                    <div style={{textAlign: "center"}}>
                                        <h3>Thêm cơ sở</h3>
                                    </div>
                                    <Form>
                                        <div className="mt-4 inputs">
                                            <Field as='select' aria-label="Default select example"
                                                   className="form-select" name='quanLy'>
                                                <option value={0}>Chọn người quản lý</option>
                                                {
                                                    quanLy.map((team, index) =>
                                                        <option key={index} value={team.id}>{team.name}</option>
                                                    )
                                                }
                                            </Field>
                                            <ErrorMessage className='form-err' component='span'
                                                          name='quanLy'/>
                                        </div>
                                        <div className="mt-2 inputs">
                                            <label>Tên Cơ sở</label>
                                            <Field type="text" className="form-control" name='name'/>
                                            <ErrorMessage className='form-err' component='span' name='name'/>

                                        </div>
                                        <div className="mt-2 inputs">
                                            <label>Ngày khai trương</label>
                                            <Field type="date" className="form-control" name='startDate'/>
                                            <ErrorMessage className='form-err' component='span' name='startDate'/>
                                        </div>
                                        <div className="mt-2 inputs">
                                            <label>Địa chỉ</label>
                                            <Field type="text" className="form-control" name='address'/>
                                            <ErrorMessage className='form-err' component='span' name='address'/>
                                        </div>
                                        <div className="text-center mt-4 btn-group">
                                            <button style={{marginLeft: "13vw"}} type="submit"
                                                    className=" btn btn-success integration">
                                                <b>Thêm mới</b>
                                            </button>
                                        </div>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </Formik>
        </>
    )

}