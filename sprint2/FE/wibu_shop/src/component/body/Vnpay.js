import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import numeral from 'numeral';
import { useDispatch } from "react-redux";
import {getShoppingCart} from "../../redux/actions/cart";
import {createOrderAPI} from "../../service/OrderService";

function Return () {
    const navigate = useNavigate();
    const [responseCode, setResponseCode] = useState();
    const [order, setOrder] = useState();
    const [price, setPrice] = useState();
    const [codePayment, setCodePayment] = useState();
    const dispatch = useDispatch();
    console.log("vnpayasd")
    const getURL = () => {
        const urlParams = new URLSearchParams(window.location.search);
        const responseCode = urlParams.get('vnp_ResponseCode');
        const totalPrice = urlParams.get('vnp_Amount');
        const code = urlParams.get('vnp_BankTranNo');
        setPrice(totalPrice);
        setResponseCode(responseCode);
        setCodePayment(code);
    }

    const display = () => {
        if (responseCode == "00") {
            Swal.fire({
                icon: "success",
                timer: 2000,
                title: "Thanh toán thành công",
                showConfirmButton: false
            }).then(async () => {
                const data = await createOrderAPI(price);
                setOrder(data);
                await dispatch(getShoppingCart())
                    navigate("/history")
            })
        } else {
            Swal.fire({
                icon: "error",
                timer: 2000,
                title: "Thanh toán thất bại",
                showConfirmButton: false
            }).then(() => {
                navigate("/");
            })
        }
    }

    console.log(order);

    useEffect(() => {
        getURL();
    }, [])

    useEffect(() => {
        display();
    }, [responseCode])
}
export default Return;