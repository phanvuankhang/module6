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


function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<Content/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/details/:id" element={<Details/>}/>
                <Route path="/cart" element={<ShoppingCart/>}/>
                <Route path="/error" element={<ErrorAll/>}/>
                <Route path="/about" element={<AboutUs/>}/>
            </Routes>
            <Footer/>
        </>
    );
}

export default App;
