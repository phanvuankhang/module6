import axios from "axios";

export const getListCoSoAPI = async (page, name, nameEmployee) => {
    try {
        return (await axios.get("http://localhost:8080/api/co-so?page=" + page + "&name=" + name + "&nameEmployee=" + nameEmployee))
    } catch (e) {
        console.log(e);
        return null;
    }
}
export const getListQuanLyAPI = async () => {
    try {
        return (await axios.get("http://localhost:8080/api/co-so/quan-ly"))
    } catch (e) {
        console.log(e);
        return null;
    }
}
export const createCoSoAPI = async (coSo) => {
    try {
        return (await axios.post("http://localhost:8080/api/co-so/create", coSo))
    } catch (e) {
        console.log(e);
        return null;
    }
}
export const deleteCoSoAPI = async (id) => {
    try {
        return (await axios.delete("http://localhost:8080/api/co-so/" + id))
    } catch (e) {
        console.log(e);
        return null;
    }
}
export const getIdQuanLyAPI = async (id) => {
    try {
        return (await axios.get("http://localhost:8080/api/co-so/" + id))
    } catch (e) {
        console.log(e);
        return null;
    }
}