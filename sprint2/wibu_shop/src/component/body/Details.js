import { Carousel } from 'react-bootstrap';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link, useParams } from 'react-router-dom';
export function Details() {

  return (
    <>
      <main id="main" style={{ marginTop: "20vh" }}>
        <section className="layout_padding ">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="row">
                  <div className="row">
                    <div className="col-md-7 p-relative r-left">
                      <div className="full back_blog text_align_center padding_right_left_15">
                        <Carousel >

                            <Carousel.Item >
                              <img
                                className="d-block "
                                src="https://khomohinh.com/wp-content/uploads/2022/09/mo-hinh-nhan-vat-naruto-chibi-7cm-3-400x400.jpg"
                                alt="First slide"
                                style={{ width: "80%", marginLeft: "10%", height: "500px" }}
                              />
                            </Carousel.Item>

                        </Carousel>
                      </div>
                    </div>
                    <div className="col-md-5">
                      <div className="full heading_s1">
                        <h1 style={{ color: "#3498db" }}>Naruto</h1>
                        <br />
                        <p>
                          {/* {product.description} */}

                      </p>
                      <br />
                      <p>Naruto</p>
                      <p>Số lượng trong kho: 1</p>
                      <h3 style={{ color: "#3498db" }}>Giá: 10000 VNĐ</h3>
                      <div className="d-flex">
                        <p style={{ marginRight: "2%" }}>Số lượng:</p><div className="d-flex">
                          <button type="button" className="minus" ><span>-</span></button>
                          <input value=""
                            className="input" min="0" max="" style={{padding:"0 0"}}/>
                          <button type="button" value="+" className="plus" ><span>+</span></button>
                        </div>
                      </div>

                    </div>
                    <div className="d-flex" style={{ marginTop: "5%" }}>
                      <div className="full" style={{ marginRight: "10%", marginLeft: "10%" }} title="Quay Lại">
                        <Link to='/'>
                          <ArrowBackIcon style={{ fontSize: "200%" }} />
                        </Link>
                      </div>
                      <div className="full">

                        <Link  title='Add to Cart'>
                          <AddShoppingCartIcon style={{ fontSize: "200%" }} />
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
      <section id="portfolio" className="portfolio" style={{marginTop:"5%"}}>
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h2>Sản phẩm khác</h2>
          </div>
          <Carousel interval={5000}>

              <Carousel.Item>
                <div
                  className="row portfolio-container"
                  data-aos="fade-up"
                  data-aos-delay={400}
                >


                  <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                    <div className="portfolio-wrap">
                      <img
                        src="https://khomohinh.com/wp-content/uploads/2023/07/mo-hinh-luffy-wano-gear-4-dao-quy-onigashima-33cm-1-400x400.jpg.webp"
                        className="img-fluid"
                        alt=""
                      />
                      <div className="portfolio-info">
                        <h4>One piece</h4>
                        <p>One piece</p>
                        <div className="portfolio-links">
                          <a
                            href="https://khomohinh.com/wp-content/uploads/2022/09/mo-hinh-nhan-vat-naruto-chibi-7cm-3-400x400.jpg"
                            data-gallery="portfolioGallery"
                            className="portfolio-lightbox"
                            title="Web 3"
                          >
                            <i className="bx bx-plus" />
                          </a>
                          <a href="portfolio-details.html" title="More Details">
                            <i className="bi bi-plus" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                    <div className="portfolio-wrap">
                      <img
                        src="login.png"
                        className="img-fluid"
                        alt=""
                      />
                      <div className="portfolio-info">
                        <h4>Naruto</h4>
                        <p>One piece</p>
                        <div className="portfolio-links">
                          <a
                            href="https://khomohinh.com/wp-content/uploads/2022/09/mo-hinh-nhan-vat-naruto-chibi-7cm-3-400x400.jpg"
                            data-gallery="portfolioGallery"
                            className="portfolio-lightbox"
                            title="App 1"
                          >
                            <i className="bx bx-plus" />
                          </a>
                          <a href="#" title="Add to Cart">
                            <i className="bi bi-plus" />
                          </a>
                          <a  title="More Details">
                            <i className="bi bi-link-45deg" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                    <div className="portfolio-wrap">
                      <img
                        src="https://khomohinh.com/wp-content/uploads/2022/09/mo-hinh-nhan-vat-naruto-chibi-7cm-3-400x400.jpg"
                        className="img-fluid"
                        alt=""
                      />
                      <div className="portfolio-info">
                        <h4>One piece</h4>
                        <p>One piece</p>
                        <div className="portfolio-links">
                          <a
                            href="https://khomohinh.com/wp-content/uploads/2022/09/mo-hinh-nhan-vat-naruto-chibi-7cm-3-400x400.jpg"
                            data-gallery="portfolioGallery"
                            className="portfolio-lightbox"
                            title="App 2"
                          >
                            <i className="bx bx-plus" />
                          </a>
                          <a href="portfolio-details.html" title="More Details">
                            <i className="bi bi-plus" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel.Item>

          </Carousel>
        </div>
      </section>
      {/* End Portfolio Section */}
    </main >
      {/* End #main */ }
    </>

  )
}