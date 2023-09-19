import axios from "axios";
const token = localStorage.getItem("token")

export const VnPayAPI=async (total)=>{
    try {
        const res=await axios.post(`http://localhost:8080/vnpay/create/${total}`,"",{
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return res.data
    }catch (e) {
        console.log(e)
        return e;
    }

}
