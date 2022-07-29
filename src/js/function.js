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
            </div>
        `
        }
    })
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
    </div>
    <br>
    <div class="price">$${_id.price}đ</div>
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
export {
    api,
    detail_product,
    search
}