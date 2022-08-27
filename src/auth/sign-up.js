const email = document.querySelector('.email');
const passwork = document.querySelector('.pass');
const headers = document.querySelector('.header')
import header from "../component/header";
console.log(headers);
if(headers){
    headers.innerHTML = header.render();
}
async function kiemtra() {
    const api = await (await fetch("http://localhost:3000/auth")).json();
    api.some(function (i) {
        if (email.value === i.email && passwork.value === i.pass) {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Đăng nhập thành công',
                showConfirmButton: false,
                timer: 1500
            })
            setInterval(function () {
                window.location = `http://127.0.0.1:5501/Production_/index.html?_id=${i.id}`;
                return false;
            }, 1000)
        } else {
            console.log(1);
            document.querySelector('.err').innerHTML = "Đăng nhập thất bại"
        }
    })
}
document.querySelector('.click').addEventListener('click', function () {
    kiemtra();
})

async function admin_kiemtra() {
    const api_addmin = await (await fetch('http://localhost:3000/admin')).json();
    console.log(api_addmin);
    api_addmin.some(function (i) {
        if (email.value === i.email && passwork.value === i.pass) {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Đăng nhập thành công',
                showConfirmButton: false,
                timer: 1500
            })
            setInterval(function () {
                window.location = `http://127.0.0.1:5501/Production_/admin.html`;
                return false;
            }, 1000)
        } else {
            console.log(1);
            document.querySelector('.err').innerHTML = "Đăng nhập thất bại"
        }
    })
}
document.querySelector('.click').addEventListener('click', admin_kiemtra);