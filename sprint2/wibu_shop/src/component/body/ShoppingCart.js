import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export function ShoppingCart() {

    return (
        <>
            <div className="container" style={{ marginTop: "7%" }}>
                <div className="section-title" data-aos="fade-up">
                    <h2>Giỏ hàng</h2>
                </div>
                <div className="row col-md-12">
                    <div className="col-md-8">
                        <table className="table ">
                            <thead>
                                <tr>
                                    <th >Hình ảnh</th>
                                    <th>Sản phẩm</th>
                                    <th>Giá</th>
                                    <th>Số lượng</th>
                                    <th>Tổng giá</th>
                                    <th>&ensp;</th>
                                </tr>
                            </thead>
                            <tbody>

                                    <tr >
                                        <td>
                                                <img className="pic"
                                                src="https://media.istockphoto.com/id/501962059/vi/vec-to/tem-%C4%91%C3%A3-b%C3%A1n-h%E1%BA%BFt-v%E1%BB%9Bi-v%C4%83n-b%E1%BA%A3n-m%C3%A0u-%C4%91%E1%BB%8F-tr%C3%AAn-m%C3%A0u-tr%E1%BA%AFng.jpg?s=2048x2048&w=is&k=20&c=AvsQlSW4KlL5T8xgUqYCqQRe7J2w1ncPdbojNwOts2k="
                                                alt="" />
                                                <img className="pic"
                                                src="login.png"
                                                alt="" />

                                            
                                        </td>
                                        <td>One piece</td>
                                        <td>10000 VNĐ</td>
                                        <td>
                                            <div className="d-flex">
                                                <div className="d-flex">
                                                    <button type="button" className="minus"><span>-</span></button>
                                                    <input value=""
                                                        className="input" min="0"  style={{padding:"0 0"}}/>
                                                    <button type="button" value="+" className="plus"><span>+</span></button>
                                                </div>
                                            </div>
                                        </td>
                                        <td>10000 VNĐ</td>
                                        <td>
                                            <a title="Delete"><i class="bi bi-x" style={{ fontSize: "200%" }} ></i></a>
                                        </td>
                                        
                                    </tr>
                                <>
                                    <tr><p></p></tr>
                                    <tr><p></p></tr>
                                    <tr><p></p></tr>
                                    <tr ><td></td><td></td><td></td><td>Giỏ hàng không có sản phẩm.</td><td></td></tr>

                                </>


                            </tbody>
                        </table>
                    </div>
                    <div className="col-md-4">
                        <div class="stack">
                            <div class="card">
                                <div class="image" >

                                    <h2 style={{ textAlign: "center", marginBottom: "10%", marginTop: "5%", color: "#6495ED" }}>Thanh toán</h2>
                                    <p style={{ marginLeft: "4%" }}>Số lượng sản phẩm: 1 </p>
                                    <h5 style={{ marginLeft: "4%" }}>Tổng giá: 10000 VNĐ</h5>
                                    <div  style={{ marginTop: "10%" }}>
                                       <div className="full" style={{  marginLeft: "45%" ,marginBottom:"5%"}} title="Back Home">
                                            <Link to='/'>
                                                <ArrowBackIcon style={{ fontSize: "200%" }} />
                                            </Link>
                                        </div>
                                            <div className="full">

                                        </div>

                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div >
        </>
    )
}