import '../../css/header.css';
export function Footer() {
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
                280 Đ. Trần Hưng Đạo, An Hải Tây,
                <br />
                Sơn Trà, Đà Nẵng 550000, Vietnam
              </p>
            </div>
            <div>
              <i className="ri-mail-send-line" />
              <p>wibushop@example.com</p>
            </div>
            <div>
              <i className="ri-phone-line" />
              <p>+0345 678 678</p>
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
                className="form-control k"
                id="name"
                placeholder="Họ và tên"
                required=""
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control k"
                name="email"
                id="email"
                placeholder="Email"
                required=""
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control k"
                name="subject"
                id="subject"
                placeholder="Tiêu đề"
                required=""
              />
            </div>
            <div className="form-group">
              <textarea
                className="form-control k"
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
            <div className="text-center k">
              <button type="submit" >Gửi tin nhắn</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  {/* End Contact Section */}
  {/* ======= Footer ======= */}
  <footer id="footer" style={{marginTop:"3vh"}}>
    <div className="container">
      <div className="row d-flex align-items-center">
        <div className="col-lg-12 text-lg-left text-center">
          <div className="copyright">
            © Copyright <strong>Wibu Shop</strong>. All Rights Reserved
          </div>

        </div>
      </div>
    </div>
  </footer>
  {/* End Footer */}
</>

    )
}