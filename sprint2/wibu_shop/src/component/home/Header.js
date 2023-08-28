import "../../css/bootstrap.min.css";
import "../../css/main.css";
import "../../css/magnific-popup.css";
import logo from '../../images/logo-home.png'
export const Header = () => {
    return (
        <>
            <div className="site-header-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <a href="index.html"><img style={{width:"7vw"}} src={logo} alt="logo"/></a>
                        </div>
                        <div className="col-sm-3 col-sm-offset-3 text-right">
                            <span className="ion-android-cart"></span> 0 products
                            <form>
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder=""/>
                                    <span className="input-group-btn">
                                    <button className="btn btn-default btn-robot" type="button">Search</button>
                                </span>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


            <section id="header" className="main-header">
                <div className="container">

                    <div className="row">
                        <nav className="navbar navbar-default">
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                                        data-target="#site-nav-bar" aria-expanded="false">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                            </div>

                            <div className="collapse navbar-collapse" id="site-nav-bar">
                                <ul className="nav navbar-nav">
                                    <li className="active"><a href="index.html">Home</a></li>
                                    <li><a href="about.html">About</a></li>
                                    <li><a href="shop.html">Shop</a></li>
                                    <li><a href="faq.html">FAQ</a></li>
                                    <li><a href="contact.html">Contact</a></li>
                                </ul>
                            </div>
                        </nav>
                    </div>

                    <div className="intro row">
                        <div className="overlay"></div>
                        <div className="col-sm-6 col-sm-offset-6">
                            <h2 className="header-quote">Save time and lower</h2>
                            <p>
                                Your sweeping costs with the
                            </p>
                            <h1 className="header-title">WIBU<br/><span className="thin">Shop</span></h1>
                        </div>
                    </div>
                </div>
                <div className="nutral"></div>
            </section>
        </>
)
}