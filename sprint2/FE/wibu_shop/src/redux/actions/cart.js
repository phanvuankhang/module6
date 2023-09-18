import axios from "axios";
import {GET_ALL_CART, UPDATE_CART} from "./type";
const token = localStorage.getItem("token")

export const updateCart = (quantity) => async (dispatch) => {
    try {
        dispatch({
            type: UPDATE_CART,
            payload: quantity
        })
    } catch (e) {
    }
}

export const getShoppingCart = () => async (dispatch) => {
    try {
        let res;
        if (token !== null && typeof token === 'string' && token.trim() !== '') {
            res = await axios.get(`http://localhost:8080/api/shopping`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
        } else {
            res = await axios.get(`http://localhost:8080/api/shopping`, { withCredentials: true });
        }
        dispatch({
            type: GET_ALL_CART,
            payload: res.data.length,
        });
    } catch (error) {
        console.error('Error fetching shopping cart:', error);
    }
};





