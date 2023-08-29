import { toast } from 'react-toastify'
import '../../css/header.css';
export function Footer() {
  const clickMe = () => {
    toast.success("Thask you so much")
  }
    return(
        <>
  {/* ======= Contact Section ======= */}
  <section id="contact" className="contact" style={{marginTop:"5%"}}>
    <div className="container">
      <div className="section-title" data-aos="fade-up">
        <h2>LIÊN HỆ CHÚNG TÔI</h2>
      </div>
      <div className="row">
        <div
          className="col-lg-4 col-md-6"
          data-aos="fade-up"
          data-aos-delay={100}
        >
          <div className="contact-about">
            <h3>Wibu Shop</h3>
            <p>
              Chuyên mô hình figure chất lượng cao, mẫu mã đa dạng, mô hình giá rẻ tốt nhất thị trường & hỗ trợ trợ order sản phẩm.
            </p>
            <div className="social-links">
              <a href="#" className="twitter">
                <i className="bi bi-twitter" />
              </a>
              <a href="#" className="facebook">
                <i className="bi bi-facebook" />
              </a>
              <a href="#" className="instagram">
                <i className="bi bi-instagram" />
              </a>
              <a href="#" className="linkedin">
                <i className="bi bi-linkedin" />
              </a>
            </div>
          </div>
        </div>
        <div
          className="col-lg-3 col-md-6 mt-4 mt-md-0"
          data-aos="fade-up"
          data-aos-delay={200}
        >
          <div className="info">
            <div>
              <i className="ri-map-pin-line" />
              <p>
                A108 Trần Hưng Đạo
                <br />
                Đà Nãng, DN 535022
              </p>
            </div>
            <div>
              <i className="ri-mail-send-line" />
              <p>wibushop@example.com</p>
            </div>
            <div>
              <i className="ri-phone-line" />
              <p>+84222222222</p>
            </div>
          </div>
        </div>
        <div
          className="col-lg-5 col-md-12"
          data-aos="fade-up"
          data-aos-delay={300}
        >
          <form
            
            className="php-email-form"
          >
            <div className="form-group">
              <input
                type="text"
                name="name"
                className="form-control"
                id="name"
                placeholder="Họ và tên"
                required=""
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                name="email"
                id="email"
                placeholder="Email"
                required=""
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="subject"
                id="subject"
                placeholder="Tiêu đề"
                required=""
              />
            </div>
            <div className="form-group">
              <textarea
                className="form-control"
                name="message"
                rows={5}
                placeholder="Nội dung"
                required=""
                defaultValue={""}
              />
            </div>
            <div className="my-3">
              <div className="loading">Đang tải</div>
              <div className="error-message" />
              <div className="sent-message">
                Tin nhắn của bạn đã được gửi. Cảm ơn!
              </div>
            </div>
            <div className="text-center">
              <button type="submit" onClick={() => clickMe()}>Gửi tin nhắn</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  {/* End Contact Section */}
  {/* ======= Footer ======= */}
  <footer id="footer">
    <div className="container">
      <div className="row d-flex align-items-center">
        <div className="col-lg-6 text-lg-left text-center">
          <div className="copyright">
            © Copyright <strong>Wibu Shop</strong>. All Rights Reserved
          </div>

        </div>
        <div className="col-lg-6">
          <nav className="footer-links text-lg-right text-center pt-2 pt-lg-0">
            <a href="#intro" className="scrollto">
              Trang chủ
            </a>
            <a href="#about" className="scrollto">
              Về chúng tôi
            </a>
            <a href="#">Chính sách bảo mật</a>
            <a href="#">Điều khoản sử dụng</a>
          </nav>
        </div>
      </div>
    </div>
  </footer>
  {/* End Footer */}
</>

    )
}