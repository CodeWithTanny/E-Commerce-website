const menuIcon = document.getElementById('bar')
const close = document.getElementById('close');
const navbar = document.getElementById('navbar')
if(menuIcon){
    menuIcon.addEventListener('click',()=>{
        navbar.classList.add("active")
     })
}

if(close){
    close.addEventListener('click',()=>{
        navbar.classList.remove("active")
     })
}
