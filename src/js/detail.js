import header from "../component/header.js";

const headers=document.querySelector('header');
if(headers){
    headers.innerHTML=header.render();
}