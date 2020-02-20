function onReady(){setUpNavClickHandlers();setUpCarousels();setUpFaqQuestions();setUpDesktopMoreFeaturesButton();setUpMobileMoreFeaturesButtons();}
if(document.readyState!=="loading"){onReady();}else{document.addEventListener("DOMContentLoaded",onReady);}
function setUpNavClickHandlers(){document.getElementById('nav-open').onclick=function(){document.getElementById("nav-menu").classList.toggle("hidden")
document.getElementById("nav-open").classList.toggle("hidden")
document.getElementById("nav-close").classList.toggle("hidden")}
document.getElementById('nav-close').onclick=function(){document.getElementById("nav-menu").classList.toggle("hidden")
document.getElementById("nav-close").classList.toggle("hidden")
document.getElementById("nav-open").classList.toggle("hidden")}}
function setUpCarousels(){if(window.location.pathname!="/"){return}
let slider_logos=new Glider(document.getElementById('logos-glider'),{scrollLock:true,draggable:true,arrows:{prev:'.logos-glider-prev',next:'.logos-glider-next'},rewind:true,slidesToShow:2,slidesToScroll:2,responsive:[{breakpoint:1024,settings:{slidesToShow:4,slidesToScroll:4}}]});let slider_quotes=new Glider(document.getElementById('quotes-glider'),{scrollLock:true,draggable:true,arrows:{prev:".quotes-glider-prev",next:".quotes-glider-next"},rewind:true,responsive:[{breakpoint:1024,settings:{slidesToShow:2}}]});let autoplayDelay=5000;let autoplay=setInterval(()=>{slider_logos.scrollItem('next')},autoplayDelay);let main_page_sliders=['logos-glider'];main_page_sliders.forEach(function(elem){document.getElementById(elem).addEventListener('mouseover',(event)=>{if(autoplay!=null){clearInterval(autoplay);autoplay=null;}},300);document.getElementById(elem).addEventListener('mouseout',(event)=>{if(autoplay==null){autoplay=setInterval(()=>{slider_quotes.scrollItem('next')
slider_logos.scrollItem('next')},autoplayDelay);}},300);});new Glider(document.getElementById("posts-glider"),{scrollLock:true,draggable:true,arrows:{prev:".posts-glider-prev",next:".posts-glider-next"}});}
function setUpFaqQuestions(){const faqQuestions=document.getElementById("faq_questions")
if(faqQuestions!=undefined&&faqQuestions!=null){faqQuestions.addEventListener("click",function(e){const answer=e.target.parentNode.querySelector(".faq_answer")
answer.classList.remove("hidden")})}}
function setUpMobileMoreFeaturesButtons(){if(window.location.pathname!="/"){return}
[0,1,2,3].forEach(function(i){const moreFeaturesButton=document.getElementById('mobileMoreFeatures-'+i);moreFeaturesButton.addEventListener('click',function(){const rowsToShow=document.querySelectorAll('#mobilePricing-'+i+' .hidden');rowsToShow.forEach(function(rowToShow){rowToShow.classList.remove('hidden');});moreFeaturesButton.classList.add('hidden');});});}