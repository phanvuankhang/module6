import {NavLink} from "react-router-dom";
import React from "react";
import {Outlet} from "react-router-dom";

export default function Home() {
    return (
        <>
            <nav
                className="navbar-expand-lg p-0"
                style={{
                    height: "8vh",
                    boxShadow: "0px 5px 10px #e9e4e4",
                    position: "sticky",
                    left: "0px",
                    top: "0px",
                    zIndex: "1",
                    right: "0px",
                    backgroundColor: "rgb(255, 255, 255)",
                }}
            >
                <div
                    className="container-fluid"
                    style={{height: "100%", justifyContent: "center"}}
                >
                    <ul
                        className=""
                        style={{
                            height: "100%",
                            display: "flex",
                            justifyContent: "center",
                            flexDirection: "row",
                            listStyle: "none",
                            alignItems: "center",
                        }}
                    >
                        <li className="nav-item">
                            <NavLink
                                style={({isActive}) => {
                                    return {
                                        backgroundColor: isActive ? "#27533e" : "",
                                        color: isActive ? "#fff" : "",
                                        borderRadius: "10px",
                                        height: "5vh",
                                        alignItems: "center",
                                        display: "flex",
                                        padding: "10px",
                                    };
                                }}
                                className="nav-link"
                                to={"/list"}
                            >
                                Danh sách cơ sở
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink
                                style={({isActive}) => {
                                    return {
                                        backgroundColor: isActive ? "#27533e" : "",
                                        color: isActive ? "#fff" : "",
                                        borderRadius: "10px",
                                        height: "5vh",
                                        alignItems: "center",
                                        display: "flex",
                                        padding: "10px",
                                    };
                                }}
                                className="nav-link active"
                                aria-current="page"
                                to={"/create-co-so"}
                            >
                                Tạo mới cơ sở
                            </NavLink>
                        </li>

                    </ul>
                </div>
            </nav>
            <div style={{minHeight: "90vh"}}>
                <Outlet/>
            </div>
        </>
    )
}