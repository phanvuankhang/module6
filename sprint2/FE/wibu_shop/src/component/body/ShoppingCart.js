import {Link} from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import React, {useEffect, useState} from "react";
import {getShoppingCartAPI} from "../../service/ShoppingCartService";
import {toast} from 'react-toastify';
import CreditScoreIcon from '@mui/icons-material/CreditScore';


export function ShoppingCart() {
    const [shoppingCart, setShoppingCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0)
    const [totalQuantity, setTotalQuantity] = useState(0)


    const getCart = async () => {
        try {
            const res = await getShoppingCartAPI();
            await setShoppingCart(res.data)
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
    console.log(shoppingCart)

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

                                ( shoppingCart.map((s) => (
                                    <tr>
                                        <td>
                                            {s.quantity < 1 ?
                                                <img className="pic"
                                                     src="https://media.istockphoto.com/id/501962059/vi/vec-to/tem-%C4%91%C3%A3-b%C3%A1n-h%E1%BA%BFt-v%E1%BB%9Bi-v%C4%83n-b%E1%BA%A3n-m%C3%A0u-%C4%91%E1%BB%8F-tr%C3%AAn-m%C3%A0u-tr%E1%BA%AFng.jpg?s=2048x2048&w=is&k=20&c=AvsQlSW4KlL5T8xgUqYCqQRe7J2w1ncPdbojNwOts2k="
                                                     alt=""/>
                                                :
                                                <img className="pic"
                                                     src={s.images.image}
                                                     alt=""/>

                                            }
                                        </td>
                                        <td>{s.products.name}</td>
                                        <td>{(+s.products.price).toLocaleString()} VNĐ</td>
                                        <td>
                                            <div className="d-flex">
                                                <div className="d-flex">
                                                    <button type="button" className="minus"><span>-</span></button>
                                                    <input value=""
                                                           className="input" min="0" style={{padding: "0 0"}}/>
                                                    <button type="button" value="+" className="plus"><span>+</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{(+s.price).toLocaleString()} VNĐ</td>
                                        <td>
                                            <a title="Delete"><i class="bi bi-x" style={{fontSize: "200%"}}></i></a>
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
                                    <h5 style={{marginLeft: "4%"}}>Tổng giá: {(totalPrice).toLocaleString()} VNĐ</h5>
                                    <div style={{marginTop: "10%"}}>
                                        {
                                            // totalQuantity == 0 ?(<div className="full" style={{  marginLeft: "45%" ,marginBottom:"5%"}} title="Back Home">
                                            //     <Link to='/'>
                                            //         <ArrowBackIcon style={{ fontSize: "200%" }} />
                                            //     </Link>
                                            // </div>):(
                                            //     <div className="full">
                                            //         {
                                            //             username ? (
                                            //
                                            //                 <PayPalButton
                                            //                 amount={totalPrice==0?1:totalPrice}
                                            //                 // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
                                            //                 onSuccess={(details, data) => {
                                            //                     paymentt()
                                            //
                                            //                     // OPTIONAL: Call your server to save the transaction
                                            //                     return fetch("/paypal-transaction-complete", {
                                            //                         method: "post",
                                            //                         body: JSON.stringify({
                                            //                             orderID: data.orderID
                                            //                         })
                                            //                     });
                                            //                 }}
                                            //                 onError={(e) =>{
                                            //                     toast.error("Thanh toán thất bại!!")
                                            //                 }}
                                            //             />
                                            //             ) :
                                            //                 (<Link to='/login' title='Payment' style={{  marginLeft: "45%" ,marginBottom:"5%"}}>
                                            //                     <CreditScoreIcon style={{ fontSize: "200%" }} />
                                            //                 </Link>)
                                            //         }
                                            //
                                            //
                                            //     </div>
                                            // )
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}