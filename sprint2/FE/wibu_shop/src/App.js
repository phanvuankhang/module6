import './App.css';
import React from "react";
import {Route, Routes} from "react-router";
import {Header} from "./component/header/Header";
import {Footer} from "./component/footer/Footer";
import {Content} from "./component/body/Content";
import {Login} from "./component/login/Login";
import {Register} from "./component/register/Register";
import {Details} from "./component/body/Details";
import {ShoppingCart} from "./component/body/ShoppingCart";
import {ErrorAll} from "./component/body/ErrorAll";
import {AboutUs} from "./component/body/AboutUs";
import {History} from "./component/body/History";
import {Information} from "./component/body/Information";
import Provider from "react-redux/es/components/Provider";
import store from "./redux/store";
import Return from "./component/body/Vnpay";

function App() {
    return (
        <> <Provider store={store}>
            <Header/>
            <Routes>
                <Route path="/" element={<Content/>}/>
                <Route path="/login/:params" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/details/:id" element={<Details/>}/>
                <Route path="/cart" element={<ShoppingCart/>}/>
                <Route path="/error" element={<ErrorAll/>}/>
                <Route path="/about" element={<AboutUs/>}/>
                <Route path="/history" element={<History/>}/>
                <Route path="/information" element={<Information/>}/>
                <Route path="/return" element={<Return/>}/>
            </Routes>
            <Footer/>
        </Provider>
        </>
    );
}

export default App;
