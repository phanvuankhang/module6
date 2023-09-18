import { useNavigate } from 'react-router-dom';
import React, { useState,useEffect } from "react";
import {getCustomersAPI} from "../../service/CustomersService";

export function Information() {
    const navigate = useNavigate();
    const [customer, setCustomer] = useState();
    const getCustomer = async () => {
        try {
            const rs = await getCustomersAPI()
            setCustomer(rs.data)
        } catch (error) {
            navigate('/')
        }
    }

    useEffect(() => {
        document.title = "Thông tin cá nhân";
        getCustomer();
      }, [])
      if(!customer){
        return null;
    }
    return (
        <>

            <div className="containerr" style={{ marginTop: "10%" }}>
                <div className="avatar" style={{marginRight:"2vw"}}>
                    <img
                        src={customer.image}
                        alt=""
                    />
                </div>
                <div className="name">
                    <h1>{customer.name}</h1>

                    <ul className="contact">
                        <li>
                            <span>Số Điện thoại </span> {customer.phoneNumber}
                        </li>
                        <li>
                            <span>Email </span> {customer.email}
                        </li>
                        <li>
                            <span>Ngày sinh </span> {customer.birthday}
                        </li>
                        <li>
                            <span>Giới tính </span> {customer.gender == 0 ? "Nũ" :"Nam"}
                        </li>
                    </ul>
                </div>
                <div className="info">
                    <ul>
                        <li>
                            Địa chỉ: <b>{customer.address}</b> - Việt Nam
                        </li>
                        <li>Tài khoản: {customer.users.username}</li>
                    </ul>
                </div>
                <div className="intro">
                    <h2>Thông tin cá nhân</h2>
                </div>
            </div>

        </>
    )
}
