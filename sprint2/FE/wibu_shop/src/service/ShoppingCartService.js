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
        return res.data;
    } else {
        const res = await axios.get(`http://localhost:8080/api/shopping`, {withCredentials: true})
        return res.data;
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
            return res;
        } else {
            const res = await axios.post("http://localhost:8080/api/shopping", newValue, {withCredentials: true})
            return res;
        }
    } catch (e) {
        console.log(e)
        return e
    }
}

export const deleteShoppingCartAPI = async (id, idS) => {
    try {
        if (token != null) {
            const res = await axios.delete(`http://localhost:8080/api/shopping/delete/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                }
            );
            return res.data;
        } else {
            const res = await axios.delete(`http://localhost:8080/api/shopping/delete-session/${idS}`, {withCredentials: true});
            console.log(res.data)
            return res.data;
        }
    } catch (e) {
        return e;
    }
}

export const setShoppingCartAPI = async (index, id, product) => {
    try {
        if (token != null) {
            const res = await axios.post(`http://localhost:8080/api/shopping/${index}/${id}`, ""
                ,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                }
                , {withCredentials: true}
            );
            return res.data;
        } else {
            const res = await axios.post(`http://localhost:8080/api/shopping/${index}/` + product.id, "", {withCredentials: true}
            );
            return res.data;
        }

    } catch (e) {
        console.log(e)
        return e
    }
}