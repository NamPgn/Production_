import header from "../component/header.js";
const img = document.querySelector('.img');
const name_product = document.querySelector('.name_product');
const price = document.querySelector('.price_');
const headers=document.querySelector('header');
headers.innerHTML=header.render();


 //chi tiết 
//chi tiết 
const banner=document.querySelector('.banner_detail')
async function detail(){
    let api  = await (await fetch('http://localhost:3000/nam')).json();
    const url = new URLSearchParams(window.location.search).get("_id");
    const _id=api.find(function(i){
        return i.id==url
    })
    banner.innerHTML =`
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
    <button type="button" class="btn btn-warning edit" style="font-size:11px;">Edit</button>
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
                    price.value = i.price
            }
        })
    }

    //is update
    const isUpdate = function () {
        return new Promise(function (resolve, reject) {
            axios.put('http://localhost:3000/nam/' + url, {
                img: img.value,
                name: name_product.value,
                price: price.value
            })
                .then(function (response) {
                    resolve(response)
                })
            return false;
        });
    }
    document.querySelector('.click_producttinon').addEventListener('click',isUpdate);
    const click_form_value=document.querySelector('.edit').addEventListener('click',updated);
    close.addEventListener('click', function () {
        forrm_add.classList.remove('active_add_item');
    })
}
detail();

