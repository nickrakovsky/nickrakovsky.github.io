document.getElementById('nav-open').onclick=function(){document.getElementById("nav-menu").classList.toggle("hidden")
document.getElementById("nav-open").classList.toggle("hidden")
document.getElementById("nav-close").classList.toggle("hidden")}
document.getElementById('nav-close').onclick=function(){document.getElementById("nav-menu").classList.toggle("hidden")
document.getElementById("nav-close").classList.toggle("hidden")
document.getElementById("nav-open").classList.toggle("hidden")}
window.addEventListener('load',function(){new Glider(document.querySelector('.logos-glider'),{slidesToShow:"auto",itemWidth:200,scrollLock:true,draggable:true})
new Glider(document.querySelector('.quotes-glider'),{slidesToShow:"auto",itemWidth:550,scrollLock:true,draggable:true})})