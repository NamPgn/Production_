const header={
    render:function(){
        return `
        <!-- //header_img -->
        <nav>
                <img src="./src/img/165847928245ec4199ac9ca7c49b9fad5dd8bb5b6e.webp" alt="">
            </nav>
            <div class="nav_conten ">
                <!-- //header_menu -->
                <div class="menu w_25">
                    <ul>
                        <li><a  class="text_tf" href="#">Nữ</a></li>
                        <li class="active_menu_back"><a class="text_tf active_menu_ " href="#">plus size</a></li>
                        <li><a class="text_tf" href="#">Trẻ em</a></li>
                        <li><a class="text_tf" href="#">nam</a></li>
                        <li><a class="text_tf" href="#">đời sống</a></li>
                    </ul>
                </div>
                <!-- //header_logo -->
                <div class="logo w_25">
                    <h1 class="text_tf">shein</h1>
                </div>
                <!-- //header_slider -->
                <div class="header_slider w_25">
                    <div class="header_slider_item active_slider_">
                        <p> Vận chuyển tiêu chuẩn miễn phí  cho đơn hàng trên 230.000₫</p>
                    </div>
                    <div class="header_slider_item">
                        <p>GIẢM 70K <span>ĐH ĐẦU TIÊN TỪ 700K</span></p>
                    </div>
                    <div class="header_slider_item">
                        <p>Thanh toán khi nhận hàng</p>
                    </div>
                </div>
                <!-- ..header_iocn -->
                <div class="header_location w_25">
                    <div class="user">
                        <a href="./sing-up.html"><i class="fa-solid fa-user"></i></a>
                    </div>
                    <div class="cart">
                        <i class="fa-solid fa-cart-shopping"></i>
                        <div class="cart_conten ds_none">
                            
                        </div>
                    </div>
                    <div class="icon_love">
                        <i class="fa-regular fa-heart"></i>
                    </div>
                    <div class="icon_mail">
                        <i class="fa-solid fa-circle-nodes"></i>
                    </div>
                    <div class="icon_network">
                        <i class="fa-solid fa-globe"></i>
                    </div>
                </div>
            </div>
            <div class="header_bottom">
                <!-- /menu -->
                <div class="header_menu__">
                    <ul>
                        <li  class="text_tf"><a href="#">Hàng mới</a></li>
                        <li  class="text_tf"><a href="#">Trang phục</a></li>
                        <li  class="text_tf"><a href="#">Đầm</a></li>
                        <li class="text_tf"><a href="#">áo top</a></li>
                        <li class="text_tf"><a href="#">quần áo</a></li>
                        <li class="text_tf"><a href="#">Đồ lót & trang phục giản dị</a></li>
                        <li class="text_tf"><a href="#">quần áo đi biển</a></li>
                    </ul>
                </div>
                <!-- / input -->
                <div class="header_form">
                    <input type="text" placeholder="Boot">
                    <button><i class="fa-solid fa-magnifying-glass"></i></button>
                </div>
            </div>
        `
    }
}
export default header