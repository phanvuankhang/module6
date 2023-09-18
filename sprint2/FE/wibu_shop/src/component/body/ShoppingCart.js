import {Link} from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import React, {useEffect, useState} from "react";
import {deleteShoppingCartAPI, getShoppingCartAPI, setShoppingCartAPI} from "../../service/ShoppingCartService";
import {ToastContainer, toast} from 'react-toastify';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import Swal from "sweetalert2";
import {createOrderAPI} from "../../service/OrderService";
import {PayPalButton} from "react-paypal-button-v2";
import {useDispatch} from "react-redux";
import {getShoppingCart} from "../../redux/actions/cart";


export function ShoppingCart() {
    const [shoppingCart, setShoppingCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [username, setUsername] = useState(localStorage.getItem("username"));
    const dispatch = useDispatch()


    const dollar = Math.floor(totalPrice / 23500);

    const getCart = async () => {
        try {
            const res = await getShoppingCartAPI();
            await setShoppingCart(res)
            setTotalQuantity(0);
            setTotalPrice(0);
            if (res != null) {
                await res.map(async (value, index) => {
                    await setTotalQuantity(total => total + value.quantity)
                    await setTotalPrice(total => total + value.price)
                })
            }
        } catch (e) {

        }
    }


    const deleteShoppingCart = async (id, idS) => {
        await deleteShoppingCartAPI(id, idS)
        Swal.fire({
            icon: "success",
            title: "Xóa sản phẩm thành công!!",
            timer: "3000"
        })
        getCart()
        await dispatch(getShoppingCart())

    }
    const deleteCart = async (id, name, idS) => {
        Swal.fire({
            icon: "warning",
            title: `Bạn có muốn xóa sản phẩm <span class='al'> ${name} </span> khỏi giỏ hàng không?`,
            showCancelButton: true,
            confirmButtonText: "Đồng ý",
            cancelButtonText: "Không"
        })
            .then((rs) => {
                if (rs.isConfirmed) {
                    deleteShoppingCart(id, idS)
                }
            })
    }
    const setQuantity = async (val, id, vQuantity, sessionProduct) => {
        if (vQuantity > 1 || val == 1) {
            await setShoppingCartAPI(val, id, sessionProduct);
            getCart();
        }
    }

    const paymentt = async () => {
        try {
            const res = await createOrderAPI()
            await getCart()
            await dispatch(getShoppingCart())
            toast.success("Đặt hàng thành công!!")
        } catch (error) {
            toast.error(error.response.data)
        }

    }

    const payment = () => {
        Swal.fire({
            icon: "success",
            title: `Bạn có muốn thanh toán không?`,
            confirmButtonText: "Đồng ý",
            cancelButtonText: "Không"
        })
            .then((rs) => {
                if (rs.isConfirmed) {
                    paymentt()
                }
            })
    }
    useEffect(() => {
        document.title = "Giỏ hàng";
        window.scrollTo(0, 0)
        getCart()
    }, []);

    return (
        <>
            <div className="container" style={{marginTop: "7%"}}>
                <div className="section-title" data-aos="fade-up">
                    <h2>Giỏ hàng</h2>
                </div>
                <div className="row col-md-12">
                    <div className="col-md-9">
                        <table className="table ">
                            <thead>
                            <tr>
                                <th>Hình ảnh</th>
                                <th>Sản phẩm</th>
                                <th>Giá</th>
                                <th>Số lượng</th>
                                <th>Tổng giá</th>
                                <th>&ensp;</th>
                            </tr>
                            </thead>
                            <tbody>
                            {shoppingCart ? shoppingCart.length < 1 ?
                                <>
                                    <tr>
                                        <td style={{textAlign: "center"}} colSpan="6">
                                            <h4 style={{color: "red"}}>Chưa có sản phẩm nào trong giỏ hàng.</h4>
                                        </td>
                                    </tr>

                                </>
                                :

                                (shoppingCart.map((s) => (
                                    <tr>
                                        <td>
                                            {s.quantity < 1 ?
                                                <img className="pic"
                                                     src="https://media.istockphoto.com/id/501962059/vi/vec-to/tem-%C4%91%C3%A3-b%C3%A1n-h%E1%BA%BFt-v%E1%BB%9Bi-v%C4%83n-b%E1%BA%A3n-m%C3%A0u-%C4%91%E1%BB%8F-tr%C3%AAn-m%C3%A0u-tr%E1%BA%AFng.jpg?s=2048x2048&w=is&k=20&c=AvsQlSW4KlL5T8xgUqYCqQRe7J2w1ncPdbojNwOts2k="
                                                     alt=""/>
                                                :
                                                <img className="pic"
                                                     src={s?.products.image}
                                                     alt=""/>

                                            }
                                        </td>
                                        <td>{s.products.name}</td>
                                        <td>{(+s.products.price).toLocaleString()} VNĐ</td>
                                        <td>
                                            <div className="d-flex">
                                                <div className="d-flex">
                                                    <button type="button" className="minus"
                                                            onClick={() => setQuantity(0, s.id, s.quantity, s.products)}>
                                                        <span>-</span></button>
                                                    <input value={s.quantity}
                                                           className="input" min="0" style={{padding: "0 0"}}/>
                                                    <button type="button" value="+" className="plus"
                                                            onClick={() => setQuantity(1, s.id, s.quantity, s.products)}>
                                                        <span>+</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{(+s.price).toLocaleString()} VNĐ</td>
                                        <td>
                                            <a title="Delete" className="btn"><i class="bi bi-x" style={{fontSize: "200%"}}
                                                                 onClick={() => deleteCart(s.id, s.products.name, s.products.id)}></i></a>
                                        </td>

                                    </tr>
                                )))
                                : <>
                                    <tr>
                                        <td style={{textAlign: "center"}} colSpan="6">
                                            <h4 style={{color: "red"}}>Chưa có sản phẩm nào trong giỏ hàng.</h4>
                                        </td>
                                    </tr>

                                </>
                            }

                            </tbody>
                        </table>
                        <div className="full" style={{marginRight: "10%", marginLeft: "10%"}}
                             title="Quay Lại">
                            <Link to='/'>
                                <button style={{background: "#6699FF"}}
                                        className="btn btn-lg btn-info w-40 fs-6">
                                    <p style={{color: "white"}}><ArrowBackIcon style={{fontSize: "200%"}}/> Tiếp tục
                                        xem sản phẩm</p>
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div class="stack">
                            <div class="card">
                                <div class="image">

                                    <h2 style={{
                                        textAlign: "center",
                                        marginBottom: "10%",
                                        marginTop: "5%",
                                        color: "#6495ED"
                                    }}>Thanh toán</h2>
                                    <p style={{marginLeft: "4%"}}>Số lượng sản phẩm: {totalQuantity} </p>
                                    <h5 style={{marginLeft: "4%"}}>Tổng: {(totalPrice).toLocaleString()} VNĐ</h5>
                                    <div style={{marginTop: "10%"}}>
                                        {
                                            totalQuantity == 0 ? (<div className="full" style={{
                                                marginLeft: "45%",
                                                marginBottom: "5%"
                                            }} title="Về trang chủ">
                                            </div>) : (
                                                <div className="full">
                                                    {
                                                        username ? (

                                                                <PayPalButton
                                                                    amount={dollar == 0 ? 1 : dollar}
                                                                    // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
                                                                    onSuccess={(details, data) => {
                                                                        paymentt()
                                                                        // OPTIONAL: Call your server to save the transaction
                                                                        return fetch("/paypal-transaction-complete", {
                                                                            method: "post",
                                                                            body: JSON.stringify({
                                                                                orderID: data.orderID
                                                                            })
                                                                        });
                                                                    }}
                                                                    onError={(e) => {
                                                                        toast.error("Thanh toán thất bại!!")
                                                                    }}
                                                                />
                                                            ) :
                                                            (<Link to='/login/c' title='Thanh toán'
                                                                   style={{marginLeft: "45%", marginBottom: "5%"}}>
                                                                <CreditScoreIcon style={{fontSize: "200%"}}/>
                                                            </Link>)
                                                    }


                                                </div>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <ToastContainer/>
            </div>
        </>
    )

}