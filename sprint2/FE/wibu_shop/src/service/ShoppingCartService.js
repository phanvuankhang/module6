import axios from "axios";


const token = localStorage.getItem("token")


export const getShoppingCartAPI = async () => {

    if (token != null) {
        const res = await axios.get(`http://localhost:8080/api/shopping`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
        return res;
    } else {
        const res = await axios.get(`http://localhost:8080/api/shopping`, {withCredentials: true})
        return res;
    }
}

export const createShoppingCartAPI = async (idProduct, quantity) => {
    const newValue = {
        quantity: quantity,
        products: idProduct
    }
    const id = idProduct.id;
    try {
        if (token) {
            const res = await axios.post(`http://localhost:8080/api/shopping/create/${id}/${quantity}`, "",

                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                }
            );
            return res.data;
        } else {
            const res = await axios.post("http://localhost:8080/api/shopping/", newValue, {withCredentials: true})
            return res.data;
        }
    } catch (e) {
        console.log(e)
        return e
    }
}