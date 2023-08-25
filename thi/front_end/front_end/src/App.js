import logo from './logo.svg';
import './App.css';
import React from "react";
import {Routes, Route} from "react-router-dom"
import Home from "./component/Home";

import CoSoList from "./component/ListCoSo";
import CreateCoSo from "./component/CreateCoSo";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}>
            <Route path="/list" element={<CoSoList/>}/>
            <Route path="/create-co-so" element={<CreateCoSo/>}/>
            </Route>
        </Routes>
    );
}

export default App;
