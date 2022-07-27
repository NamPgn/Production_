import { api } from "./src/js/function.js";
import header from "./src/component/header.js";
const headers=document.querySelector('header')
if(headers){
    headers.innerHTML=header.render();
}
api();