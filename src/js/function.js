const ren=document.querySelector('.product_conten');
const api=async function (data){
    const api=await (await fetch('http://localhost:3000/nam')).json();
    api.map(function(l){
        if(ren){
            ren.innerHTML+= /*html */`
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

const url = new URLSearchParams(window.location.search).get("_id");
console.log(url);

export {
    api
}