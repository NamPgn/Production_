const ren = document.querySelector('.product_conten');
var product;
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
                <button type="button" onclick="add_to_cart(${l.id})" class="btn btn-primary" style="font-size:11px; margin-top:5px;">  Thêm vào giỏ hàng</button>
            </div>
        `

        }

    })
    //add to cart
    //add to cart
    const icon_click_cart = document.querySelector('.cart i');
    const cart_form = document.querySelector('.cart_conten');
    icon_click_cart.addEventListener('click', function () {
        cart_form.classList.toggle('ds_bl');
    })
    async function add_to_cart(id) {
        // const url = new URLSearchParams(window.location.search).get("_id");
        let api = await (await fetch('http://localhost:3000/nam')).json();
        const api_cart = await (await fetch(' http://localhost:3000/cart')).json();

        const value_id = document.querySelector('._id').value = id;
        console.log(value_id);
        // console.log(value_id);
        const _id = api.find(function (a) {
            return a.id
        })
        // if (_id) {
        //     return new Promise(function (resolve, reject) {
        //         axios.post('http://localhost:3000/cart', {
        //             id: api_cart.length + 1,
        //             "img": _id.img,
        //             "name": _id.name,
        //             "price": _id.price,
        //         }).then((response) => {
        //             resolve(response);
        //             console.log(response);
        //         })
        //     });
        // }

    }
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
    console.log(add_cart);
    add_cart.forEach(element => {
        element.addEventListener('click', add_to_cart);

    });
    viewer_cart();

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
    console.log(news);
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


const add_cart = document.querySelector('.cart i');
export {
    api,
    detail_product,
    search
}
