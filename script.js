const mybtn=document.getElementById("mybtn");
const mylabel=document.getElementById("mylabel")
const min=1;
const max=100;
let randomnum;

mybtn.onclick= function(){

randomnum = Math.floor(Math.random() * (max-min+1)) + min;
mylabel.textContent=randomnum;
}