const email=document.querySelector('.email');
const passwork=document.querySelector('.pass');

async function kiemtra(){
    const api= await (await fetch("http://localhost:3000/auth")).json();
    api.some(function(i){
         if(email.value === i.email && passwork.value === i.pass){
            console.log(2);
            window.location = "http://127.0.0.1:5500/Production_/admin.html";
            return;
        }else{
            console.log(1);
           document.querySelector('.err').innerHTML="Đăng nhập thất bại"
        }
    })
}
document.querySelector('.click').addEventListener('click',function(){
    kiemtra();
})
