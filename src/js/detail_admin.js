import header from "../component/header.js";
const img = document.querySelector('.img');
const name_product = document.querySelector('.name_product');
const price = document.querySelector('.price_');
const ms_product = document.querySelector('.ms_product');
const type_product = document.querySelector('.type_product');
const news_product = document.querySelector('.news_product');
const value_product = document.querySelector('.value_product');
const headers = document.querySelector('header');
headers.innerHTML = header.render();


//chi tiết 
//chi tiết 
const banner = document.querySelector('.banner_detail')
async function detail() {
    let api = await (await fetch('http://localhost:3000/nam')).json();
    const url = new URLSearchParams(window.location.search).get("_id");
    const _id = api.find(function (i) {
        return i.id == url
    })
    banner.innerHTML = `
    <div class="card">
    <div class="container-fliud">
        <div class="wrapper row">
            <div class="preview col-md-6">
                
                <div class="preview-pic tab-content">
                  <div class="tab-pane active" id="pic-1"><img src="${_id.img}" /></div>
                </div>
                <ul class="preview-thumbnail nav nav-tabs">
                  <li class="active"><a data-target="#pic-1" data-toggle="tab"><img src="${_id.img}" /></a></li>
                  <li><a data-target="#pic-2" data-toggle="tab"><img src="${_id.img}" /></a></li>
                  <li><a data-target="#pic-3" data-toggle="tab"><img src="${_id.img}" /></a></li>
                  <li><a data-target="#pic-4" data-toggle="tab"><img src="${_id.img}" /></a></li>
                  <li><a data-target="#pic-5" data-toggle="tab"><img src="${_id.img}" /></a></li>
                </ul>
                
            </div>
            <div class="details col-md-6">
                <h3 class="product-title">${_id.name}</h3>
                <div class="rating">
                    <div class="stars">
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                    </div>
                    <span class="review-no">41 reviews</span>
                </div>
                <p class="product-description">Suspendisse quos? Tempus cras iure temporibus? Eu laudantium cubilia sem sem! Repudiandae et! Massa senectus enim minim sociosqu delectus posuere.</p>
                <h4 class="price">current price: <span>$${_id.price}</span></h4>
                <p class="">Loại: ${_id.type}</p>
                <h5 class="sizes">Mã sản phẩm: ${_id.msp}
                </h5>
                <h5 class="colors">colors:
                    <span class="color orange not-available" data-toggle="tooltip" title="Not In store"></span>
                    <span class="color green"></span>
                    <span class="color blue"></span>
                </h5>
                <div class="action">
                    <button class="add-to-cart btn btn-default edit" type="button">Edit</button>
                    <button class="like btn btn-default" type="button"><span class="fa fa-heart"></span></button>
                </div>
            </div>
        </div>
    </div>
</div>
    `


    const edit = document.querySelectorAll('.edit');
    const forrm_add = document.querySelector('.form_control_edit_add_de');
    const close = document.querySelector('.icon_close i');
    edit.forEach(element => {
        element.addEventListener('click', function () {
            forrm_add.classList.add('active_add_item');
        })
    });

    const updated = async function (e) {
        const url = new URLSearchParams(window.location.search).get("_id");
        console.log(url);
        // const nam=document.querySelector('.nam').value=id;
        const production_data = await (await fetch('http://localhost:3000/nam')).json();
        production_data.filter(function (i) {
            if (url == i.id) {
                img.value = i.img,
                    name_product.value = i.name,
                    price.value = i.price,
                    ms_product.value = i.msp,
                    type_product.value = i.type,
                    news_product.value = i.new,
                    value_product.value = i.value
            }
        })
    }

    //is update
    const isUpdate = function () {
        Swal.fire({
            title: 'Bạn có chắc muốn sửa sản phẩm không ?',
            text: "Bạn sẽ không thể hoàn tác!",
            icon: 'info',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Có, sửa sản phẩm!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Thêm!',
                    'Sửa sản phẩm thành công',
                    'success'
                )
                return new Promise(function (resolve, reject) {
                    axios.put('http://localhost:3000/nam/' + url, {
                        img: img.value,
                        name: name_product.value,
                        price: price.value,
                        new:news_product.value,
                        type:type_product.value,
                        msp:ms_product.value,
                        value:value_product.value
                    })
                        .then(function (response) {
                            resolve(response)
                        })
                    return false;
                });
            }
        })

    }
    document.querySelector('.click_producttinon').addEventListener('click', isUpdate);
    const click_form_value = document.querySelector('.edit').addEventListener('click', updated);
    close.addEventListener('click', function () {
        forrm_add.classList.remove('active_add_item');
    })
}
detail();

