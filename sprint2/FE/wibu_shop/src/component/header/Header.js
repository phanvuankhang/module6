import 'bootstrap/dist/css/bootstrap.min.css';
import {Link, NavLink} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import '../../css/header.css'
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import {Dropdown, DropdownMenu, DropdownToggle} from 'reactstrap';
import logo from '../../images/logo.png';
import {useEffect, useState} from "react";
import {toast} from "react-toastify";
import {useDispatch, useSelector} from "react-redux";
import {getShoppingCart, updateCart} from "../../redux/actions/cart";

export function Header() {
    const [isLogin, setIsLogin] = useState();
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');
    const [username, setUsername] = useState(localStorage.getItem('username'));
    const [dropdown, setDropdown] = useState(false);
    const quantityProduct = useSelector(state => state.cart)
    const dispatch = useDispatch()


    const toggleDropdown = () => {
        setDropdown(!dropdown)
    }

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        localStorage.removeItem("role");
        setIsLogin(false);
        setDropdown(false);
        window.location.reload();
        window.location.href = '/login/l';
        toast.success("Đăng xuất thành công !!");
    }
    useEffect(() => {
        if (token) {
            setIsLogin(true);
            dispatch(getShoppingCart(true))
        } else {
            dispatch(getShoppingCart(false))
        }
    }, [])
    return (
        <>
            <header id="header" className="fixed-top d-flex align-items-center">
                <div className="container d-flex align-items-center justify-content-between">
                    <div className="logo">
                        <h1>
                            <NavLink to='/'><img style={{wight: "30vw", height: "20vh"}} src={logo}></img>Wibu
                                Shop</NavLink>
                        </h1>
                        {/* Uncomment below if you prefer to use an image logo */}
                        {/* <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
                    </div>
                    <nav id="navbar" className="navbar">
                        <ul>
                            <li>
                                <NavLink className="nav-link scrollto " to='/'>
                                    Trang Chủ
                                </NavLink>
                            </li>
                            <li>
                                <a className="nav-link scrollto" href="#fan">
                                    Sản Phẩm
                                </a>
                            </li>
                            <li>
                                <a className="nav-link scrollto" href="">
                                    Tin tức
                                </a>
                            </li>
                            <li>
                                <NavLink className="nav-link scrollto " to="/about">
                                    Về Chúng Tôi
                                </NavLink>
                            </li>
                            <li style={{marginRight: "9vw"}}>
                                <a className="nav-link scrollto" href="#contact">
                                    Liên hệ
                                </a>
                            </li>
                            <li style={{
                                display: "flex", textAlign: "center",
                                alignItems: "center", fontWeight: "300"
                            }}>
                                {isLogin ?
                                    role && role === "ROLE_ADMIN" ?

                                        <>
                                            <Dropdown isOpen={dropdown} toggle={toggleDropdown}
                                                      className="nav-info-user">
                                                <DropdownToggle
                                                    style={{
                                                        fontSize: "120%",
                                                    }}
                                                    className="nav-link btn-light"
                                                >
                                                    <i class="bi bi-person" style={{fontSize: '120%',}}></i><span
                                                    style={{color: "#3498db"}}>{username}</span>
                                                </DropdownToggle>
                                                <DropdownMenu className="abc">
                                                    {/*<Link to="/info" className="dropdown-item "*/}
                                                    {/*><i class="bi bi-info-square"*/}
                                                    {/*    style={{fontSize: "110%"}}> Quản lý cửa hàng</i></Link>*/}
                                                    <Link to="/history" className="dropdown-item ">
                                                        <i class="bi bi-card-list" style={{fontSize: "110%"}}> Lịch sử
                                                            đặt hàng</i></Link>
                                                    <Link className="dropdown-item " onClick={() => handleLogout()}
                                                          to='/login'><i class="bi bi-box-arrow-in-right"
                                                                         style={{fontSize: "120%"}}> Thoát</i></Link>
                                                </DropdownMenu>
                                            </Dropdown>

                                        </>
                                        :
                                        <>
                                            <Dropdown isOpen={dropdown} toggle={toggleDropdown}
                                                      className="nav-info-user">
                                                <DropdownToggle
                                                    style={{
                                                        fontSize: "120%",
                                                    }}
                                                    className="nav-link btn-light"
                                                >
                                                    <i class="bi bi-person" style={{fontSize: '120%',}}></i><span
                                                    style={{color: "#3498db"}}>{username}</span>
                                                </DropdownToggle>
                                                <DropdownMenu className="abc">
                                                    <Link to="/information" className="dropdown-item "
                                                    ><i class="bi bi-info-square"
                                                        style={{fontSize: "110%"}}> Thông tin cá nhân</i></Link>
                                                    <Link to="/history" className="dropdown-item ">
                                                        <i class="bi bi-card-list" style={{fontSize: "110%"}}> Lịch sử
                                                            giao dịch</i></Link>
                                                    <Link className="dropdown-item " onClick={() => handleLogout()}
                                                          to='/login/l'><i class="bi bi-box-arrow-in-right"
                                                                         style={{fontSize: "120%"}}> Thoát</i></Link>
                                                </DropdownMenu>
                                            </Dropdown>

                                        </>
                                    :
                                    <>
                                        <NavLink to="/login/l" className='font-a-header '
                                        ><i class="bi bi-person" style={{fontSize: '130%',}}></i>Đăng nhập</NavLink>

                                    </>

                                }
                            </li>
                            {isLogin ?
                                role && role === "ROLE_ADMIN" ?
                                    "" :
                                    <NavLink to='/cart' title='Shoping Cart'>
                                        <i className="bi bi-cart-dash" style={{fontSize:"20px"}}>
                                            <sup style={{fontSize: "15px",color:"red"}}>{quantityProduct > 0 ? quantityProduct : ""}</sup>
                                        </i> Giỏ hàng
                                    </NavLink>
                                :
                                <NavLink to='/cart' title='Shoping Cart'>
                                    <i className="bi bi-cart-dash" style={{fontSize:"20px"}}>
                                        <sup style={{fontSize: "15px",color:"red"}}>{quantityProduct > 0 ? quantityProduct : ""}</sup>
                                    </i> Giỏ hàng
                                </NavLink>
                            }
                        </ul>


                    </nav>
                    {/* .navbar */}
                </div>
            </header>
            {/* End Header */}

        </>


    )

}


