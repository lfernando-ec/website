
//scrip para el menu toggle
const navtoggle=document.querySelector(".mostrar-menu");
const navmenu=document.querySelector(".ul");

navtoggle.addEventListener("click",()=>{
    navmenu.classList.toggle("ul-visible");
})
//scrip para el modal 
const abrirmodal=document.querySelector("#login");
const modal=document.querySelector(".modal");
const cerrarmodal=document.querySelector(".close-modal");
abrirmodal.addEventListener("click",() => {
     modal.classList.add("show-modal");
})
cerrarmodal.addEventListener("click",(e) => {
    e.preventDefault();
    modal.classList.remove("show-modal");
})