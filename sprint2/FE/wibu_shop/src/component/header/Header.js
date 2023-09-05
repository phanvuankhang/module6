import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, NavLink } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import '../../css/header.css'
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Dropdown, DropdownMenu, DropdownToggle } from 'reactstrap';
import logo from '../../images/logo.png';
export function Header() {

  return (
    <>
      <header id="header" className="fixed-top d-flex align-items-center">
        <div className="container d-flex align-items-center justify-content-between">
          <div className="logo">
            <h1>
              <NavLink to='/'><img style={{wight:"30vw",height:"20vh"}} src={logo} ></img>Wibu Shop</NavLink>
            </h1>
            {/* Uncomment below if you prefer to use an image logo */}
            {/* <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
          </div>
          <nav id="navbar" className="navbar">
            <ul >
              <li style={{marginRight:"1vw"}}>
                <NavLink className="nav-link scrollto " to='/'>
                  Trang Chủ
                </NavLink>
              </li>
              <li style={{marginRight:"1vw"}}>
                <a className="nav-link scrollto" href="#fan">
                  Sản Phẩm
                </a>
              </li>
              <li style={{marginRight:"1vw"}}>
                <a className="nav-link scrollto" href="">
                Blogs
                </a>
              </li>
              <li style={{marginRight:"15vw"}}>
                <a className="nav-link scrollto " href="#">
                  Về Chúng Tôi
                </a>
              </li>

              <li style={{
                display: "flex", textAlign: "center",
                alignItems: "center", fontWeight: "300"
              }}>


                    {/*<>*/}
                    {/*  <Dropdown*/}
                    {/*    className="nav-info-user">*/}
                    {/*    <DropdownToggle*/}
                    {/*      style={{*/}
                    {/*        fontSize: "120%",*/}
                    {/*      }}*/}
                    {/*      className="nav-link btn-light"*/}
                    {/*    >*/}
                    {/*      <i class="bi bi-person" style={{ fontSize: '120%', }}></i>*/}
                    {/*    </DropdownToggle>*/}
                    {/*    <DropdownMenu className="abc">*/}
                    {/*    <Link to="/info" className="dropdown-item "*/}
                    {/*        ><i class="bi bi-info-square" style={{fontSize:"110%"}}> Information</i></Link>*/}
                    {/*      <Link to="/history" className="dropdown-item "*/}
                    {/*        ><i class="bi bi-card-list" style={{fontSize:"110%"}}> Payment history</i></Link>*/}
                    {/*      <Link className="dropdown-item "*/}
                    {/*        to='/login'><i class="bi bi-box-arrow-in-right" style={{fontSize:"120%"}} >   Thoát</i></Link>*/}
                    {/*    </DropdownMenu>*/}
                    {/*  </Dropdown>*/}

                    {/*</>*/}

                    <>
                      <NavLink to="/login" className='font-a-header '
                        ><i class="bi bi-person" style={{ fontSize: '130%', }}></i>Đăng nhập</NavLink>

                    </>

              </li>
              <NavLink to='/cart' title='Shoping Cart' >
              <ShoppingCartOutlinedIcon style={{marginLeft:"10%"}} />Giỏ hàng
              </NavLink>
              
            </ul>


          </nav>
          {/* .navbar */}
        </div>
      </header>
      {/* End Header */}

    </>


  )

}


