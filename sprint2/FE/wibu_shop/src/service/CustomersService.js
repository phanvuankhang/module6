import axios from "axios";


const token = localStorage.getItem("token")


export const getCustomersAPI = async () => {
    const res = await axios.get(`http://localhost:8080/api/customer/info`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return res;
}

export const createCustomersAPI = async (customer) => {
    const res = await axios.post(`http://localhost:8080/api/customer/new-customer`, customer, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return res;
}