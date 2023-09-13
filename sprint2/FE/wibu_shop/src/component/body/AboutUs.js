import {useEffect} from "react";

export const AboutUs = () => {
    useEffect(()=>{
        window.scrollTo(0, 0)
    })
    return (
        <>
            <div className="container" style={{marginTop: "18vh"}}>
                <div id="content" className="content-area page-wrapper" role="main">
                    <div className="row row-main">
                        <div className="large-12 col">
                            <div className="col-inner"><h2 className="wp-block-heading" id="h-về-chung-toi">Về chúng
                                tôi</h2><br/><p>Wibu Shop chuyên cung cấp các sản phẩm mô hình anime đa dạng như Naruto,
                                One
                                Piece, Dragon Ball chất lượng cao với mức giá rẻ tốt nhất thị trường.
                                Ngoài ra, shop hỗ trợ order các sản phẩm mô hình theo yêu cầu của các bạn.</p><br/><p>Để
                                giúp các
                                bạn thỏa mãn niềm đam mê được chạm ngắm và trưng bày các nhân vật anime yêu thích nhưng
                                lại
                                không có nhiều chi phí để sở hữu mô hình thật, thì Wibu Shop với kinh nghiệm sưu tầm và
                                kiến
                                thức chuyên sâu mô hình anime mong muốn mang đến những sản phẩm mô hình anime giá rẻ,
                                với
                                chất lượng cao đã qua quá trình chọn lọc kỹ càng. Vì vậy, những sản phẩm thuộc Wibu Shop
                                đảm
                                bảo sản phẩm như trên hình.</p><br/><p>Bên cạnh đó Wibu Shop mong muốn mang đến trải
                                nghiệm mua
                                hàng tiện lợi và nhanh chóng bằng cách tập trung phát triển kênh mua sắm online trên
                                website
                                wibushop.com phục vụ cho mọi đối tượng và khắp các tỉnh thành Việt Nam.&nbsp;</p><br/>
                                <h2
                                    className="wp-block-heading"><strong>Các kênh mua sắm thuộc Wibu Shop</strong></h2>
                                <p>Website: <a href="#">Wibushop.com</a></p><br/><p>Shopee: <a
                                    href="#">https://shopee.vn/wibushop</a></p><br/><p>Facebook: <a
                                    href="#"
                                    rel="#">https://www.facebook.com/MohinhWBS</a></p><br/><p>Tiktok: <a
                                    href="#"
                                    rel="#">https://www.tiktok.com/@wibushop</a></p><br/><p>Store: <a
                                    href="#" rel="#">280 Đ. Trần Hưng Đạo, An Hải Tây, Sơn Trà, Đà Nẵng 550000,
                                    Vietnam</a></p><br/><p>Điện thoại: <a href="#">0345 678
                                    678</a></p></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}