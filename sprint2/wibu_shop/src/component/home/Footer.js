import "../../css/bootstrap.min.css";
import "../../css/main.css";
import "../../css/magnific-popup.css";
import "../../css/ionicons.css";
import "../../css/owl.carousel.theme.min.css";

export const Footer=()=>{
    return(
        <>
            <section id="footer-widget" className="footer-widget">
                <div className="container header-bg">
                    <div className="row">
                        <div className="col-sm-3">
                            <h3>Our Popular Services</h3>
                            <ul>
                                <li><a href="#">Space Robot</a></li>
                                <li><a href="#">Lego Robot</a></li>
                                <li><a href="#">Toy for Robot</a></li>
                                <li><a href="#">Industry Robot</a></li>
                                <li><a href="#">Sports Robot</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-3">
                            <h3>Important Link</h3>
                            <ul>
                                <li><a href="#">Lorem</a></li>
                                <li><a href="#">Ipsum</a></li>
                                <li><a href="#">Dolar</a></li>
                                <li><a href="#">Set amet</a></li>
                                <li><a href="#">Iodiet lorem</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-3">
                            <h3>Our Latest Services</h3>
                            <ul>
                                <li><a href="#">Edu Robot</a></li>
                                <li><a href="#">Low Robot</a></li>
                                <li><a href="#">Mega Robot</a></li>
                                <li><a href="#">Industry Robot</a></li>
                                <li><a href="#">Sports Robot</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-3">
                            <h3>Our Services</h3>
                            <div className="widget-img-box">
                                <a className="test-popup-link" href="assets/images/widget-big-1.png">
                                    <img className="widget-img" src="assets/images/widget-1.png" alt="widget"/>
                                </a>
                                <a className="test-popup-link" href="assets/images/widget-big-2.png">
                                    <img className="widget-img" src="assets/images/widget-2.png" alt="widget"/>
                                </a>
                                <a className="test-popup-link" href="assets/images/widget-big-3.png">
                                    <img className="widget-img" src="assets/images/widget-3.png" alt="widget"/>
                                </a>
                                <a className="test-popup-link" href="assets/images/widget-big-4.png">
                                    <img className="widget-img" src="assets/images/widget-4.png" alt="widget"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="footer text-center">
                <h3>&copy; Theme by <a href="https://themewagon.com/">Themewagon</a></h3>
            </footer>
            </>
    )
}