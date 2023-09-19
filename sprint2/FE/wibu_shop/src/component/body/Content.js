import ElectricRickshawIcon from '@mui/icons-material/ElectricRickshaw';
import WifiCalling3Icon from '@mui/icons-material/WifiCalling3';
import ReplayIcon from '@mui/icons-material/Replay';
import SettingsIcon from '@mui/icons-material/Settings';
import {NavLink, useNavigate} from 'react-router-dom';
import '../../css/content.css';
import React, {useEffect, useState} from "react";
import {getAllProductsAPI} from "../../service/ProductsService";
import {ToastContainer, toast} from "react-toastify";
import {createShoppingCartAPI} from "../../service/ShoppingCartService";
import {Field, Form, Formik} from "formik";
import {useDispatch} from "react-redux";
import {getShoppingCart} from "../../redux/actions/cart";


export function Content() {
    const navigate = useNavigate();
    const [productList, setProductList] = useState([]);
    const [page, setPage] = useState(0);
    const [totalPage, setTotalPage] = useState();
    const [type, setType] = useState("null");
    const [name, setName] = useState("");
    const [orderBy, setOrderBy] = useState("");
    const role = localStorage.getItem('role');
    const dispatch = useDispatch()


    const getProductList = async (page = 0, name = "", type = "null", orderBy = "") => {
        try {
            const res = await getAllProductsAPI(page, name, type, orderBy)
            setProductList(() => [...productList, ...res.data.content]);
            setTotalPage(res.data.totalPages);

        } catch (error) {
            navigate('/error')
        }
    }
    const getAllProductType = async (page = 0, type = "null") => {
        const res = await getAllProductsAPI(page, name, type, orderBy)
        setPage(0);
        setProductList(res.data.content);
        setTotalPage(res.data.totalPages);
    }


    const loadMore = async () => {
        await getProductList(page + 1, name, type, orderBy)
        setPage(page + 1);
    }

    const onclickType = async (type) => {
        if (type == 0) {
            setType("null")
            getAllProductType()
        } else if (type == 1) {
            setType("Naruto")
            getAllProductType("", "Naruto")
        } else if (type == 2) {
            setType("One piece")
            getAllProductType("", "One piece")
        } else if (type == 3) {
            setType("Dragon ball")
            getAllProductType("", "Dragon ball")
        }

        const filters = document.querySelectorAll('#portfolio-flters li');
        filters.forEach(filter => {
            filter.classList.remove('active');
        });

        // Thêm lớp 'active' cho mục được chọn
        const selectedFilter = document.querySelector(`#portfolio-flters li:nth-child(${type + 1})`);
        selectedFilter.classList.add('active');

    }

    const addCart = async (id) => {
        try {
            await createShoppingCartAPI(id, 1)
            await dispatch(getShoppingCart())

            await toast.success("Thêm vào giỏ hàng thành công!!")
        }catch (e) {
            await toast.error("Số lượng sản phẩm trong giỏ hàng vượt quá số lượng trong kho.!!")
        }

    }
    useEffect(() => {
        getProductList();

        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            {/* ======= Hero Section ======= */}
            <section id="hero" className="d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div
                            className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
                            <h1 data-aos="fade-up" style={{color: "white"}}>Hãy đến với Wibu Shop</h1>
                            <h2 data-aos="fade-up" data-aos-delay={400} style={{color: "white"}}>
                                Chúng tôi là nhà cung cấp mô hình xuất sắc giá rẻ và chất lượng.
                            </h2>
                            <div data-aos="fade-up" data-aos-delay={800}>
                                <a href="#fan" className="btn-get-started scrollto">
                                    Bắt đầu
                                </a>
                            </div>
                        </div>
                        <div
                            className="col-lg-6 order-1 order-lg-2 hero-img"
                            data-aos="fade-left"
                            data-aos-delay={200}
                        >
                            <img src="quatnav.jpg" className="img-fluid animated" alt=""/>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Hero */}
            <main id="main" className='container'>
                <div id="ctservicecmsblock" className='row'>

                    <div className="service_container container">
                        <div className="service-area">
                            <div className="service-fourth service1">
                                <div className="service-icon icon1"><ElectricRickshawIcon className='set w-100'/></div>
                                <div className="service-content">
                                    <div className="service-heading">Miễn phí vận chuyển</div>
                                </div>
                            </div>
                            <div className="service-fourth service2">
                                <div className="service-icon icon2"><WifiCalling3Icon className='set w-100'/></div>
                                <div className="service-content">
                                    <div className="service-heading">Hỗ trợ trực tuyến</div>
                                </div>
                            </div>
                            <div className="service-fourth service3">
                                <div className="service-icon icon3"><ReplayIcon className='set w-100'/></div>
                                <div className="service-content">
                                    <div className="service-heading">Hoàn tiền</div>
                                </div>
                            </div>
                            <div className="service-fourth service4">
                                <div className="service-icon icon4"><SettingsIcon className='set w-100'/></div>
                                <div className="service-content">
                                    <div className="service-heading">Dịch vụ của chúng tôi</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <section id="fan" className="portfolio row">
                    <div className="container">
                        <div className="section-title" data-aos="fade-up">
                            <h2>Sản phẩm nổi bật</h2>
                            <Formik initialValues={{
                                name: "",
                                orderBy: ""
                            }} onSubmit={async (values) => {
                                const search = async () => {
                                    const res = await getAllProductsAPI(0, values.name.trim(), type, values.orderBy)
                                    await setName(values.name.trim())
                                    await setOrderBy(values.orderBy)
                                    await setPage(0)
                                    setProductList(res.data.content)
                                    console.log(res)
                                }
                                search()
                            }}>
                                <Form>
                                    <div className="row ">
                                        <div className="form-group col-3" style={{marginLeft: "22vw"}}>
                                            <Field
                                                name="name"
                                                type="text"
                                                className="form-control form-control-lg bg-light fs-6 k"
                                                placeholder="Nhập tên sản phẩm."
                                            />
                                        </div>
                                        <div className=" col-2" style={{marginTop: "0.5vh"}}>
                                            <Field as="select" className="form-control" name="orderBy">
                                                <option style={{textAlign: "center"}} value="new">--Sản phẩm mới
                                                    nhất--
                                                </option>
                                                <option style={{textAlign: "center"}} value="a-z">--Sắp xếp A-Z--
                                                </option>
                                                <option style={{textAlign: "center"}} value="priceAscending">--Giá tăng
                                                    dần--
                                                </option>
                                                <option style={{textAlign: "center"}} value="priceDescending">--Giá giảm
                                                    dần--
                                                </option>
                                            </Field>
                                        </div>
                                        <div className='col-2'>
                                            <button style={{background: "#3498db",marginTop:"0.5vh",marginLeft:"-6.5vw"}}
                                                    className="btn btn ">
                                                <span style={{color: "white"}}>Tìm kiếm</span>
                                            </button>
                                        </div>
                                    </div>

                                </Form>
                            </Formik>

                        </div>
                        <div className="row" data-aos="fade-up" data-aos-delay={200}>
                            <div className="col-lg-12 d-flex justify-content-center">
                                <ul id="portfolio-flters">
                                    <li onClick={() => onclickType(0)} className="active">Tất cả</li>
                                    <li onClick={() => onclickType(1)}>Naruto</li>
                                    <li onClick={() => onclickType(2)}>One piece</li>
                                    <li onClick={() => onclickType(3)}>Dragon ball</li>
                                </ul>
                            </div>
                        </div>
                        <div
                            className="row portfolio-container"
                            data-aos="fade-up"
                            data-aos-delay={400}
                        >
                            {
                                productList.length > 0 ?
                                    productList.map((p) => (


                                        <div className="col-lg-3 col-md-6 portfolio-item filter-app">
                                            <div className="portfolio-wrap">
                                                <img
                                                    src={p?.image}
                                                    className="img-fluid"
                                                    alt=""
                                                />

                                                <div className="portfolio-info">
                                                    <NavLink to={`/details/${p.id}`} title="Thông tin chi tiết">

                                                        <h4 style={{fontSize: "15px"}}>{p.name}</h4>
                                                        <h3 style={{
                                                            color: "white",
                                                            fontSize: "20px"
                                                        }}>{(+p.price).toLocaleString()} VNĐ</h3>
                                                        <p>{p.productType.name}</p>
                                                    </NavLink>
                                                    {role && role === "ROLE_ADMIN" ?
                                                        "" :
                                                        <>
                                                            {p.quantity >= 1 ?
                                                                <div className="portfolio-links">

                                                                    <a onClick={() => addCart(p)}
                                                                       title="Thêm vào giỏ hàng">
                                                                        <i className="bi bi-cart-plus"></i>
                                                                    </a>
                                                                </div> : ""
                                                            }
                                                        </>
                                                    }

                                                    {
                                                        p.quantity < 1 ?
                                                            <h4 style={{color: "red", fontSize: "15px"}}>Hết hàng</h4> :
                                                            ""
                                                    }

                                                </div>
                                            </div>
                                        </div>
                                    )) :

                                    <div style={{textAlign: "center", marginBottom: "10vh"}}>
                                        <img src="https://bizweb.dktcdn.net/100/330/208/files/hinh-nen-7-vien-ngoc-rong-13.jpg?v=1655530004216" alt="" style={{width:"40vw"}}/>
                                        <h4 style={{color: "red",marginTop:"5vh"}}>Tìm kiếm không có kết quả</h4>
                                        <h6 style={{color: "red"}}>Xin lỗi, chúng tôi không thể tìm được kết quả hợp với tìm kiếm của bạn.</h6>
                                    </div>
                            }
                        </div>


                        {productList.length  ?
                            (
                                page < totalPage - 1 ? (
                                    <button onClick={() => loadMore()} className="load-more-button">Tải thêm
                                    </button>

                                ) : ""
                            ) : ""
                        }

                    </div>
                </section>
                {/* End Portfolio Section */
                }
            </main>
            {/* End #main */}

            <ToastContainer/>
        </>

    )
}