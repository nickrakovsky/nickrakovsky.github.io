function onReady() {
  setUpNavClickHandlers();
  setUpCarousels();
  setUpFaqQuestions();
  // setUpDesktopMoreFeaturesButton();
  // setUpMobileMoreFeaturesButtons();
  // setupIntroWidth();
  setupGumlet();
  setupTawkTo();
}

if (document.readyState !== "loading") {
  onReady(); // Or setTimeout(onReady, 0); if you want it consistently async
} else {
  document.addEventListener("DOMContentLoaded", onReady);
}


function setUpNavClickHandlers() {
  document.getElementById('nav-open').onclick = function () {
    document.getElementById("nav-menu").classList.toggle("hidden")
    document.getElementById("nav-open").classList.toggle("hidden")
    document.getElementById("nav-close").classList.toggle("hidden")
  }
  document.getElementById('nav-close').onclick = function () {
    document.getElementById("nav-menu").classList.toggle("hidden")
    document.getElementById("nav-close").classList.toggle("hidden")
    document.getElementById("nav-open").classList.toggle("hidden")
  }
}

function setupIntroWidth(){
  if (window.location.pathname != "/"){return}
  var intro = document.getElementById("intro");
  var width = intro.clientWidth;
  intro.setAttribute('data-bg', intro.getAttribute('data-bg') + "?w=" + width);
}

function setUpCarousels() {
  if (window.location.pathname != "/"){return}
  let slider_logos = new Glider(document.getElementById('logos-glider'), {
    scrollLock: true,
    draggable: true,
    arrows: {
      prev: '.logos-glider-prev',
      next: '.logos-glider-next'
    },
    rewind: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4
        }
      }
    ]
  });

  let slider_quotes = new Glider(document.getElementById('quotes-glider'), {
    scrollLock: true,
    draggable: true,
    arrows: {
      prev: ".quotes-glider-prev",
      next: ".quotes-glider-next"
    },
    rewind: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  });

  //hack for auto slider
  let autoplayDelay = 5000;

  let autoplay = setInterval(() => {
      slider_logos.scrollItem('next')
  }, autoplayDelay);

  let main_page_sliders = ['logos-glider'];

  main_page_sliders.forEach(function(elem) {
    document.getElementById(elem).addEventListener('mouseover', (event) => {
      if (autoplay != null) {
        clearInterval(autoplay);
        autoplay = null;
      }
    }, 300);
    document.getElementById(elem).addEventListener('mouseout', (event) => {
      if (autoplay == null) {
        autoplay = setInterval(() => {
            slider_quotes.scrollItem('next')
            slider_logos.scrollItem('next')
        }, autoplayDelay);
      }
    }, 300);
  });
  //

  new Glider(document.getElementById("posts-glider"), {
    scrollLock: true,
    draggable: true,
    arrows: {
      prev: ".posts-glider-prev",
      next: ".posts-glider-next"
    }
  });

  //change image size so that cache knows how big to set images
  var slides = document.getElementsByClassName("whos_using_it_image");
  var height = document.getElementsByClassName("glider-contain")[0].clientHeight ;

  for (var i = 0; i < slides.length; i++) {
    slides[i].setAttribute('data-src', slides[i].getAttribute('data-src') + "?h=" + height)
  }
}


function setUpFaqQuestions() {
  const faqQuestions = document.getElementById("faq_questions")
  if (faqQuestions != undefined && faqQuestions != null) {
    faqQuestions.addEventListener("click", function(e) {
      const answer = e.target.parentNode.querySelector(".faq_answer")
      answer.classList.remove("hidden")
    })
  }
}

function setUpDesktopMoreFeaturesButton() {
  if (window.location.pathname != "/"){return}
  const desktopMoreFeaturesButton = document.getElementById('desktopMoreFeatures');
  desktopMoreFeaturesButton.addEventListener('click', function() {
    const rowsToShow = document.querySelectorAll('#pricing table tr.hidden');
    rowsToShow.forEach(function(rowToShow) {
      rowToShow.classList.remove('hidden');
    });
    
    desktopMoreFeaturesButton.parentElement.classList.add('hidden');
  });
}

