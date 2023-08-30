import axios from "axios";

export const getAllProducstAPI = async (page, name) => {
    try {
        return (await axios.get("http://localhost:8080/api/product?page=" + page + "&name=" + name))
    } catch (e) {
        console.log(e);
        return null;
    }
}