import './App.css';
import React from "react";
import {Route, Routes} from "react-router";
import {Header} from "./component/header/Header";
import {Footer} from "./component/footer/Footer";
import {Content} from "./component/body/Content";
import {Login} from "./component/login/Login";
import {LoginNew} from "./component/loginNew/LoginNew";
import {Details} from "./component/body/Details";
import {ShoppingCart} from "./component/body/ShoppingCart";


function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<Content/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<LoginNew/>}/>
                <Route path="/details" element={<Details/>}/>
                <Route path="/cart" element={<ShoppingCart/>}/>
            </Routes>
            <Footer/>
        </>
    );
}

export default App;