function setUpMobileMoreFeaturesButtons() {
  if (window.location.pathname != "/"){return}
  [0, 1, 2, 3].forEach(function(i) {
    const moreFeaturesButton = document.getElementById('mobileMoreFeatures-' + i);
    moreFeaturesButton.addEventListener('click', function() {
      const rowsToShow = document.querySelectorAll('#mobilePricing-' + i + ' .hidden');
      rowsToShow.forEach(function(rowToShow) {
        rowToShow.classList.remove('hidden');
      });
      moreFeaturesButton.classList.add('hidden');
    });
  });
}

function setupTawkTo(){
  var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
    (function(){
    var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
    s1.async=true;
    s1.src='https://embed.tawk.to/566f21a18d9e6079017b1220/default';
    s1.charset='UTF-8';
    s1.setAttribute('crossorigin','*');
    s0.parentNode.insertBefore(s1,s0);
    })();
}
window.GUMLET_CONFIG = {
    hosts: [{
        current: "datadocks.com",
        gumlet: "datadocks.gumlet.io",
    }]
};

function setupGumlet(){
  !function o(a,i,l){function u(e,t){if(!i[e]){if(!a[e]){var s="function"==typeof require&&require;if(!t&&s)return s(e,!0);if(c)return c(e,!0);var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}var n=i[e]={exports:{}};a[e][0].call(n.exports,function(t){return u(a[e][1][t]||t)},n,n.exports,o,a,i,l)}return i[e].exports}for(var c="function"==typeof require&&require,t=0;t<l.length;t++)u(l[t]);return u}({1:[function(t,e,s){"use strict";var o=Object.prototype.hasOwnProperty;function a(t){try{return decodeURIComponent(t.replace(/\+/g," "))}catch(t){return null}}s.stringify=function(t,e){e=e||"";var s,r,n=[];for(r in"string"!=typeof e&&(e="?"),t)if(o.call(t,r)){if((s=t[r])||null!=s&&!isNaN(s)||(s=""),r=encodeURIComponent(r),s=encodeURIComponent(s),null===r||null===s)continue;n.push(r+"="+s)}return n.length?e+n.join("&"):""},s.parse=function(t){for(var e,s=/([^=?&]+)=?([^&]*)/g,r={};e=s.exec(t);){var n=a(e[1]),o=a(e[2]);null===n||null===o||n in r||(r[n]=o)}return r}},{}],2:[function(t,e,s){"use strict";e.exports=function(t,e){if(e=e.split(":")[0],!(t=+t))return!1;switch(e){case"http":case"ws":return 80!==t;case"https":case"wss":return 443!==t;case"ftp":return 21!==t;case"gopher":return 70!==t;case"file":return!1}return 0!==t}},{}],3:[function(t,r,e){(function(o){"use strict";var f=t("requires-port"),p=t("querystringify"),a=/^[A-Za-z][A-Za-z0-9+-.]*:\/\//,s=/^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i,e=new RegExp("^[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]+");function h(t){return(t||"").toString().replace(e,"")}var m=[["#","hash"],["?","query"],function(t){return t.replace("\\","/")},["/","pathname"],["@","auth",1],[NaN,"host",void 0,1,1],[/:(\d+)$/,"port",void 0,1],[NaN,"hostname",void 0,1,1]],i={hash:1,query:1};function _(t){var e,s=("undefined"!=typeof window?window:void 0!==o?o:"undefined"!=typeof self?self:{}).location||{},r={},n=typeof(t=t||s);if("blob:"===t.protocol)r=new w(unescape(t.pathname),{});else if("string"==n)for(e in r=new w(t,{}),i)delete r[e];else if("object"==n){for(e in t)e in i||(r[e]=t[e]);void 0===r.slashes&&(r.slashes=a.test(t.href))}return r}function y(t){t=h(t);var e=s.exec(t);return{protocol:e[1]?e[1].toLowerCase():"",slashes:!!e[2],rest:e[3]}}function w(t,e,s){if(t=h(t),!(this instanceof w))return new w(t,e,s);var r,n,o,a,i,l,u=m.slice(),c=typeof e,d=this,g=0;for("object"!=c&&"string"!=c&&(s=e,e=null),s&&"function"!=typeof s&&(s=p.parse),e=_(e),r=!(n=y(t||"")).protocol&&!n.slashes,d.slashes=n.slashes||r&&e.slashes,d.protocol=n.protocol||e.protocol||"",t=n.rest,n.slashes||(u[3]=[/(.*)/,"pathname"]);g<u.length;g++)"function"!=typeof(a=u[g])?(o=a[0],l=a[1],o!=o?d[l]=t:"string"==typeof o?~(i=t.indexOf(o))&&(t="number"==typeof a[2]?(d[l]=t.slice(0,i),t.slice(i+a[2])):(d[l]=t.slice(i),t.slice(0,i))):(i=o.exec(t))&&(d[l]=i[1],t=t.slice(0,i.index)),d[l]=d[l]||r&&a[3]&&e[l]||"",a[4]&&(d[l]=d[l].toLowerCase())):t=a(t);s&&(d.query=s(d.query)),r&&e.slashes&&"/"!==d.pathname.charAt(0)&&(""!==d.pathname||""!==e.pathname)&&(d.pathname=function(t,e){if(""===t)return e;for(var s=(e||"/").split("/").slice(0,-1).concat(t.split("/")),r=s.length,n=s[r-1],o=!1,a=0;r--;)"."===s[r]?s.splice(r,1):".."===s[r]?(s.splice(r,1),a++):a&&(0===r&&(o=!0),s.splice(r,1),a--);return o&&s.unshift(""),"."!==n&&".."!==n||s.push(""),s.join("/")}(d.pathname,e.pathname)),f(d.port,d.protocol)||(d.host=d.hostname,d.port=""),d.username=d.password="",d.auth&&(a=d.auth.split(":"),d.username=a[0]||"",d.password=a[1]||""),d.origin=d.protocol&&d.host&&"file:"!==d.protocol?d.protocol+"//"+d.host:"null",d.href=d.toString()}w.prototype={set:function(t,e,s){var r=this;switch(t){case"query":"string"==typeof e&&e.length&&(e=(s||p.parse)(e)),r[t]=e;break;case"port":r[t]=e,f(e,r.protocol)?e&&(r.host=r.hostname+":"+e):(r.host=r.hostname,r[t]="");break;case"hostname":r[t]=e,r.port&&(e+=":"+r.port),r.host=e;break;case"host":r[t]=e,/:\d+$/.test(e)?(e=e.split(":"),r.port=e.pop(),r.hostname=e.join(":")):(r.hostname=e,r.port="");break;case"protocol":r.protocol=e.toLowerCase(),r.slashes=!s;break;case"pathname":case"hash":if(e){var n="pathname"===t?"/":"#";r[t]=e.charAt(0)!==n?n+e:e}else r[t]=e;break;default:r[t]=e}for(var o=0;o<m.length;o++){var a=m[o];a[4]&&(r[a[1]]=r[a[1]].toLowerCase())}return r.origin=r.protocol&&r.host&&"file:"!==r.protocol?r.protocol+"//"+r.host:"null",r.href=r.toString(),r},toString:function(t){t&&"function"==typeof t||(t=p.stringify);var e,s=this,r=s.protocol;r&&":"!==r.charAt(r.length-1)&&(r+=":");var n=r+(s.slashes?"//":"");return s.username&&(n+=s.username,s.password&&(n+=":"+s.password),n+="@"),n+=s.host+s.pathname,(e="object"==typeof s.query?t(s.query):s.query)&&(n+="?"!==e.charAt(0)?"?"+e:e),s.hash&&(n+=s.hash),n}},w.extractProtocol=y,w.location=_,w.trimLeft=h,w.qs=p,r.exports=w}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{querystringify:1,"requires-port":2}],4:[function(t,e,s){"use strict";e.exports=function(t){return{auto_webp:t.auto_webp||!1,srcset:t.srcset||!1,auto_quality:t.auto_quality||!0,lazy_load:t.lazy_load||!1,proxy:t.proxy||!1,class_loaded:t.class_loaded||"gm-loaded",class_added:t.class_added||"gm-added",class_lazy:t.class_lazy||"gm-lazy",class_observing:t.class_observing||"gm-observing",class_observing_cb:t.class_observing_cb||"gm-observing-cb",elements_selector_img:t.elements_selector||t.elements_selector_img||"img",elements_selector_bg:t.elements_selector_bg||"[data-bg]",elements_selector_picture:t.elements_selector_picture||"picture > source",data_src:t.data_src||"src",data_bg:t.data_bg||"bg",default_params:t.default_params||null,hosts:t.hosts||null,threshold:t.threshold||300}}},{}],5:[function(t,e,s){"use strict";var r="undefined"!=typeof window;e.exports={runningOnBrowser:r,webp_support:!1,isBot:r&&!("onscroll"in window)||"undefined"!=typeof navigator&&/(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),supportsIntersectionObserver:r&&"IntersectionObserver"in window&&IntersectionObserverEntry.prototype.hasOwnProperty("isIntersecting"),supportsMutationObserver:r&&"MutationObserver"in window}},{}],6:[function(t,e,s){"use strict";var i=t("./url_parser"),l=t("./utils"),u=t("./environment"),r=t("./config"),n=t("./lazyload"),c={currentHosts:[],gumletHosts:[],settings:null,initDone:!1,init:function(t){if(!c.initDone){if(c.initDone=!0,!t.hosts)throw new Error('You must provide "hosts" config while initializing Gumlet.');c.settings=r(t),l.hasWebP(function(t){u.webp_support=t}),c.settings.lazy_load&&u.supportsIntersectionObserver&&(c._lazyload_observer_pic=n(c.load_pic,c.settings.threshold),c._lazyload_observer_img=n(c.load_img,c.settings.threshold),c._lazyload_observer_bg=n(c.load_bg,c.settings.threshold)),u.supportsMutationObserver&&(c._mutation_observer=new window.MutationObserver(c.mutatedCallback)),c.settings.hosts.forEach(function(t){if(t.current){if(t.current.startsWith("http")){var e=new i(t.current);t.current=e.hostname}c.currentHosts.push(t.current)}if(t.gumlet.startsWith("http")){var s=new i(t.gumlet);t.gumlet=s.hostname}c.gumletHosts.push(t.gumlet)}),l.domReady(function(){c.init_dom_observer(),c.load_all()})}},init_dom_observer:function(){!c._entireDomObserver&&u.supportsMutationObserver&&(c._entireDomObserver=new MutationObserver(c.dom_mutation_cb).observe(document,{childList:!0,subtree:!0}))},dom_mutation_cb:function(t){t.forEach(function(t){"HEAD"!=t.target.tagName&&t.addedNodes.forEach(function(t){"SOURCE"!=t.tagName&&"IMG"!=t.tagName||"function"!=typeof t.matches?"function"==typeof t.querySelectorAll&&(t.querySelectorAll(c.settings.elements_selector_img).forEach(c.load_if_needed),t.querySelectorAll(c.settings.elements_selector_picture).forEach(c.load_if_needed),t.querySelectorAll(c.settings.elements_selector_bg).forEach(c.load_if_needed)):c.load_if_needed(t)})})},load_if_needed:function(t){t.classList.contains(c.settings.class_loaded)||(t.classList.add(c.settings.class_added),c.load(t))},load_all:function(){var t=document.querySelectorAll(c.settings.elements_selector_img+", "+c.settings.elements_selector_picture+", "+c.settings.elements_selector_bg);t.forEach(function(t){c.load(t)})},initMutationObserver:function(t){!t.classList.contains(c.settings.class_observing)&&c._mutation_observer&&(t.classList.add(c.settings.class_observing),t.classList.add(c.settings.class_observing_cb),c._mutation_observer.observe(t,{attributes:!0,attributeFilter:["src","data-"+c.settings.data_src]}))},mutatedCallback:function(t){for(var e=0,s=t.length;e<s;e++)t[e].target.classList.contains(c.settings.class_observing_cb)?("src"==t[e].attributeName&&(t[e].target.dataset[c.settings.data_src]=t[e].target.src),t[e].attributeName=="data-"+c.settings.data_src&&(t[e].target.classList.remove(c.settings.class_observing_cb),c.load_img(t[e].target,!0))):t[e].target.classList.add(c.settings.class_observing_cb)},get_hostname:function(t){if(c.currentHosts.length){if(-1<c.currentHosts.indexOf(t.hostname)){var e=c.currentHosts.indexOf(t.hostname);return c.gumletHosts[e]}return-1<c.gumletHosts.indexOf(t.hostname)?t.hostname:void 0}return c.gumletHosts[0]},get_element_params:function(t,e){if(-1<e.indexOf(";base64,"))return null;var s=new i(e),r=s.pathname.split(".").pop().toLowerCase(),n=c.get_hostname(s);if(!n)return null;if(c.settings.proxy||(s.protocol="https",s.hostname=n,s.port="443"),s.query=l.filterQuery(s.query),c.settings.auto_webp&&u.webp_support&&(s.query.format="webp"),c.settings.auto_quality&&navigator.connection&&(navigator.connection.saveData?s.query.q=50:"3g"==navigator.connection.effectiveType?s.query.q=70:"2g"==navigator.connection.effectiveType?s.query.q=60:"slow-2g"==navigator.connection.effectiveType&&(s.query.q=50)),c.settings.default_params)for(var o in c.settings.default_params)s.query[o]=c.settings.default_params[o];var a=null;return s.query.w&&s.query.h&&(a=s.query.h/s.query.w),{url:s,extension:r,hostname:n,ratio:a}},load:function(t){var e=c.settings.lazy_load&&!u.isBot&&u.supportsIntersectionObserver;t.matches(c.settings.elements_selector_picture)?e&&"false"!=t.dataset.gmlazy?(c._lazyload_observer_pic.unobserve(t),t.classList.add(c.settings.class_lazy),c._lazyload_observer_pic.observe(t)):c.load_pic(t):t.matches(c.settings.elements_selector_img)&&(!e||"false"==t.dataset.gmlazy||"loading"in HTMLImageElement.prototype?(e&&"false"!=t.dataset.gmlazy&&"loading"in HTMLImageElement.prototype&&t.setAttribute("loading","lazy"),c.load_img(t)):(c._lazyload_observer_img.unobserve(t),t.classList.add(c.settings.class_lazy),c._lazyload_observer_img.observe(t))),t.matches(c.settings.elements_selector_bg)&&(e&&"false"!=t.dataset.gmlazy?(c._lazyload_observer_bg.unobserve(t),t.classList.add(c.settings.class_lazy),c._lazyload_observer_bg.observe(t)):c.load_bg(t))},load_bg:function(t){if("false"!==t.dataset.gumlet&&t.dataset[c.settings.data_bg]){var e=c.get_element_params(t,t.dataset[c.settings.data_bg]);if(e){var s=l.getSizes(t);e.url.query.w=e.url.query.w||s.width,e.url.query.dpr=window.devicePixelRatio.toFixed(1);var r=e.url.toString();0<=r.indexOf(" ")&&(r=encodeURI(r)),c.settings.proxy?t.style.backgroundImage="url(https://"+e.hostname+"/fetch/"+r+")":t.style.backgroundImage="url("+r+")",t.removeAttribute("data-bsrjs"),t.classList.add(c.settings.class_loaded)}else t.style.backgroundImage="url('"+t.dataset[c.settings.data_bg]+"')"}},load_pic:function(t){if("false"!==t.dataset.gumlet&&(t.dataset[c.settings.data_src]||t.dataset.srcset||t.srcset)){var e=c.get_element_params(t,(t.dataset[c.settings.data_src]||t.dataset.srcset||t.srcset).split(",")[0].split(/\s+/)[0]);if(e){var s=l.getSizes(t);t.sizes&&"100vw"!=t.sizes||(t.sizes=s.sizes),t.srcset=l.getSrcsets(e.url,e.hostname,e.ratio,c.settings.proxy),t.classList.add(c.settings.class_loaded)}else(t.dataset[c.settings.data_src]||t.dataset.srcset)&&(t.srcset=t.dataset[c.settings.data_src]||t.dataset.srcset)}},load_img:function(t){if(0,"false"!==t.dataset.gumlet)if((t.dataset[c.settings.data_src]||t.src)&&t.src!=window.location.href){var e=c.get_element_params(t,t.dataset[c.settings.data_src]||t.src);if(e){var s=l.getSizes(t);if(c.settings.srcset)t.sizes&&"100vw"!=t.sizes||(t.sizes=s.sizes),t.srcset=l.getSrcsets(e.url,e.hostname,e.ratio,c.settings.proxy),c.settings.proxy?t.src="https://"+e.hostname+"/fetch/"+e.url.toString():t.src=e.url.toString();else{e.url.query.w=e.url.query.w||s.width,e.url.query.dpr=window.devicePixelRatio.toFixed(1);var r=e.url.toString();0<=r.indexOf(" ")&&(r=encodeURI(r)),c.settings.proxy?t.src="https://"+e.hostname+"/fetch/"+r:t.src=r}t.classList.add(c.settings.class_loaded),c.initMutationObserver(t)}else t.dataset[c.settings.data_src]&&(t.src=t.dataset[c.settings.data_src])}else c.initMutationObserver(t)}};e.exports=c},{"./config":4,"./environment":5,"./lazyload":7,"./url_parser":10,"./utils":11}],7:[function(t,e,s){"use strict";e.exports=function(n,t){return new IntersectionObserver(function(t,e){for(var s=0,r=t.length;s<r;s++)(t[s].isIntersecting||0<t[s].intersectionRatio)&&(e.unobserve(t[s].target),n(t[s].target))},{rootMargin:t+"px"})}},{}],8:[function(t,e,s){"use strict";var r=t("./utils");function n(){gumlet.init({data_src:"gmsrc",lazy_load:!!parseInt(gumlet_wp_config.lazy_load),default_params:{compress:!!parseInt(gumlet_wp_config.auto_compress),quality:parseInt(gumlet_wp_config.quality)},hosts:[{current:gumlet_wp_config.current_host,gumlet:gumlet_wp_config.gumlet_host}]})}window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=Array.prototype.forEach),Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),window.gumlet=t("./gumlet"),"undefined"!=typeof gumlet_wp_config?n():window.GUMLET_CONFIG?gumlet.init(window.GUMLET_CONFIG):r.domReady(function(){"undefined"!=typeof gumlet_wp_config&&n()})},{"./gumlet":6,"./utils":11}],9:[function(t,e,s){"use strict";var r,n,o,a,i,l=JSON.parse("[30,50,70,100,120,160,200,240,300,320,360,400,480,576,600,640,700,720,750,768,800,900,940,1000,1024,1080,1100,1140,1152,1200,1242,1300,1400,1440,1442,1500,1536,1600,1700,1800,1880,1900,1920,2000,2048,2100,2200,2208,2280,2300,2400,2415,2500,2560,2600,2700,2732,2800,2880,2900,3000,3100,3200,3300,3400,3500,3600,3700,3800,3900,4000,4100,4200,4300,4400,4500,4600,4700,4800,4900,5000,5100,5120]");e.exports=(r="undefined"!=typeof window,n=r&&window.devicePixelRatio?window.devicePixelRatio:1,o=r?Math.max(window.screen.availWidth,window.screen.availHeight):5120,a=r?Math.floor(o*n):5120,(i=l.filter(function(t){return t<=a})).push(o),i)},{}],10:[function(t,e,s){"use strict";function n(t,e){for(var s=0;s<e.length;s++){var r=e[s];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var o=t("url-parse"),r=function(){function e(t){if(!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),window.URL&&window.URLSearchParams&&"function"==typeof window.URL){0==t.indexOf("http")||0==t.indexOf("ftp")?this.url=new window.URL(t):this.url=new window.URL(t,window.location.href),this.query_obj={};var s=this;this.url.searchParams.forEach(function(t,e){s.query_obj[e]=t}),this.native=!0}else this.url=new o(t,!0),this.query_obj=this.url.query,this.native=!1}var t,s,r;return t=e,(s=[{key:"toString",value:function(){if(this.native){var t=new window.URLSearchParams;for(var e in this.query_obj)t.set(e,this.query_obj[e]);return this.url.search=t.toString(),this.url.toString()}return this.url.query=this.query_obj,this.url.toString()}},{key:"protocol",set:function(t){this.native?this.url.protocol=t:this.url.set("protocol",t)}},{key:"hostname",get:function(){return this.url.hostname},set:function(t){this.native?this.url.hostname=t:this.url.set("hostname",t)}},{key:"port",set:function(t){this.native?this.url.port=t:this.url.set("port",t)}},{key:"query",get:function(){return this.query_obj},set:function(t){this.query_obj=t}},{key:"pathname",get:function(){return this.url.pathname}}])&&n(t.prototype,s),r&&n(t,r),e}();e.exports=r},{"url-parse":3}],11:[function(t,e,s){"use strict";var c=t("./targetWidths");e.exports={hasWebP:function(e){try{window.localStorage}catch(t){return e(!1)}if(window.localStorage){if(null!==window.localStorage.getItem("gumlet-webp"))return e("yes"==window.localStorage.getItem("gumlet-webp"));var t=document.createElement("img");t.onload=function(){2===this.width&&1===this.height?(window.localStorage.setItem("gumlet-webp","yes"),e(!0)):(window.localStorage.setItem("gumlet-webp","no"),e(!1))},t.src="data:image/webp;base64,UklGRjIAAABXRUJQVlA4ICYAAACyAgCdASoCAAEALmk0mk0iIiIiIgBoSygABc6zbAAA/v56QAAAAA=="}else e(!1)},filterQuery:function(t){return t.w=t.w||t.width||null,t.h=t.h||t.height||null,null==t.w&&delete t.w,null==t.h&&delete t.h,delete t.width,delete t.height,delete t.v,t},getSizes:function(t){var e,s;if(t.getAttribute("width")&&t.getAttribute("width").indexOf("%")<0)e=parseInt(t.getAttribute("width"));else{for(var r=t.parentElement;r&&r.clientWidth<=30;)r=r.parentElement;(!r||(e=r.clientWidth<t.width?t.width:r.clientWidth)>window.innerWidth)&&(e=window.innerWidth)}var n=!0,o=!1,a=void 0;try{for(var i,l=c[Symbol.iterator]();!(n=(i=l.next()).done);n=!0){var u=i.value;if(0<=u-e){s=u;break}}}catch(t){o=!0,a=t}finally{try{n||null==l.return||l.return()}finally{if(o)throw a}}return s=s||c[c.length-1],{sizes:100*e/window.innerWidth+"vw",width:s}},getSrcsets:function(t,e,s,r){for(var n=[],o=0,a=c.length;o<a;o++){t.query.w=c[o],s&&(t.query.h=Math.round(t.query.w*s));var i=t.toString();0<=i.indexOf(" ")&&(i=encodeURI(i)),r?n.push("https://"+e+"/fetch/"+i+" "+c[o]+"w"):n.push(i+" "+c[o]+"w")}return n.join(",")},domReady:function(t){"complete"===document.readyState||"loaded"===document.readyState||"interactive"===document.readyState?t():document.addEventListener("DOMContentLoaded",t,!1)}}},{"./targetWidths":9}]},{},[8]);
}