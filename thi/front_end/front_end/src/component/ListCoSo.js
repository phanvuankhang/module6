import React, {useEffect, useState} from "react";
import {deleteCoSoAPI, getIdQuanLyAPI, getListCoSoAPI} from "../service/CoSoService";
import {Field, Form, Formik} from "formik";
import ReactPaginate from "react-paginate";
import Swal from "sweetalert2";
import {Axios as axios} from "axios";

export default function CoSoList() {

    const [coSo, setCoSo] = useState([]);
    const [page, setPage] = useState(0);
    const [name, setName] = useState('');
    const [nameEmployee, setNameEmployee] = useState('');
    const [totalPage, setTotalPage] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const [quanLyDetail, setQuanLyDetail] = useState({});

    const getEmployee = async (id) => {
        try {
            const res = await getIdQuanLyAPI(id);
            setQuanLyDetail(res.data);
        } catch (error) {
            console.error(error);
            alert("Có lỗi xảy ra khi lấy thông tin quản lý.");
        }
    }


    const getListCoSo = async () => {
        const res = await getListCoSoAPI(page, name, nameEmployee)
        setCoSo(res.data.content)
        setTotalPage(res.data.totalPages);
        setCurrentPage(page)
    }

    const handlePageChange = (selectedPage) => {
        setPage(selectedPage);
    };

    const deleteCoSo = async (id) => {
        try {
            await deleteCoSoAPI(id)
            getListCoSo();
            await Swal.fire({
                icon: "success",
                title: "Xóa Penalty",
                html: `Xóa có sở <span style="color: red">CS-${id}</span>thành công.`,
            })
        } catch (e) {
            await Swal.fire({
                icon: "error",
                title: "Xóa Penalty",
                html: `Xóa cơ sở <span style="color: red">CS-${id}</span> không thành công.`,
            })
        }

    }
    const modals = async (id) => {
        Swal.fire({
            icon: "warning",
            title: "Xóa Penalty",
            html: `Bạn có muốn xoá mã cơ sở <span style="color: red">PEN-${id}</span> không?`,
            showCancelButton: true,
            confirmButtonText: 'Có',
            cancelButtonText: 'Không',
            reverseButtons: true
        }).then((res) => {
            if (res.isConfirmed) {
                deleteCoSo(id)
            }
        })
    }

    useEffect(() => {
        getListCoSo();
    }, [page, name, nameEmployee])

    if (!coSo) {
        return null;
    }
    return (
        <>
            <div style={{minHeight: "53vh"}} className="container">
                <div align="center" className="pt-3 pb-3">
                    <Formik
                        initialValues={{
                            name: "",
                            nameEmployee: ""
                        }}
                        onSubmit={(values) => {
                            const searchCoSo = async () => {
                                await setName(values.name);
                                await setNameEmployee(values.nameEmployee);
                                setPage(0);
                            }
                            searchCoSo();
                        }}>

                        <Form className="row justify-content-end">
                            <Field className="form-control" style={{width: "20vw"}} name="name" type="text"
                                   placeholder="Tìm kiếm tên cơ sở"/>
                            <Field className="form-control" style={{width: "20vw"}} name="nameEmployee" type="text"
                                   placeholder="Tìm kiếm người quản lý"/>
                            <div className="col-1 align-items-center d-flex">
                                <button className="btn btn-sm btn-primary" type="submit">Tìm kiếm</button>
                            </div>
                        </Form>
                    </Formik>
                </div>

                <table className="table table-hover table-striped" border={1}>
                    <thead>
                    <tr style={{textAlign: "start"}}>
                        <th>Số thứ tự</th>
                        <th>Mã cơ sở</th>
                        <th>Tên cơ sở</th>
                        <th>Ngày khai trương</th>
                        <th>Địa chỉ</th>
                        <th>Người quản lý</th>
                        <th id="actions">Chức năng</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        coSo.length !== 0 ?
                            coSo.map((coSo, index) =>
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>CS-{coSo?.id}</td>
                                    <td>{coSo?.name}</td>
                                    <td>{coSo?.startDate}</td>
                                    <td>{coSo?.address}</td>

                                    <td><a type="button" data-bs-toggle="modal"
                                           data-bs-target="#exampleModal1"
                                           title="Chi tiết"
                                           onClick={() => getEmployee(coSo?.id)}>
                                        {coSo.quanLy.name}</a></td>


                                    <td style={{justifyContent: "space-between"}}>
                                        <button onClick={() => modals(coSo?.id)}
                                                className="btn btn-sm btn-danger ms-1">Xóa
                                        </button>
                                    </td>
                                </tr>
                            )
                            :
                            <tr>
                                <td colSpan="7">
                                    <div align="center">
                                        <h4 className="text-danger">Dữ liệu không tồn tại</h4>
                                    </div>
                                </td>
                            </tr>
                    }
                    </tbody>
                    <footer>
                        {coSo.length === 0 ? '' :
                            <div className="d-grid">
                                <ReactPaginate
                                    breakLabel="..."
                                    nextLabel="Sau"
                                    previousLabel="Trước"
                                    onPageChange={(selected) => handlePageChange(selected.selected)}
                                    pageCount={totalPage}
                                    pageRangeDisplayed={5} // Adjust as needed
                                    marginPagesDisplayed={2} // Adjust as needed
                                    containerClassName="pagination"
                                    activeClassName="active"
                                    pageClassName="page-item"
                                    pageLinkClassName="page-link"
                                    nextClassName="page-item"
                                    nextLinkClassName="page-link"
                                    previousClassName="page-item"
                                    previousLinkClassName="page-link"
                                    disabledClassName="disabled"
                                />
                            </div>
                        }
                    </footer>
                </table>
            </div>
            <div className="modal fade" id="exampleModal1" tabIndex="-1" aria-labelledby="exampleModalLabel5"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header table_header_employee">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">CHI TIẾT QUẢN LÝ</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="flex">
                                <div className="col-md-8">
                                    <table className="">
                                        <tr>
                                            <td><p><b>Quản lý:</b></p></td>
                                            <td>
                                                <p style={{
                                                    color: "#dfa512",
                                                    paddingLeft: "10px",
                                                    fontSize: "20px"
                                                }}>
                                                    {quanLyDetail.name}
                                                </p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><p>Giới tính: </p></td>
                                            <td style={{paddingLeft: "10px"}}>
                                                <p>{quanLyDetail.gender ? "Nam" : "Nữ"}</p></td>
                                        </tr>
                                        <tr>
                                            <td><p>Email: </p></td>
                                            <td style={{paddingLeft: "10px"}}>
                                                <p>{quanLyDetail.codeEmployee}</p></td>
                                        </tr>
                                        {/*<tr>*/}
                                        {/*    <td><p>Chức vụ: </p></td>*/}
                                        {/*    <td style={{paddingLeft: "10px"}}>*/}
                                        {/*        <p>{employeeDetail.typeEmployee.nameTypeEmployee}</p></td>*/}
                                        {/*</tr>*/}
                                        <tr>
                                            <td><p>Ngày sinh: </p></td>
                                            <td style={{paddingLeft: "10px"}}>
                                                <p>{quanLyDetail.birthDay}</p></td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <input type="hidden" name="idDetail" id="idDetail"/>
                            <button type="button" className="btn form_exit_employee" data-bs-dismiss="modal">
                                Thoát
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
                    integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
                    crossOrigin="anonymous"></script>
        </>
    )
}