// import axios from 'axios'
var name_=document.querySelector('.name');
var email=document.querySelector('.email');
var pass=document.querySelector('.pw');
var repass=document.querySelector('.repass');
var age=document.querySelector('.age');
const getData =async () => {
    const api= await (await fetch("http://localhost:3000/auth")).json();
    return new Promise((resolve, reject) => {
        axios.post('http://localhost:3000/auth', {
            id: api.length + 1,
            name: name_.value,
            email: email.value,
            pass: pass.value,
            age: age.value,
        }).then((response) => {
            console.log(response);
            resolve(response);
        })
    });
}
export default getData