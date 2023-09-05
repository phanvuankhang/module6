import ElectricRickshawIcon from '@mui/icons-material/ElectricRickshaw';
import WifiCalling3Icon from '@mui/icons-material/WifiCalling3';
import ReplayIcon from '@mui/icons-material/Replay';
import SettingsIcon from '@mui/icons-material/Settings';
import {NavLink, useNavigate} from 'react-router-dom';
import '../../css/content.css';
import React, {useEffect, useState} from "react";
import {getAllProductsAPI} from "../../service/ProductsService";
import {toast} from 'react-toastify';


export function Content() {
    const navigate = useNavigate();
    const [productList, setProductList] = useState([]);
    const [page, setPage] = useState(0);
    const [totalPage, setTotalPage] = useState();
    const [type, setType] = useState("null");

    const getProductList = async (page = 0, type = "null") => {
        try {
            const res = await getAllProductsAPI(page, type)
            setProductList(() => [...productList, ...res.data.content]);
            setTotalPage(res.data.totalPages);
        } catch (error) {
            navigate('/error')
        }
    }
    const getAllProductType = async (page = 0, type = "null") => {
        const res = await getAllProductsAPI(page, type)
        setPage(0);
        setProductList(res.data.content);
        setTotalPage(res.data.totalPages);
    }


    const loadMore = async () => {
        await getProductList(page + 1, type)
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
    }

    useEffect(() => {
        document.title = "Home";
        getProductList();
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
                            <p>Chọn sản phẩm yêu thích của bạn</p>
                        </div>
                        <div className="row" data-aos="fade-up" data-aos-delay={200}>
                            <div className="col-lg-12 d-flex justify-content-center">
                                <ul id="portfolio-flters">
                                    <li onClick={() => onclickType(0)}>Tất cả</li>
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
                                productList.map((p) => (


                                    <div className="col-lg-3 col-md-6 portfolio-item filter-app">
                                        <div className="portfolio-wrap">
                                            <img
                                                src={p.image}
                                                className="img-fluid"
                                                alt=""
                                            />

                                            <div className="portfolio-info">
                                                <NavLink to={`/details/${p.id}`} title="Thông tin chi tiết">

                                                <h4>{p.name}</h4>
                                                <h3 style={{color: "white"}}>{p.price} VNĐ</h3>
                                                <p>{p.productType.name}</p>
                                            </NavLink>
                                                {p.quantity < 1 ?
                                                    <h4 style={{color: "red"}}>Hết hàng</h4> :
                                                    ""
                                                }
                                                <div className="portfolio-links">

                                                    <a title="Thêm vào giỏ hàng">
                                                        <i className="bi bi-cart-plus"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>


                        {
                            page < totalPage - 1 ? (
                                <button onClick={() => loadMore()} className="load-more-button">Tải thêm</button>

                            ) : ""
                        }

                    </div>
                </section>
                {/* End Portfolio Section */}
            </main>
            {/* End #main */}


        </>

    )
}