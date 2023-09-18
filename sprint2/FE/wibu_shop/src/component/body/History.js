import InfoIcon from '@mui/icons-material/Info';
import React, {useEffect, useState} from "react";
import {NavLink, useNavigate} from 'react-router-dom';
import Modal from 'react-modal';
import {toast} from 'react-toastify';
import {getOrderAPI, getOrderDetailAPI} from "../../service/OrderService";
import moment from "moment";


Modal.setAppElement('#root'); // Thiết lập phần tử gốc của ứng dụng

const customStyles = {
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '80%',
        height: '60%',
        backgroundColor: 'white',
        color: 'black',
        padding: '20px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    },
    table: {
        color: 'black',
        fontWeight: "bold"
    }

};

export function History() {
    const navigate = useNavigate();
    const [order, setOrder] = useState([]);
    const [orderDetail, setOrderDetail] = useState([]);
    const getBill = async () => {
        try {
            const rs = await getOrderAPI()
            await setOrder(rs)
        } catch (error) {
            navigate('/')
        }

    }
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };
    const detailOrder = async (id) => {
        try {
            const rs = await getOrderDetailAPI(id)
            await setOrderDetail(rs)
        } catch (error) {
            if (error.response.status == 500) {
                toast.error("Không có nội dung.")
                // navigate('/error')
            }
        }
        openModal();
    }


    useEffect(() => {
        document.title = "History Order";
        window.scrollTo(0, 0)
        getBill()
    }, []);
    return (
        <>
            <main className="table" style={{marginLeft: "8%", marginTop: "8%"}}>
                <section className="table__header" style={{justifyContent: "center"}}>
                    <h1>Lịch sử đặt hàng của tôi</h1>
                </section>
                <section className="table__body">
                    <table>
                        <thead>
                        <tr>
                            <th>
                                STT
                            </th>
                            <th>
                                Mã đặt hàng
                            </th>

                            <th>
                                Ngày đặt hàng
                            </th>
                            <th>
                                Số lượng
                            </th>
                            <th style={{textAlign: "center"}}>
                                Trạng thái
                            </th>
                            <th>
                                Chi tiết
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            order && order.map((val, index) => (
                                <tr key={index}>
                                    <td> {index + 1} </td>
                                    <td>
                                        {val.code}
                                    </td>
                                    <td>{moment(val.createDate, 'YYYY/MM/DD').format('DD/MM/YYYY')}</td>

                                    <td> {(+val.totalPrice).toLocaleString()} VNĐ</td>
                                    <td>
                                        {
                                            index % 3 == 0 ?
                                                <p className="status shipped">Đang giao hàng</p>
                                                :
                                                <p className="status delivered">Đã giao hàng</p>


                                        }
                                    </td>
                                    <td>
                                        <a onClick={() => detailOrder(val.id)}>
                                            <InfoIcon style={{marginLeft: "8%", color: "blue"}}/>
                                        </a>
                                    </td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
                </section>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Modal"
                >
                    <button onClick={closeModal} className='btn btn-primary' style={{marginLeft: "97%"}}>X</button>

                    <section className="table__body" style={customStyles.table}>
                        <table>
                            <thead>
                            <tr>
                                <th>
                                    STT
                                </th>
                                <th>
                                    Sản phẩm
                                </th>
                                <th>
                                    Loại sản phẩm
                                </th>
                                <th>
                                    Giá sản phẩm
                                </th>
                                <th>
                                    Số lượng
                                </th>
                                <th>
                                    Tổng tiền
                                </th>


                            </tr>
                            </thead>
                            <tbody>
                            {
                                orderDetail && orderDetail.map((val, index) => (
                                    <tr key={index}>
                                        <td> {index + 1} </td>
                                        <NavLink to={`/details/${val.products.id}`}>
                                            <td>
                                                <img src={val.products.image} alt=""/>
                                                {val.products.name}
                                            </td>
                                        </NavLink>
                                        <td> {val.products.productType.name} </td>
                                        <td> {(+val.products.price).toLocaleString()} VNĐ</td>
                                        <td style={{textAlign: "center"}}> {val.quantity} </td>
                                        <td>
                                            {(+val.price).toLocaleString()} VNĐ
                                        </td>
                                    </tr>
                                ))
                            }
                            </tbody>
                        </table>
                    </section>
                </Modal>
            </main>

        </>
    )
}