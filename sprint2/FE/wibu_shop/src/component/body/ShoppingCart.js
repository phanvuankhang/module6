import {Link, useNavigate} from 'react-router-dom';
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
import {VnPayAPI} from "../../service/VnpayService";


export function ShoppingCart() {
    const [shoppingCart, setShoppingCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [username, setUsername] = useState(localStorage.getItem("username"));
    const dispatch = useDispatch()
    const navigate=useNavigate();


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
        try {
            if (vQuantity > 1 || val == 1) {
                await setShoppingCartAPI(val, id, sessionProduct);
                getCart();
            }
        }catch (e) {
            toast.error("Số lượng sản phẩm trong giỏ hàng vượt quá số lượng trong kho.!!")
        }

    }

    const vnpayPayment = async () => {
        const data = await VnPayAPI(totalPrice);
        await getCart()
        await dispatch(getShoppingCart())
        window.location.href = data;
        console.log(data)
    };

    const paymentt = async () => {
        try {
            Swal.fire({
                icon: "success",
                timer: 2000,
                title: "Thanh toán thành công",
                showConfirmButton: false
            }).then(async () => {
                const res = await createOrderAPI()
                await getCart()
                await dispatch(getShoppingCart())
                await navigate("/history")
            })
        } catch (error) {
            toast.error(error.response.data)
        }

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
                                    <tr >
                                        <td style={{textAlign: "center"}} colSpan="6">
                                            <h4 style={{color: "red",marginBottom:"50vh"}}>Chưa có sản phẩm nào trong giỏ hàng.</h4>
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
                                                           className="input" min="0"
                                                           style={{padding: "0 0"}}/>
                                                    <button type="button" value="+" className="plus"
                                                            onClick={() => setQuantity(1, s.id, s.quantity, s.products)}>
                                                        <span>+</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{(+s.price).toLocaleString()} VNĐ</td>
                                        <td>
                                            <a title="Delete" className="btn"><i class="bi bi-x"
                                                                                 style={{fontSize: "200%"}}
                                                                                 onClick={() => deleteCart(s.id, s.products.name, s.products.id)}></i></a>
                                        </td>

                                    </tr>
                                )))
                                : <>
                                    <tr style={{marginBottom:"20vh"}}>
                                        <td style={{textAlign: "center"}} colSpan="6">
                                            <h4 style={{color: "red",marginBottom:"50vh"}}>Chưa có sản phẩm nào trong giỏ hàng.</h4>
                                        </td>
                                    </tr>

                                </>
                            }

                            </tbody>
                        </table>
                        <div className="full" style={{marginRight: "10%", marginLeft: "10%"}}
                             title="Quay Lại">
                            <Link to='/'>
                                <button style={{background: "#3498db"}}
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
                                                                <>
                                                                    <div>
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
                                                                                Swal.fire({
                                                                                    icon: "error",
                                                                                    timer: 2000,
                                                                                    title: "Thanh toán thất bại",
                                                                                    showConfirmButton: false
                                                                                }).then(() => {
                                                                                    navigate("/");
                                                                                })
                                                                            }}
                                                                        />
                                                                    </div>
                                                                    <div>

                                                                        <button type="button"
                                                                                onClick={() => vnpayPayment()}
                                                                        >
                                                                            <img
                                                                                src="data:image/png;base64,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"
                                                                                width="330px" height="125px"/></button>
                                                                    </div>

                                                                </>
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