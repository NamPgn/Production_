import { api } from "./src/js/function.js";
import header from "./src/component/header.js";
import getData from "./src/api/data.js";
import { detail_product, search, } from "./src/js/function.js";
const headers = document.querySelector('header')
if (headers) {
    headers.innerHTML = header.render();
}
api();
detail_product();
const change = document.querySelector('#select').addEventListener('change', search);


//in ra màn hình
