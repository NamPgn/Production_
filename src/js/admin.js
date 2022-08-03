import header from "../component/header.js";
const header_admin = document.querySelector('header');
header_admin.innerHTML = header.render();

const img = document.querySelector('.img');
const name_product = document.querySelector('.name_product');
const price = document.querySelector('.price_');
const ren = document.querySelector('.product_conten');
var production_data;
function delete_product() {
    var id = this.getAttribute('id');
    const confirm_delete = confirm("Bạn có chắc muốn xóa không?");
     if ( confirm_delete) {
         return new Promise ( function (resolve, reject) {
            // const url = new URLSearchParams(window.location.search).get("_id");
            // console.log(url);
             axios.delete('http://localhost:3000/nam/' + id)
                .then(function (res) {
                    resolve(res);
                    console.log(res);
                })
        })
    }
}
const _api_admin = async function (data) {
    let api = production_data = await (await fetch('http://localhost:3000/nam')).json();
    console.log(api)
    for (var l of api) {
        if (ren) {
            ren.innerHTML += `
            <div class="product">
                <a href="./detail_product.html?_id=${l.id}"><img src="${l.img}" alt=""></a>
                <p><a href="./detail_product.html?_id=${l.id}">${l.name}</a></p>
                <div class="price">$${l.price}đ</div>
                <div class="love_icon">
                    <i class="fa-regular fa-heart"></i>
                </div>
                <p  style="font-size: 12px; margin-top:1px;">Kiểu: ${l.type}</p>
                <p  style="font-size: 12px;">Mã sản phẩm: #${l.msp}</p>
                <a href="./detail_admin.html?_id=${l.id}"><button type="button" class="btn btn-warning edit"  style="font-size:11px;">Sửa</button></a>
                <button type="button" class="btn btn-danger delete" id="${l.id}" style="font-size:11px;">Xóa</button></a>
            </div>
        `
        }
    }
    //delete
    const delete_products = document.querySelectorAll('.delete');

    delete_products.forEach(element => {
        element.addEventListener('click', delete_product);
    });

}
_api_admin();

const add = document.querySelectorAll('.add');
const forrm_add = document.querySelector('.form_control_edit_add_de');
const close = document.querySelector('.icon_close i');
add.forEach(element => {
    element.addEventListener('click', function () {
        forrm_add.classList.add('active_add_item');
    })
});

close.addEventListener('click', function () {
    forrm_add.classList.remove('active_add_item');
})
// add

const add_data = async () => {
    const production_data = await (await fetch("http://localhost:3000/nam")).json();
    console.log(1);
    Swal.fire({
        title: 'Bạn có chắc muốn thêm sản phẩm không ?',
        text: "Bạn sẽ không thể hoàn tác!",
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Có, Thêm sản phẩm!'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                'add!',
                'Thêm sản phẩm thành công',
                'success'
            )
            return new Promise((resolve, reject) => {
                axios.post('http://localhost:3000/nam', {
                    id: production_data[production_data.length - 1].id + 1,
                    img: img.value,
                    name: name_product.value,
                    price: price.value,
                }).then((response) => {
                    resolve(response);
                })
            });
        }
    })
}
const _add_production = document.querySelector('.click_producttinon');
_add_production.addEventListener('click', add_data);




var select = document.querySelector('.selected select');
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
                    <a href="./detail_admin.html?_id=${l.id}"><button type="button" class="btn btn-warning edit"  style="font-size:11px;">Edit</button></a>
                    <a href="./admin.html?_id=${l.id}"> <button type="button" class="btn btn-danger delete"  style="font-size:11px;">Delete</button></a>
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
                    <a href="./detail_admin.html?_id=${l.id}"><button type="button" class="btn btn-warning edit"  style="font-size:11px;">Edit</button></a>
                    <a href="./admin.html?_id=${l.id}"> <button type="button" class="btn btn-danger delete"  style="font-size:11px;">Delete</button></a>
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
                    <a href="./detail_admin.html?_id=${l.id}"><button type="button" class="btn btn-warning edit"  style="font-size:11px;">Edit</button></a>
                    <a href="./admin.html?_id=${l.id}"> <button type="button" class="btn btn-danger delete"  style="font-size:11px;">Delete</button></a>
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
                    <a href="./detail_admin.html?_id=${l.id}"><button type="button" class="btn btn-warning edit"  style="font-size:11px;">Edit</button></a>
                    <a href="./admin.html?_id=${l.id}"> <button type="button" class="btn btn-danger delete"  style="font-size:11px;">Delete</button></a>
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
                        <a href="./detail_admin.html?_id=${l.id}"><button type="button" class="btn btn-warning edit"  style="font-size:11px;">Edit</button></a>
                        <a href="./admin.html?_id=${l.id}"> <button type="button" class="btn btn-danger delete"  style="font-size:11px;">Delete</button></a>
                </div>
            `
            }
        })
    }
}
select.addEventListener('change', search);
