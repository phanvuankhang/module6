import {Carousel} from 'react-bootstrap';
import Carousel1 from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {Link} from 'react-router-dom';
import {useNavigate, useParams} from "react-router";
import {useEffect, useState} from "react";
import {getAllProductsAPI, getDetailProductAPI, getImagesProductAPI} from "../../service/ProductsService";

export function Details() {
    const navigate = useNavigate();
    const [product, setProduct] = useState({});
    const params = useParams();
    const [description, setDescription] = useState([]);
    const [images, setImages] = useState([]);
    const [productType, setProductType] = useState({});
    const [productList, setProductList] = useState([]);
    const [quantity, setQuantity] = useState(1)

    const responsive = {
        desktop: {
                breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const getProduct = async () => {
        try {
            const res = (await getDetailProductAPI(params.id)).data;
            const res1 = await getImagesProductAPI(params.id)
            setImages(res1.data)
            await setProduct(res);
            if (product) {
                await setDescription(res.description.split("-"))
            }
            setProductType(res.productType)
        } catch (error) {
            // navigate('/error')
        }
    }

    const reload = (id) => {
        navigate(`/details/${id}`)
        window.location.reload()
    }


    useEffect(() => {
        window.scrollTo(0, 0);
        getProduct();
    }, [])


    const getAllProducts = async () => {
        const rs = await getAllProductsAPI(0, "null")
        setProductList(rs.data.content)
    }

    const editQuantity = async (val) => {
        if (val == 1) {
            if (quantity < product.quantity) {
                setQuantity(quantity + 1)

            }
        } else {
            if (quantity > 0) {
                setQuantity(quantity - 1)

            }
        }
    }
    useEffect(() => {
        document.title = "Detail";
        getAllProducts();
    }, [])
    if (!product) {
        return null
    }
    return (
        <>
            <main id="main" style={{marginTop: "20vh"}}>
                <section className="layout_padding ">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="row">
                                        <div className="col-md-7 p-relative r-left">
                                            <div className="full back_blog text_align_center padding_right_left_15">
                                                <Carousel>

                                                    {images.map((i) => (
                                                        <Carousel.Item>
                                                            <img
                                                                className="d-block "
                                                                src={i.image}
                                                                alt="First slide"
                                                                style={{
                                                                    width: "80%",
                                                                    marginLeft: "10%",
                                                                    height: "500px"
                                                                }}
                                                            />
                                                        </Carousel.Item>
                                                    ))}
                                                </Carousel>
                                            </div>
                                        </div>
                                        <div className="col-md-5">
                                            <div className="full heading_s1">
                                                <h3 style={{color: "#3498db"}}>{product.name}</h3>
                                                <br/>
                                                <p>
                                                    {description.map((des) => (
                                                            <p>{des}</p>
                                                        )
                                                    )}

                                                </p>
                                                <br/>
                                                <p>Loại mô hình: {productType.name}</p>
                                                <p>Số lượng trong kho: {product.quantity}</p>
                                                <h3 style={{color: "#3498db"}}>Giá: {product.price}</h3>
                                                <div className="d-flex">
                                                    <p style={{marginRight: "2%"}}>Số lượng:</p>
                                                    <div className="d-flex">
                                                        <button type="button" className="minus"><span>-</span></button>
                                                        <input value="1"
                                                               className="input" min="0" max=""
                                                               style={{padding: "0 0"}}/>
                                                        <button type="button" value="+" className="plus"><span>+</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex" style={{marginTop: "5%"}}>
                                                <div className="full" style={{marginRight: "10%", marginLeft: "10%"}}
                                                     title="Quay Lại">
                                                    <Link to='/'>
                                                        <ArrowBackIcon style={{fontSize: "200%"}}/>
                                                    </Link>
                                                </div>
                                                <div className="full">

                                                    <Link title='Thêm vào giỏ hàng'>
                                                        <AddShoppingCartIcon style={{fontSize: "200%"}}/>
                                                    </Link>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* ======= Portfolio Section ======= */}
                <section id="portfolio" className="portfolio" style={{marginTop: "5%"}}>
                    <div className="container">
                        <div className="section-title" data-aos="fade-up">
                            <h2>Sản phẩm khác</h2>
                        </div>
                        <Carousel1  responsive={responsive}  autoPlay
                                    autoPlaySpeed={5000}
                                    infinite>
                            {productList.map((p,index) => (

                                <a onClick={() => reload(p.id)} title="More Details">
                                        <div className="col-lg-11 col-md-6 portfolio-item filter-web">
                                            <div className="portfolio-wrap">
                                                <img
                                                    src={p.image}
                                                    className="img-fluid"
                                                    alt=""
                                                />
                                                <div className="portfolio-info">
                                                    <h4>{p.name}</h4>
                                                    <p>{p.productType.name}</p>
                                                    <div className="portfolio-links">
                                                        <a
                                                            href="https://khomohinh.com/wp-content/uploads/2022/09/mo-hinh-nhan-vat-naruto-chibi-7cm-3-400x400.jpg"
                                                            data-gallery="portfolioGallery"
                                                            className="portfolio-lightbox"
                                                            title="Web 3"
                                                        >
                                                            <i className="bx bx-plus"/>
                                                        </a>


                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                </a>
                            ))}
                        </Carousel1>
                    </div>
                </section>
                {/* End Portfolio Section */}
            </main>
            {/* End #main */}
        </>

    )
}