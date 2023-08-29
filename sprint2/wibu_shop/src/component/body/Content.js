import ElectricRickshawIcon from '@mui/icons-material/ElectricRickshaw';
import WifiCalling3Icon from '@mui/icons-material/WifiCalling3';
import ReplayIcon from '@mui/icons-material/Replay';
import SettingsIcon from '@mui/icons-material/Settings';
import { NavLink } from 'react-router-dom';
import na from '../../images/naruto.png';
import '../../css/content.css';

export function Content() {

  return (
    <>
      {/* ======= Hero Section ======= */}
      <section id="hero" className="d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
              <h1 data-aos="fade-up" style={{color:"white"}}>Hãy đến với Wibu Shop</h1>
              <h2 data-aos="fade-up" data-aos-delay={400} style={{color:"white"}}>
                Chúng tôi là nhà cung cấp mô hình xuất sắc giá rẻ và chất lượng.
              </h2>
              <div data-aos="fade-up" data-aos-delay={800}>
                <a href="#about" className="btn-get-started scrollto">
                  Bắt đầu
                </a>
              </div>
            </div>
            <div
              className="col-lg-6 order-1 order-lg-2 hero-img"
              data-aos="fade-left"
              data-aos-delay={200}
            >
              <img src="quatnav.jpg" className="img-fluid animated" alt="" />
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
                <div className="service-icon icon1" ><ElectricRickshawIcon className='set w-100' /></div>
                <div className="service-content">
                  <div className="service-heading">Miễn phí vận chuyển</div>
                </div>
              </div>
              <div className="service-fourth service2">
                <div className="service-icon icon2" ><WifiCalling3Icon className='set w-100' /> </div>
                <div className="service-content">
                  <div className="service-heading">Hỗ trợ trực tuyến</div>
                </div>
              </div>
              <div className="service-fourth service3">
                <div className="service-icon icon3" ><ReplayIcon className='set w-100' /></div>
                <div className="service-content">
                  <div className="service-heading">Hoàn tiền</div>
                </div>
              </div>
              <div className="service-fourth service4">
                <div className="service-icon icon4" ><SettingsIcon className='set w-100' /></div>
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
                  {/* <li data-filter="*" className="filter-app">
                    <NavLink to="/#all" style={({isActive}) => {
                      return{
                        backgroundColor : isActive? "#3498db":"",
                        color : isActive? "white" :""
                      }
                    }}>All</NavLink>
                    
                  </li>
                  <li data-filter=".filter-app">Steam fan</li>
                  <li data-filter=".filter-card">Standing fan</li>
                  <li data-filter=".filter-web">Wall fan</li> */}
                  <li >Tất cả</li>
                  <li >Naruto</li>
                  <li >One piece</li>
                  <li >Dragon ball</li>
                </ul>
              </div>
            </div>
            <div
              className="row portfolio-container"
              data-aos="fade-up"
              data-aos-delay={400}
            >

                <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                  <div className="portfolio-wrap">
                    <img
                      src={na}
                      className="img-fluid"
                      alt=""
                    />
                    <div className="portfolio-info">
                      <h4>naruto</h4>
                      <h3 style={{ color: "white" }}>1000vnd</h3>
                      <p>naruto</p>


                          <h4 style={{ color: "red" }}>Hết hàng</h4> :
                          <></>


                      <div className="portfolio-links">
                        <a
                          href="https://tcorder.vn/wp-content/uploads/2021/05/quat-mini-cam-tay-ban-nhieu-tren-shopee-3.jpg"
                          data-gallery="portfolioGallery"
                          className="portfolio-lightbox"
                          title="App 1"
                        >
                          <i className="bx bx-plus" />
                        </a>
                        <a  title="Add to Cart">
                          <i className="bi bi-plus" />
                        </a>
                        <NavLink to="" title="More Details">
                          <i className="bi bi-link-45deg" />
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>



            </div>

                <button  className="load-more-button">Tải thêm</button>



          </div>
        </section>
        {/* End Portfolio Section */}
      </main>
      {/* End #main */}



    </>

  )
}