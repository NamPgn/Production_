const ren = document.querySelector('.product_conten');
var product;
async function test() {
    const auth_cart = await (await fetch(' http://localhost:3000/auth')).json();
    auth_cart.filter(i => {
        console.log(i.cart);
    })
}
test();
async function add_to_cart() {
    const url = new URLSearchParams(window.location.search).get('_id');
    const id = this.getAttribute('id');//laasys ra cái id
    const api = await (await fetch('http://localhost:3000/nam')).json(); //api
    const api_cart = await (await fetch(' http://localhost:3000/cart')).json();
    const auth_cart = await (await fetch(' http://localhost:3000/auth')).json();


    //yêu cầu đăng nhập
    const btn_sing = document.querySelectorAll('.cl_sign');
    if (url) {
        const get_id = api.find(function (a) {
            return a.id == id
        })
        console.log(get_id);
        if (get_id) {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Thêm sản phầm thành công',
                text: "Vui lòng kiểm tra lại giỏ hàng của bạn!",
                showConfirmButton: false,
                timer: 1500
            })
            var dem = 0;
            setInterval(function () {
                return new Promise(function (resolve, reject) {
                    axios.post(`http://localhost:3000/auth/${url}`, {
                        id: dem++,
                        "img": get_id.img,
                        "name": get_id.name,
                        "price": get_id.price,
                    }).then((response) => {
                        resolve(response);
                        console.log(response);
                    })
                })
            }, 1500);
        }
    } else {
        btn_sing.forEach(element => {
            element.addEventListener('click', function () {
                Swal.fire({
                    title: 'Bạn cần đăng nhập để có thể sử dụng chức năng của chúng tôi?',
                    text: "Bạn có chắc chắn muốn đăng nhập!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Đăng nhập!'
                }).then((result) => {
                    if (result.isConfirmed) {
                        window.location = "http://127.0.0.1:5500/Production_/sing-up.html";
                    }
                })
            })
        });

    }
}
const api = async function (data) {
    const api = product = await (await fetch('http://localhost:3000/nam')).json();
    api.map(function (l) {
        if (ren) {
            ren.innerHTML += `
            <div class="product">
                <a href="./detail_product.html?_id=${l.id}"><img src="${l.img}" alt=""></a>
                <p><a href="./detail_product.html?_id=${l.id}">${l.name}</a></p>
                <div class="price">$${l.price}đ</div>
                <div class="love_icon">
                    <i class="fa-regular fa-heart"></i>
                </div>
                <p  style="font-size: 12px; margin-top:10px;">Kiểu: ${l.type}</p>
                <p  style="font-size: 12px;">Mã sản phẩm: #${l.msp}</p>
                <button type="button" id=${l.id}  class="btn btn-primary cl_sign" style="font-size:11px; margin-top:5px;">  Thêm vào giỏ hàng</button>
            </div>
        `
        }
    })
    //add to cart

    const icon_click_cart = document.querySelector('.cart i');
    const cart_form = document.querySelector('.cart_conten');
    icon_click_cart.addEventListener('click', function () {
        cart_form.classList.toggle('ds_bl');
    })

    const product_Cart = document.querySelector('.cart_conten')
    async function viewer_cart() {
        const api_cart = await (await fetch(' http://localhost:3000/cart')).json();
        api_cart.map(function (a) {
            product_Cart.innerHTML += `
        <div class="cart_item">
            <div class="cart_img">
                <img src="${a.img}" alt="">
            </div>  
            <div class="cart_title">
                <p>${a.name}</p>
            </div>
            <div class="price_cart">
                <p>$${a.price}</p>
            </div>                             
        </div>                  
        `
        })
    }
    const add_cart = document.querySelectorAll('.btn-primary')
    add_cart.forEach(element => {
        element.addEventListener('click', add_to_cart);
    });
    viewer_cart();

    //chi tiết của thằng user
    async function user_detail() {
        const url = new URLSearchParams(window.location.search).get("_id");
        console.log(url);
        const user_table = document.querySelector('.users__');
        const user_detail = document.querySelector('.user_detail');
        user_detail.addEventListener('click', function () {
            user_table.classList.add('ds_bl')
        })
        const user_viewer = document.querySelector('.users__');
        const user_content = await (await fetch(' http://localhost:3000/auth')).json();
        const m = user_content.find(function (a) {
            // console.log(a);
            return a.id == url;
        })
        if (m) {
            user_viewer.innerHTML = `
        <section style="background-color: #eee;">
            <div class="container py-5">
                <div class="row">
                    <div class="col-lg-4">
                        <div class="card mb-4">
                            <div class="card-body text-center">
                                <img src="${m.img}"
                                    alt="avatar" class="rounded-circle img-fluid" style="width: 150px;">
                                <h5 class="my-3">${m.name}</h5>
                                <p class="text-muted mb-1">Full Stack Developer</p>
                                <p class="text-muted mb-4">Bay Area, San Francisco, CA</p>
                                <div class="d-flex justify-content-center mb-2">
                                    <button type="button" class="btn btn-primary edit">Chỉnh sửa</button>
                                    <button type="button" class="btn btn-outline-primary ms-1">Message</button>
                                </div>
                            </div>
                        </div>
                        <div class="card mb-4 mb-lg-0">
                            <div class="card-body p-0">
                                <ul class="list-group list-group-flush rounded-3">
                                    <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                                        <i class="fas fa-globe fa-lg text-warning"></i>
                                        <p class="mb-0">https://mdbootstrap.com</p>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                                        <i class="fab fa-github fa-lg" style="color: #333333;"></i>
                                        <p class="mb-0">mdbootstrap</p>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                                        <i class="fab fa-twitter fa-lg" style="color: #55acee;"></i>
                                        <p class="mb-0">@mdbootstrap</p>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                                        <i class="fab fa-instagram fa-lg" style="color: #ac2bac;"></i>
                                        <p class="mb-0">mdbootstrap</p>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                                        <i class="fab fa-facebook-f fa-lg" style="color: #3b5998;"></i>
                                        <p class="mb-0">mdbootstrap</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-8">
                        <div class="card mb-4">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-sm-3">
                                        <p class="mb-0">Full Name</p>
                                    </div>
                                    <div class="col-sm-9">
                                        <p class="text-muted mb-0">${m.name}</p>
                                    </div>
                                </div>
                                <hr>
                                <div class="row">
                                    <div class="col-sm-3">
                                        <p class="mb-0">Email</p>
                                    </div>
                                    <div class="col-sm-9">
                                        <p class="text-muted mb-0">${m.email}</p>
                                    </div>
                                </div>
                                <hr>
                                <div class="row">
                                    <div class="col-sm-3">
                                        <p class="mb-0">Age</p>
                                    </div>
                                    <div class="col-sm-9">
                                        <p class="text-muted mb-0">${m.age}</p>
                                    </div>
                                </div>
                                <hr>
                                <div class="row">
                                    <div class="col-sm-3">
                                        <p class="mb-0">Mobile</p>
                                    </div>
                                    <div class="col-sm-9">
                                        <p class="text-muted mb-0">(098) 765-4321</p>
                                    </div>
                                </div>
                                <hr>
                                <div class="row">
                                    <div class="col-sm-3">
                                        <p class="mb-0">Address</p>
                                    </div>
                                    <div class="col-sm-9">
                                        <p class="text-muted mb-0">Hà nội</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="card mb-4 mb-md-0">
                                    <div class="card-body">
                                        <p class="mb-4"><span class="text-primary font-italic me-1">assigment</span>
                                            Project Status
                                        </p>
                                        <p class="mb-1" style="font-size: .77rem;">Web Design</p>
                                        <div class="progress rounded" style="height: 5px;">
                                            <div class="progress-bar" role="progressbar" style="width: 80%"
                                                aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <p class="mt-4 mb-1" style="font-size: .77rem;">Website Markup</p>
                                        <div class="progress rounded" style="height: 5px;">
                                            <div class="progress-bar" role="progressbar" style="width: 72%"
                                                aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <p class="mt-4 mb-1" style="font-size: .77rem;">One Page</p>
                                        <div class="progress rounded" style="height: 5px;">
                                            <div class="progress-bar" role="progressbar" style="width: 89%"
                                                aria-valuenow="89" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <p class="mt-4 mb-1" style="font-size: .77rem;">Mobile Template</p>
                                        <div class="progress rounded" style="height: 5px;">
                                            <div class="progress-bar" role="progressbar" style="width: 55%"
                                                aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <p class="mt-4 mb-1" style="font-size: .77rem;">Backend API</p>
                                        <div class="progress rounded mb-2" style="height: 5px;">
                                            <div class="progress-bar" role="progressbar" style="width: 66%"
                                                aria-valuenow="66" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="card mb-4 mb-md-0">
                                    <div class="card-body">
                                        <p class="mb-4"><span class="text-primary font-italic me-1">assigment</span>
                                            Project Status
                                        </p>
                                        <p class="mb-1" style="font-size: .77rem;">Web Design</p>
                                        <div class="progress rounded" style="height: 5px;">
                                            <div class="progress-bar" role="progressbar" style="width: 80%"
                                                aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <p class="mt-4 mb-1" style="font-size: .77rem;">Website Markup</p>
                                        <div class="progress rounded" style="height: 5px;">
                                            <div class="progress-bar" role="progressbar" style="width: 72%"
                                                aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <p class="mt-4 mb-1" style="font-size: .77rem;">One Page</p>
                                        <div class="progress rounded" style="height: 5px;">
                                            <div class="progress-bar" role="progressbar" style="width: 89%"
                                                aria-valuenow="89" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <p class="mt-4 mb-1" style="font-size: .77rem;">Mobile Template</p>
                                        <div class="progress rounded" style="height: 5px;">
                                            <div class="progress-bar" role="progressbar" style="width: 55%"
                                                aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <p class="mt-4 mb-1" style="font-size: .77rem;">Backend API</p>
                                        <div class="progress rounded mb-2" style="height: 5px;">
                                            <div class="progress-bar" role="progressbar" style="width: 66%"
                                                aria-valuenow="66" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <i class="fa-solid fa-xmark close_users__"></i>
        </section>
        `
        }
        const img = document.querySelector('.img');
        const name_product = document.querySelector('.name_product');
        const age = document.querySelector('.price_');
        const fomr_user = document.querySelector('.form_control_edit_add_de');
        const update_user = document.querySelector('.edit');
        const email_address = document.querySelector('.email_address');
        const password = document.querySelector('.password')
        if (update_user) {
            update_user.addEventListener('click', function () {
                fomr_user.classList.add('active_add_item')
            })
        }
        const close = document.querySelector('.icon_close i');
        close.addEventListener('click', function () {
            fomr_user.classList.remove('active_add_item')
        })
        user_content.filter(function (i) {
            if (url == i.id) {
                img.value = i.img,
                    name_product.value = i.name,
                    age.value = i.age,
                    email_address.value = i.email,
                    password.value = i.pass
            }
        })
        function Myupdate() {
            Swal.fire({
                title: 'Bạn có chắc muốn sửa thông tin không ?',
                text: "Bạn sẽ không thể hoàn tác!",
                icon: 'info',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Có, sửa user!'
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire(
                        'Sửa!',
                        'Sửa thông tin thành công',
                        'success'
                    )
                    setInterval(function () {
                        return new Promise(function (resolve, reject) {
                            axios.put('http://localhost:3000/auth/' + url, {
                                img: img.value,
                                name: name_product.value,
                                age: age.value,
                                email: email_address.value,
                                pass: password.value
                            })
                                .then(function (response) {
                                    resolve(response)
                                })
                            return false;
                        }, 1500);
                    })
                }
            })

        };
        const close_users__ = document.querySelector('.close_users__');
        if (close_users__) {
            close_users__.addEventListener('click', function () {
                user_table.classList.remove('ds_bl')
            })
        }
        document.querySelector('.click_producttinon').addEventListener('click', Myupdate);
    } user_detail();
}
const banner = document.querySelector('.banner_detail')
const detail_product = async () => {
    const url = new URLSearchParams(window.location.search).get("_id");
    let api = await (await fetch('http://localhost:3000/nam')).json();
    const _id = api.find(function (i) {
        return i.id == url
    })
    if (banner) {
        banner.innerHTML = `
    <div class="banner_image_">
    <div class="banner_img">
        <img src="${_id.img}" alt="">
    </div>
</div>
<div class="banner_conten_">
    <div>
        <h3 class="title_detail" style="margin-bottom: 20px;">${_id.name}</h3>
    </div>
    <div>
        <p class="comment">
            Sản phẩm có hạn
        </p>
        <p  style="font-size: 12px; margin-top:10px;">Kiểu: ${_id.type}</p>
        <p  style="font-size: 12px;">Mã sản phẩm: #${_id.msp}</p>
    </div>
    <br>
    <div class="price" style="color:red;">Giá sản phẩm: $${_id.price}đ</div>
</div>
    `
    }
}
var select = document.querySelector('#select');
async function search() {
    let api = await (await fetch('http://localhost:3000/nam')).json();
    const max = api.filter(function (a) {
        return a.value > 500
    })
    const min = api.filter(function (a) {
        return a.value < 500
    })
    const news = api.filter(function (a) {
        return a.new == true
    })
    const old = api.filter(function (a) {
        return a.new == false
    })
    // console.log(news);
    if (select.value == 4) {
        ren.innerHTML = "";
        max.map(function (l) {
            ren.innerHTML += `
            <div class="product">
                <a href="./detail_product.html?_id=${l.id}"><img src="${l.img}" alt=""></a>
                <p><a href="./detail_product.html?_id=${l.id}">${l.name}</a></p>
                <div class="price">$${l.price}đ</div>
                <div class="love_icon">
                    <i class="fa-regular fa-heart"></i>
                    </div>
            </div>
        `
        })
    }
    if (select.value == 5) {
        ren.innerHTML = "";
        min.map(function (l) {
            ren.innerHTML += `
            <div class="product">
                <a href="./detail_product.html?_id=${l.id}"><img src="${l.img}" alt=""></a>
                <p><a href="./detail_product.html?_id=${l.id}">${l.name}</a></p>
                <div class="price">$${l.price}đ</div>
                <div class="love_icon">
                    <i class="fa-regular fa-heart"></i>
                    </div>
            </div>
        `
        })
    }
    if (select.value == 2) {
        ren.innerHTML = "";
        news.map(function (l) {
            ren.innerHTML += `
            <div class="product">
                <a href="./detail_product.html?_id=${l.id}"><img src="${l.img}" alt=""></a>
                <p><a href="./detail_product.html?_id=${l.id}">${l.name}</a></p>
                <div class="price">$${l.price}đ</div>
                <div class="love_icon">
                    <i class="fa-regular fa-heart"></i>
                    </div>
            </div>
        `

        })
    }
    if (select.value == 3) {
        ren.innerHTML = "";
        old.map(function (l) {
            ren.innerHTML += `
            <div class="product">
                <a href="./detail_product.html?_id=${l.id}"><img src="${l.img}" alt=""></a>
                <p><a href="./detail_product.html?_id=${l.id}">${l.name}</a></p>
                <div class="price">$${l.price}đ</div>
                <div class="love_icon">
                    <i class="fa-regular fa-heart"></i>
                    </div>
            </div>
        `

        })
    }
    if (select.value == 1) {
        api.map(function (l) {
            if (ren) {
                ren.innerHTML += `
                <div class="product">
                    <a href="./detail_product.html?_id=${l.id}"><img src="${l.img}" alt=""></a>
                    <p><a href="./detail_product.html?_id=${l.id}">${l.name}</a></p>
                    <div class="price">$${l.price}đ</div>
                    <div class="love_icon">
                        <i class="fa-regular fa-heart"></i>
                        </div>
                </div>
            `
            }
        })
    }
}


//add to cart
//  const add_cart = document.querySelector('.cart i');

export {
    api,
    detail_product,
    search,
}
