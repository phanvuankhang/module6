import axios from "axios";

const token = localStorage.getItem('token');

export const createOrderAPI = async () => {

    if (token != null) {
        const res = await axios.post('http://localhost:8080/api/order', ""
            ,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            }
        );
        return res;
    }
}

export const getOrderAPI = async () => {

    if (token != null) {
        const res = await axios.get(`http://localhost:8080/api/order`
            ,
            {

                headers: {
                    Authorization: `Bearer ${token}`,
                }
            }
        );
        return res.data;
    }
}

export const getOrderDetailAPI = async (id) => {

    if (token != null) {
        const res = await axios.get(`http://localhost:8080/api/order/detail?id=${id}`
            ,
            {

                headers: {
                    Authorization: `Bearer ${token}`,
                }
            }
        );
        return res.data;
    }
}