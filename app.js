const loginbtn =document.getElementById("loginbtn");
const regisbtn =document.getElementById("regbtn"); 
const loginShow=document.getElementById("loginForm");
const regShow =document.getElementById("registar");

loginbtn.addEventListener("click", ()=>{
  loginShow.classList.add("show");
  regShow.classList.remove("show");
  loginbtn.classList.toggle("active");
  regisbtn.classList.remove("active");
});

regisbtn.addEventListener("click",()=>{
  regShow.classList.add("show");
  loginShow.classList.remove("show");
  loginbtn.classList.remove("active");
  regisbtn.classList.add("active");
})
