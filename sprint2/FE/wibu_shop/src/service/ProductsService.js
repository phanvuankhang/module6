import axios from "axios";

export const getAllProductsAPI = async (page, name) => {
    try {
        return (await axios.get("http://localhost:8080/api/product?page=" + page + "&name=" + name))
    } catch (e) {
        console.log(e);
        return null;
    }
}

export const getDetailProductAPI = async (id) => {
    try {
        return (await axios.get("http://localhost:8080/api/product/detail/" + id))
    } catch (e) {
        console.log(e);
        return null;
    }
}

export const getImagesProductAPI = async (id) => {
    try {
        return (await axios.get("http://localhost:8080/api/image/" + id))
    } catch (e) {
        console.log(e);
        return null;
    }
}