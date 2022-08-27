import getData from '../api/data.js'
import header from '../component/header.js';
const headers = document.querySelector('.header')
console.log(headers);
if(headers){
    headers.innerHTML = header.render();
}
var name_ = document.querySelector('.name');
var email = document.querySelector('.email');
var pass = document.querySelector('.pw');
var repass = document.querySelector('.repass');
var age = document.querySelector('.age');
const gender = document.querySelectorAll('[name="fav_language"]');
const flag = true;
function validation() {
    var isError = false;
    if (name_.value == "") {
        document.querySelector('.name_validation').innerHTML = "Vui lòng nhập trường này!";
        isError = true;
        return isError;
    } else {
        document.querySelector('.name_validation').innerHTML = "";
    }

    const regex_email = /\w+([\.-]?\w+).*@\w+(\.\w{2,3})+$/
    if (!regex_email.test(email.value)) {
        document.querySelector('.email_err').innerHTML = "Vui lòng nhập trường này!";
        isError = true;
        return isError;
    } else {
        document.querySelector('.email_err').innerHTML = ""
    }

    if (pass.value == "") {
        document.querySelector('.ps').innerHTML = "Vui lòng điền pass!";
        isError = true;
        return isError;
    } else {
        document.querySelector('.ps').innerHTML = "";
    }

    if (age.value == "") {
        document.querySelector('.age_e').innerHTML = "Vui long fđiền tuổi !";
        isError = true;
        return isError;
    } else {
        document.querySelector('.age_e').innerHTML = ""
    }

    if (pass.value != repass.value) {
        document.querySelector('.repass_').innerHTML = "Password không hợp lệ !";
        isError = true;
        return isError;
    } else {
        document.querySelector('.repass_').innerHTML = "";
    }

    if (document.getElementById('nam').checked != true && document.getElementById('nu').checked != true) {
        document.querySelector('.radio_err').innerHTML = "Vui lòng chọn trường này !";
        isError = true;
        return isError;
    } else {
        document.querySelector('.radio_err').innerHTML = "";
    }

    return isError;
}


async function addUser() {

    // const data = await getData();
    // const api=await (await fetch('http://localhost:3000/auth')).json();

    // console.log(api);
}

const click_login = document.querySelector('#clickLogin');
if (click_login) {
    click_login.addEventListener('click', function () {
        var validate = validation();
        if (!validate) {
            alert('Đăng kí thành công')
            getData();
        }
    });
}
